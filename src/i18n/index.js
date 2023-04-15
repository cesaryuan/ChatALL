import { createI18n } from "vue-i18n";

const messages = {
  en: {
    settings: "Settings",
    general: "General",
    save: "Save",
    header: {
      singleColumn: "Single Column",
      doubleColumn: "Double Column",
      tripleColumn: "Triple Column",
    },
    footer: {
      sendPrompt: "Send",
    },
    bot: {
      nullBot: "Null Bot",
      ChatGPT: "ChatGPT",
      BingChat: "Bing Chat",
      Bard: "Bard",
      ERNIE: "ERNIE",
    },
    modal: {
      loginPrompt:
        "Click the link below, log in to { botName } in the new window, and then close the window.",
    },
  },
  zh: {
    settings: "设置",
    general: "通用",
    save: "保存",
    header: {
      singleColumn: "单列",
      doubleColumn: "双列",
      tripleColumn: "三列",
    },
    footer: {
      sendPrompt: "发送",
    },
    bot: {
      nullBot: "虚无",
      ERNIE: "文心一言",
    },
    modal: {
      loginPrompt: "点击下面链接，在新窗口内登录{ botName }，然后关闭窗口",
    },
  },
};

const i18n = createI18n({
  legacy: false, // Vuetify does not support the legacy mode of vue-i18n
  locale: "en",
  fallbackLocale: "en",
  messages,
});

export default i18n;
