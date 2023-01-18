/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/containers/**/*.{js,ts,jsx,tsx}",
    "./src/layout/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm400: "400px",
        sm450: "450px",
        sm500: "500px",
        sm550: "550px",
        sm600: "600px",
        sm650: "650px",
        sm700: "700px",
        sm750: "750px",
        md800: "800px",
        md850: "850px",
        md900: "900px",
        md950: "950px",
        md1000: "1000px",
        md1050: "1050px",
        lg1100: "1100px",
        lg1150: "1150px",
        lg1200: "1200px",
        lg1250: "1250px",
        lg1300: "1300px",
        lg1350: "1350px",
        xl1400: "1400px",
        xl1450: "1450px",
        xl1500: "1500px",
        xl1550: "1550px",
        xl1600: "1600px",
        xl1650: "1650px",
        xl1700: "1700px",
        xl1750: "1750px",
        xl1800: "1800px",
        xl1850: "1850px",
        xl1900: "1900px",
        xl1950: "1950px",
        xl2000: "2000px",
        xl2050: "2050px",
        xl2100: "2100px",
        xl2150: "2150px",
        xl2200: "2200px",
        xl2250: "2250px",
        xl2300: "2300px",
        xl2350: "2350px",
        xl2400: "2400px",
        xl2450: "2450px",
        xl2500: "2500px",
        xl2550: "2550px",
        xl2600: "2600px",
        xl2650: "2650px",
        xl2700: "2700px",
        xl2750: "2750px",
        xl2800: "2800px",
        xl2850: "2850px",
        xl2900: "2900px",
        xl2950: "2950px",
        xl3000: "3000px",
        xl3050: "3050px",
      },
      colors: () => ({
        bgMain: "white",
        bgSearchbar: "rgba(67, 100, 117,0.04)",
        bgCard: "#FAF9FC",
        bgCardMobile: "#DFF1FD",
        bgDropDown: "#f6fcff",
        bgBlack1: "#1f1d2c",
        bgCover: "#f6fbfe",
        bgCoverDark: "#EAF7FF",
        badgeRed1: "#F20505",
        bgInput: "#212121",
        textGray: "rgba(255, 255, 255, 0.5)",
        verifyIcon: "#008FFF",
        selectBorder: "#226FEE",
        sideBarLink: "#436475",
        gradient1: "#FF68F9",
        gradient2: "#9868FF",
        line: "rgba(163, 163, 163, 0.05)",
        tagText: "#8286F0",
        tagBorder: "rgba(130, 134, 240, 0.2)",
        profileDesc: "rgba(0,0,0,0.51)",
        arrow: "#9C67FF",
        like: "#FE66F8",
        communityheading: "#4FD8E0",
        goldBorder: "#FACC15",
        goldBg: "#FBF5D6",
        goldText: "#CA8A04",
        lightGold: "#E5B23A",
        tabActive: "#DFF1FD",
        questBlurbg: "rgba(126, 195, 244, 0.5)",
        messageBg1: "#afdcff",
        messageBg2: "#eaeef1",
        messageBox: "#eef7fd",
        activeDot: "#20D902",
        text_gradient1: "#FE06C7",
        text_gradient2: "#9313F8",
        line: "rgba(67, 100, 117, 0.3)",
        borderModal: "rgba(42, 163, 239, 0.1)",
        blurBg: "rgba(0, 0, 0, 0.4)",
        questBg: "rgba(42, 163, 239, 0.04)",
        callModalGradient1: "#14D6D6",
        callModalGradient2: "#14D690",
        drawerBg: "rgba(246, 251, 254, 0.08)",
      }),
      spacing: {
        "75%": "75%",
        "80%": "80%",
        "85%": "85%",
        "90%": "90%",
        "92-5%": "92.5%",
        "95-5%": "95.5%",
        "3px": "3px",
        "450px": "450px",
        "1k-px": "1000px",
        "13.5-rem": "13.5rem",
        "17.5-rem": "17.5rem",
        "23-rem": "23rem",
        "20-rem": "20rem",
        "25-rem": "25rem",
        "27-rem": "27rem",
        "30-rem": "30rem",
        "28-rem": "28rem",
        "30-rem": "30rem",
        "35-rem": "35rem",
        "40-rem": "40rem",
        "45-rem": "45rem",
        "50-rem": "50rem",
        "55-rem": "55rem",
        "60-rem": "60rem",
      },
      boxShadow: {
        drawer: "1px -7px 20px rgba(0, 0, 0, 0.1)",
      },
      fontSize: {},
      borderRadius: {},
      maxWidth: () => ({}),
      minWidth: {},
      animation: {},
      keyframes: {},
      backgroundImage: {
        "cover-image": "url(/assets/images/cover.png)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
