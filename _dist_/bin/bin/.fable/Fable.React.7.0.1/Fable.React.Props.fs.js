import { toString, Record, Union } from "../../../.fable/fable-library.3.0.0-nagareyama-rc-008/Types.js";
import { array_type, float64_type, int32_type, bool_type, obj_type, record_type, option_type, lambda_type, unit_type, class_type, union_type, string_type } from "../../../.fable/fable-library.3.0.0-nagareyama-rc-008/Reflection.js";

export class FragmentProp extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Key"];
    }
}

export function FragmentProp$reflection() {
    return union_type("Fable.React.Props.FragmentProp", [], FragmentProp, () => [[["Item", string_type]]]);
}

export class Prop extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Key", "Ref", "ref", "ref"];
    }
}

export function Prop$reflection() {
    return union_type("Fable.React.Props.Prop", [], Prop, () => [[["Item", string_type]], [["Item", lambda_type(class_type("Browser.Types.Element"), unit_type)]], [["Item", class_type("Fable.React.IRefValue`1", [option_type(class_type("Browser.Types.Element"))])]], [["Item", class_type("Fable.React.IRefValue`1", [option_type(class_type("Browser.Types.Element"))])]]]);
}

export class DangerousHtml extends Record {
    constructor(__html) {
        super();
        this.__html = __html;
    }
}

export function DangerousHtml$reflection() {
    return record_type("Fable.React.Props.DangerousHtml", [], DangerousHtml, () => [["__html", string_type]]);
}

export class DOMAttr extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["DangerouslySetInnerHTML", "OnCut", "OnPaste", "OnCompositionEnd", "OnCompositionStart", "OnCopy", "OnCompositionUpdate", "OnFocus", "OnBlur", "OnChange", "OnInput", "OnSubmit", "OnReset", "OnLoad", "OnError", "OnKeyDown", "OnKeyPress", "OnKeyUp", "OnAbort", "OnCanPlay", "OnCanPlayThrough", "OnDurationChange", "OnEmptied", "OnEncrypted", "OnEnded", "OnLoadedData", "OnLoadedMetadata", "OnLoadStart", "OnPause", "OnPlay", "OnPlaying", "OnProgress", "OnRateChange", "OnSeeked", "OnSeeking", "OnStalled", "OnSuspend", "OnTimeUpdate", "OnVolumeChange", "OnWaiting", "OnClick", "OnContextMenu", "OnDoubleClick", "OnDrag", "OnDragEnd", "OnDragEnter", "OnDragExit", "OnDragLeave", "OnDragOver", "OnDragStart", "OnDrop", "OnMouseDown", "OnMouseEnter", "OnMouseLeave", "OnMouseMove", "OnMouseOut", "OnMouseOver", "OnMouseUp", "OnSelect", "OnTouchCancel", "OnTouchEnd", "OnTouchMove", "OnTouchStart", "OnScroll", "OnWheel", "OnAnimationStart", "OnAnimationEnd", "OnAnimationIteration", "OnTransitionEnd"];
    }
}

export function DOMAttr$reflection() {
    return union_type("Fable.React.Props.DOMAttr", [], DOMAttr, () => [[["Item", DangerousHtml$reflection()]], [["Item", lambda_type(class_type("Browser.Types.ClipboardEvent"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.ClipboardEvent"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.CompositionEvent"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.CompositionEvent"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.ClipboardEvent"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.CompositionEvent"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.FocusEvent"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.FocusEvent"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.Event"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.Event"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.Event"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.Event"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.Event"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.Event"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.KeyboardEvent"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.KeyboardEvent"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.KeyboardEvent"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.Event"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.Event"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.Event"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.Event"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.Event"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.Event"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.Event"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.Event"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.Event"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.Event"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.Event"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.Event"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.Event"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.Event"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.Event"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.Event"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.Event"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.Event"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.Event"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.Event"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.Event"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.Event"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.MouseEvent"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.MouseEvent"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.MouseEvent"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.DragEvent"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.DragEvent"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.DragEvent"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.DragEvent"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.DragEvent"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.DragEvent"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.DragEvent"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.DragEvent"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.MouseEvent"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.MouseEvent"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.MouseEvent"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.MouseEvent"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.MouseEvent"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.MouseEvent"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.MouseEvent"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.Event"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.TouchEvent"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.TouchEvent"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.TouchEvent"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.TouchEvent"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.UIEvent"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.WheelEvent"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.AnimationEvent"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.AnimationEvent"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.AnimationEvent"), unit_type)]], [["Item", lambda_type(class_type("Browser.Types.TransitionEvent"), unit_type)]]]);
}

