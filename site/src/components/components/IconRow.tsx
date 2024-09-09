import "@/styles/components/Components/iconrow.css"

interface IconRowProps {
    value: string,
    items: string[],
    setValue: (newValue: string) => void,
}
const IconRow: React.FC<IconRowProps> = ({ value, items, setValue}) => {

    return (
        <div className="icon-row">
            {items.map((item) => (
                <a key={item} style={{ backgroundColor: item, }} aria-disabled={value === item ? "true" : "false"} onClick={() => setValue(item)}></a>
            ))}
        </div>
    );
}
  
export default IconRow;