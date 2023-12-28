# import libraries
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By

chrome_service = Service(ChromeDriverManager().install())

chrome_options = Options()
options = [
    "--headless",
    "--disable-gpu",
    "--window-size=1920,1200",
    "--ignore-certificate-errors",
    "--disable-extensions",
    "--no-sandbox",
    "--disable-dev-shm-usage"
]
for option in options:
    chrome_options.add_argument(option)

driver = webdriver.Chrome(service=chrome_service, options=chrome_options)

# Define the URL
url = "https://bitkey.world/en-US/products/bitkey"

# load the web page
driver.get(url)

# set maximum time to load the web page in seconds
driver.implicitly_wait(10)

contents = driver.find_element(By.ID, "nav")

print(contents)
