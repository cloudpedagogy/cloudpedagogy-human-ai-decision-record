# Running the System Locally

To view and test this application on your local machine:

### 1. View Locally
If you have a production build in the `dist` folder, you can run:
```bash
python3 -m http.server 8000 --directory dist
```
Then open [http://localhost:8000](http://localhost:8000) in your browser.

### 2. Development Mode
For active development with hot-reloading:
```bash
npm install
npm run dev
```
Follow the URL provided in the terminal (usually [http://localhost:5173](http://localhost:5173)).
