import { StyleSheet } from "react-native-web";

export const s = StyleSheet.create({
  container: {
    padding: 20,
    borderradius: 10,
    backgroundColor: "white",
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },

  header: {
    flexDirection: "row",
  },
  social: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 10,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: "50%",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
    s,
  },
  texts: {
    flex: 1,
    paddingLeft: 15,
  },

  socialBtn: {
    borderRadius: "50%",
    padding: 10,
    backgroundColor: "#eee",
  },
});
