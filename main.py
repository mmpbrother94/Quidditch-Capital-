from flask import Flask, jsonify, request
from flask_cors import CORS

# Initialize Flask App
app = Flask(__name__)
CORS(app)

# Define Quidditch Teams and their mapped stocks
teams = {
    "Harry Potter": "TSLA",   # Gryffindor 
    "Draco Malfoy": "AAPL",   # Slytherin 
    "Cho Chang": "MSFT",      # Ravenclaw 
    "Cedric Diggory": "AMZN"  # Hufflepuff 
}

# Download stock data for all teams
data = {}
option_data = {}
for team, ticker in teams.items():
    stock_data = yf.download(ticker, start="2023-01-01", end="2025-03-28")
    data[team] = stock_data["Close"]
    
    # Fetch Option Chain Data (Bludger Attacks)
    options = obb.stocks.options.chains(ticker)
    option_data[team] = options

# Convert stock data to DataFrame
stock_df = pd.DataFrame(data)
scaler = MinMaxScaler(feature_range=(0, 1))
scaled_data = scaler.fit_transform(stock_df)

# Prepare data for LSTM
seq_length = 10
X, y = [], []
for i in range(len(scaled_data) - seq_length):
    X.append(scaled_data[i:i+seq_length])
    y.append(scaled_data[i+seq_length])
X, y = np.array(X), np.array(y)

# Build LSTM Model
model = Sequential([
    LSTM(50, return_sequences=True, input_shape=(seq_length, len(teams))),
    Dropout(0.2),
    LSTM(50, return_sequences=False),
    Dropout(0.2),
    Dense(len(teams))
])

model.compile(optimizer='adam', loss='mean_squared_error')
model.fit(X, y, epochs=20, batch_size=16)

@app.route('/predict', methods=['POST'])
def predict():
    user_input = request.json.get("input_data")
    if not user_input:
        return jsonify({"error": "No input data provided"}), 400
    
    input_scaled = scaler.transform([user_input])
    prediction = model.predict(np.array(input_scaled).reshape(1, seq_length, len(teams)))
    predicted_prices = scaler.inverse_transform(prediction)
    
    response = {team: float(price) for team, price in zip(teams.keys(), predicted_prices[0])}
    return jsonify(response)

@app.route('/bludger_attack', methods=['GET'])
def bludger_attack():
    team = request.args.get("team")
    if team not in option_data:
        return jsonify({"error": "Invalid team name"}), 400
    
    df = option_data[team]
    return df.to_json(orient='records')

if __name__ == '__main__':
    app.run(debug=True)
