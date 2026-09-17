import {Text, View, ScrollView} from 'react-native';
import { useRoute } from 'expo-router';

import { CartaoPerfil } from '../componentes/CartaoPerfil/CartaoPerfil';
import { Habilidade } from '../componentes/Habilidade/Habilidade';
import { estilosGlobais } from '../style/global';

const habilidades = ['React Native', 'TypeScript', 'Expo Router'];

export default function Index() {
  const route = useRoute();

  return (
    <ScrollView style={estilosGlobais.container}>
      <CartaoPerfil
        nome="Arthur Vinícius"
        curso="Ciência da Computação"
        avatarUrl="https://avatars.githubusercontent.com/u/109295168?v=4"
      />
      <Text style={estilosGlobais.titulo}>Habilidades</Text>
      <View style={estilosGlobais.habilidadesContainer}>
        {habilidades.map((habilidade, index) => (
          <Habilidade key={index} nome={habilidade} onpress={() => route.push('/habilidade')} />
        ))}
      </View>
    </ScrollView>
  );
}