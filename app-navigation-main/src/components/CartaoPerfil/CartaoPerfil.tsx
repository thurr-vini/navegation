import { Text, View } from 'react-native';
import { Image } from 'expo-image';

import { estilosGlobais } from '@/styles/global';
import { estilosCartaoPerfil } from './CartaoPerfil.styles';

type CartaoPerfilProps = {
  nome: string;
  curso: string;
  avatarUrl: string;
};

export function CartaoPerfil({ nome, curso, avatarUrl }: CartaoPerfilProps) {
  return (
    <View style={[estilosGlobais.cartao, estilosCartaoPerfil.conteudo]}>
      <Image source={{ uri: avatarUrl }} style={estilosCartaoPerfil.avatar} contentFit="cover" />
      <Text style={estilosGlobais.titulo}>{nome}</Text>
      <Text style={estilosGlobais.textoSecundario}>{curso}</Text>
    </View>
  );
}
