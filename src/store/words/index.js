export default {
  state: [
    {
      word: "business model",
      definition: "Manière dont une entreprise extrait un profit de ses revenus",
      userUid: "dsdf",
      wordId: "oqdsfsdfi",
      translations: [
        { translation: "modèle économique", source: "nouvomo" },
        { translation: "architecture technique de l'information", source: "termium" },
        { translation: "modèle de gestion", source: "termium" }
      ]
    },
    {
      word: "crowdfunding",
      definition: "Financement d'un projet par de très nombreux individus",
      userUid: "otheruserUid",
      wordId: "aersdfsdfoi",
      translations: [
        { translation: "financement participatif", source: "nouvomo" },
        { translation: "sociofinancement", source: "termium" }
      ]
    },
    {
      word: "startup",
      definition: "Jeune entreprise innovante et dynamique, à croissance rapide.",
      userUid: "otheruserUid",
      wordId: "aeyyfddoi",
      translations: [
        { translation: "entreprise en démarrage", source: "termium" },
        { translation: "jeune entreprise", source: "termium" },
      ]
    }
  ]

  ,
  mutations: {
    SET_ADD_NEW_WORD(state, payload) {
      state.push({
        word: payload.word,
        context: payload.context,
        learners: payload.learners,
        knowers: payload.knowers,
        skippers: payload.skippers,
        userUid: payload.userUid
      });
    }
  }
};
