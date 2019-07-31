function constructionCrew(obj){
if(obj.dizziness){
    let amountToAdd = obj.weight * obj.experience * 0.1;
    obj.levelOfHydrated += amountToAdd;
    obj.dizziness = false;
}
return obj;
}
constructionCrew();