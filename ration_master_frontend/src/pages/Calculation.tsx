import { useEffect, useState } from "react";
import { UserCPFC, UserInformation } from "../models/UserInforamtion";
import { calculateCPFC, calculateRation } from "../api/api";

export default function Calculation(){
    const [profile, setProfile] = useState<boolean>(false);

    const [userCPFCData, setUserCPFCData] = useState<UserCPFC | null>(null);
    const [formData, setFormData] = useState<UserInformation>({
        weight: 0,
        height: 0,
        age: 0,
        gender: "male",
        goal: "weight_loss",
        activity: "средняя активность",
    });

    const fetchDataOnClick = async () => {
        localStorage.setItem("userData", JSON.stringify(formData));
        try {
            const resultCPFC = await calculateCPFC(
                formData.age,
                formData.weight,
                formData.height,
                formData.gender,
                formData.goal
            );
            setUserCPFCData(resultCPFC.data);
            localStorage.setItem("userCPFCData", JSON.stringify(resultCPFC.data))
            const resultRation = await calculateRation(
                formData.age,
                formData.weight,
                formData.height,
                formData.gender,
                formData.goal
            )
            localStorage.setItem("userRation", JSON.stringify(resultRation.data))
            setProfile(true);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        const savedData = localStorage.getItem("userData");
        if (savedData) {
            setFormData(JSON.parse(savedData));
            setProfile(true);
        }
        const savedCPFCData = localStorage.getItem("userCPFCData");
        if (savedCPFCData) {
            setUserCPFCData(JSON.parse(savedCPFCData));
        }
    }, []);
    
    const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevState) => ({
            ...prevState,
            gender: e.target.value
        }));
    };

    const handleGoalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevState) => ({
            ...prevState,
            goal: e.target.value
        }));
    };

    const handleActivityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevState) => ({
            ...prevState,
            activity: e.target.value
        }));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };
    
    return(
        <>
        {!profile &&
            <div className="container">
                
                <h1 className="fw-bold">Параметры спортсмена</h1>
                <div className=" mt-2 row">
                    <hr className="w-100"  style={{borderWidth:"6px", color:"#008F20"}}></hr>
                </div>
                <div className="d-flex align-items-center">
                    <h4>Пол:</h4>
                    <div className="form-check ms-4 me-4">
                        <input className="form-check-input" type="radio" name="gender" id="male" value={"male"} checked={formData.gender === "male"} onChange={handleGenderChange}/>
                        <label className="form-check-label" htmlFor="male">
                            <h5>мужской</h5>
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gender" id="female" value={"female"} checked={formData.gender === "female"} onChange={handleGenderChange}/>
                        <label className="form-check-label" htmlFor="female">
                            <h5>женский</h5>
                        </label>
                    </div>
                </div>
                <div className="mb-1 mt-2">
                    <h4>Возраст</h4>
                    <input className="bg-gray w-100 border-0" value={formData.age} style={{height:"40px"}} placeholder="" name="age" onChange={handleChange}></input>
                </div>
                <div className="mb-1">
                    <h4>Рост</h4>
                    <input className="bg-gray w-100 border-0" value={formData.height} style={{height:"40px"}} placeholder="" name="height" onChange={handleChange}></input>
                </div>
                <div className="mb-1">
                    <h4>Вес</h4>
                    <input className="bg-gray w-100 border-0" value={formData.weight} style={{height:"40px"}}  placeholder="" name="weight" onChange={handleChange}></input>
                </div>
                <div className="mb-0 d-flex align-items-center">
                    <h4>Цель:</h4>
                    <div className="form-check ms-4 me-4">
                        <input className="form-check-input" type="radio" name="goal" id="minus" value={"weight_loss"} checked={formData.goal==="weight_loss"} onChange={handleGoalChange}/>
                        <label className="form-check-label" htmlFor="minus">
                            <h5>похудение</h5>
                        </label>
                    </div>
                    <div className="form-check me-4">
                        <input className="form-check-input" type="radio" name="goal" id="null" value={"weight_keep"}  checked={formData.goal==="weight_keep"}  onChange={handleGoalChange}/>
                        <label className="form-check-label" htmlFor="null">
                            <h5>поддержание формы</h5>
                        </label>
                    </div>
                    <div className="form-check me-4">
                        <input className="form-check-input" type="radio" name="goal" id="add" value={"weight_gain"} checked={formData.goal==="weight_gain"} onChange={handleGoalChange}/>
                        <label className="form-check-label" htmlFor="add">
                            <h5>набор массы</h5>
                        </label>
                    </div>
                </div>
                <div className="mb-0 d-flex align-items-center">
                    <h4>Активность:</h4>
                    <div className="form-check ms-4 me-4">
                        <input className="form-check-input" type="radio" name="activity" id="sit" value={"сидячий образ"} checked={formData.activity==="сидячий образ"} onChange={handleActivityChange}/>
                        <label className="form-check-label" htmlFor="sit">
                            <h5>сидячий образ</h5>
                        </label>
                    </div>
                    <div className="form-check me-4">
                        <input className="form-check-input" type="radio" name="activity" id="midle" value={"средняя активность"} checked={formData.activity==="средняя активность"}  onChange={handleActivityChange}/>
                        <label className="form-check-label" htmlFor="midle">
                            <h5>средняя активность</h5>
                        </label>
                    </div>
                    <div className="form-check me-4">
                        <input className="form-check-input" type="radio" name="activity" id="active" value={"активный образ"} checked={formData.activity==="активный образ"} onChange={handleActivityChange}/>
                        <label className="form-check-label" htmlFor="active">
                            <h5>активный образ</h5>
                        </label>
                    </div>
                </div>
                <div className="d-flex justify-content-center align-content-center">
                    <button className="btn btn-green" onClick={fetchDataOnClick}>
                        Сохранить
                    </button>
                </div>
            </div>
        }
        {profile &&
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="align-content-center fw-bold">Параметры спортсмена</h1>
                    </div>
                    <div className="col d-flex justify-content-end">
                        <button className="btn btn-green mt-2" onClick={() => setProfile(false)}>
                            Редактировать
                        </button>
                    </div>
                </div>
                <div className=" mt-2 row">
                    <hr className="w-100"  style={{borderWidth:"6px", color:"#008F20"}}></hr>
                </div>
                <div className="row">
                    <div className="col">
                        {
                            formData.gender == "male"? 
                            <h4 className="mb-3 mt-4">Пол: мужской</h4> :
                            <h4 className="mb-3 mt-4">Пол: женский</h4>
                        }
                        <h4 className="mb-3">Возраст: {formData.age}</h4>
                        <h4 className="mb-3">Рост: {formData.height}</h4>
                        <h4 className="mb-3">Вес: {formData.weight}</h4>
                        {
                            formData.goal == "weight_loss" && 
                            <h4 className="mb-3">Цель: похудение</h4>
                        }
                        {
                            formData.goal == "weight_gain" && 
                            <h4 className="mb-3">Цель: набор массы</h4>
                        }
                        {
                            formData.goal == "weight_keep" && 
                            <h4 className="mb-3">Цель: поддержание формы</h4>
                        }
                        <h4 className="mb-3">Активность: {formData.activity}</h4>
                    </div>
                    <div className="col">
                        <h4 className="mb-3 mt-4">Калории: {userCPFCData?.calorie} гр.</h4>
                        <h4 className="mb-3">Белки: {userCPFCData?.protein} гр.</h4>
                        <h4 className="mb-3">Жиры: {userCPFCData?.fat} гр.</h4>
                        <h4 className="mb-3">Углеводы: {userCPFCData?.carbohydrate} гр.</h4>
                    </div>
                </div>
            </div>
        }
        </>
    )
}
