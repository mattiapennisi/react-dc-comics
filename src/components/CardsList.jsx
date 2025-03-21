import Card from './Card'

export default function CardsList() {
    return (
        <div className="row-cols-6">
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
           
           <h3 id='cardsList-loadMore'>LOAD MORE</h3>
        </div>
    )
}