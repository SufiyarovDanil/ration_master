import { useEffect, useState } from "react";
import Meal from "../components/Meal";
import { DailyMenu, UserInformation } from "../models/UserInforamtion";
import { calculateRation } from "../api/api";
import { Link } from "react-router-dom";

export default function Ration(){
    
    const [formData, setFormData] = useState<UserInformation>({
        weight: 0,
        height: 0,
        age: 0,
        gender: "male",
        goal: "weight_loss",
        activity: "средняя активность",
    });
    const [userRation, setUserRation] = useState<DailyMenu | null>(null);
    
    useEffect(() => {
        const savedData = localStorage.getItem("userData");
        if (savedData) {
            setFormData(JSON.parse(savedData));
        }
        const savedRation = localStorage.getItem("userRation");
        if (savedRation) {
            setUserRation(JSON.parse(savedRation));
        }
    }, []);

    
    const fetchDataOnClick = async () => {
        try {
            const resultRation = await calculateRation(
                formData.age,
                formData.weight,
                formData.height,
                formData.gender,
                formData.goal
            )
            setUserRation(resultRation.data);
            localStorage.setItem("userRation", JSON.stringify(resultRation.data));
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };


    return(
        <>
            <div className="w-100">
                {userRation ? <>
                    <div className="row">
                        <div className="col">
                            <h1 className="align-content-center fw-bold">Рацион питания</h1>
                        </div>
                        <div className="col d-flex justify-content-end">
                            <button className="btn btn-green mt-2" onClick={fetchDataOnClick}>Cгенерировать другой рацион</button>
                        </div>
                    </div>
                    <div className=" mt-2 row">
                        <hr className="w-100"  style={{borderWidth:"6px", color:"#008F20"}}></hr>
                    </div>
                    <Meal eatingName="Завтрак" mealName={userRation.breakfast.name} mealWeight={userRation.breakfast.gramms} mealCallories={userRation.breakfast.calorie} mealProtein={userRation.breakfast.protein} mealFats={userRation.breakfast.fat} mealCarbohydrates={userRation.breakfast.carbohydrate}></Meal>
                    <Meal eatingName="Обед" mealName={userRation.dinner.name} mealWeight={userRation.dinner.gramms} mealCallories={userRation.dinner.calorie} mealProtein={userRation.dinner.protein} mealFats={userRation.dinner.fat} mealCarbohydrates={userRation.dinner.carbohydrate}></Meal>
                    <Meal eatingName="Ужин" mealName={userRation.supper.name} mealWeight={userRation.supper.gramms} mealCallories={userRation.supper.calorie} mealProtein={userRation.supper.protein} mealFats={userRation.supper.fat} mealCarbohydrates={userRation.supper.carbohydrate}></Meal>
                </>: 
                <>
                    <h1>Параметры спортсмена не введены</h1>
                    <div className=" mt-2 row">
                        <hr className="w-100"  style={{borderWidth:"6px", color:"#008F20"}}></hr>
                    </div>
                    <Link to={"/calc"}>
                        <p>Вернуться к странице ввода параметров</p>
                    </Link>
                </> }   
            </div>
        </>
    )
}