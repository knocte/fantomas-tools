az storage cors add --methods GET OPTIONS --service t --origins "https://fsprojects.github.io" "http://localhost:63342" --account-name "storfantomasmain" --max-age 3600 --exposed-headers "*" --allowed-headers "*"