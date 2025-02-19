export const Button = (props) => {
  return (
    <button className="bg-[#92B6B1] p-2 rounded-lg text-white hover:text-[#132F63] shadow-md shadow-slate-500 uppercase font-bold" onClick={props.onClick || null}>{props.children}</button>
  )
}