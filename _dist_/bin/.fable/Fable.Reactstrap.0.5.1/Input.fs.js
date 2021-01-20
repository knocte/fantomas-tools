import { Union } from "../fable-library.3.0.1/Types.js";
import { union_type, list_type, obj_type, lambda_type, unit_type, class_type, int32_type, bool_type, string_type } from "../fable-library.3.0.1/Reflection.js";
import { keyValueList } from "../fable-library.3.0.1/MapUtil.js";
import { choose, collect } from "../fable-library.3.0.1/Seq.js";
import { empty } from "../fable-library.3.0.1/List.js";
import * as react from "../../../../_snowpack/pkg/react.js";
import { Input } from "../../../../_snowpack/pkg/reactstrap.js";

export class InputProps extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Size", "BsSize", "Valid", "Invalid", "Plaintext", "Addon", "Min", "Max", "Step", "InnerRef", "CssModule", "Tag", "Type", "Custom"];
    }
}

export function InputProps$reflection() {
    return union_type("Reactstrap.Input.InputProps", [], InputProps, () => [[["Item", string_type]], [["Item", string_type]], [["Item", bool_type]], [["Item", bool_type]], [["Item", string_type]], [["Item", bool_type]], [["Item", int32_type]], [["Item", int32_type]], [["Item", int32_type]], [["Item", lambda_type(class_type("Browser.Types.Element"), unit_type)]], [["Item", class_type("Reactstrap.Common.CSSModule")]], [["Item", obj_type]], [["Item", string_type]], [["Item", list_type(class_type("Fable.React.Props.IHTMLProp"))]]]);
}

export function input(props) {
    const customProps = keyValueList(collect((_arg1) => {
        if (_arg1.tag === 13) {
            return _arg1.fields[0];
        }
        else {
            return empty();
        }
    }, props), 1);
    const typeProps = keyValueList(choose((_arg2) => {
        if (_arg2.tag === 13) {
            return void 0;
        }
        else {
            return _arg2;
        }
    }, props), 1);
    return react.createElement(Input, Object.assign({}, customProps, typeProps));
}
