import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { H1, P1 } from '@/components/typography';
import { BookProgressCard } from '@/components/books';
import { Button } from '@/components/ui';

export default function RoadmapScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 p-4">
        <H1 color="secondary" className="mb-4">
          Roadmap
        </H1>
        <P1>Aquí podrás ver tu plan de aprendizaje.</P1>
        <BookProgressCard
          isActive
          title="The Little Prince"
          author="Antoine de Saint"
          coverImage="https://m.media-amazon.com/images/I/71OZY035QKL._AC_UF1000,1000_QL80_.jpg"
          currentPage={52}
          totalPages={267}
          progress={50}
          onPress={() => console.log('Libro seleccionado')}
          className="mb-4"
        />
        <BookProgressCard
          isActive={false}
          title="The Little Prince"
          author="Antoine de Saint"
          coverImage="https://m.media-amazon.com/images/I/71OZY035QKL._AC_UF1000,1000_QL80_.jpg"
          currentPage={52}
          totalPages={267}
          progress={50}
          onPress={() => console.log('Libro seleccionado')}
          className="mb-4"
        />
        <Button variant="filled" className="w-full">
          Ver más
        </Button>
        <Button variant="outlined" className="w-full">
          Ver más
        </Button>
        <Button variant="text" className="w-full">
          Ver más
        </Button>
      </View>
    </SafeAreaView>
  );
}
