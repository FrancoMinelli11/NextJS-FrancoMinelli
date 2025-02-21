export const Button = (props) => {
  return (
    <button disabled={props.disabled || false} className="bg-[#92B6B1] p-2 rounded-lg text-white hover:text-[#132F63] shadow-md shadow-slate-500 uppercase font-bold disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:text-white" onClick={props.onClick || null}>{props.children}</button>
  )
}