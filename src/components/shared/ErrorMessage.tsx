export default function ErrorMessage({msg=""}:{msg?:string}) {
    const defaultError = "Some error occured fetching data"
  return (
    <div className="w-full min-h-[200px]">
        <p>{msg||defaultError}</p>
    </div>
  )
}
