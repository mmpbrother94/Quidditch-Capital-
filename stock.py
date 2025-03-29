from alpha_vantage.timeseries import TimeSeries
import pandas as pd

# Replace 'YOUR_API_KEY' with your actual Alpha Vantage API key
API_KEY = "MY_API_KEY"
ts = TimeSeries(key=API_KEY, output_format='pandas')

# Fetch stock data
stocks = ['TSLA', 'AAPL']
df_dict = {}

for stock in stocks:
    df, meta_data = ts.get_daily(symbol=stock, outputsize='compact')
    df_dict[stock] = df['4. close']  # Closing prices

# Convert to DataFrame
data = pd.DataFrame(df_dict)
data.to_csv("stock_data.csv")
print(data.head())


