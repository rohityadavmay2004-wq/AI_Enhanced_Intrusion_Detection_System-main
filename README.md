<div align="center">

# 🛡️ AI-Enhanced Intrusion Detection System

**Cybersecurity Threat Detection Powered by Machine Learning**

[![Python](https://img.shields.io/badge/Python-3.10+-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://python.org)
[![Flask](https://img.shields.io/badge/Flask-2.x-000000?style=for-the-badge&logo=flask&logoColor=white)](https://flask.palletsprojects.com)
[![Scikit-Learn](https://img.shields.io/badge/Scikit--Learn-ML-F7931E?style=for-the-badge&logo=scikitlearn&logoColor=white)](https://scikit-learn.org)

</div>

---

## 📌 Overview

An AI-powered **Intrusion Detection System (IDS)** that classifies network traffic as **normal or malicious** using a trained Random Forest Classifier. Built with Flask, the system provides an interactive dark-theme web dashboard where users can input network traffic parameters and receive instant threat classification.

> Demonstrates the practical integration of Machine Learning into modern cybersecurity workflows.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🤖 **ML-Powered Detection** | Random Forest Classifier trained on a balanced intrusion dataset |
| ⚡ **Real-Time Prediction** | Instant classification of network traffic parameters |
| 🎨 **Dark Cybersecurity UI** | Animated, responsive dark-theme dashboard |
| 📊 **Feature Summary** | Visual breakdown of all input parameters after prediction |
| 🔔 **Threat Alerting** | Color-coded safe / threat visual indicators |
| 📱 **Responsive Design** | Works across desktop and mobile devices |

---

## 🗂️ Project Structure

```
AI_Enhanced_Intrusion_Detection_System/
│
├── 📁 templates/
│   └── index.html                          ← Jinja2 HTML template (no inline CSS/JS)
│
├── 📁 static/
│   ├── css/
│   │   └── style.css                       ← Dark theme styles
│   └── js/
│       └── main.js                         ← Dynamic UI behaviour
│
├── 📁 screenshots/
│   ├── AI12.png
│   └── AI22.png
│
├── 🐍 app.py                               ← Flask application & prediction route
├── 🤖 random_forest_model_4_features.joblib ← Trained ML model
├── 📊 web_attacks_balanced.csv             ← Balanced training dataset
├── 📦 requirements.txt                     ← Python dependencies
├── 📓 Untitled.ipynb                       ← Model training notebook
└── 📄 README.md
```

---

## 🧠 Machine Learning Model

- **Algorithm:** Random Forest Classifier
- **Library:** Scikit-Learn
- **Balancing Technique:** SMOTE (Imbalanced-Learn)
- **Serialization:** Joblib

### 📥 Input Features

| # | Feature | Description |
|---|---|---|
| 1 | **Flow Duration** | Total duration of the network flow (µs) |
| 2 | **Total Fwd Packets** | Number of packets sent in the forward direction |
| 3 | **Total Backward Packets** | Number of packets sent in the backward direction |
| 4 | **Total Length of Fwd Packets** | Total payload size of forward packets (bytes) |

---

## 📸 Screenshots

### 🖥️ Home — Input Dashboard
![Home Dashboard](screenshots/home_page.png)

### 🔍 Prediction Result
![Prediction Result](screenshots/detection_1.png)

![Prediction Result](screenshots/detection_2.png)

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone <repository-url>
cd AI_Enhanced_Intrusion_Detection_System
```

### 2️⃣ Create a Virtual Environment

```bash
# Windows
python -m venv venv
venv\Scripts\activate

# macOS / Linux
python3 -m venv venv
source venv/bin/activate
```

### 3️⃣ Install Dependencies

```bash
pip install -r requirements.txt
```

If the requirements file doesn't work:

```bash
pip install flask pandas numpy scikit-learn joblib imbalanced-learn
```

### 4️⃣ Run the Application

```bash
python app.py
```

Open your browser at:

```
http://127.0.0.1:5000
```

---

## 🔍 System Workflow

```
User Input  ──►  Flask POST /predict  ──►  Feature Array
                                               │
                                               ▼
                                   Random Forest Model
                                               │
                                               ▼
                              Prediction Result  ──►  UI Display
```

1. User enters 4 network traffic values in the dashboard
2. Flask receives the POST request at `/predict`
3. Values are validated and packaged into a NumPy array
4. Random Forest model classifies the traffic
5. Result is rendered back to the UI with a color-coded verdict

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Backend** | Python 3.10+, Flask |
| **ML** | Scikit-Learn, NumPy, Pandas, Imbalanced-Learn (SMOTE) |
| **Frontend** | HTML5, CSS3, Vanilla JavaScript |
| **Fonts** | Space Grotesk, JetBrains Mono (Google Fonts) |
| **Model Serialization** | Joblib |

---

## ✅ Advantages

- High classification accuracy via Random Forest ensemble
- Clean, professional dark-theme interface
- Fast, real-time predictions
- Balanced dataset training reduces class bias
- Easily extendable for additional features or attack types

---

## ⚠️ Limitations

- Uses a static offline dataset — no live packet capture
- No automatic threat response or alerting pipeline
- Model requires retraining for new attack patterns
- No user authentication or session management

---

## 🚀 Future Enhancements

- [ ] Live PCAP / packet sniffing integration
- [ ] Multi-class attack type display with confidence scores
- [ ] REST API endpoint for programmatic access
- [ ] Real-time traffic monitoring dashboard
- [ ] User authentication and audit logging
- [ ] Model retraining pipeline with new data

---


