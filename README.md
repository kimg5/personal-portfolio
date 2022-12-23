Thhe react portfolio project is the display subsystem of the personal portfolio platform. The portfolio platform inlcudes publishing & management frontend subsystem , protfolio display frontend subsystem and the API backend system.
The display subsystem is based on react 18
The high level archtecture ![image](https://user-images.githubusercontent.com/104445295/209368197-f19def54-e043-4ad8-ae61-eb989fe4af42.png)

Install guide:
1. clone the project
2. npm install
3. The project depends on the publsihed data of the API backend system. So you have to install the backend system
   in App.jsx line 66 : change the url to your backend system API http://localhost:3001/portfolio/portfolios/${username}
4. npm start
5. http://localhost:3000/?$username}
   $username} is saved usename in the backend system
 
