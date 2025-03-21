import Card from './Card'

export default function CardsList() {
    return (
        <div id="cardsList">
            <div id='Cards' className="row-cols-6">
                <Card /> 
                <Card /> 
                <Card /> 
                <Card /> 
                <Card /> 
                <Card /> 
                <Card /> 
                <Card /> 
                <Card /> 
                <Card /> 
                <Card /> 
                <Card /> 
            </div>
           
           <h3 id='cardsList-loadMore'>LOAD MORE</h3>
        </div>
    )
}