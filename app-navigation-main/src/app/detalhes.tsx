import { Text, View } from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';

import { Botao } from '@/components/Botao/Botao';
import { estilosGlobais } from '@/styles/global';

export default function Detalhes() {
  const { nome } = useLocalSearchParams<{ nome: string }>();
  const router = useRouter();

  return (
    <View style={estilosGlobais.container}>
      <Stack.Screen options={{ title: nome }} />
      <Text style={estilosGlobais.titulo}>{nome}</Text>
      <Text style={estilosGlobais.textoSecundario}>Habilidade praticada na disciplina.</Text>
      <Botao texto="Voltar" onPress={() => router.back()} />
    </View>
  );
}
