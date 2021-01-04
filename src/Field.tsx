/**@jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { baseCSS} from './style';
import { FC, useContext, ChangeEvent,} from 'react';
import { FormContext } from './Form';

interface Props {
    name: string;
    label?: string;
    type?: 'Text' | 'TextArea' | 'Password';
    }

export const Field: FC<Props> = ({ name, label, type = 'Text',}) => {
    
    const { setValue } = useContext(FormContext);  // reference to the context value

    const handleChange = ( e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        if (setValue) {
        setValue(name, e.currentTarget.value);
            }
        };
    return (
         
        <FormContext.Consumer>
            
            { ({values}) => ( //destructured values from the context
                
                <div
                css={css` display: flex; flex-direction: column; margin-bottom: 15px;`}>
                
                {label && ( <label css={css` font-weight: bold;`} htmlFor={name}>
                
                    {label}
                
                </label>
                )}

                {(type === 'Text' || type === 'Password') && (
                <input type={type.toLowerCase()} id={name} value={
                    values[name] === undefined  // using the context value to set a controlled elememt
                    ? ''
                    : values[name]
                    } css={baseCSS} onChange = {handleChange}/>)
                    }

                {type === 'TextArea' && (<textarea id={name} value={    
                        values[name] === undefined //using the context value to set a controlled elememt
                        ? ''
                        :values[name]
                        } css={css` ${baseCSS};  height: 100px;`}
                 onChange = {handleChange}/>
                )}
                </div>
            )}

            </FormContext.Consumer>
           
        
        );
    }