import "./styles.css";
import Header from "./components/Header";
import Section from "./components/Section";
import ListItem from "./components/ListItem";

const gamesListData = [
  {
    url: "https://www.twitch.tv/directory/game/Minecraft,",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg",
    alt: "Imagem do jogo Minecraft",
  },
  {
    url: "https://www.twitch.tv/directory/category/battlefield-2042",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/514974_IGDB-144x192.jpg",
    alt: "Imagem do Battlefield 2042",
  },

  {
    url: "https://www.twitch.tv/directory/category/for-honor",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/490382-144x192.jpg",
    alt: "Imagem do jogo For Honor",
  },

  {
    url: "https://www.twitch.tv/directory/category/palworld",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/1036710512_IGDB-144x192.jpg",
    alt: "Imagem do jogo Palworld",
  },
];

const admListData = [
  {
    url: "https://discord.gg/wkczEEUnDX",
    imageUrl: "https://github.com/devKire.png",
    alt: "Imagem do Kire",
    subtitle: "Kire",
  },

  {
    url: "https://discord.gg/wkczEEUnDX",
    imageUrl: "https://github.com/Thiago.png",
    alt: "Imagem do Alucard",
    subtitle: "Alucard",
  },

  {
    url: "https://discord.gg/wkczEEUnDX",
    imageUrl: "https://github.com/Homer.png",
    alt: "Imagemd do Luan",
    subtitle: "Luan",
  },

  {
    url: "https://discord.gg/wkczEEUnDX",
    imageUrl: "https://github.com/Eduardo.png",
    alt: "Imagemd do FBI",
    subtitle: "FBI",
  },
];

const socialListData = [
  {
    url: "https://www.facebook.com/groups/1305333569993679/",
    imageUrl: "/assets/facebook.svg",
    alt: "Facebook da L'Amour Games",
  },
  {
    url: "https://discord.gg/wkczEEUnDX",
    imageUrl: "/assets/discord.svg",
    alt: "Discord da L'Amour Games",
  },
  {
    url: "https://chat.whatsapp.com/HggfZseAPPvFwq3FeP5vxz?fbclid=IwAR3_t3PRVi9Qgv35jm7-BdDigrDCdenqgJP67jdMG1eUDtWCcjP1bY1vzfU_aem_AWEooImTEwW1C_-cwMk__8NHegMuricwyczO7mK4pnT2CMrLU6ns09orahsvjqhQi3_lZKs8UshZ3AyKInmQNKCA",
    imageUrl: "/assets/whatsapp.svg",
    alt: "Whatsapp da L'Amour Games",
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {/* LISTA */}
        <Section
          title="Top Jogos do server:"
          subtitle="Os jogos em alta no servidor:"
          className="games-list"
        >
          {/* ITEMS DA LISTA*/}
          {
            gamesListData.map(function (item) {
              return (
                <ListItem
                  url={item.url}
                  imageUrl={item.imageUrl}
                  alt={item.alt}
                /> //pegando o item e retornando pra html
              );
            }) //função que vai percorrer o array e criar os itens da lista: map recebendo outra função que vai receber cada item
          }
        </Section>

        <Section
          title="ADM's do Server"
          subtitle="Com esses caras você vai poder entrar em contato caso tenha alguma dúvida ou denúncia no server."
          className="adm-list"
        >
          {/* ITEMS DA LISTA */}
          {admListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
                subtitle= {item.subtitle}
              />
            );
          })}
        </Section>
        <Section
          title="Redes Sociais"
          subtitle="Se conecta com a gente!"
          className="social-list"
        >
          {socialListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>
      </main>
    </div>
  );
}

export default App;
