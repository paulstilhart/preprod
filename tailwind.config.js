/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
    files: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
  },

  darkMode: "selector",

  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",

      white: "#FFFFFF", // rgb(255, 255, 255)
      black: "#000000", // rgb(0, 0, 0)
      black_40: "#00000066", //rgba(0, 0, 0, 0.4)

      camel: "#FFF2E1", // rgb(255, 242, 225) OU var(--Yellow-BG, #FFF2E1)
      camellight: "#FFFBF8", // rgb(255, 251, 248)
      camel_outline: "#FFE4C2",

      camel_step: "#FFE19F",

      blue: "#1864FD",
      blue_soft: "#E9F0FF",

      cart_warning_text: "#FD4F18",
      cart_warning_background: "#fd4f1814",

      grey_paiement_outline :"#D9D9D9",

      neutrals: {
        white: "#FFF", // rgb(255, 255, 255)
        dark: "#0C0C0C", // rgb(12, 12, 12)
        //--neutrals-cool-grey-eaeaeb, #EAEAEB);
      },

      green: {
        DEFAULT: "#1B4539", // rgb(27, 69, 57)
        50: "#FBFCFC", // rgb(251, 252, 252)
        100: "#F1F6F4", // rgb(241, 246, 244)
        200: "#D5E4DE", // rgb(213, 228, 222)
        300: "#ABC8BE", // rgb(171, 200, 190)
        400: "#7EA598", // rgb(126, 165, 152)
        500: "#558072", // rgb(85, 128, 114)
        600: "#385E52", // rgb(56, 94, 82)
        700: "#26433A", // rgb(38, 67, 58)
        800: "#1D312B", // rgb(29, 49, 43)
        900: "#1A2B26", // rgb(26, 43, 38)
      },

      dark: {
        DEFAULT: "#0C0C0C", // rgb(12, 12, 12)
        50: "#FCFCFC", // rgb(252, 252, 252)
        100: "#F5F5F5", // rgb(245, 245, 245)
        200: "#E0E0E0", // rgb(224, 224, 224)
        300: "#C1C1C1", // rgb(193, 193, 193)
        400: "#9D9D9D", // rgb(157, 157, 157)
        500: "#787878", // rgb(120, 120, 120)
        600: "#575757", // rgb(87, 87, 87)
        700: "#3D3D3D", // rgb(61, 61, 61)
        800: "#2D2D2D", // rgb(45, 45, 45)
        900: "#282828", // rgb(40, 40, 40)
      },
      beige: {
        DEFAULT: "#F7E6CC",
        50: "#FCFCFB",
        100: "#F6F4F1",
        200: "#E5DFD7",
        300: "#CBC0B0",
        400: "#A99B86",
        500: "#84765F",
        600: "#615541",
        700: "#453C2D",
        800: "#332C22",
        900: "#2D271E",
      },
      neonorange: {
        DEFAULT: "#FD6318",
        50: "#FFFAF7",
        100: "#FFF0E7",
        200: "#FFD2B7",
        300: "#FFA676",
        400: "#FF7332",
        500: "#D84400",
        600: "#A72400",
        700: "#7A1700",
        800: "#5B1300",
        900: "#501200",
      },
      kidyellow: {
        DEFAULT: "#FFCC49",
        50: "#FEFCF7",
        100: "#FCF4E6",
        200: "#F4DDB5",
        300: "#E1BD70",
        400: "#C19723",
        500: "#987200",
        600: "#715200",
        700: "#523A00",
        800: "#3E2B00",
        900: "#372600",
      },
      kidgreen: {
        DEFAULT: "#43B97F",
        50: "#F9FDFA",
        100: "#ECF8F0",
        200: "#C5E8D3",
        300: "#8DD0A9",
        400: "#4AAF7C",
        500: "#008A54",
        600: "#006638",
        700: "#004826",
        800: "#00361D",
        900: "#002F1A",
      },
      kidorange: {
        DEFAULT: "#FD7E40",
        50: "#FFFBF8",
        100: "#FFF1E9",
        200: "#FFD5BE",
        300: "#FFAC83",
        400: "#EF7D46",
        500: "#C95316",
        600: "#9B3500",
        700: "#702400",
        800: "#531B00",
        900: "#4A1900",
      },
    },
    fontSize: {
      title_h1: ["3.75rem", "1"], // 60px 60px
      title_h1_mobile: ["3rem", "1.15"], // 48px 55.2px
      title_h2: ["3rem", "1.25"], // 48px 60px
      title_h2_mobile: ["2.125rem", "1.15"], // 34px 39.1px
      title_h3: ["2.25rem", "1.25"], // 36px 45px
      title_h3_mobile: ["1.875rem", "1.25"], // 30px 37.5px
      title_h4: ["1.875rem", "1.25"], // 30px 37.5px
      title_h4_mobile: ["1.5rem", "1.25"], // 24px 30px
      title_h5: ["1.5rem", "1.25"], // 24px 30px
      title_h5_mobile: ["1.25rem", "1.5"], // 20px 30px
      title_h6: ["1.25rem", "1.5"], // 20px 30px
      title_h6_mobile: ["1rem", "1.25"], // 16px 20px
      title_mini: ["1rem", "1.5"], // 16px 24px

      title_drop: ["1.25rem", "1.5"], // 20px 30px
      title_drop_mobile: ["1.1rem", "1.5"], // 17.6px 26.4px
      title_drop_2: ["0.85rem", "1.5"], // 13.6px 20.4px
      title_drop_2_mobile: ["0.75rem", "1.5"], // 12px 18px

      body_xl: ["1.25rem", "1.5"], // 20px 30px
      body_lg: ["1.125rem", "1.5"], // 18px 27px
      body_base: ["1rem", "1.5"], // 16px 24px
      body_sm: ["0.875rem", "1.25"], // 14px 17.5px
      body_regular_sm: ["0.875rem", "1.5"], // 14px 21px
      body_xs: ["0.75rem", "1.25"], // 12px 15px
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem", //2px
      DEFAULT: "0.25rem", //4px
      DEFAULT: "4px",
      md: "0.375rem", //6px
      lg: "0.5rem", //8px
      xl: "0.75rem", //12px
      "2xl": "1rem", //16px
      "3xl": "1.5rem", //24px
      "4xl": "2rem", //32px
      "5xl": "2.5rem", //40px
      full: "9999px",
    },

    extend: {
      maxWidth: {
        960: "960px",
        1152: "1152px", //pour les cgv, avec 32px paddingX => 1088px de contenu max
        1184: "1184px",
        1328: "1328px",
        1440: "1440px",
      },
      screens: {
        "2xl": "1400px", //pour écraser le 2xl initial par 1400
        "3xl": "1700px", //media queries supplémentaires
      },
      colors: {
        //white:'#FFFFFF',//rgb(255, 255, 255)
        //black:'#000000',//rgb(0, 0, 0)
      },

      boxShadow: {
        reviews:
          "0px 25px 80px 0px rgba(0, 0, 0, 0.02), 0px 16.20375px 46.852px 0px rgba(0, 0, 0, 0.02), 0px 9.62975px 25.481px 0px rgba(0, 0, 0, 0.01), 0px 5px 13px 0px rgba(0, 0, 0, 0.01), 0px 2.037px 6.519px 0px rgba(0, 0, 0, 0.01), 0px 0.463px 3.148px 0px rgba(0, 0, 0, 0.00)",

        /*reviews:
          "0px 100px 80px 0px rgba(0, 0, 0, 0.02), 0px 64.815px 46.852px 0px rgba(0, 0, 0, 0.02), 0px 38.519px 25.481px 0px rgba(0, 0, 0, 0.01), 0px 20px 13px 0px rgba(0, 0, 0, 0.01), 0px 8.148px 6.519px 0px rgba(0, 0, 0, 0.01), 0px 1.852px 3.148px 0px rgba(0, 0, 0, 0.00)", */

        cards_spread_8: "0px 4px 8px 0px rgba(89, 57, 13, 0.10)", //0px 4px 80px 0px rgba(89, 57, 13, 0.10)
        cards_spread_16: "0px 4px 16px 0px rgba(89, 57, 13, 0.10)", //0px 4px 80px 0px rgba(89, 57, 13, 0.10)
      },

      spacing: {
        0.5: "0.125rem", //2px
        1.5: "0.375rem", //6px
        2.5: "0.625rem", //10px
        3.5: "0.875rem", //14px
        4.5: "1.125rem", //18px
        7.5: "1.875rem", //30px
        15: "3.75rem", //60px
        17: "4.25rem", //68px
        18: "4.5rem", //72px
        22: "5.5rem", //88px
        25: "6.25rem", //100px
        26: "6.5rem", //104px
        30: "7.5rem", //120px
        31: "7.75rem", //124px
        34: "8.5rem", //136px
        50: "12.5rem", //200px
      },

      fontFamily: {
        francoisone: ['"Francois One"', "sans-serif"], //Francois One 400 regular
        manrope: ['"Manrope"', "sans-serif"], //Manrope
        mogra: ['"Mogra"', '"system-ui"'], //Mogra 400 regular
        gochihand: ['"Gochi Hand"', '"cursive"'], //Gochi Hand 400 regular
      },

      lineHeight: {
        115: "1.15",
        125: "1.25",
      },

      backgroundImage: {
        delete: "url('../sources/icons/Delete.svg')",
        delete_red: "url('../sources/icons/Delete_red.svg')",
        warning_triangle_neon_orange:
          "url('../sources/icons/Warning_triangle_neon_orange.svg')",
        warning: "url('../sources/icons/Warning.svg')",
        warning_red: "url('../sources/icons/Warning_red.svg')",
        arrow_narrow: "url('../sources/icons/Arrow_narrow.svg')",
        arrow_narrow_green: "url('../sources/icons/Arrow_narrow_green.svg')",
        arrow_narrow_white: "url('../sources/icons/Arrow_narrow_white.svg')",
        arrow_narrow_disabled:
          "url('../sources/icons/Arrow_narrow_disabled.svg')",
        phone: "url('../sources/icons/Phone.svg')",
        phone_green: "url('../sources/icons/Phone_green.svg')",
        phone_white: "url('../sources/icons/Phone_white.svg')",
        mail: "url('../sources/icons/Mail.svg')",
        mail_green: "url('../sources/icons/Mail_green.svg')",
        mail_white: "url('../sources/icons/Mail_white.svg')",
        home: "url('../sources/icons/Home.svg')",
        home_green: "url('../sources/icons/Home_green.svg')",
        home_white: "url('../sources/icons/Home_white.svg')",
        add: "url('../sources/icons/add.svg')",
        close: "url('../sources/icons/close.svg')",
        close_red: "url('../sources/icons/close_red.svg')",
        close_white: "url('../sources/icons/close_white.svg')",
        close_dark_300: "url('../sources/icons/close_dark_300.svg')",
        close_dark_400: "url('../sources/icons/close_dark_400.svg')",
        gocolo_yellow: "url('../sources/logos/gocolo_yellow.svg')",
        gocolo_green: "url('../sources/logos/gocolo_green.svg')",
        freepik_character:
          "url('../sources/logos/freepik--Character--inject-109.svg')",
        star_green: "url('../sources/icons/star_green.svg')",
        cart: "url('../sources/icons/Cart.svg')",
        cart_green: "url('../sources/icons/Cart_green.svg')",
        carret_down: "url('../sources/icons/Carret_down.svg')",
        carret_down_green: "url('../sources/icons/Carret_down_green.svg')",
        carret_down_white: "url('../sources/icons/Carret_down_white.svg')",
        carret_right: "url('../sources/icons/Carret_right.svg')",
        carret_and_home:
          "url('../sources/icons/Home.svg'),url('../sources/icons/Carret_down.svg')",
        carret_and_kid:
          "url('../sources/icons/Kid.svg'),url('../sources/icons/Carret_down.svg')",
        carret_and_bubble:
          "url('../sources/icons/Bubble.svg'),url('../sources/icons/Carret_down.svg')",
        carret_and_clock:
          "url('../sources/icons/Clock.svg'),url('../sources/icons/Carret_down.svg')",
        user: "url('../sources/icons/User.svg')",
        user_green: "url('../sources/icons/User_green.svg')",
        menu_green: "url('../sources/icons/Menu_green.svg')",
        kid: "url('../sources/icons/Kid.svg')",
        kid_green: "url('../sources/icons/Kid_green.svg')",
        pin: "url('../sources/icons/pin.svg')",
        pin_green: "url('../sources/icons/pin_green.svg')",
        bed: "url('../sources/icons/Bed.svg')",
        bed_green: "url('../sources/icons/Bed_green.svg')",
        bubble: "url('../sources/icons/Bubble.svg')",
        bubble_green: "url('../sources/icons/Bubble_green.svg')",
        clock: "url('../sources/icons/Clock.svg')",
        calendar: "url('../sources/icons/Calendar.svg')",
        calendar_green: "url('../sources/icons/Calendar_green.svg')",
        check: "url('../sources/icons/Check.svg')",
        check_white: "url('../sources/icons/Check_white.svg')",
        check_green_500: "url('../sources/icons/Check_green_500.svg')",
        route: "url('../sources/icons/Route.svg')",
        route_green: "url('../sources/icons/Route_green.svg')",
        info: "url('../sources/icons/Info.svg')",
        info_dark_400: "url('../sources/icons/Info_dark_400.svg')",
        file: "url('../sources/icons/File.svg')",
        file_green: "url('../sources/icons/File_green.svg')",
        files: "url('../sources/icons/Files.svg')",
        files_green: "url('../sources/icons/Files_green.svg')",
        logout: "url('../sources/icons/Logout.svg')",
        logout_green: "url('../sources/icons/Logout_green.svg')",
        wallet: "url('../sources/icons/Wallet.svg')",
        wallet_green: "url('../sources/icons/Wallet_green.svg')",
        walk: "url('../sources/icons/Walk.svg')",
        walk_green: "url('../sources/icons/Walk_green.svg')",
        tabler_icon_credit_card:
          "url('../sources/icons/tabler-icon-credit-card.svg')",
        tabler_icon_home_shield:
          "url('../sources/icons/tabler-icon-home-shield.svg')",
        tabler_icon_thumb_up:
          "url('../sources/icons/tabler-icon-thumb-up.svg')",
        tabler_icon_user_shield:
          "url('../sources/icons/tabler-icon-user-shield.svg')",
        tabler_icon_credit_card_white:
          "url('../sources/icons/tabler-icon-credit-card-white.svg')",
        tabler_icon_home_shield_white:
          "url('../sources/icons/tabler-icon-home-shield-white.svg')",
        tabler_icon_thumb_up_white:
          "url('../sources/icons/tabler-icon-thumb-up-white.svg')",
        tabler_icon_user_shield_white:
          "url('../sources/icons/tabler-icon-user-shield-white.svg')",
        background_footer: "url('../sources/background/background_footer.svg')",
        background_listing_colos:
          "url('../sources/background/background_listing_colos.svg')",
        background_points: "url('../sources/background/background_points.svg')",
        background_striated_low:
          "url('../sources/background/background_striated_low.svg')",
        background_striated_high:
          "url('../sources/background/background_striated_high.svg')",
        background_striated_low_and_points:
          "url('../sources/background/background_striated_low.svg'),url('../sources/background/background_points.svg')",
        background_camel_template_desktop_79:
          "url('../sources/background/background_camel_template_desktop_79.svg')",
        background_camel_template_mobile_62:
          "url('../sources/background/background_camel_template_mobile_62.svg')",
        cgv_background: "url('../sources/img/cgv/cgv_background.jpeg')",
        actus_background: "url('../sources/img/actus/actus_background.jpeg')",
        background_yellow_sun_desktop:
          "url('../sources/background/background_yellow_sun_desktop.svg')",
        background_yellow_sun_mobile:
          "url('../sources/background/background_yellow_sun_mobile.svg')",
        background_line_dashed_dark_300:
          "url('../sources/background/background_line_dashed_dark_300.svg')",
        background_line_full_green:
          "url('../sources/background/background_line_full_green.svg')",
        background_circle_1_2:
          "url('../sources/background/background_circle_1_2.svg')",
        background_dark_100_50:
          "url('../sources/background/background_dark_100_50.svg')",
        background_dark_100_63:
          "url('../sources/background/background_dark_100_63.svg')",
        homepage_section3_blob:
          "url('../sources/img/homepage/homepage_section3_blob.png')",
        homepage_map_mobile:
          "url('../sources/img/homepage/homepage_map_mobile.svg')",
        homepage_map_desktop:
          "url('../sources/img/homepage/homepage_map_desktop.svg')",
        homepage_banner: "url('../sources/img/homepage/homepage_banner.jpeg')",
        thematiques_1: "url('../sources/img/thematiques/thematiques_1.png')",
        thematiques_2: "url('../sources/img/thematiques/thematiques_2.png')",
        thematiques_3: "url('../sources/img/thematiques/thematiques_3.png')",
        thematiques_4: "url('../sources/img/thematiques/thematiques_4.png')",
        thematiques_5: "url('../sources/img/thematiques/thematiques_5.png')",
        thematiques_6: "url('../sources/img/thematiques/thematiques_6.png')",
        clip_green_footer_top_34:
          "url('../sources/clip/clip_green_footer_top_34.svg')",
        clip_camel_top_18: "url('../sources/clip/clip_camel_top_18.svg')",
        clip_camel_top_34: "url('../sources/clip/clip_camel_top_34.svg')",
        clip_camel_top_35: "url('../sources/clip/clip_camel_top_35.svg')",
        clip_camel_bottom_18: "url('../sources/clip/clip_camel_bottom_18.svg')",
        clip_camel_bottom_18_nav:
          "url('../sources/clip/clip_camel_bottom_18_nav.svg')",
        clip_white_bottom_18_nav:
          "url('../sources/clip/clip_white_bottom_18_nav.svg')",

        clip_camel_bottom_34: "url('../sources/clip/clip_camel_bottom_34.svg')",
        clip_camel_bottom_35: "url('../sources/clip/clip_camel_bottom_35.svg')",
        clip_white_top_18: "url('../sources/clip/clip_white_top_18.svg')",
        highlight_green_star:
          "url('../sources/highlight/highlight_green_star.svg')",
        highlight_kidyellow_faq:
          "url('../sources/highlight/highlight_kidyellow_faq.svg')",
        highlight_kidyellow_star:
          "url('../sources/highlight/highlight_kidyellow_star.svg')",
        highlight_kidyellow_stars_1:
          "url('../sources/highlight/highlight_kidyellow_stars_1.svg')",
        highlight_kidyellow_stars_2:
          "url('../sources/highlight/highlight_kidyellow_stars_2.svg')",
        highlight_kidyellow_underline:
          "url('../sources/highlight/highlight_kidyellow_underline.svg')",
        highlight_kidyellow_underline_double:
          "url('../sources/highlight/highlight_kidyellow_underline_double.svg')",
        highlight_cgv_desktop:
          "url('../sources/highlight/highlight_cgv_desktop.svg')",
        highlight_cgv_mobile:
          "url('../sources/highlight/highlight_cgv_mobile.svg')",
        highlight_kidyellow_sun:
          "url('../sources/highlight/highlight_kidyellow_sun.svg')",
        listing_pages_infos_1:
          "url('../sources/img/infos_pratiques/listing_pages_infos/listing_pages_infos_1.svg')",
        listing_pages_infos_2:
          "url('../sources/img/infos_pratiques/listing_pages_infos/listing_pages_infos_2.svg')",
        listing_pages_infos_3:
          "url('../sources/img/infos_pratiques/listing_pages_infos/listing_pages_infos_3.svg')",
        listing_pages_infos_4:
          "url('../sources/img/infos_pratiques/listing_pages_infos/listing_pages_infos_4.svg')",
        listing_pages_infos_5:
          "url('../sources/img/infos_pratiques/listing_pages_infos/listing_pages_infos_5.svg')",
        listing_pages_infos_6:
          "url('../sources/img/infos_pratiques/listing_pages_infos/listing_pages_infos_6.svg')",
        homepage_avis_blur_desktop:
          "url('../sources/img/homepage/homepage_avis_blur_desktop.svg')",
        centre_de_vacances_map_mobile:
          "url('../sources/img/centre_de_vacances/centre_de_vacances_map_mobile.svg')",
        centre_de_vacances_map_desktop:
          "url('../sources/img/centre_de_vacances/centre_de_vacances_map_desktop.svg')",
        detail_colo_banner:
          "url('../sources/img/toutes_colos/detail_colo_banner.jpeg')",
        toutes_les_colos:
          "url('../sources/img/toutes_colos/toutes_les_colos.png')",
        demande_devis_commande_effectuee:"url('../sources/img/demande_devis/demande_devis_commande_effectuee.svg')",
        paiement_ancv:"url('../sources/logos/paiement/ancv.svg')",
        paiement_caf:"url('../sources/logos/paiement/caf.svg')",
        paiement_cb:"url('../sources/logos/paiement/cb.svg')",
        paiement_cheque:"url('../sources/logos/paiement/cheque.svg')",
        paiement_mastercard:"url('../sources/logos/paiement/mastercard.svg')",
        paiement_visa:"url('../sources/logos/paiement/visa.svg')",
        paiement_sepa:"url('../sources/logos/paiement/sepa.svg')",
      },

      keyframes: {
        fadein: {
          "0%": { opacity: "0%" },
          "30%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
        zoomdezoom: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" },
        },
        slide_2: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-200%)" }, // 200% correspond à 2 slides
        },
        slide_3: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-300%)" },
        },
        slide_4: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-400%)" },
        },
        slide_5: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-500%)" },
        },
        slideCran: {
          "0%": { transform: "translateX(0%)" },
          "33%": { transform: "translateX(-100%)" }, // Se déplace d'une carte (100%)
          "66%": { transform: "translateX(-200%)" }, // Se déplace de deux cartes
          "100%": { transform: "translateX(0%)" }, // Retour à la première carte
        },
        blurAnimation: {
          "0%": { filter: "blur(24px)" },
          "1%": { filter: "blur(24px)" },
          "2%": { filter: "blur(0px)" },
          "98%": { filter: "blur(0px)" },
          "99%": { filter: "blur(24px)" },
          "100%": { filter: "blur(24px)" },
        },
      },
      animation: {
        fadein: "fadein 1.1s linear",
        zoomdezoom: "zoomdezoom 1s ease-in-out infinite",
        homepage_cards_2: "slide_2 5s steps(2) infinite", // 2 étapes pour 2 slides
        homepage_cards_3: "slide_3 7.5s steps(3) infinite",
        homepage_cards_4: "slide_4 10s steps(4) infinite",
        homepage_cards_5: "slide_5 12.5s steps(5) infinite",
        slidecran: "slideCran 6s ease-in-out infinite", // Animation fluide de 6s
        blurAnimation_5s: "blurAnimation 5s linear infinite",
        homepage_reviews_2: "slide_2 10s steps(2) infinite",
        homepage_reviews_3: "slide_3 15s steps(3) infinite",
      },
    },
  },

  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
  // si avec NPM, et pas standalone CLI plugins: [],
};