export class SVGAttr extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["ClipPath", "Cx", "Cy", "D", "Dx", "Dy", "Fill", "FillOpacity", "FontFamily", "FontSize", "Fx", "Fy", "GradientTransform", "GradientUnits", "Height", "MarkerEnd", "MarkerMid", "MarkerStart", "Offset", "Opacity", "PatternContentUnits", "PatternUnits", "Points", "PreserveAspectRatio", "R", "Rx", "Ry", "SpreadMethod", "StopColor", "StopOpacity", "Stroke", "StrokeDasharray", "StrokeDashoffset", "StrokeLinecap", "StrokeMiterlimit", "StrokeOpacity", "StrokeWidth", "TextAnchor", "Transform", "Version", "ViewBox", "Width", "X1", "X2", "X", "XlinkActuate", "XlinkArcrole", "XlinkHref", "XlinkRole", "XlinkShow", "XlinkTitle", "XlinkType", "XmlBase", "XmlLang", "XmlSpace", "Y1", "Y2", "Y", "Custom"];
    }
}

export function SVGAttr$reflection() {
    return union_type("Fable.React.Props.SVGAttr", [], SVGAttr, () => [[["Item", string_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", string_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", string_type]], [["Item", obj_type]], [["Item", string_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", string_type]], [["Item", string_type]], [["Item", obj_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", string_type]], [["Item", string_type]], [["Item", obj_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item1", string_type], ["Item2", obj_type]]]);
}

export class HTMLAttr extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["DefaultChecked", "DefaultValue", "Accept", "AcceptCharset", "AccessKey", "Action", "AllowFullScreen", "AllowTransparency", "Alt", "aria-atomic", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "Async", "AutoComplete", "AutoFocus", "AutoPlay", "Capture", "CellPadding", "CellSpacing", "CharSet", "Challenge", "Checked", "ClassID", "ClassName", "className", "Cols", "ColSpan", "Content", "ContentEditable", "ContextMenu", "Controls", "Coords", "CrossOrigin", "data-toggle", "DateTime", "Default", "Defer", "Dir", "Disabled", "Download", "Draggable", "EncType", "Form", "FormAction", "FormEncType", "FormMethod", "FormNoValidate", "FormTarget", "FrameBorder", "Headers", "Height", "Hidden", "High", "Href", "HrefLang", "HtmlFor", "HttpEquiv", "Icon", "Id", "InputMode", "Integrity", "Is", "KeyParams", "KeyType", "Kind", "Label", "Lang", "List", "Loop", "Low", "Manifest", "MarginHeight", "MarginWidth", "Max", "MaxLength", "Media", "MediaGroup", "Method", "Min", "MinLength", "Multiple", "Muted", "Name", "NoValidate", "Open", "Optimum", "Pattern", "Placeholder", "Poster", "Preload", "RadioGroup", "ReadOnly", "Rel", "Required", "Role", "Rows", "RowSpan", "Sandbox", "Scope", "Scoped", "Scrolling", "Seamless", "Selected", "Shape", "Size", "Sizes", "Span", "SpellCheck", "Src", "SrcDoc", "SrcLang", "SrcSet", "Start", "Step", "Summary", "TabIndex", "Target", "Title", "Type", "UseMap", "Value", "value", "Width", "Wmode", "Wrap", "About", "Datatype", "Inlist", "Prefix", "Property", "Resource", "Typeof", "Vocab", "AutoCapitalize", "AutoCorrect", "AutoSave", "ItemProp", "ItemScope", "ItemType", "ItemID", "ItemRef", "Results", "Security", "Unselectable", "Custom"];
    }
}

export function HTMLAttr$reflection() {
    return union_type("Fable.React.Props.HTMLAttr", [], HTMLAttr, () => [[["Item", bool_type]], [["Item", obj_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", bool_type]], [["Item", bool_type]], [["Item", string_type]], [["Item", bool_type]], [["Item", bool_type]], [["Item", bool_type]], [["Item", int32_type]], [["Item", int32_type]], [["Item", int32_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", bool_type]], [["Item", string_type]], [["Item", bool_type]], [["Item", string_type]], [["Item", bool_type]], [["Item", bool_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", int32_type]], [["Item", string_type]], [["Item", bool_type]], [["Item", bool_type]], [["Item", bool_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", int32_type]], [["Item", bool_type]], [["Item", bool_type]], [["Item", string_type]], [["Item", bool_type]], [["Item", string_type]], [["Item", int32_type]], [["Item", int32_type]], [["Item", int32_type]], [["Item", bool_type]], [["Item", int32_type]], [["Item", string_type]], [["Item", float64_type]], [["Item", float64_type]], [["Item", float64_type]], [["Item", string_type]], [["Item", bool_type]], [["Item", string_type]], [["Item", bool_type]], [["Item", bool_type]], [["Item", bool_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", string_type]], [["Item", string_type]], [["Item", bool_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", int32_type]], [["Item", int32_type]], [["Item", string_type]], [["Item", bool_type]], [["Item", string_type]], [["Item", bool_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", bool_type]], [["Item", bool_type]], [["Item", string_type]], [["Item", bool_type]], [["Item", obj_type]], [["Item", bool_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", bool_type]], [["Item", string_type]], [["Item", obj_type]], [["Item", string_type]], [["Item", obj_type]], [["Item", bool_type]], [["Item", float64_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", bool_type]], [["Item", float64_type]], [["Item", string_type]], [["Item", float64_type]], [["Item", float64_type]], [["Item", obj_type]], [["Item", float64_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", obj_type]], [["Item", float64_type]], [["Item", bool_type]], [["Item", bool_type]], [["Item", string_type]], [["Item", bool_type]], [["Item", bool_type]], [["Item", float64_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", bool_type]], [["Item", string_type]], [["Item", bool_type]], [["Item", string_type]], [["Item", int32_type]], [["Item", int32_type]], [["Item", string_type]], [["Item", string_type]], [["Item", bool_type]], [["Item", string_type]], [["Item", bool_type]], [["Item", bool_type]], [["Item", string_type]], [["Item", float64_type]], [["Item", string_type]], [["Item", float64_type]], [["Item", bool_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", float64_type]], [["Item", obj_type]], [["Item", string_type]], [["Item", int32_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", obj_type]], [["Item", array_type(string_type)]], [["Item", obj_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", obj_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", bool_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", float64_type]], [["Item", string_type]], [["Item", bool_type]], [["Item1", string_type], ["Item2", obj_type]]]);
}

export class CSSProp extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["AlignContent", "AlignItems", "AlignSelf", "AlignmentAdjust", "AlignmentBaseline", "All", "Animation", "AnimationDelay", "AnimationDirection", "AnimationDuration", "AnimationFillMode", "AnimationIterationCount", "AnimationName", "AnimationPlayState", "AnimationTimingFunction", "Appearance", "BackfaceVisibility", "Background", "BackgroundAttachment", "BackgroundBlendMode", "BackgroundClip", "BackgroundColor", "BackgroundComposite", "BackgroundImage", "BackgroundOrigin", "BackgroundPosition", "BackgroundPositionX", "BackgroundPositionY", "BackgroundRepeat", "BackgroundSize", "BaselineShift", "Behavior", "BlockSize", "Border", "BorderBlockEnd", "BorderBlockEndColor", "BorderBlockEndStyle", "BorderBlockEndWidth", "BorderBlockStart", "BorderBlockStartColor", "BorderBlockStartStyle", "BorderBlockStartWidth", "BorderBottom", "BorderBottomColor", "BorderBottomLeftRadius", "BorderBottomRightRadius", "BorderBottomStyle", "BorderBottomWidth", "BorderCollapse", "BorderColor", "BorderCornerShape", "BorderImage", "BorderImageOutset", "BorderImageRepeat", "BorderImageSlice", "BorderImageSource", "BorderImageWidth", "BorderInlineEnd", "BorderInlineEndColor", "BorderInlineEndStyle", "BorderInlineEndWidth", "BorderInlineStart", "BorderInlineStartColor", "BorderInlineStartStyle", "BorderInlineStartWidth", "BorderLeft", "BorderLeftColor", "BorderLeftStyle", "BorderLeftWidth", "BorderRadius", "BorderRight", "BorderRightColor", "BorderRightStyle", "BorderRightWidth", "BorderSpacing", "BorderStyle", "BorderTop", "BorderTopColor", "BorderTopLeftRadius", "BorderTopRightRadius", "BorderTopStyle", "BorderTopWidth", "BorderWidth", "Bottom", "BoxAlign", "BoxDecorationBreak", "BoxDirection", "BoxFlex", "BoxFlexGroup", "BoxLineProgression", "BoxLines", "BoxOrdinalGroup", "BoxShadow", "BoxSizing", "BreakAfter", "BreakBefore", "BreakInside", "CaptionSide", "CaretColor", "Clear", "Clip", "ClipPath", "ClipRule", "Color", "ColorInterpolation", "ColorInterpolationFilters", "ColorProfile", "ColorRendering", "ColumnCount", "ColumnFill", "ColumnGap", "ColumnRule", "ColumnRuleColor", "ColumnRuleStyle", "ColumnRuleWidth", "ColumnSpan", "ColumnWidth", "Columns", "Content", "CounterIncrement", "CounterReset", "Cue", "CueAfter", "Cursor", "Direction", "Display", "DominantBaseline", "EmptyCells", "EnableBackground", "Fill", "FillOpacity", "FillRule", "Filter", "Flex", "FlexAlign", "FlexBasis", "FlexDirection", "FlexFlow", "FlexGrow", "FlexItemAlign", "FlexLinePack", "FlexOrder", "FlexShrink", "FlexWrap", "Float", "FloodColor", "FloodOpacity", "FlowFrom", "Font", "FontFamily", "FontFeatureSettings", "FontKerning", "FontLanguageOverride", "FontSize", "FontSizeAdjust", "FontStretch", "FontStyle", "FontSynthesis", "FontVariant", "FontVariantAlternates", "FontVariantCaps", "FontVariantEastAsian", "FontVariantLigatures", "FontVariantNumeric", "FontVariantPosition", "FontWeight", "GlyphOrientationHorizontal", "GlyphOrientationVertical", "Grid", "GridArea", "GridAutoColumns", "GridAutoFlow", "GridAutoRows", "GridColumn", "GridColumnEnd", "GridColumnGap", "GridColumnStart", "GridGap", "GridRow", "GridRowEnd", "GridRowGap", "GridRowPosition", "GridRowSpan", "GridRowStart", "GridTemplate", "GridTemplateAreas", "GridTemplateColumns", "GridTemplateRows", "HangingPunctuation", "Height", "HyphenateLimitChars", "HyphenateLimitLines", "HyphenateLimitZone", "Hyphens", "ImageOrientation", "ImageRendering", "ImageResolution", "ImeMode", "InlineSize", "Isolation", "JustifyContent", "JustifySelf", "Kerning", "LayoutGrid", "LayoutGridChar", "LayoutGridLine", "LayoutGridMode", "LayoutGridType", "Left", "LetterSpacing", "LightingColor", "LineBreak", "LineClamp", "LineHeight", "ListStyle", "ListStyleImage", "ListStylePosition", "ListStyleType", "Margin", "MarginBlockEnd", "MarginBlockStart", "MarginBottom", "MarginInlineEnd", "MarginInlineStart", "MarginLeft", "MarginRight", "MarginTop", "MarkerEnd", "MarkerMid", "MarkerStart", "MarqueeDirection", "MarqueeStyle", "Mask", "MaskBorder", "MaskBorderRepeat", "MaskBorderSlice", "MaskBorderSource", "MaskBorderWidth", "MaskClip", "MaskComposite", "MaskImage", "MaskMode", "MaskOrigin", "MaskPosition", "MaskRepeat", "MaskSize", "MaskType", "MaxFontSize", "MaxHeight", "MaxWidth", "MinBlockSize", "MinHeight", "MinInlineSize", "MinWidth", "MixBlendMode", "ObjectFit", "ObjectPosition", "OffsetBlockEnd", "OffsetBlockStart", "OffsetInlineEnd", "OffsetInlineStart", "Opacity", "Order", "Orphans", "Outline", "OutlineColor", "OutlineOffset", "OutlineStyle", "OutlineWidth", "OverflowStyle", "OverflowWrap", "OverflowX", "OverflowY", "Padding", "PaddingBlockEnd", "PaddingBlockStart", "PaddingBottom", "PaddingInlineEnd", "PaddingInlineStart", "PaddingLeft", "PaddingRight", "PaddingTop", "PageBreakAfter", "PageBreakBefore", "PageBreakInside", "Pause", "PauseAfter", "PauseBefore", "Perspective", "PerspectiveOrigin", "PointerEvents", "Position", "PunctuationTrim", "Quotes", "RegionFragment", "Resize", "RestAfter", "RestBefore", "Right", "RubyAlign", "RubyMerge", "RubyPosition", "ScrollBehavior", "ScrollSnapCoordinate", "ScrollSnapDestination", "ScrollSnapType", "ShapeImageThreshold", "ShapeInside", "ShapeMargin", "ShapeOutside", "ShapeRendering", "Speak", "SpeakAs", "StopColor", "StopOpacity", "Stroke", "StrokeDasharray", "StrokeDashoffset", "StrokeLinecap", "StrokeLinejoin", "StrokeMiterlimit", "StrokeOpacity", "StrokeWidth", "TabSize", "TableLayout", "TextAlign", "TextAlignLast", "TextAnchor", "TextCombineUpright", "TextDecoration", "TextDecorationColor", "TextDecorationLine", "TextDecorationLineThrough", "TextDecorationNone", "TextDecorationOverline", "TextDecorationSkip", "TextDecorationStyle", "TextDecorationUnderline", "TextEmphasis", "TextEmphasisColor", "TextEmphasisPosition", "TextEmphasisStyle", "TextHeight", "TextIndent", "TextJustify", "TextJustifyTrim", "TextKashidaSpace", "TextLineThrough", "TextLineThroughColor", "TextLineThroughMode", "TextLineThroughStyle", "TextLineThroughWidth", "TextOrientation", "TextOverflow", "TextOverline", "TextOverlineColor", "TextOverlineMode", "TextOverlineStyle", "TextOverlineWidth", "TextRendering", "TextScript", "TextShadow", "TextTransform", "TextUnderlinePosition", "TextUnderlineStyle", "Top", "TouchAction", "Transform", "TransformBox", "TransformOrigin", "TransformOriginZ", "TransformStyle", "Transition", "TransitionDelay", "TransitionDuration", "TransitionProperty", "TransitionTimingFunction", "UnicodeBidi", "UnicodeRange", "UserFocus", "UserInput", "UserSelect", "VerticalAlign", "Visibility", "VoiceBalance", "VoiceDuration", "VoiceFamily", "VoicePitch", "VoiceRange", "VoiceRate", "VoiceStress", "VoiceVolume", "WhiteSpace", "WhiteSpaceTreatment", "Widows", "Width", "WillChange", "WordBreak", "WordSpacing", "WordWrap", "WrapFlow", "WrapMargin", "WrapOption", "WritingMode", "ZIndex", "Zoom", "Custom"];
    }
}

export function CSSProp$reflection() {
    return union_type("Fable.React.Props.CSSProp", [], CSSProp, () => [[["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", obj_type]], [["Item", string_type]], [["Item", string_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", string_type]], [["Item", obj_type]], [["Item", string_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", string_type]], [["Item", string_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", obj_type]], [["Item", string_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", string_type]], [["Item", string_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", string_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", string_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", string_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", string_type]], [["Item", string_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", string_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", string_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", string_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", string_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item1", string_type], ["Item2", obj_type]]]);
}

export function stringEnum(case$) {
    return toString(case$);
}

export function CSSProp_Overflow_25F0CD75(overflow, overflowY) {
    if (overflowY == null) {
        return ["overflow", stringEnum(overflow)];
    }
    else {
        const value = overflowY;
        return ["overflow", (stringEnum(overflow) + " ") + stringEnum(value)];
    }
}
