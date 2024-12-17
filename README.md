<div align="center">
  <br />
    <a href="#" target="_blank">
      <img src="https://github.com/orafael-almeida/CarsToday-frontend/blob/main/readme-img.png?raw=true" alt="Project Banner">
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=next.js&color=black" alt="Next;js" />
    <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="React.js" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="TailwindCSS" />
    <img src="https://img.shields.io/badge/-Axios-black?style=for-the-badge&logoColor=white&logo=axios&color=5A29E4" alt="Axios" />
  </div>
  </div>
<br/><br/></br>

  <h1 align="center">CarsToday - Buy and Sell Cars Today</h1>

   <div align="center">
    Online car buying and selling platform. Sell your car safely, today.
</div>

## 📋 <a name="table">Sumary</a>

1. 🚀 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 💻 [Quick Start](#quick-start)
5. 💾 [Environment Variables](#envs)
6. 📅 [Releases](#versions)
7. 👥 [Authors](#authors)


## <a name="introduction">🚀 Introduction</a>

Project developed as a technical challenge for the company Develops Today. The project consists of a front-end application that consumes and displays cars models and makes.


## <a name="tech-stack">⚙️ Tech Stack</a>

- HTML / CSS
- React.js
- Next.js
- Tailwind CSS
- Axios.js

## <a name="features">🔋 Features</a>

- **Fully Responsive**: Perfect adaptation to all devices, ensuring a consistent experience across any platform.

- **Search by Model and Year**: Users can search for cars by entering the model and year, receiving a comprehensive list of all available models for that specific year.

- **Detailed Car Listings**: Each car listing provides detailed information, including Models ID and Mark ID.

- **Advanced SEO and Performance Optimization**: Better visibility in search engines and optimized loading times for a fast and accessible experience.

## <a name="quick-start">💻 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**00 - Prerequisites**

To use this project you must have previously installed the following packages:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager or similar)

**01 - Cloning the Repository**

```bash
git clone https://github.com/orafael-almeida/cars-today-frontend
cd cars-today-frontend
```

**02 - Installation**

Install/Update the project dependencies using npm:

```bash
npm install
```

**03 - Running the Project**

Set-up your environment variables in .env.local file (listed below)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
Please, check the port.

## <a name="envs">💾 Environment Variables</a>

<details>
<summary><code>.env.local</code></summary>

```
// Provides URL to consume brands from the API
NEXT_PUBLIC_VEHICLES_MAKES_API=https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json

// Provides URL to consume cars details from the API
NEXT_PUBLIC_VEHICLE_DATA_URL=https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/{makeId}/modelyear/{year}?format=json


```

</details>



## <a name="versions">📅 Release History</a>

* 0.1.0
    * The first release
* 0.0.1
    * Initial work


## <a name="authors">👥 Authors</a>

<table style="border-collapse: collapse; table-layout: auto text-align: left;">

  <tbody>
    <tr>
      <td style="padding: 10px; border: 1px solid #ddd;">
        <img src="https://avatars.githubusercontent.com/u/173099475?v=4" width="60" style="border-radius: 50%; display: block; margin: 0 auto;">
      </td>
      <td style="padding: 10px; border: 1px solid #ddd;">Rafael Almeida</td>
      <td style="padding: 10px; border: 1px solid #ddd;">
        <a href="https://www.linkedin.com/in/orafael-almeida/" target="_blank">LinkedIn</a> |
        <a href="https://github.com/orafael-almeida" target="_blank">GitHub</a>
      </td>
    </tr>
  </tbody>
</table>
