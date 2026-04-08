<!-- ████████████████████████████████  HEADER  ████████████████████████████████ -->

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&amp;color=gradient&amp;customColorList=7,15,23&amp;height=260&amp;section=header&amp;text=HelmetSense&amp;fontSize=72&amp;fontColor=ffffff&amp;fontAlignY=40&amp;desc=AI-Powered%20Helmet%20%26%20Hat%20Sizing%20%E2%80%A2%20MediaPipe%20%E2%80%A2%20FastAPI%20%E2%80%A2%20React&amp;descAlignY=62&amp;descSize=19&amp;animation=fadeIn&amp;stroke=A855F7&amp;strokeWidth=1" width="100%"/>

</div>

<!-- ████████████████████████████████  TYPING  ████████████████████████████████ -->

<div align="center">

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&amp;weight=600&amp;size=20&amp;duration=3000&amp;pause=800&amp;color=A855F7&amp;center=true&amp;vCenter=true&amp;multiline=false&amp;repeat=true&amp;width=720&amp;height=50&amp;lines=No+Measuring+Tape.+No+Calibration+Object.+Just+Your+Face.+%F0%9F%8E%AF;468+MediaPipe+Landmarks+%E2%86%92+Head+Circumference+%E2%9A%A1;ISO+7250-1%3A2017+Anthropometric+Standards+%F0%9F%93%90;Shopify-Integrable+%C2%B7+GDPR+Ready+%C2%B7+Zero+Reference+Object+%F0%9F%9B%92)](https://git.io/typing-svg)

</div>

<br/>

<!-- ████████████████████████████████  BADGES  ████████████████████████████████ -->

<div align="center">

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&amp;logo=react&amp;logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&amp;logo=vite&amp;logoColor=white)](https://vitejs.dev)
[![FastAPI](https://img.shields.io/badge/FastAPI-Backend-009688?style=for-the-badge&amp;logo=fastapi&amp;logoColor=white)](https://fastapi.tiangolo.com)
[![MediaPipe](https://img.shields.io/badge/MediaPipe-Face_Mesh-A855F7?style=for-the-badge)](https://mediapipe.dev)
[![Tailwind](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=for-the-badge&amp;logo=tailwindcss&amp;logoColor=white)](https://tailwindcss.com)
[![ISO](https://img.shields.io/badge/ISO_7250--1:2017-Anthropometric-22C55E?style=for-the-badge)](.)
[![Shopify](https://img.shields.io/badge/Shopify-Integrable-96BF48?style=for-the-badge&amp;logo=shopify&amp;logoColor=white)](.)

</div>

<br/>

---

<!-- ████████████████████████████████  ABOUT  ████████████████████████████████ -->

## 🧠 What This Project Does

```python
class HelmetSense:
    def __init__(self):
        self.purpose    = "AI helmet/hat sizing — no measuring tape, no reference object"
        self.input      = "Single front-facing photo via browser webcam"
        self.output     = "Head circumference · width · depth · shape · recommended size"
        self.standard   = "ISO 7250-1:2017 (International anthropometric standards)"
        self.deployment = "Shopify-integrable — 'Find Your Perfect Fit' before checkout"

    @property
    def measurement_pipeline(self):
        return {
            "calibration"    : "3 facial rulers (inner eye, outer eye, nose width) → px/mm scale",
            "face_width"     : "Temple + cheekbone landmarks (MediaPipe 234/127, 454/356)",
            "circumference"  : "Ramanujan ellipse approx + 2.5mm hair compensation → 51–65cm",
            "shape"          : "width/depth ratio → Round / Oval / Long Oval",
            "size_lookup"    : "X-Small to 2X-Large + hat sizes · fit quality %",
        }

    def detect(self, image: bytes) -> dict:
        # POST /detect → multipart image → full measurement + size recommendation
        return {
            "measurements"       : {...},
            "size_recommendation": {...},
            "confidence"         : float,
            "quality_notes"      : [...],
        }
```

> Upload a photo — get your helmet size. No measuring tape. No calibration object. Just **468 MediaPipe face landmarks** mapped to ISO anthropometric standards.

---

<!-- ████████████████████████████████  PIPELINE  ████████████████████████████████ -->

## 🔁 End-to-End Pipeline

```mermaid
flowchart TD
    U([👤 User Opens Web App]) --> S1

    subgraph FE [⚛️ React Frontend — FaceDetection-1]
        direction TB
        S1[Hero Landing\nFind Your Perfect Fit]
        S1 --> S2[Tutorial Steps 0–3\nPosition · Distance · Guidance · Ready]
        S2 --> S3[Privacy Step 4\nGDPR / CCPA Acknowledgment]
        S3 --> S4[Camera Access Step 5\ngetUserMedia permission]
        S4 --> S5[Live Camera Step 6\nScanning overlay · corner brackets]
        S5 --> S6[Capture\nCanvas → JPEG blob]
        S6 --> API[POST /detect\nmultipart image]
    end

    subgraph BE [⚙️ FastAPI Backend — python-backend-1]
        direction TB
        DEC[OpenCV decode image]
        DEC --> MP[MediaPipe Face Mesh\n468 landmarks · refine=True]
        MP --> CAL[ai_calibration\ninner eye 0.45 · outer eye 0.35 · nose 0.20]
        CAL --> FW[measure_face_width\ntemple + cheekbone landmarks]
        FW --> CIRC[calculate_circumference\nRamanujan ellipse + 2.5mm compensation]
        CIRC --> SHAPE[Head shape\nRound · Oval · Long Oval]
        SHAPE --> SIZE[SIZE_CHART lookup\nXS → 2XL + hat sizes · fit quality %]
    end

    subgraph RES [📊 Results Modal]
        direction TB
        R1[Captured image preview]
        R2[Recommended size · Circumference · Width]
        R3[Accuracy % · Shape · Quality notes]
        R4[Suggested Products grid\nBuy Now buttons]
    end

    API --> BE
    SIZE --> RES

    style FE fill:#1a1a2a,stroke:#A855F7,color:#ffffff
    style BE fill:#1a2a1a,stroke:#22C55E,color:#ffffff
    style RES fill:#2a1a2a,stroke:#F59E0B,color:#ffffff
```

---

<!-- ████████████████████████████████  MEASUREMENT  ████████████████████████████████ -->

## 📐 How the Measurement Works

### Step 1 — Calibration (no reference object)

Three facial landmarks used as known-distance rulers to compute a **weighted pixels-per-mm scale**:

<div align="center">

| Facial Feature | Known Distance | Weight |
|:---|:---:|:---:|
| Inner-eye distance | 31.5 mm | 0.45 |
| Outer-eye distance | 93 mm | 0.35 |
| Nose width | 35 mm | 0.20 |

</div>

### Step 2 — Face Width
Averages **temple + cheekbone landmarks** (MediaPipe indices `234`/`127` left · `454`/`356` right) → `measure_face_width()`

### Step 3 — Head Circumference
```
full_head_width  = face_width ÷ 0.93
depth            = full_head_width × 1.28
circumference    = Ramanujan ellipse approximation
                 + 2.5 mm hair/skin compensation
                 clamped to 51–65 cm
```

### Step 4 — Size Lookup

<div align="center">

| Size | Circumference Range | Hat Size |
|:---:|:---:|:---:|
| X-Small | 51–53 cm | 6⅜ – 6⅝ |
| Small | 53–55 cm | 6⅝ – 6⅞ |
| Medium | 55–57 cm | 6⅞ – 7⅛ |
| Large | 57–59 cm | 7⅛ – 7⅜ |
| X-Large | 59–61 cm | 7⅜ – 7⅝ |
| 2X-Large | 61–65 cm | 7⅝ – 8⅛ |

</div>

### Step 5 — Head Shape
```
ratio = width / depth
Round     → ratio ≥ 0.85
Oval      → 0.75 ≤ ratio < 0.85
Long Oval → ratio < 0.75
```

> Reference standard: **ISO 7250-1:2017** — Body measurements of the head and face for industrial design.

---

<!-- ████████████████████████████████  API  ████████████████████████████████ -->

## 🔗 API Endpoints

<div align="center">

| Method | Endpoint | Description |
|:---:|:---|:---|
| `GET` | `/` | Health check |
| `GET` | `/size-chart` | Returns full helmet size chart JSON |
| `POST` | `/detect` | Multipart image upload → full measurement result |

</div>

**POST `/detect` Response:**

```json
{
  "measurements": {
    "circumference_cm": 57.3,
    "face_width_mm": 142.5,
    "head_depth_mm": 196.8,
    "head_shape": "Oval"
  },
  "size_recommendation": {
    "recommended_size": "Medium",
    "hat_size": "7⅛ – 7⅜",
    "fit_quality": "Excellent",
    "accuracy_percent": 94.2
  },
  "confidence": 0.94,
  "quality_notes": [],
  "calibration_info": {...}
}
```

---

<!-- ████████████████████████████████  TECH  ████████████████████████████████ -->

## 🛠️ Tech Stack

<div align="center">

[![Tech](https://skillicons.dev/icons?i=react,vite,tailwind,fastapi,python)](.)

### Frontend — `FaceDetection-1/`

| Library | Version | Role |
|:---|:---:|:---|
| React | 19.2 | UI framework |
| Vite + SWC | 7 | Build tool — fast HMR |
| Tailwind CSS | v4 | Styling |
| Browser MediaDevices API | — | Live webcam capture |
| `<canvas>` | — | Frame capture → JPEG blob |
| React.lazy + Suspense | — | Lazy-loaded hero UI |

### Backend — `python-backend-1/`

| Library | Role |
|:---|:---|
| FastAPI + Uvicorn | REST API server |
| OpenCV (`cv2`) | Image decoding |
| MediaPipe Face Mesh | 468 landmark detection · `refine_landmarks=True` |
| NumPy | Vector math for measurements |
| python-multipart | Multipart image upload parsing |

</div>

---

<!-- ████████████████████████████████  STRUCTURE  ████████████████████████████████ -->

## 🗂️ Repository Structure

```
HelmetSense/
├── FaceDetection-1/                    ← React + Vite frontend
│   ├── src/
│   │   ├── App.jsx                     ← Lazy-loads hero UI
│   │   ├── Images/                     ← Tutorial illustrations
│   │   ├── components/
│   │   │   ├── background/
│   │   │   │   └── globalBackground.jsx
│   │   │   └── hero-dasboard-ui/
│   │   │       ├── heroUi.jsx          ← Main UI: tutorial → privacy → camera → scan
│   │   │       ├── resultmodeluI.jsx   ← Results modal
│   │   │       └── service/apiService.js  ← POST /detect
│   │   └── pages/heroLogic.jsx         ← All hooks · state · camera · capture logic
│   ├── package.json
│   └── vite.config.js
│
└── python-backend-1/                   ← FastAPI + MediaPipe backend
    ├── app/
    │   ├── main.py                     ← HeadMeasurementSystem (line 992+)
    │   └── head_pose.py                ← Legacy HeadMeasurer (fully commented out)
    └── requirements.txt                ← ⚠️ Currently empty — see setup below
```

---

<!-- ████████████████████████████████  GETTING STARTED  ████████████████████████████████ -->

## 🚀 Getting Started

### 1️⃣ Backend Setup

```bash
cd python-backend-1

# requirements.txt is empty — install manually:
pip install fastapi uvicorn opencv-python mediapipe numpy python-multipart

python -m uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

✅ Backend live at `http://localhost:8000`

### 2️⃣ Frontend Setup

```bash
cd FaceDetection-1

npm install
npm run dev        # Vite dev server → http://localhost:5173
```

✅ Open the Vite URL → **Start Face Scan** → walk through tutorial → allow camera → capture.

> The frontend posts to `http://localhost:8000/detect` — backend must be running first.

---

<!-- ████████████████████████████████  KNOWN ISSUES  ████████████████████████████████ -->

## ⚠️ Known Issues &amp; TODOs

<div align="center">

| Issue | Location | Fix |
|:---|:---|:---|
| `requirements.txt` is empty | `python-backend-1/requirements.txt` | Populate with all 5 dependencies |
| API response key mismatch | `heroLogic.jsx:269` | Map `size_recommendation.recommended_size` → `recommendedSize` |
| Hardcoded `localhost:8000` | `apiService.js:1` | Move to `.env` var before deploying |
| CORS open to `*` | `main.py` | Tighten to specific origins before prod |
| `head_pose.py` is dead code | `python-backend-1/app/head_pose.py` | Remove or archive |
| Typo in folder name | `hero-dasboard-ui/` | Rename to `hero-dashboard-ui/` (update all imports) |

</div>

---

<!-- ████████████████████████████████  ROADMAP  ████████████████████████████████ -->

## 📌 Roadmap

- [ ] Fix API response key mapping — results modal currently shows "N/A" for all fields
- [ ] Populate `requirements.txt`
- [ ] Move `API_BASE_URL` to environment variable
- [ ] Tighten CORS for production
- [ ] Live Shopify embed integration
- [ ] Multi-photo averaging for improved measurement accuracy
- [ ] Mobile camera support (rear-facing)

---

<!-- ████████████████████████████████  FOOTER  ████████████████████████████████ -->

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&amp;color=gradient&amp;customColorList=7,15,23&amp;height=120&amp;section=footer" width="100%"/>

**Krishna Nagpal** · HelmetSense · AI-Powered Sizing

[![FastAPI](https://img.shields.io/badge/FastAPI-Backend-009688?style=flat-square&amp;logo=fastapi&amp;logoColor=white)](https://fastapi.tiangolo.com)
[![MediaPipe](https://img.shields.io/badge/MediaPipe-468_Landmarks-A855F7?style=flat-square)](https://mediapipe.dev)
[![ISO](https://img.shields.io/badge/ISO_7250--1:2017-Standard-22C55E?style=flat-square)](.)

> *"No measuring tape. No reference card. Just your face."*

⭐ Star this repo if it was useful!

</div>
