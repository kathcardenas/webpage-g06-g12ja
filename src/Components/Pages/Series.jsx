import CardSeries from "../CarSeries"

export default function App() {
  return (
    <>
    <div className="flex justify-center p-8">
      <h1 className="font-bold text-2xl">SERIES</h1>
    </div>
    <div className="px-4 pb-4 flex justify-center">
      <div className="grid grid-cols-4 gap-4">
        <div><CardSeries/></div>
        <div><CardSeries/></div>
        <div><CardSeries/></div>
        <div><CardSeries/></div>
        <div><CardSeries/></div>
        <div><CardSeries/></div>
        <div><CardSeries/></div>
        <div><CardSeries/></div>
        <div><CardSeries/></div>
        <div><CardSeries/></div>
      </div>
    </div>
    </>
 
  );
}

