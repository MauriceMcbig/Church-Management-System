// components/auth/background-decoration.tsx
interface BackgroundDecorationProps {
  theme?: 'light' | 'dark';
  children: React.ReactNode;
}

export function BackgroundDecoration({
  theme = 'light',
  children,
}: BackgroundDecorationProps) {
  const colors = {
    light: {
      from: 'from-blue-50',
      to: 'to-white',
      blob: 'bg-blue-100',
      opacity: 'opacity-20',
    },
    dark: {
      from: 'from-gray-900',
      to: 'to-purple-900',
      blob: 'bg-purple-500',
      opacity: 'opacity-10',
    },
  };

  const { from, to, blob, opacity } = colors[theme];

  return (
    <div className={`min-h-screen bg-gradient-to-br ${from} ${to} relative`}>
      <div
        className={`absolute top-0 right-0 w-96 h-96 ${blob} rounded-full filter blur-3xl ${opacity}`}
      />
      <div
        className={`absolute bottom-0 left-0 w-96 h-96 ${blob} rounded-full filter blur-3xl ${opacity}`}
      />
      {children}
    </div>
  );
}
