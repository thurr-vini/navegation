import { Pressable, Text } from 'react-native';

import { estilosGlobais } from '@/styles/global';

type HabilidadeProps = {
  nome: string;
  onPress: () => void;
};

export function Habilidade({ nome, onPress }: HabilidadeProps) {
  return (
    <Pressable style={estilosGlobais.tag} onPress={onPress}>
      <Text style={estilosGlobais.tagTexto}>{nome}</Text>
    </Pressable>
  );
}
