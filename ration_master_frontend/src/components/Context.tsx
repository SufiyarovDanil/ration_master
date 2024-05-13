import React, { createContext, useContext, useState } from 'react';

// Определяем тип данных для контекста
export interface UserContextType {
  weight: number;
  height: number;
  age: number;
  gender: string;
  goal: string;
  activity: string;
  updateUserData: (newData: Partial<UserContextType>) => void;
}

// Создаем контекст
export const UserContext = createContext<UserContextType | undefined>(undefined);

// Определяем тип пропсов для UserProvider
interface UserProviderProps {
  children: React.ReactNode;
}

// Создаем компонент-обертку, который будет предоставлять данные контекста
export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [userData, setUserData] = useState<UserContextType>({
    weight: 0,
    height: 0,
    age: 0,
    gender: '',
    goal: '',
    activity: '',
    updateUserData: (newData) => {
      setUserData(prevData => ({
        ...prevData,
        ...newData
      }));
    }
  });

  return (
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>
  );
};

// Hook для удобного доступа к данным контекста
export const useUserContext = () => {
  const context = useContext(UserContext);
  
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};
