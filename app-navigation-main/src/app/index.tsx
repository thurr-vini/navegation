import { useRouter } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';

import { CartaoPerfil } from '@/components/CartaoPerfil/CartaoPerfil';
import { Habilidade } from '@/components/Habilidade/Habilidade';
import { estilosGlobais } from '@/styles/global';

const habilidades = ['React Native', 'TypeScript', 'Expo Router'];

export default function Perfil() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={estilosGlobais.container}>
      <CartaoPerfil
        nome="Daniel Costa"
        curso="Ciência da Computação"
        avatarUrl="https://i.pravatar.cc/151"
      />
      <Text style={estilosGlobais.subtitulo}>Habilidades</Text>
      <View style={estilosGlobais.linhaTags}>
        {habilidades.map((nome) => (
          <Habilidade
            key={nome}
            nome={nome}
            onPress={() => router.push({ pathname: '/detalhes', params: { nome } })}
          />
        ))}
      </View>
    </ScrollView>
  );
}
