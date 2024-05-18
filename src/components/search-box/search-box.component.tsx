import { ChangeEvent } from 'react';

import './search-box.styles.css';

/*interface ISeacrhBoxProps extends IChangeHandlerProps {
    className: string;
    placeholder?: string; //if it is an optional property then use '?' cause it means that I might not always give u this value

}

 interface IChangeHandlerProps {
    onChange: (a: string) => void //input type of function as well as return type
 }
*/

//can overload as well
//interface ISeacrhBoxProps {
//     onChange: (a: string) => void //it wil
// }

//with type we can union using '|'

type ISeacrhBoxProps = {
    className: string;
    placeholder?: string; //if it is an optional property then use '?' cause it means that I might not always give u this value
    //onChange: ChangeEventHandler<HTMLInputElement>;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({ className, placeholder, onChange }: ISeacrhBoxProps) => (
    <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onChange}
    />
);
export default SearchBox;