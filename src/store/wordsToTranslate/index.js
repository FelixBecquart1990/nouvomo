export default {
  state: [
    {
      word: "mainstream",
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
      word: "successful",
      definition: "Financement d'un projet par de très nombreux individus",
      userUid: "otheruserUid",
      wordId: "aersdfsdfoi",
      translations: [
        { translation: "financement participatif", source: "nouvomo" },
        { translation: "sociofinancement", source: "termium" }
      ]
    },
    {
      word: "to scroll",
      definition: "Jeune entreprise innovante et dynamique, à croissance rapide.",
      userUid: "otheruserUid",
      wordId: "aeyyfddoi",
      translations: [
        { translation: "entreprise en démarrage", source: "termium" },
        { translation: "jeune entreprise", source: "termium" },
      ]
    }
  ],
  mutations: {
    SET_DELETE_WORD(state, payload) {
      state.splice(payload, 1)
    }
  }
};
