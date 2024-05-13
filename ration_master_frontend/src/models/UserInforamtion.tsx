export interface UserInformation {
    weight: number;
    height: number;
    age: number;
    gender: string;
    goal: string;
    activity: string;
  }

export interface UserCPFC{
    calorie: number;
    carbohydrate: number;
    fat: number;
    protein: number;
}

export interface UserRation{
    dishName: string;
    dishWeight: number;
    dishCallories: number;
    dishProtein: number;
    dishFat: number;
    dishCarbohydrates: number;
  }

  export interface MealData {
    name: string;
    calorie: number;
    protein: number;
    fat: number;
    carbohydrate: number;
    gramms: number;
  }
  
  export interface DailyMenu {
    breakfast: MealData;
    dinner: MealData;
    supper: MealData;
  }
