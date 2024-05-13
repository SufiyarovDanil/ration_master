
export interface Params{
    eatingName: string;
    mealName: string;
    mealWeight: number;
    mealCallories: number;
    mealProtein: number;
    mealFats: number;
    mealCarbohydrates: number; 
}

export default function Meal({eatingName, mealName, mealWeight, mealCallories, mealProtein, mealFats, mealCarbohydrates} : Params){
    return(
        <>
            <div className="p-3 box-mini mb-3">
                <h3 className="bg-green fw-bold">{eatingName}</h3>
                <hr className="hr-sep"></hr>
                <h4 className="bg-green fw-bolder">{mealName}</h4>
                <hr className="hr-sep"></hr>
                <div className="bg-green">
                    <div className="row bg-green">
                        <div className="col bg-green">
                            <h4 className="bg-green">Кол-во: {mealWeight} гр.</h4>
                        </div>
                        <div className="col bg-green">
                            <h4 className="bg-green">Калорий: {mealCallories} Ккал.</h4>
                        </div>
                    </div>
                    <hr className="hr-sep"></hr>
                    <div className="row bg-green">
                        <div className="col bg-green">
                            <h4 className="bg-green">Белки: {mealProtein} гр.</h4>
                        </div>
                        <div className="col bg-green">
                            <h4 className="bg-green">Жиры: {mealFats} гр.</h4>
                        </div>
                        <div className="col bg-green">
                            <h4 className="bg-green">Углеводов: {mealCarbohydrates} гр.</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} 