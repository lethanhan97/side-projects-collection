export const validationSchema = {
  $ref: "#/definitions/FormStructure",
  $schema: "http://json-schema.org/draft-07/schema#",
  definitions: {
    CountConfig: {
      additionalProperties: false,
      properties: {
        exceedFormatter: {
          $ref: "#/definitions/ExceedFormatter",
          description: "Trigger when content larger than the `max` limitation",
        },
        max: {
          type: "number",
        },
        show: {
          anyOf: [
            {
              type: "boolean",
            },
            {
              $ref: "#/definitions/ShowCountFormatter",
            },
          ],
        },
        strategy: {
          $comment: "(value: string) => number",
          properties: {
            namedArgs: {
              additionalProperties: false,
              properties: {
                value: {
                  type: "string",
                },
              },
              required: ["value"],
              type: "object",
            },
          },
          type: "object",
        },
      },
      type: "object",
    },
    "DataType.AbsoluteSize": {
      enum: [
        "large",
        "medium",
        "small",
        "x-large",
        "x-small",
        "xx-large",
        "xx-small",
        "xxx-large",
      ],
      type: "string",
    },
    "DataType.AnimateableFeature": {
      anyOf: [
        {
          type: "string",
        },
        {
          enum: ["contents", "scroll-position"],
          type: "string",
        },
      ],
    },
    "DataType.Attachment": {
      enum: ["fixed", "local", "scroll"],
      type: "string",
    },
    "DataType.BgPosition<(string|number)>": {
      anyOf: [
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "bottom",
          type: "string",
        },
        {
          const: "center",
          type: "string",
        },
        {
          const: "left",
          type: "string",
        },
        {
          const: "right",
          type: "string",
        },
        {
          const: "top",
          type: "string",
        },
      ],
    },
    "DataType.BgSize<(string|number)>": {
      anyOf: [
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "contain",
          type: "string",
        },
        {
          const: "cover",
          type: "string",
        },
      ],
    },
    "DataType.BlendMode": {
      enum: [
        "color",
        "color-burn",
        "color-dodge",
        "darken",
        "difference",
        "exclusion",
        "hard-light",
        "hue",
        "lighten",
        "luminosity",
        "multiply",
        "normal",
        "overlay",
        "saturation",
        "screen",
        "soft-light",
      ],
      type: "string",
    },
    "DataType.Box": {
      enum: ["border-box", "content-box", "padding-box"],
      type: "string",
    },
    "DataType.Color": {
      anyOf: [
        {
          $ref: "#/definitions/DataType.NamedColor",
        },
        {
          $ref: "#/definitions/DataType.DeprecatedSystemColor",
        },
        {
          const: "currentcolor",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "DataType.CompatAuto": {
      enum: [
        "button",
        "checkbox",
        "listbox",
        "menulist",
        "meter",
        "progress-bar",
        "push-button",
        "radio",
        "searchfield",
        "slider-horizontal",
        "square-button",
        "textarea",
      ],
      type: "string",
    },
    "DataType.CompositeStyle": {
      enum: [
        "clear",
        "copy",
        "destination-atop",
        "destination-in",
        "destination-out",
        "destination-over",
        "source-atop",
        "source-in",
        "source-out",
        "source-over",
        "xor",
      ],
      type: "string",
    },
    "DataType.CompositingOperator": {
      enum: ["add", "exclude", "intersect", "subtract"],
      type: "string",
    },
    "DataType.ContentDistribution": {
      enum: ["space-around", "space-between", "space-evenly", "stretch"],
      type: "string",
    },
    "DataType.ContentList": {
      anyOf: [
        {
          $ref: "#/definitions/DataType.Quote",
        },
        {
          const: "contents",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "DataType.ContentPosition": {
      enum: ["center", "end", "flex-end", "flex-start", "start"],
      type: "string",
    },
    "DataType.CubicBezierTimingFunction": {
      anyOf: [
        {
          type: "string",
        },
        {
          enum: ["ease", "ease-in", "ease-in-out", "ease-out"],
          type: "string",
        },
      ],
    },
    "DataType.Dasharray<(string|number)>": {
      type: ["string", "number"],
    },
    "DataType.DeprecatedSystemColor": {
      enum: [
        "ActiveBorder",
        "ActiveCaption",
        "AppWorkspace",
        "Background",
        "ButtonFace",
        "ButtonHighlight",
        "ButtonShadow",
        "ButtonText",
        "CaptionText",
        "GrayText",
        "Highlight",
        "HighlightText",
        "InactiveBorder",
        "InactiveCaption",
        "InactiveCaptionText",
        "InfoBackground",
        "InfoText",
        "Menu",
        "MenuText",
        "Scrollbar",
        "ThreeDDarkShadow",
        "ThreeDFace",
        "ThreeDHighlight",
        "ThreeDLightShadow",
        "ThreeDShadow",
        "Window",
        "WindowFrame",
        "WindowText",
      ],
      type: "string",
    },
    "DataType.DisplayInside": {
      enum: [
        "-ms-flexbox",
        "-ms-grid",
        "-webkit-flex",
        "flex",
        "flow",
        "flow-root",
        "grid",
        "ruby",
        "table",
      ],
      type: "string",
    },
    "DataType.DisplayInternal": {
      enum: [
        "ruby-base",
        "ruby-base-container",
        "ruby-text",
        "ruby-text-container",
        "table-caption",
        "table-cell",
        "table-column",
        "table-column-group",
        "table-footer-group",
        "table-header-group",
        "table-row",
        "table-row-group",
      ],
      type: "string",
    },
    "DataType.DisplayLegacy": {
      enum: [
        "-ms-inline-flexbox",
        "-ms-inline-grid",
        "-webkit-inline-flex",
        "inline-block",
        "inline-flex",
        "inline-grid",
        "inline-list-item",
        "inline-table",
      ],
      type: "string",
    },
    "DataType.DisplayOutside": {
      enum: ["block", "inline", "run-in"],
      type: "string",
    },
    "DataType.EasingFunction": {
      anyOf: [
        {
          $ref: "#/definitions/DataType.CubicBezierTimingFunction",
        },
        {
          $ref: "#/definitions/DataType.StepTimingFunction",
        },
        {
          const: "linear",
          type: "string",
        },
      ],
    },
    "DataType.EastAsianVariantValues": {
      enum: ["jis04", "jis78", "jis83", "jis90", "simplified", "traditional"],
      type: "string",
    },
    "DataType.FinalBgLayer<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/DataType.Color",
        },
        {
          $ref: "#/definitions/DataType.BgPosition%3C(string%7Cnumber)%3E",
        },
        {
          $ref: "#/definitions/DataType.RepeatStyle",
        },
        {
          $ref: "#/definitions/DataType.Attachment",
        },
        {
          $ref: "#/definitions/DataType.Box",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "DataType.FontStretchAbsolute": {
      anyOf: [
        {
          type: "string",
        },
        {
          enum: [
            "condensed",
            "expanded",
            "extra-condensed",
            "extra-expanded",
            "normal",
            "semi-condensed",
            "semi-expanded",
            "ultra-condensed",
            "ultra-expanded",
          ],
          type: "string",
        },
      ],
    },
    "DataType.FontWeightAbsolute": {
      anyOf: [
        {
          const: "bold",
          type: "string",
        },
        {
          const: "normal",
          type: "string",
        },
        {
          type: "number",
        },
        {
          type: "string",
        },
      ],
    },
    "DataType.GenericFamily": {
      enum: ["cursive", "fantasy", "monospace", "sans-serif", "serif"],
      type: "string",
    },
    "DataType.GeometryBox": {
      anyOf: [
        {
          $ref: "#/definitions/DataType.Box",
        },
        {
          const: "fill-box",
          type: "string",
        },
        {
          const: "margin-box",
          type: "string",
        },
        {
          const: "stroke-box",
          type: "string",
        },
        {
          const: "view-box",
          type: "string",
        },
      ],
    },
    "DataType.GridLine": {
      anyOf: [
        {
          const: "auto",
          type: "string",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "DataType.LineStyle": {
      enum: [
        "dashed",
        "dotted",
        "double",
        "groove",
        "hidden",
        "inset",
        "none",
        "outset",
        "ridge",
        "solid",
      ],
      type: "string",
    },
    "DataType.LineWidth<(string|number)>": {
      anyOf: [
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "medium",
          type: "string",
        },
        {
          const: "thick",
          type: "string",
        },
        {
          const: "thin",
          type: "string",
        },
      ],
    },
    "DataType.MaskLayer<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/DataType.Position%3C(string%7Cnumber)%3E",
        },
        {
          $ref: "#/definitions/DataType.RepeatStyle",
        },
        {
          $ref: "#/definitions/DataType.GeometryBox",
        },
        {
          $ref: "#/definitions/DataType.CompositingOperator",
        },
        {
          $ref: "#/definitions/DataType.MaskingMode",
        },
        {
          const: "no-clip",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "DataType.MaskingMode": {
      enum: ["alpha", "luminance", "match-source"],
      type: "string",
    },
    "DataType.NamedColor": {
      enum: [
        "aliceblue",
        "antiquewhite",
        "aqua",
        "aquamarine",
        "azure",
        "beige",
        "bisque",
        "black",
        "blanchedalmond",
        "blue",
        "blueviolet",
        "brown",
        "burlywood",
        "cadetblue",
        "chartreuse",
        "chocolate",
        "coral",
        "cornflowerblue",
        "cornsilk",
        "crimson",
        "cyan",
        "darkblue",
        "darkcyan",
        "darkgoldenrod",
        "darkgray",
        "darkgreen",
        "darkgrey",
        "darkkhaki",
        "darkmagenta",
        "darkolivegreen",
        "darkorange",
        "darkorchid",
        "darkred",
        "darksalmon",
        "darkseagreen",
        "darkslateblue",
        "darkslategray",
        "darkslategrey",
        "darkturquoise",
        "darkviolet",
        "deeppink",
        "deepskyblue",
        "dimgray",
        "dimgrey",
        "dodgerblue",
        "firebrick",
        "floralwhite",
        "forestgreen",
        "fuchsia",
        "gainsboro",
        "ghostwhite",
        "gold",
        "goldenrod",
        "gray",
        "green",
        "greenyellow",
        "grey",
        "honeydew",
        "hotpink",
        "indianred",
        "indigo",
        "ivory",
        "khaki",
        "lavender",
        "lavenderblush",
        "lawngreen",
        "lemonchiffon",
        "lightblue",
        "lightcoral",
        "lightcyan",
        "lightgoldenrodyellow",
        "lightgray",
        "lightgreen",
        "lightgrey",
        "lightpink",
        "lightsalmon",
        "lightseagreen",
        "lightskyblue",
        "lightslategray",
        "lightslategrey",
        "lightsteelblue",
        "lightyellow",
        "lime",
        "limegreen",
        "linen",
        "magenta",
        "maroon",
        "mediumaquamarine",
        "mediumblue",
        "mediumorchid",
        "mediumpurple",
        "mediumseagreen",
        "mediumslateblue",
        "mediumspringgreen",
        "mediumturquoise",
        "mediumvioletred",
        "midnightblue",
        "mintcream",
        "mistyrose",
        "moccasin",
        "navajowhite",
        "navy",
        "oldlace",
        "olive",
        "olivedrab",
        "orange",
        "orangered",
        "orchid",
        "palegoldenrod",
        "palegreen",
        "paleturquoise",
        "palevioletred",
        "papayawhip",
        "peachpuff",
        "peru",
        "pink",
        "plum",
        "powderblue",
        "purple",
        "rebeccapurple",
        "red",
        "rosybrown",
        "royalblue",
        "saddlebrown",
        "salmon",
        "sandybrown",
        "seagreen",
        "seashell",
        "sienna",
        "silver",
        "skyblue",
        "slateblue",
        "slategray",
        "slategrey",
        "snow",
        "springgreen",
        "steelblue",
        "tan",
        "teal",
        "thistle",
        "tomato",
        "transparent",
        "turquoise",
        "violet",
        "wheat",
        "white",
        "whitesmoke",
        "yellow",
        "yellowgreen",
      ],
      type: "string",
    },
    "DataType.Paint": {
      anyOf: [
        {
          $ref: "#/definitions/DataType.Color",
        },
        {
          const: "child",
          type: "string",
        },
        {
          const: "context-fill",
          type: "string",
        },
        {
          const: "context-stroke",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "DataType.Position<(string|number)>": {
      anyOf: [
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "bottom",
          type: "string",
        },
        {
          const: "center",
          type: "string",
        },
        {
          const: "left",
          type: "string",
        },
        {
          const: "right",
          type: "string",
        },
        {
          const: "top",
          type: "string",
        },
      ],
    },
    "DataType.Quote": {
      enum: ["close-quote", "no-close-quote", "no-open-quote", "open-quote"],
      type: "string",
    },
    "DataType.RepeatStyle": {
      anyOf: [
        {
          type: "string",
        },
        {
          enum: [
            "no-repeat",
            "repeat",
            "repeat-x",
            "repeat-y",
            "round",
            "space",
          ],
          type: "string",
        },
      ],
    },
    "DataType.SelfPosition": {
      enum: [
        "center",
        "end",
        "flex-end",
        "flex-start",
        "self-end",
        "self-start",
        "start",
      ],
      type: "string",
    },
    "DataType.SingleAnimation<string>": {
      anyOf: [
        {
          $ref: "#/definitions/DataType.EasingFunction",
        },
        {
          $ref: "#/definitions/DataType.SingleAnimationDirection",
        },
        {
          $ref: "#/definitions/DataType.SingleAnimationFillMode",
        },
        {
          $ref: "#/definitions/DataType.SingleAnimationTimeline",
        },
        {
          type: "string",
        },
        {
          const: "infinite",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
        {
          const: "paused",
          type: "string",
        },
        {
          const: "running",
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "DataType.SingleAnimationComposition": {
      enum: ["accumulate", "add", "replace"],
      type: "string",
    },
    "DataType.SingleAnimationDirection": {
      enum: ["alternate", "alternate-reverse", "normal", "reverse"],
      type: "string",
    },
    "DataType.SingleAnimationFillMode": {
      enum: ["backwards", "both", "forwards", "none"],
      type: "string",
    },
    "DataType.SingleAnimationTimeline": {
      anyOf: [
        {
          type: "string",
        },
        {
          enum: ["auto", "none"],
          type: "string",
        },
      ],
    },
    "DataType.SingleTransition<string>": {
      anyOf: [
        {
          $ref: "#/definitions/DataType.EasingFunction",
        },
        {
          type: "string",
        },
        {
          const: "all",
          type: "string",
        },
        {
          const: "allow-discrete",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
        {
          const: "normal",
          type: "string",
        },
      ],
    },
    "DataType.StepTimingFunction": {
      anyOf: [
        {
          type: "string",
        },
        {
          enum: ["step-end", "step-start"],
          type: "string",
        },
      ],
    },
    "DataType.TimelineRangeName": {
      enum: [
        "contain",
        "cover",
        "entry",
        "entry-crossing",
        "exit",
        "exit-crossing",
      ],
      type: "string",
    },
    "DataType.TrackBreadth<(string|number)>": {
      anyOf: [
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "max-content",
          type: "string",
        },
        {
          const: "min-content",
          type: "string",
        },
      ],
    },
    "DataType.VisualBox": {
      enum: ["border-box", "content-box", "padding-box"],
      type: "string",
    },
    ExceedFormatter: {
      $comment: "(value: string, config: {\n    max: number;\n}) => string",
      properties: {
        namedArgs: {
          additionalProperties: false,
          properties: {
            config: {
              additionalProperties: false,
              properties: {
                max: {
                  type: "number",
                },
              },
              required: ["max"],
              type: "object",
            },
            value: {
              type: "string",
            },
          },
          required: ["value", "config"],
          type: "object",
        },
      },
      type: "object",
    },
    FormInput: {
      additionalProperties: false,
      properties: {
        inputMeta: {
          $ref: "#/definitions/InputProps",
        },
        inputType: {
          const: "text",
          type: "string",
        },
        label: {
          type: "string",
        },
        name: {
          type: "string",
        },
        nodeType: {
          const: "input",
          type: "string",
        },
        required: {
          type: "boolean",
        },
      },
      required: ["inputType", "label", "name", "nodeType", "required"],
      type: "object",
    },
    FormSection: {
      additionalProperties: false,
      properties: {
        children: {
          items: {
            anyOf: [
              {
                $ref: "#/definitions/FormSection",
              },
              {
                $ref: "#/definitions/FormInput",
              },
            ],
          },
          type: "array",
        },
        nodeType: {
          const: "section",
          type: "string",
        },
        title: {
          type: "string",
        },
      },
      required: ["nodeType", "title", "children"],
      type: "object",
    },
    FormStructure: {
      additionalProperties: false,
      properties: {
        children: {
          items: {
            anyOf: [
              {
                $ref: "#/definitions/FormSection",
              },
              {
                $ref: "#/definitions/FormInput",
              },
            ],
          },
          type: "array",
        },
        title: {
          type: "string",
        },
      },
      required: ["title", "children"],
      type: "object",
    },
    Globals: {
      enum: [
        "-moz-initial",
        "inherit",
        "initial",
        "revert",
        "revert-layer",
        "unset",
      ],
      type: "string",
    },
    InputProps: {
      additionalProperties: {
        anyOf: [
          {
            not: {},
          },
          {
            type: "string",
          },
        ],
      },
      properties: {
        about: {
          type: "string",
        },
        accept: {
          type: "string",
        },
        accessKey: {
          type: "string",
        },
        addonAfter: {
          anyOf: [
            {
              $ref: "#/definitions/React.ReactElement",
            },
            {
              type: "string",
            },
            {
              type: "number",
            },
            {
              additionalProperties: false,
              type: "object",
            },
            {
              $ref: "#/definitions/React.ReactPortal",
            },
            {
              type: "boolean",
            },
            {
              type: "null",
            },
          ],
        },
        addonBefore: {
          anyOf: [
            {
              $ref: "#/definitions/React.ReactElement",
            },
            {
              type: "string",
            },
            {
              type: "number",
            },
            {
              additionalProperties: false,
              type: "object",
            },
            {
              $ref: "#/definitions/React.ReactPortal",
            },
            {
              type: "boolean",
            },
            {
              type: "null",
            },
          ],
        },
        allowClear: {
          anyOf: [
            {
              type: "boolean",
            },
            {
              additionalProperties: false,
              properties: {
                clearIcon: {
                  anyOf: [
                    {
                      $ref: "#/definitions/React.ReactElement",
                    },
                    {
                      type: "string",
                    },
                    {
                      type: "number",
                    },
                    {
                      additionalProperties: false,
                      type: "object",
                    },
                    {
                      $ref: "#/definitions/React.ReactPortal",
                    },
                    {
                      type: "boolean",
                    },
                    {
                      type: "null",
                    },
                  ],
                },
              },
              type: "object",
            },
          ],
        },
        alt: {
          type: "string",
        },
        "aria-activedescendant": {
          description:
            "Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.",
          type: "string",
        },
        "aria-atomic": {
          anyOf: [
            {
              type: "boolean",
            },
            {
              const: "true",
              type: "string",
            },
            {
              const: "false",
              type: "string",
            },
          ],
          description:
            "Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.",
        },
        "aria-autocomplete": {
          description:
            "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be presented if they are made.",
          enum: ["none", "inline", "list", "both"],
          type: "string",
        },
        "aria-braillelabel": {
          description:
            "Defines a string value that labels the current element, which is intended to be converted into Braille.",
          type: "string",
        },
        "aria-brailleroledescription": {
          description:
            "Defines a human-readable, author-localized abbreviated description for the role of an element, which is intended to be converted into Braille.",
          type: "string",
        },
        "aria-busy": {
          anyOf: [
            {
              type: "boolean",
            },
            {
              const: "true",
              type: "string",
            },
            {
              const: "false",
              type: "string",
            },
          ],
          description:
            "Used to represent DOM API's where users can either pass true or false as a boolean or as its equivalent strings.",
        },
        "aria-checked": {
          anyOf: [
            {
              type: "boolean",
            },
            {
              const: "false",
              type: "string",
            },
            {
              const: "mixed",
              type: "string",
            },
            {
              const: "true",
              type: "string",
            },
          ],
          description:
            'Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.',
        },
        "aria-colcount": {
          description:
            "Defines the total number of columns in a table, grid, or treegrid.",
          type: "number",
        },
        "aria-colindex": {
          description:
            "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.",
          type: "number",
        },
        "aria-colindextext": {
          description:
            "Defines a human readable text alternative of aria-colindex.",
          type: "string",
        },
        "aria-colspan": {
          description:
            "Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.",
          type: "number",
        },
        "aria-controls": {
          description:
            "Identifies the element (or elements) whose contents or presence are controlled by the current element.",
          type: "string",
        },
        "aria-current": {
          anyOf: [
            {
              type: "boolean",
            },
            {
              const: "false",
              type: "string",
            },
            {
              const: "true",
              type: "string",
            },
            {
              const: "page",
              type: "string",
            },
            {
              const: "step",
              type: "string",
            },
            {
              const: "location",
              type: "string",
            },
            {
              const: "date",
              type: "string",
            },
            {
              const: "time",
              type: "string",
            },
          ],
          description:
            "Indicates the element that represents the current item within a container or set of related elements.",
        },
        "aria-describedby": {
          description:
            "Identifies the element (or elements) that describes the object.",
          type: "string",
        },
        "aria-description": {
          description:
            "Defines a string value that describes or annotates the current element.",
          type: "string",
        },
        "aria-details": {
          description:
            "Identifies the element that provides a detailed, extended description for the object.",
          type: "string",
        },
        "aria-disabled": {
          anyOf: [
            {
              type: "boolean",
            },
            {
              const: "true",
              type: "string",
            },
            {
              const: "false",
              type: "string",
            },
          ],
          description:
            "Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.",
        },
        "aria-dropeffect": {
          deprecated: "in ARIA 1.1",
          description:
            "Indicates what functions can be performed when a dragged object is released on the drop target.",
          enum: ["none", "copy", "execute", "link", "move", "popup"],
          type: "string",
        },
        "aria-errormessage": {
          description:
            "Identifies the element that provides an error message for the object.",
          type: "string",
        },
        "aria-expanded": {
          anyOf: [
            {
              type: "boolean",
            },
            {
              const: "true",
              type: "string",
            },
            {
              const: "false",
              type: "string",
            },
          ],
          description:
            "Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.",
        },
        "aria-flowto": {
          description:
            "Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion, allows assistive technology to override the general default of reading in document source order.",
          type: "string",
        },
        "aria-grabbed": {
          anyOf: [
            {
              type: "boolean",
            },
            {
              const: "true",
              type: "string",
            },
            {
              const: "false",
              type: "string",
            },
          ],
          deprecated: "in ARIA 1.1",
          description:
            'Indicates an element\'s "grabbed" state in a drag-and-drop operation.',
        },
        "aria-haspopup": {
          anyOf: [
            {
              type: "boolean",
            },
            {
              const: "false",
              type: "string",
            },
            {
              const: "true",
              type: "string",
            },
            {
              const: "menu",
              type: "string",
            },
            {
              const: "listbox",
              type: "string",
            },
            {
              const: "tree",
              type: "string",
            },
            {
              const: "grid",
              type: "string",
            },
            {
              const: "dialog",
              type: "string",
            },
          ],
          description:
            "Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.",
        },
        "aria-hidden": {
          anyOf: [
            {
              type: "boolean",
            },
            {
              const: "true",
              type: "string",
            },
            {
              const: "false",
              type: "string",
            },
          ],
          description:
            "Indicates whether the element is exposed to an accessibility API.",
        },
        "aria-invalid": {
          anyOf: [
            {
              type: "boolean",
            },
            {
              const: "false",
              type: "string",
            },
            {
              const: "true",
              type: "string",
            },
            {
              const: "grammar",
              type: "string",
            },
            {
              const: "spelling",
              type: "string",
            },
          ],
          description:
            "Indicates the entered value does not conform to the format expected by the application.",
        },
        "aria-keyshortcuts": {
          description:
            "Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.",
          type: "string",
        },
        "aria-label": {
          description:
            "Defines a string value that labels the current element.",
          type: "string",
        },
        "aria-labelledby": {
          description:
            "Identifies the element (or elements) that labels the current element.",
          type: "string",
        },
        "aria-level": {
          description:
            "Defines the hierarchical level of an element within a structure.",
          type: "number",
        },
        "aria-live": {
          description:
            "Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.",
          enum: ["off", "assertive", "polite"],
          type: "string",
        },
        "aria-modal": {
          anyOf: [
            {
              type: "boolean",
            },
            {
              const: "true",
              type: "string",
            },
            {
              const: "false",
              type: "string",
            },
          ],
          description: "Indicates whether an element is modal when displayed.",
        },
        "aria-multiline": {
          anyOf: [
            {
              type: "boolean",
            },
            {
              const: "true",
              type: "string",
            },
            {
              const: "false",
              type: "string",
            },
          ],
          description:
            "Indicates whether a text box accepts multiple lines of input or only a single line.",
        },
        "aria-multiselectable": {
          anyOf: [
            {
              type: "boolean",
            },
            {
              const: "true",
              type: "string",
            },
            {
              const: "false",
              type: "string",
            },
          ],
          description:
            "Indicates that the user may select more than one item from the current selectable descendants.",
        },
        "aria-orientation": {
          description:
            "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.",
          enum: ["horizontal", "vertical"],
          type: "string",
        },
        "aria-owns": {
          description:
            "Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship between DOM elements where the DOM hierarchy cannot be used to represent the relationship.",
          type: "string",
        },
        "aria-placeholder": {
          description:
            "Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value. A hint could be a sample value or a brief description of the expected format.",
          type: "string",
        },
        "aria-posinset": {
          description:
            "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.",
          type: "number",
        },
        "aria-pressed": {
          anyOf: [
            {
              type: "boolean",
            },
            {
              const: "false",
              type: "string",
            },
            {
              const: "mixed",
              type: "string",
            },
            {
              const: "true",
              type: "string",
            },
          ],
          description:
            'Indicates the current "pressed" state of toggle buttons.',
        },
        "aria-readonly": {
          anyOf: [
            {
              type: "boolean",
            },
            {
              const: "true",
              type: "string",
            },
            {
              const: "false",
              type: "string",
            },
          ],
          description:
            "Indicates that the element is not editable, but is otherwise operable.",
        },
        "aria-relevant": {
          description:
            "Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.",
          enum: [
            "additions",
            "additions removals",
            "additions text",
            "all",
            "removals",
            "removals additions",
            "removals text",
            "text",
            "text additions",
            "text removals",
          ],
          type: "string",
        },
        "aria-required": {
          anyOf: [
            {
              type: "boolean",
            },
            {
              const: "true",
              type: "string",
            },
            {
              const: "false",
              type: "string",
            },
          ],
          description:
            "Indicates that user input is required on the element before a form may be submitted.",
        },
        "aria-roledescription": {
          description:
            "Defines a human-readable, author-localized description for the role of an element.",
          type: "string",
        },
        "aria-rowcount": {
          description:
            "Defines the total number of rows in a table, grid, or treegrid.",
          type: "number",
        },
        "aria-rowindex": {
          description:
            "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.",
          type: "number",
        },
        "aria-rowindextext": {
          description:
            "Defines a human readable text alternative of aria-rowindex.",
          type: "string",
        },
        "aria-rowspan": {
          description:
            "Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.",
          type: "number",
        },
        "aria-selected": {
          anyOf: [
            {
              type: "boolean",
            },
            {
              const: "true",
              type: "string",
            },
            {
              const: "false",
              type: "string",
            },
          ],
          description:
            'Indicates the current "selected" state of various widgets.',
        },
        "aria-setsize": {
          description:
            "Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.",
          type: "number",
        },
        "aria-sort": {
          description:
            "Indicates if items in a table or grid are sorted in ascending or descending order.",
          enum: ["none", "ascending", "descending", "other"],
          type: "string",
        },
        "aria-valuemax": {
          description: "Defines the maximum allowed value for a range widget.",
          type: "number",
        },
        "aria-valuemin": {
          description: "Defines the minimum allowed value for a range widget.",
          type: "number",
        },
        "aria-valuenow": {
          description: "Defines the current value for a range widget.",
          type: "number",
        },
        "aria-valuetext": {
          description:
            "Defines the human readable text alternative of aria-valuenow for a range widget.",
          type: "string",
        },
        autoCapitalize: {
          anyOf: [
            {
              type: "string",
            },
            {
              enum: ["off", "none", "on", "sentences", "words", "characters"],
              type: "string",
            },
          ],
        },
        autoComplete: {
          type: "string",
        },
        autoCorrect: {
          type: "string",
        },
        autoFocus: {
          type: "boolean",
        },
        autoSave: {
          type: "string",
        },
        bordered: {
          deprecated: 'Use `variant="borderless"` instead.',
          type: "boolean",
        },
        capture: {
          anyOf: [
            {
              type: "boolean",
            },
            {
              const: "user",
              type: "string",
            },
            {
              const: "environment",
              type: "string",
            },
          ],
        },
        checked: {
          type: "boolean",
        },
        children: {
          anyOf: [
            {
              $ref: "#/definitions/React.ReactElement",
            },
            {
              type: "string",
            },
            {
              type: "number",
            },
            {
              additionalProperties: false,
              type: "object",
            },
            {
              $ref: "#/definitions/React.ReactPortal",
            },
            {
              type: "boolean",
            },
            {
              type: "null",
            },
          ],
        },
        className: {
          type: "string",
        },
        classNames: {
          additionalProperties: false,
          properties: {
            affixWrapper: {
              type: "string",
            },
            count: {
              type: "string",
            },
            groupWrapper: {
              type: "string",
            },
            input: {
              type: "string",
            },
            prefix: {
              type: "string",
            },
            suffix: {
              type: "string",
            },
            variant: {
              type: "string",
            },
            wrapper: {
              type: "string",
            },
          },
          type: "object",
        },
        color: {
          type: "string",
        },
        content: {
          type: "string",
        },
        contentEditable: {
          anyOf: [
            {
              anyOf: [
                {
                  type: "boolean",
                },
                {
                  const: "true",
                  type: "string",
                },
                {
                  const: "false",
                  type: "string",
                },
              ],
              description:
                "Used to represent DOM API's where users can either pass true or false as a boolean or as its equivalent strings.",
            },
            {
              const: "inherit",
              type: "string",
            },
            {
              const: "plaintext-only",
              type: "string",
            },
          ],
        },
        contextMenu: {
          type: "string",
        },
        count: {
          $ref: "#/definitions/CountConfig",
        },
        dangerouslySetInnerHTML: {
          additionalProperties: false,
          properties: {
            __html: {
              anyOf: [
                {
                  type: "string",
                },
                {
                  additionalProperties: false,
                  type: "object",
                },
              ],
            },
          },
          required: ["__html"],
          type: "object",
        },
        datatype: {
          type: "string",
        },
        defaultChecked: {
          type: "boolean",
        },
        defaultValue: {
          anyOf: [
            {
              type: "string",
            },
            {
              type: "number",
            },
            {
              items: {
                type: "string",
              },
              type: "array",
            },
          ],
        },
        dir: {
          type: "string",
        },
        disabled: {
          type: "boolean",
        },
        draggable: {
          anyOf: [
            {
              type: "boolean",
            },
            {
              const: "true",
              type: "string",
            },
            {
              const: "false",
              type: "string",
            },
          ],
          description:
            "Used to represent DOM API's where users can either pass true or false as a boolean or as its equivalent strings.",
        },
        enterKeyHint: {
          enum: ["enter", "done", "go", "next", "previous", "search", "send"],
          type: "string",
        },
        form: {
          type: "string",
        },
        formAction: {
          anyOf: [
            {
              type: "string",
            },
            {
              $comment: "(formData: FormData) => void | Promise<void>",
              properties: {
                namedArgs: {
                  additionalProperties: false,
                  properties: {
                    formData: {
                      additionalProperties: false,
                      type: "object",
                    },
                  },
                  required: ["formData"],
                  type: "object",
                },
              },
              type: "object",
            },
          ],
        },
        formEncType: {
          type: "string",
        },
        formMethod: {
          type: "string",
        },
        formNoValidate: {
          type: "boolean",
        },
        formTarget: {
          type: "string",
        },
        height: {
          type: ["number", "string"],
        },
        hidden: {
          type: "boolean",
        },
        htmlSize: {
          type: "number",
        },
        id: {
          type: "string",
        },
        inert: {
          type: "boolean",
        },
        inlist: {},
        inputMode: {
          description:
            "Hints at the type of data that might be entered by the user while editing the element or its contents",
          enum: [
            "none",
            "text",
            "tel",
            "url",
            "email",
            "numeric",
            "decimal",
            "search",
          ],
          type: "string",
        },
        is: {
          description:
            "Specify that a standard HTML element should behave like a defined custom built-in element",
          type: "string",
        },
        itemID: {
          type: "string",
        },
        itemProp: {
          type: "string",
        },
        itemRef: {
          type: "string",
        },
        itemScope: {
          type: "boolean",
        },
        itemType: {
          type: "string",
        },
        lang: {
          type: "string",
        },
        list: {
          type: "string",
        },
        max: {
          type: ["number", "string"],
        },
        maxLength: {
          type: "number",
        },
        min: {
          type: ["number", "string"],
        },
        minLength: {
          type: "number",
        },
        multiple: {
          type: "boolean",
        },
        name: {
          type: "string",
        },
        nonce: {
          type: "string",
        },
        onAbort: {
          $ref: "#/definitions/React.ReactEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onAbortCapture: {
          $ref: "#/definitions/React.ReactEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onAnimationEnd: {
          $ref: "#/definitions/React.AnimationEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onAnimationEndCapture: {
          $ref: "#/definitions/React.AnimationEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onAnimationIteration: {
          $ref: "#/definitions/React.AnimationEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onAnimationIterationCapture: {
          $ref: "#/definitions/React.AnimationEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onAnimationStart: {
          $ref: "#/definitions/React.AnimationEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onAnimationStartCapture: {
          $ref: "#/definitions/React.AnimationEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onAuxClick: {
          $ref: "#/definitions/React.MouseEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onAuxClickCapture: {
          $ref: "#/definitions/React.MouseEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onBeforeInput: {
          $ref: "#/definitions/React.FormEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onBeforeInputCapture: {
          $ref: "#/definitions/React.FormEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onBeforeToggle: {
          $ref: "#/definitions/React.ToggleEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onBlur: {
          $ref: "#/definitions/React.FocusEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onBlurCapture: {
          $ref: "#/definitions/React.FocusEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onCanPlay: {
          $ref: "#/definitions/React.ReactEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onCanPlayCapture: {
          $ref: "#/definitions/React.ReactEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onCanPlayThrough: {
          $ref: "#/definitions/React.ReactEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onCanPlayThroughCapture: {
          $ref: "#/definitions/React.ReactEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onChange: {
          $ref: "#/definitions/React.ChangeEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onChangeCapture: {
          $ref: "#/definitions/React.FormEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onClear: {
          $comment: "() => void",
        },
        onClick: {
          $ref: "#/definitions/React.MouseEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onClickCapture: {
          $ref: "#/definitions/React.MouseEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onCompositionEnd: {
          $ref: "#/definitions/React.CompositionEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onCompositionEndCapture: {
          $ref: "#/definitions/React.CompositionEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onCompositionStart: {
          $ref: "#/definitions/React.CompositionEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onCompositionStartCapture: {
          $ref: "#/definitions/React.CompositionEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onCompositionUpdate: {
          $ref: "#/definitions/React.CompositionEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onCompositionUpdateCapture: {
          $ref: "#/definitions/React.CompositionEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onContextMenu: {
          $ref: "#/definitions/React.MouseEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onContextMenuCapture: {
          $ref: "#/definitions/React.MouseEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onCopy: {
          $ref: "#/definitions/React.ClipboardEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onCopyCapture: {
          $ref: "#/definitions/React.ClipboardEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onCut: {
          $ref: "#/definitions/React.ClipboardEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onCutCapture: {
          $ref: "#/definitions/React.ClipboardEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onDoubleClick: {
          $ref: "#/definitions/React.MouseEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onDoubleClickCapture: {
          $ref: "#/definitions/React.MouseEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onDrag: {
          $ref: "#/definitions/React.DragEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onDragCapture: {
          $ref: "#/definitions/React.DragEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onDragEnd: {
          $ref: "#/definitions/React.DragEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onDragEndCapture: {
          $ref: "#/definitions/React.DragEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onDragEnter: {
          $ref: "#/definitions/React.DragEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onDragEnterCapture: {
          $ref: "#/definitions/React.DragEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onDragExit: {
          $ref: "#/definitions/React.DragEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onDragExitCapture: {
          $ref: "#/definitions/React.DragEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onDragLeave: {
          $ref: "#/definitions/React.DragEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onDragLeaveCapture: {
          $ref: "#/definitions/React.DragEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onDragOver: {
          $ref: "#/definitions/React.DragEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onDragOverCapture: {
          $ref: "#/definitions/React.DragEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onDragStart: {
          $ref: "#/definitions/React.DragEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onDragStartCapture: {
          $ref: "#/definitions/React.DragEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onDrop: {
          $ref: "#/definitions/React.DragEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onDropCapture: {
          $ref: "#/definitions/React.DragEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onDurationChange: {
          $ref: "#/definitions/React.ReactEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onDurationChangeCapture: {
          $ref: "#/definitions/React.ReactEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onEmptied: {
          $ref: "#/definitions/React.ReactEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onEmptiedCapture: {
          $ref: "#/definitions/React.ReactEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onEncrypted: {
          $ref: "#/definitions/React.ReactEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onEncryptedCapture: {
          $ref: "#/definitions/React.ReactEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onEnded: {
          $ref: "#/definitions/React.ReactEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onEndedCapture: {
          $ref: "#/definitions/React.ReactEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onError: {
          $ref: "#/definitions/React.ReactEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onErrorCapture: {
          $ref: "#/definitions/React.ReactEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onFocus: {
          $ref: "#/definitions/React.FocusEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onFocusCapture: {
          $ref: "#/definitions/React.FocusEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onGotPointerCapture: {
          $ref: "#/definitions/React.PointerEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onGotPointerCaptureCapture: {
          $ref: "#/definitions/React.PointerEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onInput: {
          $ref: "#/definitions/React.FormEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onInputCapture: {
          $ref: "#/definitions/React.FormEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onInvalid: {
          $ref: "#/definitions/React.FormEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onInvalidCapture: {
          $ref: "#/definitions/React.FormEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onKeyDown: {
          $ref: "#/definitions/React.KeyboardEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onKeyDownCapture: {
          $ref: "#/definitions/React.KeyboardEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onKeyPress: {
          $ref: "#/definitions/React.KeyboardEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
          deprecated: "Use `onKeyUp` or `onKeyDown` instead",
        },
        onKeyPressCapture: {
          $ref: "#/definitions/React.KeyboardEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
          deprecated: "Use `onKeyUpCapture` or `onKeyDownCapture` instead",
        },
        onKeyUp: {
          $ref: "#/definitions/React.KeyboardEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onKeyUpCapture: {
          $ref: "#/definitions/React.KeyboardEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onLoad: {
          $ref: "#/definitions/React.ReactEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onLoadCapture: {
          $ref: "#/definitions/React.ReactEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onLoadStart: {
          $ref: "#/definitions/React.ReactEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onLoadStartCapture: {
          $ref: "#/definitions/React.ReactEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onLoadedData: {
          $ref: "#/definitions/React.ReactEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onLoadedDataCapture: {
          $ref: "#/definitions/React.ReactEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onLoadedMetadata: {
          $ref: "#/definitions/React.ReactEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onLoadedMetadataCapture: {
          $ref: "#/definitions/React.ReactEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onLostPointerCapture: {
          $ref: "#/definitions/React.PointerEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onLostPointerCaptureCapture: {
          $ref: "#/definitions/React.PointerEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onMouseDown: {
          $ref: "#/definitions/React.MouseEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onMouseDownCapture: {
          $ref: "#/definitions/React.MouseEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onMouseEnter: {
          $ref: "#/definitions/React.MouseEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onMouseLeave: {
          $ref: "#/definitions/React.MouseEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onMouseMove: {
          $ref: "#/definitions/React.MouseEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onMouseMoveCapture: {
          $ref: "#/definitions/React.MouseEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onMouseOut: {
          $ref: "#/definitions/React.MouseEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onMouseOutCapture: {
          $ref: "#/definitions/React.MouseEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onMouseOver: {
          $ref: "#/definitions/React.MouseEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onMouseOverCapture: {
          $ref: "#/definitions/React.MouseEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onMouseUp: {
          $ref: "#/definitions/React.MouseEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onMouseUpCapture: {
          $ref: "#/definitions/React.MouseEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onPaste: {
          $ref: "#/definitions/React.ClipboardEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onPasteCapture: {
          $ref: "#/definitions/React.ClipboardEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onPause: {
          $ref: "#/definitions/React.ReactEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onPauseCapture: {
          $ref: "#/definitions/React.ReactEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onPlay: {
          $ref: "#/definitions/React.ReactEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onPlayCapture: {
          $ref: "#/definitions/React.ReactEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onPlaying: {
          $ref: "#/definitions/React.ReactEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onPlayingCapture: {
          $ref: "#/definitions/React.ReactEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onPointerCancel: {
          $ref: "#/definitions/React.PointerEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onPointerCancelCapture: {
          $ref: "#/definitions/React.PointerEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onPointerDown: {
          $ref: "#/definitions/React.PointerEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onPointerDownCapture: {
          $ref: "#/definitions/React.PointerEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onPointerEnter: {
          $ref: "#/definitions/React.PointerEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onPointerLeave: {
          $ref: "#/definitions/React.PointerEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onPointerMove: {
          $ref: "#/definitions/React.PointerEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onPointerMoveCapture: {
          $ref: "#/definitions/React.PointerEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onPointerOut: {
          $ref: "#/definitions/React.PointerEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onPointerOutCapture: {
          $ref: "#/definitions/React.PointerEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onPointerOver: {
          $ref: "#/definitions/React.PointerEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onPointerOverCapture: {
          $ref: "#/definitions/React.PointerEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onPointerUp: {
          $ref: "#/definitions/React.PointerEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onPointerUpCapture: {
          $ref: "#/definitions/React.PointerEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onPressEnter: {
          $ref: "#/definitions/React.KeyboardEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onProgress: {
          $ref: "#/definitions/React.ReactEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onProgressCapture: {
          $ref: "#/definitions/React.ReactEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onRateChange: {
          $ref: "#/definitions/React.ReactEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onRateChangeCapture: {
          $ref: "#/definitions/React.ReactEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onReset: {
          $ref: "#/definitions/React.FormEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onResetCapture: {
          $ref: "#/definitions/React.FormEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onResize: {
          $ref: "#/definitions/React.ReactEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onResizeCapture: {
          $ref: "#/definitions/React.ReactEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onScroll: {
          $ref: "#/definitions/React.UIEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onScrollCapture: {
          $ref: "#/definitions/React.UIEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onSeeked: {
          $ref: "#/definitions/React.ReactEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onSeekedCapture: {
          $ref: "#/definitions/React.ReactEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onSeeking: {
          $ref: "#/definitions/React.ReactEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onSeekingCapture: {
          $ref: "#/definitions/React.ReactEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onSelect: {
          $ref: "#/definitions/React.ReactEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onSelectCapture: {
          $ref: "#/definitions/React.ReactEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onStalled: {
          $ref: "#/definitions/React.ReactEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onStalledCapture: {
          $ref: "#/definitions/React.ReactEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onSubmit: {
          $ref: "#/definitions/React.FormEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onSubmitCapture: {
          $ref: "#/definitions/React.FormEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onSuspend: {
          $ref: "#/definitions/React.ReactEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onSuspendCapture: {
          $ref: "#/definitions/React.ReactEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onTimeUpdate: {
          $ref: "#/definitions/React.ReactEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onTimeUpdateCapture: {
          $ref: "#/definitions/React.ReactEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onToggle: {
          $ref: "#/definitions/React.ToggleEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onTouchCancel: {
          $ref: "#/definitions/React.TouchEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onTouchCancelCapture: {
          $ref: "#/definitions/React.TouchEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onTouchEnd: {
          $ref: "#/definitions/React.TouchEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onTouchEndCapture: {
          $ref: "#/definitions/React.TouchEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onTouchMove: {
          $ref: "#/definitions/React.TouchEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onTouchMoveCapture: {
          $ref: "#/definitions/React.TouchEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onTouchStart: {
          $ref: "#/definitions/React.TouchEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onTouchStartCapture: {
          $ref: "#/definitions/React.TouchEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onTransitionCancel: {
          $ref: "#/definitions/React.TransitionEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onTransitionCancelCapture: {
          $ref: "#/definitions/React.TransitionEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onTransitionEnd: {
          $ref: "#/definitions/React.TransitionEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onTransitionEndCapture: {
          $ref: "#/definitions/React.TransitionEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onTransitionRun: {
          $ref: "#/definitions/React.TransitionEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onTransitionRunCapture: {
          $ref: "#/definitions/React.TransitionEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onTransitionStart: {
          $ref: "#/definitions/React.TransitionEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onTransitionStartCapture: {
          $ref: "#/definitions/React.TransitionEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onVolumeChange: {
          $ref: "#/definitions/React.ReactEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onVolumeChangeCapture: {
          $ref: "#/definitions/React.ReactEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onWaiting: {
          $ref: "#/definitions/React.ReactEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onWaitingCapture: {
          $ref: "#/definitions/React.ReactEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onWheel: {
          $ref: "#/definitions/React.WheelEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        onWheelCapture: {
          $ref: "#/definitions/React.WheelEventHandler%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E",
        },
        pattern: {
          type: "string",
        },
        placeholder: {
          type: "string",
        },
        popover: {
          enum: ["", "auto", "manual"],
          type: "string",
        },
        popoverTarget: {
          type: "string",
        },
        popoverTargetAction: {
          enum: ["toggle", "show", "hide"],
          type: "string",
        },
        prefix: {
          anyOf: [
            {
              $ref: "#/definitions/React.ReactElement",
            },
            {
              type: "string",
            },
            {
              type: "number",
            },
            {
              additionalProperties: false,
              type: "object",
            },
            {
              $ref: "#/definitions/React.ReactPortal",
            },
            {
              type: "boolean",
            },
            {
              type: "null",
            },
          ],
        },
        prefixCls: {
          type: "string",
        },
        property: {
          type: "string",
        },
        radioGroup: {
          type: "string",
        },
        readOnly: {
          type: "boolean",
        },
        rel: {
          type: "string",
        },
        required: {
          type: "boolean",
        },
        resource: {
          type: "string",
        },
        results: {
          type: "number",
        },
        rev: {
          type: "string",
        },
        role: {
          $ref: "#/definitions/React.AriaRole",
        },
        rootClassName: {
          type: "string",
        },
        security: {
          type: "string",
        },
        showCount: {
          anyOf: [
            {
              type: "boolean",
            },
            {
              additionalProperties: false,
              properties: {
                formatter: {
                  $ref: "#/definitions/ShowCountFormatter",
                },
              },
              required: ["formatter"],
              type: "object",
            },
          ],
          description: "It's better to use `count.show` instead",
        },
        size: {
          enum: ["small", "middle", "large"],
          type: "string",
        },
        slot: {
          type: "string",
        },
        spellCheck: {
          anyOf: [
            {
              type: "boolean",
            },
            {
              const: "true",
              type: "string",
            },
            {
              const: "false",
              type: "string",
            },
          ],
          description:
            "Used to represent DOM API's where users can either pass true or false as a boolean or as its equivalent strings.",
        },
        src: {
          type: "string",
        },
        status: {
          $ref: "#/definitions/InputStatus",
        },
        step: {
          type: ["number", "string"],
        },
        style: {
          $ref: "#/definitions/React.CSSProperties",
        },
        styles: {
          additionalProperties: false,
          properties: {
            affixWrapper: {
              $ref: "#/definitions/React.CSSProperties",
            },
            count: {
              $ref: "#/definitions/React.CSSProperties",
            },
            input: {
              $ref: "#/definitions/React.CSSProperties",
            },
            prefix: {
              $ref: "#/definitions/React.CSSProperties",
            },
            suffix: {
              $ref: "#/definitions/React.CSSProperties",
            },
          },
          type: "object",
        },
        suffix: {
          anyOf: [
            {
              $ref: "#/definitions/React.ReactElement",
            },
            {
              type: "string",
            },
            {
              type: "number",
            },
            {
              additionalProperties: false,
              type: "object",
            },
            {
              $ref: "#/definitions/React.ReactPortal",
            },
            {
              type: "boolean",
            },
            {
              type: "null",
            },
          ],
        },
        suppressContentEditableWarning: {
          type: "boolean",
        },
        suppressHydrationWarning: {
          type: "boolean",
        },
        tabIndex: {
          type: "number",
        },
        title: {
          type: "string",
        },
        translate: {
          enum: ["yes", "no"],
          type: "string",
        },
        type: {
          $ref: "#/definitions/LiteralUnion%3C(%22button%22%7C%22checkbox%22%7C%22color%22%7C%22date%22%7C%22datetime-local%22%7C%22email%22%7C%22file%22%7C%22hidden%22%7C%22image%22%7C%22month%22%7C%22number%22%7C%22password%22%7C%22radio%22%7C%22range%22%7C%22reset%22%7C%22search%22%7C%22submit%22%7C%22tel%22%7C%22text%22%7C%22time%22%7C%22url%22%7C%22week%22)%2Cstring%3E",
        },
        typeof: {
          type: "string",
        },
        unselectable: {
          enum: ["on", "off"],
          type: "string",
        },
        value: {
          anyOf: [
            {
              type: "string",
            },
            {
              items: {
                type: "string",
              },
              type: "array",
            },
            {
              type: "number",
            },
          ],
        },
        variant: {
          $ref: "#/definitions/Variant",
          default: "outlined",
        },
        vocab: {
          type: "string",
        },
        width: {
          type: ["number", "string"],
        },
      },
      type: "object",
    },
    InputStatus: {
      enum: ["warning", "error", ""],
      type: "string",
    },
    'LiteralUnion<("button"|"checkbox"|"color"|"date"|"datetime-local"|"email"|"file"|"hidden"|"image"|"month"|"number"|"password"|"radio"|"range"|"reset"|"search"|"submit"|"tel"|"text"|"time"|"url"|"week"),string>':
      {
        anyOf: [
          {
            type: "string",
          },
          {
            enum: [
              "button",
              "checkbox",
              "color",
              "date",
              "datetime-local",
              "email",
              "file",
              "hidden",
              "image",
              "month",
              "number",
              "password",
              "radio",
              "range",
              "reset",
              "search",
              "submit",
              "tel",
              "text",
              "time",
              "url",
              "week",
            ],
            type: "string",
          },
        ],
        description: "https://github.com/Microsoft/TypeScript/issues/29729",
      },
    "Property.AccentColor": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Color",
        },
        {
          const: "auto",
          type: "string",
        },
      ],
    },
    "Property.AlignContent": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.ContentDistribution",
        },
        {
          $ref: "#/definitions/DataType.ContentPosition",
        },
        {
          const: "baseline",
          type: "string",
        },
        {
          const: "normal",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.AlignItems": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.SelfPosition",
        },
        {
          const: "baseline",
          type: "string",
        },
        {
          const: "normal",
          type: "string",
        },
        {
          const: "stretch",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.AlignSelf": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.SelfPosition",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "baseline",
          type: "string",
        },
        {
          const: "normal",
          type: "string",
        },
        {
          const: "stretch",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.AlignTracks": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.ContentDistribution",
        },
        {
          $ref: "#/definitions/DataType.ContentPosition",
        },
        {
          const: "baseline",
          type: "string",
        },
        {
          const: "normal",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.AlignmentBaseline": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "after-edge",
          type: "string",
        },
        {
          const: "alphabetic",
          type: "string",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "baseline",
          type: "string",
        },
        {
          const: "before-edge",
          type: "string",
        },
        {
          const: "central",
          type: "string",
        },
        {
          const: "hanging",
          type: "string",
        },
        {
          const: "ideographic",
          type: "string",
        },
        {
          const: "mathematical",
          type: "string",
        },
        {
          const: "middle",
          type: "string",
        },
        {
          const: "text-after-edge",
          type: "string",
        },
        {
          const: "text-before-edge",
          type: "string",
        },
      ],
    },
    "Property.All": {
      $ref: "#/definitions/Globals",
    },
    "Property.Animation<string>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.SingleAnimation%3Cstring%3E",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.AnimationComposition": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.SingleAnimationComposition",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.AnimationDelay<string>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.AnimationDirection": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.SingleAnimationDirection",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.AnimationDuration<string>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.AnimationFillMode": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.SingleAnimationFillMode",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.AnimationIterationCount": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "infinite",
          type: "string",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.AnimationName": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.AnimationPlayState": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "paused",
          type: "string",
        },
        {
          const: "running",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.AnimationRange<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.TimelineRangeName",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "normal",
          type: "string",
        },
      ],
    },
    "Property.AnimationRangeEnd<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.TimelineRangeName",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "normal",
          type: "string",
        },
      ],
    },
    "Property.AnimationRangeStart<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.TimelineRangeName",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "normal",
          type: "string",
        },
      ],
    },
    "Property.AnimationTimeline": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.SingleAnimationTimeline",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.AnimationTimingFunction": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.EasingFunction",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.Appearance": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.CompatAuto",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "menulist-button",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
        {
          const: "textfield",
          type: "string",
        },
      ],
    },
    "Property.AspectRatio": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.Azimuth": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "behind",
          type: "string",
        },
        {
          const: "center",
          type: "string",
        },
        {
          const: "center-left",
          type: "string",
        },
        {
          const: "center-right",
          type: "string",
        },
        {
          const: "far-left",
          type: "string",
        },
        {
          const: "far-right",
          type: "string",
        },
        {
          const: "left",
          type: "string",
        },
        {
          const: "left-side",
          type: "string",
        },
        {
          const: "leftwards",
          type: "string",
        },
        {
          const: "right",
          type: "string",
        },
        {
          const: "right-side",
          type: "string",
        },
        {
          const: "rightwards",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.BackdropFilter": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.BackfaceVisibility": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "hidden",
          type: "string",
        },
        {
          const: "visible",
          type: "string",
        },
      ],
    },
    "Property.Background<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.FinalBgLayer%3C(string%7Cnumber)%3E",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.BackgroundAttachment": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Attachment",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.BackgroundBlendMode": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.BlendMode",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.BackgroundClip": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Box",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.BackgroundColor": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Color",
        },
      ],
    },
    "Property.BackgroundImage": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.BackgroundOrigin": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Box",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.BackgroundPosition<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.BgPosition%3C(string%7Cnumber)%3E",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.BackgroundPositionX<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "center",
          type: "string",
        },
        {
          const: "left",
          type: "string",
        },
        {
          const: "right",
          type: "string",
        },
        {
          const: "x-end",
          type: "string",
        },
        {
          const: "x-start",
          type: "string",
        },
      ],
    },
    "Property.BackgroundPositionY<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "bottom",
          type: "string",
        },
        {
          const: "center",
          type: "string",
        },
        {
          const: "top",
          type: "string",
        },
        {
          const: "y-end",
          type: "string",
        },
        {
          const: "y-start",
          type: "string",
        },
      ],
    },
    "Property.BackgroundRepeat": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.RepeatStyle",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.BackgroundSize<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.BgSize%3C(string%7Cnumber)%3E",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.BaselineShift<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "baseline",
          type: "string",
        },
        {
          const: "sub",
          type: "string",
        },
        {
          const: "super",
          type: "string",
        },
      ],
    },
    "Property.BlockOverflow": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "clip",
          type: "string",
        },
        {
          const: "ellipsis",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.BlockSize<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "-moz-fit-content",
          type: "string",
        },
        {
          const: "-moz-max-content",
          type: "string",
        },
        {
          const: "-moz-min-content",
          type: "string",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "fit-content",
          type: "string",
        },
        {
          const: "max-content",
          type: "string",
        },
        {
          const: "min-content",
          type: "string",
        },
      ],
    },
    "Property.Border<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.LineWidth%3C(string%7Cnumber)%3E",
        },
        {
          $ref: "#/definitions/DataType.LineStyle",
        },
        {
          $ref: "#/definitions/DataType.Color",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.BorderBlock<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.LineWidth%3C(string%7Cnumber)%3E",
        },
        {
          $ref: "#/definitions/DataType.LineStyle",
        },
        {
          $ref: "#/definitions/DataType.Color",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.BorderBlockColor": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Color",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.BorderBlockEnd<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.LineWidth%3C(string%7Cnumber)%3E",
        },
        {
          $ref: "#/definitions/DataType.LineStyle",
        },
        {
          $ref: "#/definitions/DataType.Color",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.BorderBlockEndColor": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Color",
        },
      ],
    },
    "Property.BorderBlockEndStyle": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.LineStyle",
        },
      ],
    },
    "Property.BorderBlockEndWidth<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.LineWidth%3C(string%7Cnumber)%3E",
        },
      ],
    },
    "Property.BorderBlockStart<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.LineWidth%3C(string%7Cnumber)%3E",
        },
        {
          $ref: "#/definitions/DataType.LineStyle",
        },
        {
          $ref: "#/definitions/DataType.Color",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.BorderBlockStartColor": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Color",
        },
      ],
    },
    "Property.BorderBlockStartStyle": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.LineStyle",
        },
      ],
    },
    "Property.BorderBlockStartWidth<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.LineWidth%3C(string%7Cnumber)%3E",
        },
      ],
    },
    "Property.BorderBlockStyle": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.LineStyle",
        },
      ],
    },
    "Property.BorderBlockWidth<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.LineWidth%3C(string%7Cnumber)%3E",
        },
      ],
    },
    "Property.BorderBottom<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.LineWidth%3C(string%7Cnumber)%3E",
        },
        {
          $ref: "#/definitions/DataType.LineStyle",
        },
        {
          $ref: "#/definitions/DataType.Color",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.BorderBottomColor": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Color",
        },
      ],
    },
    "Property.BorderBottomLeftRadius<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.BorderBottomRightRadius<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.BorderBottomStyle": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.LineStyle",
        },
      ],
    },
    "Property.BorderBottomWidth<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.LineWidth%3C(string%7Cnumber)%3E",
        },
      ],
    },
    "Property.BorderCollapse": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "collapse",
          type: "string",
        },
        {
          const: "separate",
          type: "string",
        },
      ],
    },
    "Property.BorderColor": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Color",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.BorderEndEndRadius<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.BorderEndStartRadius<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.BorderImage": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "none",
          type: "string",
        },
        {
          const: "repeat",
          type: "string",
        },
        {
          const: "round",
          type: "string",
        },
        {
          const: "space",
          type: "string",
        },
        {
          const: "stretch",
          type: "string",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.BorderImageOutset<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.BorderImageRepeat": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "repeat",
          type: "string",
        },
        {
          const: "round",
          type: "string",
        },
        {
          const: "space",
          type: "string",
        },
        {
          const: "stretch",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.BorderImageSlice": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.BorderImageSource": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.BorderImageWidth<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "auto",
          type: "string",
        },
      ],
    },
    "Property.BorderInline<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.LineWidth%3C(string%7Cnumber)%3E",
        },
        {
          $ref: "#/definitions/DataType.LineStyle",
        },
        {
          $ref: "#/definitions/DataType.Color",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.BorderInlineColor": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Color",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.BorderInlineEnd<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.LineWidth%3C(string%7Cnumber)%3E",
        },
        {
          $ref: "#/definitions/DataType.LineStyle",
        },
        {
          $ref: "#/definitions/DataType.Color",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.BorderInlineEndColor": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Color",
        },
      ],
    },
    "Property.BorderInlineEndStyle": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.LineStyle",
        },
      ],
    },
    "Property.BorderInlineEndWidth<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.LineWidth%3C(string%7Cnumber)%3E",
        },
      ],
    },
    "Property.BorderInlineStart<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.LineWidth%3C(string%7Cnumber)%3E",
        },
        {
          $ref: "#/definitions/DataType.LineStyle",
        },
        {
          $ref: "#/definitions/DataType.Color",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.BorderInlineStartColor": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Color",
        },
      ],
    },
    "Property.BorderInlineStartStyle": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.LineStyle",
        },
      ],
    },
    "Property.BorderInlineStartWidth<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.LineWidth%3C(string%7Cnumber)%3E",
        },
      ],
    },
    "Property.BorderInlineStyle": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.LineStyle",
        },
      ],
    },
    "Property.BorderInlineWidth<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.LineWidth%3C(string%7Cnumber)%3E",
        },
      ],
    },
    "Property.BorderLeft<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.LineWidth%3C(string%7Cnumber)%3E",
        },
        {
          $ref: "#/definitions/DataType.LineStyle",
        },
        {
          $ref: "#/definitions/DataType.Color",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.BorderLeftColor": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Color",
        },
      ],
    },
    "Property.BorderLeftStyle": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.LineStyle",
        },
      ],
    },
    "Property.BorderLeftWidth<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.LineWidth%3C(string%7Cnumber)%3E",
        },
      ],
    },
    "Property.BorderRadius<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.BorderRight<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.LineWidth%3C(string%7Cnumber)%3E",
        },
        {
          $ref: "#/definitions/DataType.LineStyle",
        },
        {
          $ref: "#/definitions/DataType.Color",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.BorderRightColor": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Color",
        },
      ],
    },
    "Property.BorderRightStyle": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.LineStyle",
        },
      ],
    },
    "Property.BorderRightWidth<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.LineWidth%3C(string%7Cnumber)%3E",
        },
      ],
    },
    "Property.BorderSpacing<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.BorderStartEndRadius<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.BorderStartStartRadius<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.BorderStyle": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.LineStyle",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.BorderTop<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.LineWidth%3C(string%7Cnumber)%3E",
        },
        {
          $ref: "#/definitions/DataType.LineStyle",
        },
        {
          $ref: "#/definitions/DataType.Color",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.BorderTopColor": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Color",
        },
      ],
    },
    "Property.BorderTopLeftRadius<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.BorderTopRightRadius<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.BorderTopStyle": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.LineStyle",
        },
      ],
    },
    "Property.BorderTopWidth<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.LineWidth%3C(string%7Cnumber)%3E",
        },
      ],
    },
    "Property.BorderWidth<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.LineWidth%3C(string%7Cnumber)%3E",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.Bottom<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "auto",
          type: "string",
        },
      ],
    },
    "Property.BoxAlign": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "baseline",
          type: "string",
        },
        {
          const: "center",
          type: "string",
        },
        {
          const: "end",
          type: "string",
        },
        {
          const: "start",
          type: "string",
        },
        {
          const: "stretch",
          type: "string",
        },
      ],
    },
    "Property.BoxDecorationBreak": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "clone",
          type: "string",
        },
        {
          const: "slice",
          type: "string",
        },
      ],
    },
    "Property.BoxDirection": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "inherit",
          type: "string",
        },
        {
          const: "normal",
          type: "string",
        },
        {
          const: "reverse",
          type: "string",
        },
      ],
    },
    "Property.BoxFlex": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "number",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.BoxFlexGroup": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "number",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.BoxLines": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "multiple",
          type: "string",
        },
        {
          const: "single",
          type: "string",
        },
      ],
    },
    "Property.BoxOrdinalGroup": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "number",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.BoxOrient": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "block-axis",
          type: "string",
        },
        {
          const: "horizontal",
          type: "string",
        },
        {
          const: "inherit",
          type: "string",
        },
        {
          const: "inline-axis",
          type: "string",
        },
        {
          const: "vertical",
          type: "string",
        },
      ],
    },
    "Property.BoxPack": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "center",
          type: "string",
        },
        {
          const: "end",
          type: "string",
        },
        {
          const: "justify",
          type: "string",
        },
        {
          const: "start",
          type: "string",
        },
      ],
    },
    "Property.BoxShadow": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.BoxSizing": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "border-box",
          type: "string",
        },
        {
          const: "content-box",
          type: "string",
        },
      ],
    },
    "Property.BreakAfter": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "all",
          type: "string",
        },
        {
          const: "always",
          type: "string",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "avoid",
          type: "string",
        },
        {
          const: "avoid-column",
          type: "string",
        },
        {
          const: "avoid-page",
          type: "string",
        },
        {
          const: "avoid-region",
          type: "string",
        },
        {
          const: "column",
          type: "string",
        },
        {
          const: "left",
          type: "string",
        },
        {
          const: "page",
          type: "string",
        },
        {
          const: "recto",
          type: "string",
        },
        {
          const: "region",
          type: "string",
        },
        {
          const: "right",
          type: "string",
        },
        {
          const: "verso",
          type: "string",
        },
      ],
    },
    "Property.BreakBefore": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "all",
          type: "string",
        },
        {
          const: "always",
          type: "string",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "avoid",
          type: "string",
        },
        {
          const: "avoid-column",
          type: "string",
        },
        {
          const: "avoid-page",
          type: "string",
        },
        {
          const: "avoid-region",
          type: "string",
        },
        {
          const: "column",
          type: "string",
        },
        {
          const: "left",
          type: "string",
        },
        {
          const: "page",
          type: "string",
        },
        {
          const: "recto",
          type: "string",
        },
        {
          const: "region",
          type: "string",
        },
        {
          const: "right",
          type: "string",
        },
        {
          const: "verso",
          type: "string",
        },
      ],
    },
    "Property.BreakInside": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "avoid",
          type: "string",
        },
        {
          const: "avoid-column",
          type: "string",
        },
        {
          const: "avoid-page",
          type: "string",
        },
        {
          const: "avoid-region",
          type: "string",
        },
      ],
    },
    "Property.CaptionSide": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "block-end",
          type: "string",
        },
        {
          const: "block-start",
          type: "string",
        },
        {
          const: "bottom",
          type: "string",
        },
        {
          const: "inline-end",
          type: "string",
        },
        {
          const: "inline-start",
          type: "string",
        },
        {
          const: "top",
          type: "string",
        },
      ],
    },
    "Property.Caret": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Color",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "bar",
          type: "string",
        },
        {
          const: "block",
          type: "string",
        },
        {
          const: "underscore",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.CaretColor": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Color",
        },
        {
          const: "auto",
          type: "string",
        },
      ],
    },
    "Property.CaretShape": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "bar",
          type: "string",
        },
        {
          const: "block",
          type: "string",
        },
        {
          const: "underscore",
          type: "string",
        },
      ],
    },
    "Property.Clear": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "both",
          type: "string",
        },
        {
          const: "inline-end",
          type: "string",
        },
        {
          const: "inline-start",
          type: "string",
        },
        {
          const: "left",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
        {
          const: "right",
          type: "string",
        },
      ],
    },
    "Property.Clip": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.ClipPath": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.GeometryBox",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.ClipRule": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "evenodd",
          type: "string",
        },
        {
          const: "nonzero",
          type: "string",
        },
      ],
    },
    "Property.Color": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Color",
        },
      ],
    },
    "Property.ColorInterpolation": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "linearRGB",
          type: "string",
        },
        {
          const: "sRGB",
          type: "string",
        },
      ],
    },
    "Property.ColorRendering": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "optimizeQuality",
          type: "string",
        },
        {
          const: "optimizeSpeed",
          type: "string",
        },
      ],
    },
    "Property.ColorScheme": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "dark",
          type: "string",
        },
        {
          const: "light",
          type: "string",
        },
        {
          const: "normal",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.ColumnCount": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          type: "number",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.ColumnFill": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "balance",
          type: "string",
        },
        {
          const: "balance-all",
          type: "string",
        },
      ],
    },
    "Property.ColumnGap<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "normal",
          type: "string",
        },
      ],
    },
    "Property.ColumnRule<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.LineWidth%3C(string%7Cnumber)%3E",
        },
        {
          $ref: "#/definitions/DataType.LineStyle",
        },
        {
          $ref: "#/definitions/DataType.Color",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.ColumnRuleColor": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Color",
        },
      ],
    },
    "Property.ColumnRuleStyle": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.LineStyle",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.ColumnRuleWidth<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.LineWidth%3C(string%7Cnumber)%3E",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.ColumnSpan": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "all",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
      ],
    },
    "Property.ColumnWidth<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "auto",
          type: "string",
        },
      ],
    },
    "Property.Columns<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "auto",
          type: "string",
        },
      ],
    },
    "Property.Contain": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "content",
          type: "string",
        },
        {
          const: "inline-size",
          type: "string",
        },
        {
          const: "layout",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
        {
          const: "paint",
          type: "string",
        },
        {
          const: "size",
          type: "string",
        },
        {
          const: "strict",
          type: "string",
        },
        {
          const: "style",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.ContainIntrinsicBlockSize<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "none",
          type: "string",
        },
      ],
    },
    "Property.ContainIntrinsicHeight<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "none",
          type: "string",
        },
      ],
    },
    "Property.ContainIntrinsicInlineSize<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "none",
          type: "string",
        },
      ],
    },
    "Property.ContainIntrinsicSize<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "none",
          type: "string",
        },
      ],
    },
    "Property.ContainIntrinsicWidth<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "none",
          type: "string",
        },
      ],
    },
    "Property.Container": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.ContainerName": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.ContainerType": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "inline-size",
          type: "string",
        },
        {
          const: "normal",
          type: "string",
        },
        {
          const: "size",
          type: "string",
        },
      ],
    },
    "Property.Content": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.ContentList",
        },
        {
          const: "none",
          type: "string",
        },
        {
          const: "normal",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.ContentVisibility": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "hidden",
          type: "string",
        },
        {
          const: "visible",
          type: "string",
        },
      ],
    },
    "Property.CounterIncrement": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.CounterReset": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.CounterSet": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.Cursor": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "-moz-grab",
          type: "string",
        },
        {
          const: "-webkit-grab",
          type: "string",
        },
        {
          const: "alias",
          type: "string",
        },
        {
          const: "all-scroll",
          type: "string",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "cell",
          type: "string",
        },
        {
          const: "col-resize",
          type: "string",
        },
        {
          const: "context-menu",
          type: "string",
        },
        {
          const: "copy",
          type: "string",
        },
        {
          const: "crosshair",
          type: "string",
        },
        {
          const: "default",
          type: "string",
        },
        {
          const: "e-resize",
          type: "string",
        },
        {
          const: "ew-resize",
          type: "string",
        },
        {
          const: "grab",
          type: "string",
        },
        {
          const: "grabbing",
          type: "string",
        },
        {
          const: "help",
          type: "string",
        },
        {
          const: "move",
          type: "string",
        },
        {
          const: "n-resize",
          type: "string",
        },
        {
          const: "ne-resize",
          type: "string",
        },
        {
          const: "nesw-resize",
          type: "string",
        },
        {
          const: "no-drop",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
        {
          const: "not-allowed",
          type: "string",
        },
        {
          const: "ns-resize",
          type: "string",
        },
        {
          const: "nw-resize",
          type: "string",
        },
        {
          const: "nwse-resize",
          type: "string",
        },
        {
          const: "pointer",
          type: "string",
        },
        {
          const: "progress",
          type: "string",
        },
        {
          const: "row-resize",
          type: "string",
        },
        {
          const: "s-resize",
          type: "string",
        },
        {
          const: "se-resize",
          type: "string",
        },
        {
          const: "sw-resize",
          type: "string",
        },
        {
          const: "text",
          type: "string",
        },
        {
          const: "vertical-text",
          type: "string",
        },
        {
          const: "w-resize",
          type: "string",
        },
        {
          const: "wait",
          type: "string",
        },
        {
          const: "zoom-in",
          type: "string",
        },
        {
          const: "zoom-out",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.Direction": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "ltr",
          type: "string",
        },
        {
          const: "rtl",
          type: "string",
        },
      ],
    },
    "Property.Display": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.DisplayOutside",
        },
        {
          $ref: "#/definitions/DataType.DisplayInside",
        },
        {
          $ref: "#/definitions/DataType.DisplayInternal",
        },
        {
          $ref: "#/definitions/DataType.DisplayLegacy",
        },
        {
          const: "contents",
          type: "string",
        },
        {
          const: "list-item",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.DominantBaseline": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "alphabetic",
          type: "string",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "central",
          type: "string",
        },
        {
          const: "hanging",
          type: "string",
        },
        {
          const: "ideographic",
          type: "string",
        },
        {
          const: "mathematical",
          type: "string",
        },
        {
          const: "middle",
          type: "string",
        },
        {
          const: "no-change",
          type: "string",
        },
        {
          const: "reset-size",
          type: "string",
        },
        {
          const: "text-after-edge",
          type: "string",
        },
        {
          const: "text-before-edge",
          type: "string",
        },
        {
          const: "use-script",
          type: "string",
        },
      ],
    },
    "Property.EmptyCells": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "hide",
          type: "string",
        },
        {
          const: "show",
          type: "string",
        },
      ],
    },
    "Property.Fill": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Paint",
        },
      ],
    },
    "Property.FillOpacity": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "number",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.FillRule": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "evenodd",
          type: "string",
        },
        {
          const: "nonzero",
          type: "string",
        },
      ],
    },
    "Property.Filter": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.Flex<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "content",
          type: "string",
        },
        {
          const: "fit-content",
          type: "string",
        },
        {
          const: "max-content",
          type: "string",
        },
        {
          const: "min-content",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
      ],
    },
    "Property.FlexBasis<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "-moz-fit-content",
          type: "string",
        },
        {
          const: "-moz-max-content",
          type: "string",
        },
        {
          const: "-moz-min-content",
          type: "string",
        },
        {
          const: "-webkit-auto",
          type: "string",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "content",
          type: "string",
        },
        {
          const: "fit-content",
          type: "string",
        },
        {
          const: "max-content",
          type: "string",
        },
        {
          const: "min-content",
          type: "string",
        },
      ],
    },
    "Property.FlexDirection": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "column",
          type: "string",
        },
        {
          const: "column-reverse",
          type: "string",
        },
        {
          const: "row",
          type: "string",
        },
        {
          const: "row-reverse",
          type: "string",
        },
      ],
    },
    "Property.FlexFlow": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "column",
          type: "string",
        },
        {
          const: "column-reverse",
          type: "string",
        },
        {
          const: "nowrap",
          type: "string",
        },
        {
          const: "row",
          type: "string",
        },
        {
          const: "row-reverse",
          type: "string",
        },
        {
          const: "wrap",
          type: "string",
        },
        {
          const: "wrap-reverse",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.FlexGrow": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "number",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.FlexShrink": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "number",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.FlexWrap": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "nowrap",
          type: "string",
        },
        {
          const: "wrap",
          type: "string",
        },
        {
          const: "wrap-reverse",
          type: "string",
        },
      ],
    },
    "Property.Float": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "inline-end",
          type: "string",
        },
        {
          const: "inline-start",
          type: "string",
        },
        {
          const: "left",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
        {
          const: "right",
          type: "string",
        },
      ],
    },
    "Property.FloodColor": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Color",
        },
        {
          const: "currentColor",
          type: "string",
        },
      ],
    },
    "Property.FloodOpacity": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "number",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.Font": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "caption",
          type: "string",
        },
        {
          const: "icon",
          type: "string",
        },
        {
          const: "menu",
          type: "string",
        },
        {
          const: "message-box",
          type: "string",
        },
        {
          const: "small-caption",
          type: "string",
        },
        {
          const: "status-bar",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.FontFamily": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.GenericFamily",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.FontFeatureSettings": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "normal",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.FontKerning": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
        {
          const: "normal",
          type: "string",
        },
      ],
    },
    "Property.FontLanguageOverride": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "normal",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.FontOpticalSizing": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
      ],
    },
    "Property.FontPalette": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "dark",
          type: "string",
        },
        {
          const: "light",
          type: "string",
        },
        {
          const: "normal",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.FontSize<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.AbsoluteSize",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "larger",
          type: "string",
        },
        {
          const: "smaller",
          type: "string",
        },
      ],
    },
    "Property.FontSizeAdjust": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "from-font",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.FontSmooth<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.AbsoluteSize",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "always",
          type: "string",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "never",
          type: "string",
        },
      ],
    },
    "Property.FontStretch": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.FontStretchAbsolute",
        },
      ],
    },
    "Property.FontStyle": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "italic",
          type: "string",
        },
        {
          const: "normal",
          type: "string",
        },
        {
          const: "oblique",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.FontSynthesis": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "none",
          type: "string",
        },
        {
          const: "position",
          type: "string",
        },
        {
          const: "small-caps",
          type: "string",
        },
        {
          const: "style",
          type: "string",
        },
        {
          const: "weight",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.FontSynthesisPosition": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
      ],
    },
    "Property.FontSynthesisSmallCaps": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
      ],
    },
    "Property.FontSynthesisStyle": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
      ],
    },
    "Property.FontSynthesisWeight": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
      ],
    },
    "Property.FontVariant": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.EastAsianVariantValues",
        },
        {
          const: "all-petite-caps",
          type: "string",
        },
        {
          const: "all-small-caps",
          type: "string",
        },
        {
          const: "common-ligatures",
          type: "string",
        },
        {
          const: "contextual",
          type: "string",
        },
        {
          const: "diagonal-fractions",
          type: "string",
        },
        {
          const: "discretionary-ligatures",
          type: "string",
        },
        {
          const: "full-width",
          type: "string",
        },
        {
          const: "historical-forms",
          type: "string",
        },
        {
          const: "historical-ligatures",
          type: "string",
        },
        {
          const: "lining-nums",
          type: "string",
        },
        {
          const: "no-common-ligatures",
          type: "string",
        },
        {
          const: "no-contextual",
          type: "string",
        },
        {
          const: "no-discretionary-ligatures",
          type: "string",
        },
        {
          const: "no-historical-ligatures",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
        {
          const: "normal",
          type: "string",
        },
        {
          const: "oldstyle-nums",
          type: "string",
        },
        {
          const: "ordinal",
          type: "string",
        },
        {
          const: "petite-caps",
          type: "string",
        },
        {
          const: "proportional-nums",
          type: "string",
        },
        {
          const: "proportional-width",
          type: "string",
        },
        {
          const: "ruby",
          type: "string",
        },
        {
          const: "slashed-zero",
          type: "string",
        },
        {
          const: "small-caps",
          type: "string",
        },
        {
          const: "stacked-fractions",
          type: "string",
        },
        {
          const: "tabular-nums",
          type: "string",
        },
        {
          const: "titling-caps",
          type: "string",
        },
        {
          const: "unicase",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.FontVariantAlternates": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "historical-forms",
          type: "string",
        },
        {
          const: "normal",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.FontVariantCaps": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "all-petite-caps",
          type: "string",
        },
        {
          const: "all-small-caps",
          type: "string",
        },
        {
          const: "normal",
          type: "string",
        },
        {
          const: "petite-caps",
          type: "string",
        },
        {
          const: "small-caps",
          type: "string",
        },
        {
          const: "titling-caps",
          type: "string",
        },
        {
          const: "unicase",
          type: "string",
        },
      ],
    },
    "Property.FontVariantEastAsian": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.EastAsianVariantValues",
        },
        {
          const: "full-width",
          type: "string",
        },
        {
          const: "normal",
          type: "string",
        },
        {
          const: "proportional-width",
          type: "string",
        },
        {
          const: "ruby",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.FontVariantEmoji": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "emoji",
          type: "string",
        },
        {
          const: "normal",
          type: "string",
        },
        {
          const: "text",
          type: "string",
        },
        {
          const: "unicode",
          type: "string",
        },
      ],
    },
    "Property.FontVariantLigatures": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "common-ligatures",
          type: "string",
        },
        {
          const: "contextual",
          type: "string",
        },
        {
          const: "discretionary-ligatures",
          type: "string",
        },
        {
          const: "historical-ligatures",
          type: "string",
        },
        {
          const: "no-common-ligatures",
          type: "string",
        },
        {
          const: "no-contextual",
          type: "string",
        },
        {
          const: "no-discretionary-ligatures",
          type: "string",
        },
        {
          const: "no-historical-ligatures",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
        {
          const: "normal",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.FontVariantNumeric": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "diagonal-fractions",
          type: "string",
        },
        {
          const: "lining-nums",
          type: "string",
        },
        {
          const: "normal",
          type: "string",
        },
        {
          const: "oldstyle-nums",
          type: "string",
        },
        {
          const: "ordinal",
          type: "string",
        },
        {
          const: "proportional-nums",
          type: "string",
        },
        {
          const: "slashed-zero",
          type: "string",
        },
        {
          const: "stacked-fractions",
          type: "string",
        },
        {
          const: "tabular-nums",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.FontVariantPosition": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "normal",
          type: "string",
        },
        {
          const: "sub",
          type: "string",
        },
        {
          const: "super",
          type: "string",
        },
      ],
    },
    "Property.FontVariationSettings": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "normal",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.FontWeight": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.FontWeightAbsolute",
        },
        {
          const: "bolder",
          type: "string",
        },
        {
          const: "lighter",
          type: "string",
        },
      ],
    },
    "Property.ForcedColorAdjust": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
      ],
    },
    "Property.Gap<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "normal",
          type: "string",
        },
      ],
    },
    "Property.GlyphOrientationVertical": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.Grid": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.GridArea": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.GridLine",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.GridAutoColumns<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.TrackBreadth%3C(string%7Cnumber)%3E",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.GridAutoFlow": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "column",
          type: "string",
        },
        {
          const: "dense",
          type: "string",
        },
        {
          const: "row",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.GridAutoRows<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.TrackBreadth%3C(string%7Cnumber)%3E",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.GridColumn": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.GridLine",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.GridColumnEnd": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.GridLine",
        },
      ],
    },
    "Property.GridColumnGap<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.GridColumnStart": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.GridLine",
        },
      ],
    },
    "Property.GridGap<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.GridRow": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.GridLine",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.GridRowEnd": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.GridLine",
        },
      ],
    },
    "Property.GridRowGap<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.GridRowStart": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.GridLine",
        },
      ],
    },
    "Property.GridTemplate": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.GridTemplateAreas": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.GridTemplateColumns<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.TrackBreadth%3C(string%7Cnumber)%3E",
        },
        {
          const: "none",
          type: "string",
        },
        {
          const: "subgrid",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.GridTemplateRows<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.TrackBreadth%3C(string%7Cnumber)%3E",
        },
        {
          const: "none",
          type: "string",
        },
        {
          const: "subgrid",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.HangingPunctuation": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "allow-end",
          type: "string",
        },
        {
          const: "first",
          type: "string",
        },
        {
          const: "force-end",
          type: "string",
        },
        {
          const: "last",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.Height<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "-moz-max-content",
          type: "string",
        },
        {
          const: "-moz-min-content",
          type: "string",
        },
        {
          const: "-webkit-fit-content",
          type: "string",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "fit-content",
          type: "string",
        },
        {
          const: "max-content",
          type: "string",
        },
        {
          const: "min-content",
          type: "string",
        },
      ],
    },
    "Property.HyphenateCharacter": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.HyphenateLimitChars": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.Hyphens": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "manual",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
      ],
    },
    "Property.ImageOrientation": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "flip",
          type: "string",
        },
        {
          const: "from-image",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.ImageRendering": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "-moz-crisp-edges",
          type: "string",
        },
        {
          const: "-webkit-optimize-contrast",
          type: "string",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "crisp-edges",
          type: "string",
        },
        {
          const: "pixelated",
          type: "string",
        },
      ],
    },
    "Property.ImageResolution": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "from-image",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.ImeMode": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "active",
          type: "string",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "disabled",
          type: "string",
        },
        {
          const: "inactive",
          type: "string",
        },
        {
          const: "normal",
          type: "string",
        },
      ],
    },
    "Property.InitialLetter": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "normal",
          type: "string",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.InlineSize<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "-moz-fit-content",
          type: "string",
        },
        {
          const: "-moz-max-content",
          type: "string",
        },
        {
          const: "-moz-min-content",
          type: "string",
        },
        {
          const: "-webkit-fill-available",
          type: "string",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "fit-content",
          type: "string",
        },
        {
          const: "max-content",
          type: "string",
        },
        {
          const: "min-content",
          type: "string",
        },
      ],
    },
    "Property.InputSecurity": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
      ],
    },
    "Property.Inset<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "auto",
          type: "string",
        },
      ],
    },
    "Property.InsetBlock<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "auto",
          type: "string",
        },
      ],
    },
    "Property.InsetBlockEnd<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "auto",
          type: "string",
        },
      ],
    },
    "Property.InsetBlockStart<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "auto",
          type: "string",
        },
      ],
    },
    "Property.InsetInline<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "auto",
          type: "string",
        },
      ],
    },
    "Property.InsetInlineEnd<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "auto",
          type: "string",
        },
      ],
    },
    "Property.InsetInlineStart<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "auto",
          type: "string",
        },
      ],
    },
    "Property.Isolation": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "isolate",
          type: "string",
        },
      ],
    },
    "Property.JustifyContent": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.ContentDistribution",
        },
        {
          $ref: "#/definitions/DataType.ContentPosition",
        },
        {
          const: "left",
          type: "string",
        },
        {
          const: "normal",
          type: "string",
        },
        {
          const: "right",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.JustifyItems": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.SelfPosition",
        },
        {
          const: "baseline",
          type: "string",
        },
        {
          const: "left",
          type: "string",
        },
        {
          const: "legacy",
          type: "string",
        },
        {
          const: "normal",
          type: "string",
        },
        {
          const: "right",
          type: "string",
        },
        {
          const: "stretch",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.JustifySelf": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.SelfPosition",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "baseline",
          type: "string",
        },
        {
          const: "left",
          type: "string",
        },
        {
          const: "normal",
          type: "string",
        },
        {
          const: "right",
          type: "string",
        },
        {
          const: "stretch",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.JustifyTracks": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.ContentDistribution",
        },
        {
          $ref: "#/definitions/DataType.ContentPosition",
        },
        {
          const: "left",
          type: "string",
        },
        {
          const: "normal",
          type: "string",
        },
        {
          const: "right",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.Left<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "auto",
          type: "string",
        },
      ],
    },
    "Property.LetterSpacing<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "normal",
          type: "string",
        },
      ],
    },
    "Property.LightingColor": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Color",
        },
        {
          const: "currentColor",
          type: "string",
        },
      ],
    },
    "Property.LineBreak": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "anywhere",
          type: "string",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "loose",
          type: "string",
        },
        {
          const: "normal",
          type: "string",
        },
        {
          const: "strict",
          type: "string",
        },
      ],
    },
    "Property.LineClamp": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "number",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.LineHeight<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "normal",
          type: "string",
        },
      ],
    },
    "Property.LineHeightStep<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.ListStyle": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "inside",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
        {
          const: "outside",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.ListStyleImage": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.ListStylePosition": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "inside",
          type: "string",
        },
        {
          const: "outside",
          type: "string",
        },
      ],
    },
    "Property.ListStyleType": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.Margin<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "auto",
          type: "string",
        },
      ],
    },
    "Property.MarginBlock<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "auto",
          type: "string",
        },
      ],
    },
    "Property.MarginBlockEnd<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "auto",
          type: "string",
        },
      ],
    },
    "Property.MarginBlockStart<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "auto",
          type: "string",
        },
      ],
    },
    "Property.MarginBottom<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "auto",
          type: "string",
        },
      ],
    },
    "Property.MarginInline<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "auto",
          type: "string",
        },
      ],
    },
    "Property.MarginInlineEnd<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "auto",
          type: "string",
        },
      ],
    },
    "Property.MarginInlineStart<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "auto",
          type: "string",
        },
      ],
    },
    "Property.MarginLeft<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "auto",
          type: "string",
        },
      ],
    },
    "Property.MarginRight<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "auto",
          type: "string",
        },
      ],
    },
    "Property.MarginTop<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "auto",
          type: "string",
        },
      ],
    },
    "Property.MarginTrim": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "all",
          type: "string",
        },
        {
          const: "in-flow",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
      ],
    },
    "Property.Marker": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.MarkerEnd": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.MarkerMid": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.MarkerStart": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.Mask<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.MaskLayer%3C(string%7Cnumber)%3E",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.MaskBorder": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "alpha",
          type: "string",
        },
        {
          const: "luminance",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
        {
          const: "repeat",
          type: "string",
        },
        {
          const: "round",
          type: "string",
        },
        {
          const: "space",
          type: "string",
        },
        {
          const: "stretch",
          type: "string",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.MaskBorderMode": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "alpha",
          type: "string",
        },
        {
          const: "luminance",
          type: "string",
        },
      ],
    },
    "Property.MaskBorderOutset<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.MaskBorderRepeat": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "repeat",
          type: "string",
        },
        {
          const: "round",
          type: "string",
        },
        {
          const: "space",
          type: "string",
        },
        {
          const: "stretch",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.MaskBorderSlice": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.MaskBorderSource": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.MaskBorderWidth<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "auto",
          type: "string",
        },
      ],
    },
    "Property.MaskClip": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.GeometryBox",
        },
        {
          const: "no-clip",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.MaskComposite": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.CompositingOperator",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.MaskImage": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.MaskMode": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.MaskingMode",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.MaskOrigin": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.GeometryBox",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.MaskPosition<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Position%3C(string%7Cnumber)%3E",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.MaskRepeat": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.RepeatStyle",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.MaskSize<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.BgSize%3C(string%7Cnumber)%3E",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.MaskType": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "alpha",
          type: "string",
        },
        {
          const: "luminance",
          type: "string",
        },
      ],
    },
    "Property.MasonryAutoFlow": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "definite-first",
          type: "string",
        },
        {
          const: "next",
          type: "string",
        },
        {
          const: "ordered",
          type: "string",
        },
        {
          const: "pack",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.MathDepth": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "auto-add",
          type: "string",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.MathShift": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "compact",
          type: "string",
        },
        {
          const: "normal",
          type: "string",
        },
      ],
    },
    "Property.MathStyle": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "compact",
          type: "string",
        },
        {
          const: "normal",
          type: "string",
        },
      ],
    },
    "Property.MaxBlockSize<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "-moz-max-content",
          type: "string",
        },
        {
          const: "-moz-min-content",
          type: "string",
        },
        {
          const: "-webkit-fill-available",
          type: "string",
        },
        {
          const: "fit-content",
          type: "string",
        },
        {
          const: "max-content",
          type: "string",
        },
        {
          const: "min-content",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
      ],
    },
    "Property.MaxHeight<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "-moz-fit-content",
          type: "string",
        },
        {
          const: "-moz-max-content",
          type: "string",
        },
        {
          const: "-moz-min-content",
          type: "string",
        },
        {
          const: "-webkit-fit-content",
          type: "string",
        },
        {
          const: "-webkit-max-content",
          type: "string",
        },
        {
          const: "-webkit-min-content",
          type: "string",
        },
        {
          const: "fit-content",
          type: "string",
        },
        {
          const: "intrinsic",
          type: "string",
        },
        {
          const: "max-content",
          type: "string",
        },
        {
          const: "min-content",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
      ],
    },
    "Property.MaxInlineSize<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "-moz-fit-content",
          type: "string",
        },
        {
          const: "-moz-max-content",
          type: "string",
        },
        {
          const: "-moz-min-content",
          type: "string",
        },
        {
          const: "-webkit-fill-available",
          type: "string",
        },
        {
          const: "fit-content",
          type: "string",
        },
        {
          const: "max-content",
          type: "string",
        },
        {
          const: "min-content",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
      ],
    },
    "Property.MaxLines": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "number",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.MaxWidth<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "-moz-fit-content",
          type: "string",
        },
        {
          const: "-moz-max-content",
          type: "string",
        },
        {
          const: "-moz-min-content",
          type: "string",
        },
        {
          const: "-webkit-fit-content",
          type: "string",
        },
        {
          const: "-webkit-max-content",
          type: "string",
        },
        {
          const: "-webkit-min-content",
          type: "string",
        },
        {
          const: "fit-content",
          type: "string",
        },
        {
          const: "intrinsic",
          type: "string",
        },
        {
          const: "max-content",
          type: "string",
        },
        {
          const: "min-content",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
      ],
    },
    "Property.MinBlockSize<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "-moz-max-content",
          type: "string",
        },
        {
          const: "-moz-min-content",
          type: "string",
        },
        {
          const: "-webkit-fill-available",
          type: "string",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "fit-content",
          type: "string",
        },
        {
          const: "max-content",
          type: "string",
        },
        {
          const: "min-content",
          type: "string",
        },
      ],
    },
    "Property.MinHeight<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "-moz-fit-content",
          type: "string",
        },
        {
          const: "-moz-max-content",
          type: "string",
        },
        {
          const: "-moz-min-content",
          type: "string",
        },
        {
          const: "-webkit-fit-content",
          type: "string",
        },
        {
          const: "-webkit-max-content",
          type: "string",
        },
        {
          const: "-webkit-min-content",
          type: "string",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "fit-content",
          type: "string",
        },
        {
          const: "intrinsic",
          type: "string",
        },
        {
          const: "max-content",
          type: "string",
        },
        {
          const: "min-content",
          type: "string",
        },
      ],
    },
    "Property.MinInlineSize<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "-moz-fit-content",
          type: "string",
        },
        {
          const: "-moz-max-content",
          type: "string",
        },
        {
          const: "-moz-min-content",
          type: "string",
        },
        {
          const: "-webkit-fill-available",
          type: "string",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "fit-content",
          type: "string",
        },
        {
          const: "max-content",
          type: "string",
        },
        {
          const: "min-content",
          type: "string",
        },
      ],
    },
    "Property.MinWidth<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "-moz-fit-content",
          type: "string",
        },
        {
          const: "-moz-max-content",
          type: "string",
        },
        {
          const: "-moz-min-content",
          type: "string",
        },
        {
          const: "-webkit-fill-available",
          type: "string",
        },
        {
          const: "-webkit-fit-content",
          type: "string",
        },
        {
          const: "-webkit-max-content",
          type: "string",
        },
        {
          const: "-webkit-min-content",
          type: "string",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "fit-content",
          type: "string",
        },
        {
          const: "intrinsic",
          type: "string",
        },
        {
          const: "max-content",
          type: "string",
        },
        {
          const: "min-content",
          type: "string",
        },
        {
          const: "min-intrinsic",
          type: "string",
        },
      ],
    },
    "Property.MixBlendMode": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.BlendMode",
        },
        {
          const: "plus-lighter",
          type: "string",
        },
      ],
    },
    "Property.MozAppearance": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "-moz-mac-unified-toolbar",
          type: "string",
        },
        {
          const: "-moz-win-borderless-glass",
          type: "string",
        },
        {
          const: "-moz-win-browsertabbar-toolbox",
          type: "string",
        },
        {
          const: "-moz-win-communications-toolbox",
          type: "string",
        },
        {
          const: "-moz-win-communicationstext",
          type: "string",
        },
        {
          const: "-moz-win-exclude-glass",
          type: "string",
        },
        {
          const: "-moz-win-glass",
          type: "string",
        },
        {
          const: "-moz-win-media-toolbox",
          type: "string",
        },
        {
          const: "-moz-win-mediatext",
          type: "string",
        },
        {
          const: "-moz-window-button-box",
          type: "string",
        },
        {
          const: "-moz-window-button-box-maximized",
          type: "string",
        },
        {
          const: "-moz-window-button-close",
          type: "string",
        },
        {
          const: "-moz-window-button-maximize",
          type: "string",
        },
        {
          const: "-moz-window-button-minimize",
          type: "string",
        },
        {
          const: "-moz-window-button-restore",
          type: "string",
        },
        {
          const: "-moz-window-frame-bottom",
          type: "string",
        },
        {
          const: "-moz-window-frame-left",
          type: "string",
        },
        {
          const: "-moz-window-frame-right",
          type: "string",
        },
        {
          const: "-moz-window-titlebar",
          type: "string",
        },
        {
          const: "-moz-window-titlebar-maximized",
          type: "string",
        },
        {
          const: "button",
          type: "string",
        },
        {
          const: "button-arrow-down",
          type: "string",
        },
        {
          const: "button-arrow-next",
          type: "string",
        },
        {
          const: "button-arrow-previous",
          type: "string",
        },
        {
          const: "button-arrow-up",
          type: "string",
        },
        {
          const: "button-bevel",
          type: "string",
        },
        {
          const: "button-focus",
          type: "string",
        },
        {
          const: "caret",
          type: "string",
        },
        {
          const: "checkbox",
          type: "string",
        },
        {
          const: "checkbox-container",
          type: "string",
        },
        {
          const: "checkbox-label",
          type: "string",
        },
        {
          const: "checkmenuitem",
          type: "string",
        },
        {
          const: "dualbutton",
          type: "string",
        },
        {
          const: "groupbox",
          type: "string",
        },
        {
          const: "listbox",
          type: "string",
        },
        {
          const: "listitem",
          type: "string",
        },
        {
          const: "menuarrow",
          type: "string",
        },
        {
          const: "menubar",
          type: "string",
        },
        {
          const: "menucheckbox",
          type: "string",
        },
        {
          const: "menuimage",
          type: "string",
        },
        {
          const: "menuitem",
          type: "string",
        },
        {
          const: "menuitemtext",
          type: "string",
        },
        {
          const: "menulist",
          type: "string",
        },
        {
          const: "menulist-button",
          type: "string",
        },
        {
          const: "menulist-text",
          type: "string",
        },
        {
          const: "menulist-textfield",
          type: "string",
        },
        {
          const: "menupopup",
          type: "string",
        },
        {
          const: "menuradio",
          type: "string",
        },
        {
          const: "menuseparator",
          type: "string",
        },
        {
          const: "meterbar",
          type: "string",
        },
        {
          const: "meterchunk",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
        {
          const: "progressbar",
          type: "string",
        },
        {
          const: "progressbar-vertical",
          type: "string",
        },
        {
          const: "progresschunk",
          type: "string",
        },
        {
          const: "progresschunk-vertical",
          type: "string",
        },
        {
          const: "radio",
          type: "string",
        },
        {
          const: "radio-container",
          type: "string",
        },
        {
          const: "radio-label",
          type: "string",
        },
        {
          const: "radiomenuitem",
          type: "string",
        },
        {
          const: "range",
          type: "string",
        },
        {
          const: "range-thumb",
          type: "string",
        },
        {
          const: "resizer",
          type: "string",
        },
        {
          const: "resizerpanel",
          type: "string",
        },
        {
          const: "scale-horizontal",
          type: "string",
        },
        {
          const: "scale-vertical",
          type: "string",
        },
        {
          const: "scalethumb-horizontal",
          type: "string",
        },
        {
          const: "scalethumb-vertical",
          type: "string",
        },
        {
          const: "scalethumbend",
          type: "string",
        },
        {
          const: "scalethumbstart",
          type: "string",
        },
        {
          const: "scalethumbtick",
          type: "string",
        },
        {
          const: "scrollbarbutton-down",
          type: "string",
        },
        {
          const: "scrollbarbutton-left",
          type: "string",
        },
        {
          const: "scrollbarbutton-right",
          type: "string",
        },
        {
          const: "scrollbarbutton-up",
          type: "string",
        },
        {
          const: "scrollbarthumb-horizontal",
          type: "string",
        },
        {
          const: "scrollbarthumb-vertical",
          type: "string",
        },
        {
          const: "scrollbartrack-horizontal",
          type: "string",
        },
        {
          const: "scrollbartrack-vertical",
          type: "string",
        },
        {
          const: "searchfield",
          type: "string",
        },
        {
          const: "separator",
          type: "string",
        },
        {
          const: "sheet",
          type: "string",
        },
        {
          const: "spinner",
          type: "string",
        },
        {
          const: "spinner-downbutton",
          type: "string",
        },
        {
          const: "spinner-textfield",
          type: "string",
        },
        {
          const: "spinner-upbutton",
          type: "string",
        },
        {
          const: "splitter",
          type: "string",
        },
        {
          const: "statusbar",
          type: "string",
        },
        {
          const: "statusbarpanel",
          type: "string",
        },
        {
          const: "tab",
          type: "string",
        },
        {
          const: "tab-scroll-arrow-back",
          type: "string",
        },
        {
          const: "tab-scroll-arrow-forward",
          type: "string",
        },
        {
          const: "tabpanel",
          type: "string",
        },
        {
          const: "tabpanels",
          type: "string",
        },
        {
          const: "textfield",
          type: "string",
        },
        {
          const: "textfield-multiline",
          type: "string",
        },
        {
          const: "toolbar",
          type: "string",
        },
        {
          const: "toolbarbutton",
          type: "string",
        },
        {
          const: "toolbarbutton-dropdown",
          type: "string",
        },
        {
          const: "toolbargripper",
          type: "string",
        },
        {
          const: "toolbox",
          type: "string",
        },
        {
          const: "tooltip",
          type: "string",
        },
        {
          const: "treeheader",
          type: "string",
        },
        {
          const: "treeheadercell",
          type: "string",
        },
        {
          const: "treeheadersortarrow",
          type: "string",
        },
        {
          const: "treeitem",
          type: "string",
        },
        {
          const: "treeline",
          type: "string",
        },
        {
          const: "treetwisty",
          type: "string",
        },
        {
          const: "treetwistyopen",
          type: "string",
        },
        {
          const: "treeview",
          type: "string",
        },
      ],
    },
    "Property.MozBinding": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.MozBorderBottomColors": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Color",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.MozBorderLeftColors": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Color",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.MozBorderRightColors": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Color",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.MozBorderTopColors": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Color",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.MozContextProperties": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "fill",
          type: "string",
        },
        {
          const: "fill-opacity",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
        {
          const: "stroke",
          type: "string",
        },
        {
          const: "stroke-opacity",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.MozFloatEdge": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "border-box",
          type: "string",
        },
        {
          const: "content-box",
          type: "string",
        },
        {
          const: "margin-box",
          type: "string",
        },
        {
          const: "padding-box",
          type: "string",
        },
      ],
    },
    "Property.MozForceBrokenImageIcon": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: 0,
          type: "number",
        },
        {
          type: "string",
        },
        {
          const: 1,
          type: "number",
        },
      ],
    },
    "Property.MozImageRegion": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.MozOrient": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "block",
          type: "string",
        },
        {
          const: "horizontal",
          type: "string",
        },
        {
          const: "inline",
          type: "string",
        },
        {
          const: "vertical",
          type: "string",
        },
      ],
    },
    "Property.MozOutlineRadius<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.MozOutlineRadiusBottomleft<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.MozOutlineRadiusBottomright<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.MozOutlineRadiusTopleft<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.MozOutlineRadiusTopright<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.MozStackSizing": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "ignore",
          type: "string",
        },
        {
          const: "stretch-to-fit",
          type: "string",
        },
      ],
    },
    "Property.MozTextBlink": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "blink",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
      ],
    },
    "Property.MozUserFocus": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "ignore",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
        {
          const: "normal",
          type: "string",
        },
        {
          const: "select-after",
          type: "string",
        },
        {
          const: "select-all",
          type: "string",
        },
        {
          const: "select-before",
          type: "string",
        },
        {
          const: "select-menu",
          type: "string",
        },
        {
          const: "select-same",
          type: "string",
        },
      ],
    },
    "Property.MozUserInput": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "disabled",
          type: "string",
        },
        {
          const: "enabled",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
      ],
    },
    "Property.MozUserModify": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "read-only",
          type: "string",
        },
        {
          const: "read-write",
          type: "string",
        },
        {
          const: "write-only",
          type: "string",
        },
      ],
    },
    "Property.MozWindowDragging": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "drag",
          type: "string",
        },
        {
          const: "no-drag",
          type: "string",
        },
      ],
    },
    "Property.MozWindowShadow": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "default",
          type: "string",
        },
        {
          const: "menu",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
        {
          const: "sheet",
          type: "string",
        },
        {
          const: "tooltip",
          type: "string",
        },
      ],
    },
    "Property.MsAccelerator": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "false",
          type: "string",
        },
        {
          const: "true",
          type: "string",
        },
      ],
    },
    "Property.MsBlockProgression": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "bt",
          type: "string",
        },
        {
          const: "lr",
          type: "string",
        },
        {
          const: "rl",
          type: "string",
        },
        {
          const: "tb",
          type: "string",
        },
      ],
    },
    "Property.MsContentZoomChaining": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "chained",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
      ],
    },
    "Property.MsContentZoomLimit": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.MsContentZoomLimitMax": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.MsContentZoomLimitMin": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.MsContentZoomSnap": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "mandatory",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
        {
          const: "proximity",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.MsContentZoomSnapPoints": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.MsContentZoomSnapType": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "mandatory",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
        {
          const: "proximity",
          type: "string",
        },
      ],
    },
    "Property.MsContentZooming": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "none",
          type: "string",
        },
        {
          const: "zoom",
          type: "string",
        },
      ],
    },
    "Property.MsFilter": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.MsFlowFrom": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.MsFlowInto": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.MsGridColumns<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.TrackBreadth%3C(string%7Cnumber)%3E",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.MsGridRows<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.TrackBreadth%3C(string%7Cnumber)%3E",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.MsHighContrastAdjust": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
      ],
    },
    "Property.MsHyphenateLimitChars": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.MsHyphenateLimitLines": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "no-limit",
          type: "string",
        },
        {
          type: "number",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.MsHyphenateLimitZone<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.MsImeAlign": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "after",
          type: "string",
        },
        {
          const: "auto",
          type: "string",
        },
      ],
    },
    "Property.MsOverflowStyle": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "-ms-autohiding-scrollbar",
          type: "string",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
        {
          const: "scrollbar",
          type: "string",
        },
      ],
    },
    "Property.MsScrollChaining": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "chained",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
      ],
    },
    "Property.MsScrollLimit": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.MsScrollLimitXMax<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "auto",
          type: "string",
        },
      ],
    },
    "Property.MsScrollLimitXMin<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.MsScrollLimitYMax<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "auto",
          type: "string",
        },
      ],
    },
    "Property.MsScrollLimitYMin<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.MsScrollRails": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "none",
          type: "string",
        },
        {
          const: "railed",
          type: "string",
        },
      ],
    },
    "Property.MsScrollSnapPointsX": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.MsScrollSnapPointsY": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.MsScrollSnapType": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "mandatory",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
        {
          const: "proximity",
          type: "string",
        },
      ],
    },
    "Property.MsScrollSnapX": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.MsScrollSnapY": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.MsScrollTranslation": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "none",
          type: "string",
        },
        {
          const: "vertical-to-horizontal",
          type: "string",
        },
      ],
    },
    "Property.MsScrollbar3dlightColor": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Color",
        },
      ],
    },
    "Property.MsScrollbarArrowColor": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Color",
        },
      ],
    },
    "Property.MsScrollbarBaseColor": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Color",
        },
      ],
    },
    "Property.MsScrollbarDarkshadowColor": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Color",
        },
      ],
    },
    "Property.MsScrollbarFaceColor": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Color",
        },
      ],
    },
    "Property.MsScrollbarHighlightColor": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Color",
        },
      ],
    },
    "Property.MsScrollbarShadowColor": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Color",
        },
      ],
    },
    "Property.MsScrollbarTrackColor": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Color",
        },
      ],
    },
    "Property.MsTextAutospace": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "ideograph-alpha",
          type: "string",
        },
        {
          const: "ideograph-numeric",
          type: "string",
        },
        {
          const: "ideograph-parenthesis",
          type: "string",
        },
        {
          const: "ideograph-space",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
      ],
    },
    "Property.MsTouchSelect": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "grippers",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
      ],
    },
    "Property.MsUserSelect": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "element",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
        {
          const: "text",
          type: "string",
        },
      ],
    },
    "Property.MsWrapFlow": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "both",
          type: "string",
        },
        {
          const: "clear",
          type: "string",
        },
        {
          const: "end",
          type: "string",
        },
        {
          const: "maximum",
          type: "string",
        },
        {
          const: "start",
          type: "string",
        },
      ],
    },
    "Property.MsWrapMargin<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.MsWrapThrough": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "none",
          type: "string",
        },
        {
          const: "wrap",
          type: "string",
        },
      ],
    },
    "Property.ObjectFit": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "contain",
          type: "string",
        },
        {
          const: "cover",
          type: "string",
        },
        {
          const: "fill",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
        {
          const: "scale-down",
          type: "string",
        },
      ],
    },
    "Property.ObjectPosition<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Position%3C(string%7Cnumber)%3E",
        },
      ],
    },
    "Property.Offset<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Position%3C(string%7Cnumber)%3E",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
        {
          const: "normal",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.OffsetAnchor<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Position%3C(string%7Cnumber)%3E",
        },
        {
          const: "auto",
          type: "string",
        },
      ],
    },
    "Property.OffsetDistance<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.OffsetPath": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.OffsetPosition<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Position%3C(string%7Cnumber)%3E",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "normal",
          type: "string",
        },
      ],
    },
    "Property.OffsetRotate": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "reverse",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.Opacity": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.Order": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "number",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.Orphans": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "number",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.Outline<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Color",
        },
        {
          $ref: "#/definitions/DataType.LineStyle",
        },
        {
          $ref: "#/definitions/DataType.LineWidth%3C(string%7Cnumber)%3E",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "invert",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.OutlineColor": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Color",
        },
        {
          const: "invert",
          type: "string",
        },
      ],
    },
    "Property.OutlineOffset<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.OutlineStyle": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.LineStyle",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.OutlineWidth<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.LineWidth%3C(string%7Cnumber)%3E",
        },
      ],
    },
    "Property.Overflow": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "-moz-hidden-unscrollable",
          type: "string",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "clip",
          type: "string",
        },
        {
          const: "hidden",
          type: "string",
        },
        {
          const: "scroll",
          type: "string",
        },
        {
          const: "visible",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.OverflowAnchor": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
      ],
    },
    "Property.OverflowBlock": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "clip",
          type: "string",
        },
        {
          const: "hidden",
          type: "string",
        },
        {
          const: "scroll",
          type: "string",
        },
        {
          const: "visible",
          type: "string",
        },
      ],
    },
    "Property.OverflowClipBox": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "content-box",
          type: "string",
        },
        {
          const: "padding-box",
          type: "string",
        },
      ],
    },
    "Property.OverflowClipMargin<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.VisualBox",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.OverflowInline": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "clip",
          type: "string",
        },
        {
          const: "hidden",
          type: "string",
        },
        {
          const: "scroll",
          type: "string",
        },
        {
          const: "visible",
          type: "string",
        },
      ],
    },
    "Property.OverflowWrap": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "anywhere",
          type: "string",
        },
        {
          const: "break-word",
          type: "string",
        },
        {
          const: "normal",
          type: "string",
        },
      ],
    },
    "Property.OverflowX": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "-moz-hidden-unscrollable",
          type: "string",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "clip",
          type: "string",
        },
        {
          const: "hidden",
          type: "string",
        },
        {
          const: "scroll",
          type: "string",
        },
        {
          const: "visible",
          type: "string",
        },
      ],
    },
    "Property.OverflowY": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "-moz-hidden-unscrollable",
          type: "string",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "clip",
          type: "string",
        },
        {
          const: "hidden",
          type: "string",
        },
        {
          const: "scroll",
          type: "string",
        },
        {
          const: "visible",
          type: "string",
        },
      ],
    },
    "Property.Overlay": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
      ],
    },
    "Property.OverscrollBehavior": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "contain",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.OverscrollBehaviorBlock": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "contain",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
      ],
    },
    "Property.OverscrollBehaviorInline": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "contain",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
      ],
    },
    "Property.OverscrollBehaviorX": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "contain",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
      ],
    },
    "Property.OverscrollBehaviorY": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "contain",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
      ],
    },
    "Property.Padding<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.PaddingBlock<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.PaddingBlockEnd<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.PaddingBlockStart<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.PaddingBottom<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.PaddingInline<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.PaddingInlineEnd<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.PaddingInlineStart<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.PaddingLeft<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.PaddingRight<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.PaddingTop<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.Page": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.PageBreakAfter": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "always",
          type: "string",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "avoid",
          type: "string",
        },
        {
          const: "left",
          type: "string",
        },
        {
          const: "recto",
          type: "string",
        },
        {
          const: "right",
          type: "string",
        },
        {
          const: "verso",
          type: "string",
        },
      ],
    },
    "Property.PageBreakBefore": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "always",
          type: "string",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "avoid",
          type: "string",
        },
        {
          const: "left",
          type: "string",
        },
        {
          const: "recto",
          type: "string",
        },
        {
          const: "right",
          type: "string",
        },
        {
          const: "verso",
          type: "string",
        },
      ],
    },
    "Property.PageBreakInside": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "avoid",
          type: "string",
        },
      ],
    },
    "Property.PaintOrder": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "fill",
          type: "string",
        },
        {
          const: "markers",
          type: "string",
        },
        {
          const: "normal",
          type: "string",
        },
        {
          const: "stroke",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.Perspective<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "none",
          type: "string",
        },
      ],
    },
    "Property.PerspectiveOrigin<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Position%3C(string%7Cnumber)%3E",
        },
      ],
    },
    "Property.PlaceContent": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.ContentDistribution",
        },
        {
          $ref: "#/definitions/DataType.ContentPosition",
        },
        {
          const: "baseline",
          type: "string",
        },
        {
          const: "normal",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.PlaceItems": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.SelfPosition",
        },
        {
          const: "baseline",
          type: "string",
        },
        {
          const: "normal",
          type: "string",
        },
        {
          const: "stretch",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.PlaceSelf": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.SelfPosition",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "baseline",
          type: "string",
        },
        {
          const: "normal",
          type: "string",
        },
        {
          const: "stretch",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.PointerEvents": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "all",
          type: "string",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "fill",
          type: "string",
        },
        {
          const: "inherit",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
        {
          const: "painted",
          type: "string",
        },
        {
          const: "stroke",
          type: "string",
        },
        {
          const: "visible",
          type: "string",
        },
        {
          const: "visibleFill",
          type: "string",
        },
        {
          const: "visiblePainted",
          type: "string",
        },
        {
          const: "visibleStroke",
          type: "string",
        },
      ],
    },
    "Property.Position": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "-webkit-sticky",
          type: "string",
        },
        {
          const: "absolute",
          type: "string",
        },
        {
          const: "fixed",
          type: "string",
        },
        {
          const: "relative",
          type: "string",
        },
        {
          const: "static",
          type: "string",
        },
        {
          const: "sticky",
          type: "string",
        },
      ],
    },
    "Property.PrintColorAdjust": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "economy",
          type: "string",
        },
        {
          const: "exact",
          type: "string",
        },
      ],
    },
    "Property.Quotes": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.Resize": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "block",
          type: "string",
        },
        {
          const: "both",
          type: "string",
        },
        {
          const: "horizontal",
          type: "string",
        },
        {
          const: "inline",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
        {
          const: "vertical",
          type: "string",
        },
      ],
    },
    "Property.Right<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "auto",
          type: "string",
        },
      ],
    },
    "Property.Rotate": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.RowGap<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "normal",
          type: "string",
        },
      ],
    },
    "Property.RubyAlign": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "center",
          type: "string",
        },
        {
          const: "space-around",
          type: "string",
        },
        {
          const: "space-between",
          type: "string",
        },
        {
          const: "start",
          type: "string",
        },
      ],
    },
    "Property.RubyMerge": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "collapse",
          type: "string",
        },
        {
          const: "separate",
          type: "string",
        },
      ],
    },
    "Property.RubyPosition": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "alternate",
          type: "string",
        },
        {
          const: "inter-character",
          type: "string",
        },
        {
          const: "over",
          type: "string",
        },
        {
          const: "under",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.Scale": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.ScrollBehavior": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "smooth",
          type: "string",
        },
      ],
    },
    "Property.ScrollMargin<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.ScrollMarginBlock<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.ScrollMarginBlockEnd<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.ScrollMarginBlockStart<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.ScrollMarginBottom<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.ScrollMarginInline<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.ScrollMarginInlineEnd<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.ScrollMarginInlineStart<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.ScrollMarginLeft<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.ScrollMarginRight<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.ScrollMarginTop<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.ScrollPadding<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "auto",
          type: "string",
        },
      ],
    },
    "Property.ScrollPaddingBlock<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "auto",
          type: "string",
        },
      ],
    },
    "Property.ScrollPaddingBlockEnd<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "auto",
          type: "string",
        },
      ],
    },
    "Property.ScrollPaddingBlockStart<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "auto",
          type: "string",
        },
      ],
    },
    "Property.ScrollPaddingBottom<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "auto",
          type: "string",
        },
      ],
    },
    "Property.ScrollPaddingInline<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "auto",
          type: "string",
        },
      ],
    },
    "Property.ScrollPaddingInlineEnd<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "auto",
          type: "string",
        },
      ],
    },
    "Property.ScrollPaddingInlineStart<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "auto",
          type: "string",
        },
      ],
    },
    "Property.ScrollPaddingLeft<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "auto",
          type: "string",
        },
      ],
    },
    "Property.ScrollPaddingRight<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "auto",
          type: "string",
        },
      ],
    },
    "Property.ScrollPaddingTop<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "auto",
          type: "string",
        },
      ],
    },
    "Property.ScrollSnapAlign": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "center",
          type: "string",
        },
        {
          const: "end",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
        {
          const: "start",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.ScrollSnapCoordinate<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Position%3C(string%7Cnumber)%3E",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.ScrollSnapDestination<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Position%3C(string%7Cnumber)%3E",
        },
      ],
    },
    "Property.ScrollSnapPointsX": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.ScrollSnapPointsY": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.ScrollSnapStop": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "always",
          type: "string",
        },
        {
          const: "normal",
          type: "string",
        },
      ],
    },
    "Property.ScrollSnapType": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "block",
          type: "string",
        },
        {
          const: "both",
          type: "string",
        },
        {
          const: "inline",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
        {
          const: "x",
          type: "string",
        },
        {
          const: "y",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.ScrollSnapTypeX": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "mandatory",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
        {
          const: "proximity",
          type: "string",
        },
      ],
    },
    "Property.ScrollSnapTypeY": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "mandatory",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
        {
          const: "proximity",
          type: "string",
        },
      ],
    },
    "Property.ScrollTimeline": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.ScrollTimelineAxis": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "block",
          type: "string",
        },
        {
          const: "inline",
          type: "string",
        },
        {
          const: "x",
          type: "string",
        },
        {
          const: "y",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.ScrollTimelineName": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.ScrollbarColor": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.ScrollbarGutter": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "stable",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.ScrollbarWidth": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
        {
          const: "thin",
          type: "string",
        },
      ],
    },
    "Property.ShapeImageThreshold": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.ShapeMargin<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.ShapeOutside": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Box",
        },
        {
          const: "margin-box",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.ShapeRendering": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "crispEdges",
          type: "string",
        },
        {
          const: "geometricPrecision",
          type: "string",
        },
        {
          const: "optimizeSpeed",
          type: "string",
        },
      ],
    },
    "Property.StopColor": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Color",
        },
        {
          const: "currentColor",
          type: "string",
        },
      ],
    },
    "Property.StopOpacity": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "number",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.Stroke": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Paint",
        },
      ],
    },
    "Property.StrokeDasharray<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Dasharray%3C(string%7Cnumber)%3E",
        },
        {
          const: "none",
          type: "string",
        },
      ],
    },
    "Property.StrokeDashoffset<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.StrokeLinecap": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "butt",
          type: "string",
        },
        {
          const: "round",
          type: "string",
        },
        {
          const: "square",
          type: "string",
        },
      ],
    },
    "Property.StrokeLinejoin": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "bevel",
          type: "string",
        },
        {
          const: "miter",
          type: "string",
        },
        {
          const: "round",
          type: "string",
        },
      ],
    },
    "Property.StrokeMiterlimit": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "number",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.StrokeOpacity": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "number",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.StrokeWidth<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.TabSize<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.TableLayout": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "fixed",
          type: "string",
        },
      ],
    },
    "Property.TextAlign": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "-webkit-match-parent",
          type: "string",
        },
        {
          const: "center",
          type: "string",
        },
        {
          const: "end",
          type: "string",
        },
        {
          const: "justify",
          type: "string",
        },
        {
          const: "left",
          type: "string",
        },
        {
          const: "match-parent",
          type: "string",
        },
        {
          const: "right",
          type: "string",
        },
        {
          const: "start",
          type: "string",
        },
      ],
    },
    "Property.TextAlignLast": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "center",
          type: "string",
        },
        {
          const: "end",
          type: "string",
        },
        {
          const: "justify",
          type: "string",
        },
        {
          const: "left",
          type: "string",
        },
        {
          const: "right",
          type: "string",
        },
        {
          const: "start",
          type: "string",
        },
      ],
    },
    "Property.TextAnchor": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "end",
          type: "string",
        },
        {
          const: "middle",
          type: "string",
        },
        {
          const: "start",
          type: "string",
        },
      ],
    },
    "Property.TextCombineUpright": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "all",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.TextDecoration<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Color",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "blink",
          type: "string",
        },
        {
          const: "dashed",
          type: "string",
        },
        {
          const: "dotted",
          type: "string",
        },
        {
          const: "double",
          type: "string",
        },
        {
          const: "from-font",
          type: "string",
        },
        {
          const: "grammar-error",
          type: "string",
        },
        {
          const: "line-through",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
        {
          const: "overline",
          type: "string",
        },
        {
          const: "solid",
          type: "string",
        },
        {
          const: "spelling-error",
          type: "string",
        },
        {
          const: "underline",
          type: "string",
        },
        {
          const: "wavy",
          type: "string",
        },
      ],
    },
    "Property.TextDecorationColor": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Color",
        },
      ],
    },
    "Property.TextDecorationLine": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "blink",
          type: "string",
        },
        {
          const: "grammar-error",
          type: "string",
        },
        {
          const: "line-through",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
        {
          const: "overline",
          type: "string",
        },
        {
          const: "spelling-error",
          type: "string",
        },
        {
          const: "underline",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.TextDecorationSkip": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "box-decoration",
          type: "string",
        },
        {
          const: "edges",
          type: "string",
        },
        {
          const: "leading-spaces",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
        {
          const: "objects",
          type: "string",
        },
        {
          const: "spaces",
          type: "string",
        },
        {
          const: "trailing-spaces",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.TextDecorationSkipInk": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "all",
          type: "string",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
      ],
    },
    "Property.TextDecorationStyle": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "dashed",
          type: "string",
        },
        {
          const: "dotted",
          type: "string",
        },
        {
          const: "double",
          type: "string",
        },
        {
          const: "solid",
          type: "string",
        },
        {
          const: "wavy",
          type: "string",
        },
      ],
    },
    "Property.TextDecorationThickness<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "from-font",
          type: "string",
        },
      ],
    },
    "Property.TextEmphasis": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Color",
        },
        {
          const: "circle",
          type: "string",
        },
        {
          const: "dot",
          type: "string",
        },
        {
          const: "double-circle",
          type: "string",
        },
        {
          const: "filled",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
        {
          const: "open",
          type: "string",
        },
        {
          const: "sesame",
          type: "string",
        },
        {
          const: "triangle",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.TextEmphasisColor": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Color",
        },
      ],
    },
    "Property.TextEmphasisPosition": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.TextEmphasisStyle": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "circle",
          type: "string",
        },
        {
          const: "dot",
          type: "string",
        },
        {
          const: "double-circle",
          type: "string",
        },
        {
          const: "filled",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
        {
          const: "open",
          type: "string",
        },
        {
          const: "sesame",
          type: "string",
        },
        {
          const: "triangle",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.TextIndent<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.TextJustify": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "inter-character",
          type: "string",
        },
        {
          const: "inter-word",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
      ],
    },
    "Property.TextOrientation": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "mixed",
          type: "string",
        },
        {
          const: "sideways",
          type: "string",
        },
        {
          const: "upright",
          type: "string",
        },
      ],
    },
    "Property.TextOverflow": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "clip",
          type: "string",
        },
        {
          const: "ellipsis",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.TextRendering": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "geometricPrecision",
          type: "string",
        },
        {
          const: "optimizeLegibility",
          type: "string",
        },
        {
          const: "optimizeSpeed",
          type: "string",
        },
      ],
    },
    "Property.TextShadow": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.TextSizeAdjust": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.TextTransform": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "capitalize",
          type: "string",
        },
        {
          const: "full-size-kana",
          type: "string",
        },
        {
          const: "full-width",
          type: "string",
        },
        {
          const: "lowercase",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
        {
          const: "uppercase",
          type: "string",
        },
      ],
    },
    "Property.TextUnderlineOffset<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "auto",
          type: "string",
        },
      ],
    },
    "Property.TextUnderlinePosition": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "from-font",
          type: "string",
        },
        {
          const: "left",
          type: "string",
        },
        {
          const: "right",
          type: "string",
        },
        {
          const: "under",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.TextWrap": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "balance",
          type: "string",
        },
        {
          const: "nowrap",
          type: "string",
        },
        {
          const: "pretty",
          type: "string",
        },
        {
          const: "stable",
          type: "string",
        },
        {
          const: "wrap",
          type: "string",
        },
      ],
    },
    "Property.TimelineScope": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.Top<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "auto",
          type: "string",
        },
      ],
    },
    "Property.TouchAction": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "-ms-manipulation",
          type: "string",
        },
        {
          const: "-ms-none",
          type: "string",
        },
        {
          const: "-ms-pinch-zoom",
          type: "string",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "manipulation",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
        {
          const: "pan-down",
          type: "string",
        },
        {
          const: "pan-left",
          type: "string",
        },
        {
          const: "pan-right",
          type: "string",
        },
        {
          const: "pan-up",
          type: "string",
        },
        {
          const: "pan-x",
          type: "string",
        },
        {
          const: "pan-y",
          type: "string",
        },
        {
          const: "pinch-zoom",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.Transform": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.TransformBox": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "border-box",
          type: "string",
        },
        {
          const: "content-box",
          type: "string",
        },
        {
          const: "fill-box",
          type: "string",
        },
        {
          const: "stroke-box",
          type: "string",
        },
        {
          const: "view-box",
          type: "string",
        },
      ],
    },
    "Property.TransformOrigin<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "bottom",
          type: "string",
        },
        {
          const: "center",
          type: "string",
        },
        {
          const: "left",
          type: "string",
        },
        {
          const: "right",
          type: "string",
        },
        {
          const: "top",
          type: "string",
        },
      ],
    },
    "Property.TransformStyle": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "flat",
          type: "string",
        },
        {
          const: "preserve-3d",
          type: "string",
        },
      ],
    },
    "Property.Transition<string>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.SingleTransition%3Cstring%3E",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.TransitionBehavior": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "allow-discrete",
          type: "string",
        },
        {
          const: "normal",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.TransitionDelay<string>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.TransitionDuration<string>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.TransitionProperty": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "all",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.TransitionTimingFunction": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.EasingFunction",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.Translate<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "none",
          type: "string",
        },
      ],
    },
    "Property.UnicodeBidi": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "-moz-isolate",
          type: "string",
        },
        {
          const: "-moz-isolate-override",
          type: "string",
        },
        {
          const: "-moz-plaintext",
          type: "string",
        },
        {
          const: "-webkit-isolate",
          type: "string",
        },
        {
          const: "-webkit-isolate-override",
          type: "string",
        },
        {
          const: "-webkit-plaintext",
          type: "string",
        },
        {
          const: "bidi-override",
          type: "string",
        },
        {
          const: "embed",
          type: "string",
        },
        {
          const: "isolate",
          type: "string",
        },
        {
          const: "isolate-override",
          type: "string",
        },
        {
          const: "normal",
          type: "string",
        },
        {
          const: "plaintext",
          type: "string",
        },
      ],
    },
    "Property.UserSelect": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "-moz-none",
          type: "string",
        },
        {
          const: "all",
          type: "string",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "contain",
          type: "string",
        },
        {
          const: "element",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
        {
          const: "text",
          type: "string",
        },
      ],
    },
    "Property.VectorEffect": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "non-scaling-stroke",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
      ],
    },
    "Property.VerticalAlign<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "baseline",
          type: "string",
        },
        {
          const: "bottom",
          type: "string",
        },
        {
          const: "middle",
          type: "string",
        },
        {
          const: "sub",
          type: "string",
        },
        {
          const: "super",
          type: "string",
        },
        {
          const: "text-bottom",
          type: "string",
        },
        {
          const: "text-top",
          type: "string",
        },
        {
          const: "top",
          type: "string",
        },
      ],
    },
    "Property.ViewTimeline": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.ViewTimelineAxis": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "block",
          type: "string",
        },
        {
          const: "inline",
          type: "string",
        },
        {
          const: "x",
          type: "string",
        },
        {
          const: "y",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.ViewTimelineInset<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "auto",
          type: "string",
        },
      ],
    },
    "Property.ViewTimelineName": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.ViewTransitionName": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.Visibility": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "collapse",
          type: "string",
        },
        {
          const: "hidden",
          type: "string",
        },
        {
          const: "visible",
          type: "string",
        },
      ],
    },
    "Property.WebkitAppearance": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "-apple-pay-button",
          type: "string",
        },
        {
          const: "button",
          type: "string",
        },
        {
          const: "button-bevel",
          type: "string",
        },
        {
          const: "caret",
          type: "string",
        },
        {
          const: "checkbox",
          type: "string",
        },
        {
          const: "default-button",
          type: "string",
        },
        {
          const: "inner-spin-button",
          type: "string",
        },
        {
          const: "listbox",
          type: "string",
        },
        {
          const: "listitem",
          type: "string",
        },
        {
          const: "media-controls-background",
          type: "string",
        },
        {
          const: "media-controls-fullscreen-background",
          type: "string",
        },
        {
          const: "media-current-time-display",
          type: "string",
        },
        {
          const: "media-enter-fullscreen-button",
          type: "string",
        },
        {
          const: "media-exit-fullscreen-button",
          type: "string",
        },
        {
          const: "media-fullscreen-button",
          type: "string",
        },
        {
          const: "media-mute-button",
          type: "string",
        },
        {
          const: "media-overlay-play-button",
          type: "string",
        },
        {
          const: "media-play-button",
          type: "string",
        },
        {
          const: "media-seek-back-button",
          type: "string",
        },
        {
          const: "media-seek-forward-button",
          type: "string",
        },
        {
          const: "media-slider",
          type: "string",
        },
        {
          const: "media-sliderthumb",
          type: "string",
        },
        {
          const: "media-time-remaining-display",
          type: "string",
        },
        {
          const: "media-toggle-closed-captions-button",
          type: "string",
        },
        {
          const: "media-volume-slider",
          type: "string",
        },
        {
          const: "media-volume-slider-container",
          type: "string",
        },
        {
          const: "media-volume-sliderthumb",
          type: "string",
        },
        {
          const: "menulist",
          type: "string",
        },
        {
          const: "menulist-button",
          type: "string",
        },
        {
          const: "menulist-text",
          type: "string",
        },
        {
          const: "menulist-textfield",
          type: "string",
        },
        {
          const: "meter",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
        {
          const: "progress-bar",
          type: "string",
        },
        {
          const: "progress-bar-value",
          type: "string",
        },
        {
          const: "push-button",
          type: "string",
        },
        {
          const: "radio",
          type: "string",
        },
        {
          const: "searchfield",
          type: "string",
        },
        {
          const: "searchfield-cancel-button",
          type: "string",
        },
        {
          const: "searchfield-decoration",
          type: "string",
        },
        {
          const: "searchfield-results-button",
          type: "string",
        },
        {
          const: "searchfield-results-decoration",
          type: "string",
        },
        {
          const: "slider-horizontal",
          type: "string",
        },
        {
          const: "slider-vertical",
          type: "string",
        },
        {
          const: "sliderthumb-horizontal",
          type: "string",
        },
        {
          const: "sliderthumb-vertical",
          type: "string",
        },
        {
          const: "square-button",
          type: "string",
        },
        {
          const: "textarea",
          type: "string",
        },
        {
          const: "textfield",
          type: "string",
        },
      ],
    },
    "Property.WebkitBorderBefore<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.LineWidth%3C(string%7Cnumber)%3E",
        },
        {
          $ref: "#/definitions/DataType.LineStyle",
        },
        {
          $ref: "#/definitions/DataType.Color",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.WebkitBorderBeforeColor": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Color",
        },
      ],
    },
    "Property.WebkitBorderBeforeStyle": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.LineStyle",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.WebkitBorderBeforeWidth<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.LineWidth%3C(string%7Cnumber)%3E",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.WebkitBoxReflect<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "above",
          type: "string",
        },
        {
          const: "below",
          type: "string",
        },
        {
          const: "left",
          type: "string",
        },
        {
          const: "right",
          type: "string",
        },
      ],
    },
    "Property.WebkitLineClamp": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "number",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.WebkitMask<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Position%3C(string%7Cnumber)%3E",
        },
        {
          $ref: "#/definitions/DataType.RepeatStyle",
        },
        {
          $ref: "#/definitions/DataType.Box",
        },
        {
          const: "border",
          type: "string",
        },
        {
          const: "content",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
        {
          const: "padding",
          type: "string",
        },
        {
          const: "text",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.WebkitMaskAttachment": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Attachment",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.WebkitMaskClip": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Box",
        },
        {
          const: "border",
          type: "string",
        },
        {
          const: "content",
          type: "string",
        },
        {
          const: "padding",
          type: "string",
        },
        {
          const: "text",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.WebkitMaskComposite": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.CompositeStyle",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.WebkitMaskImage": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.WebkitMaskOrigin": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Box",
        },
        {
          const: "border",
          type: "string",
        },
        {
          const: "content",
          type: "string",
        },
        {
          const: "padding",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.WebkitMaskPosition<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Position%3C(string%7Cnumber)%3E",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.WebkitMaskPositionX<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "center",
          type: "string",
        },
        {
          const: "left",
          type: "string",
        },
        {
          const: "right",
          type: "string",
        },
      ],
    },
    "Property.WebkitMaskPositionY<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "bottom",
          type: "string",
        },
        {
          const: "center",
          type: "string",
        },
        {
          const: "top",
          type: "string",
        },
      ],
    },
    "Property.WebkitMaskRepeat": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.RepeatStyle",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.WebkitMaskRepeatX": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "no-repeat",
          type: "string",
        },
        {
          const: "repeat",
          type: "string",
        },
        {
          const: "round",
          type: "string",
        },
        {
          const: "space",
          type: "string",
        },
      ],
    },
    "Property.WebkitMaskRepeatY": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "no-repeat",
          type: "string",
        },
        {
          const: "repeat",
          type: "string",
        },
        {
          const: "round",
          type: "string",
        },
        {
          const: "space",
          type: "string",
        },
      ],
    },
    "Property.WebkitMaskSize<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.BgSize%3C(string%7Cnumber)%3E",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.WebkitOverflowScrolling": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "touch",
          type: "string",
        },
      ],
    },
    "Property.WebkitTapHighlightColor": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Color",
        },
      ],
    },
    "Property.WebkitTextFillColor": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Color",
        },
      ],
    },
    "Property.WebkitTextStroke<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Color",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.WebkitTextStrokeColor": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.Color",
        },
      ],
    },
    "Property.WebkitTextStrokeWidth<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "Property.WebkitTouchCallout": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "default",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
      ],
    },
    "Property.WebkitUserModify": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "read-only",
          type: "string",
        },
        {
          const: "read-write",
          type: "string",
        },
        {
          const: "read-write-plaintext-only",
          type: "string",
        },
      ],
    },
    "Property.WhiteSpace": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "-moz-pre-wrap",
          type: "string",
        },
        {
          const: "balance",
          type: "string",
        },
        {
          const: "break-spaces",
          type: "string",
        },
        {
          const: "collapse",
          type: "string",
        },
        {
          const: "discard",
          type: "string",
        },
        {
          const: "discard-after",
          type: "string",
        },
        {
          const: "discard-before",
          type: "string",
        },
        {
          const: "discard-inner",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
        {
          const: "normal",
          type: "string",
        },
        {
          const: "nowrap",
          type: "string",
        },
        {
          const: "pre",
          type: "string",
        },
        {
          const: "pre-line",
          type: "string",
        },
        {
          const: "pre-wrap",
          type: "string",
        },
        {
          const: "preserve",
          type: "string",
        },
        {
          const: "preserve-breaks",
          type: "string",
        },
        {
          const: "preserve-spaces",
          type: "string",
        },
        {
          const: "pretty",
          type: "string",
        },
        {
          const: "stable",
          type: "string",
        },
        {
          const: "wrap",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.WhiteSpaceCollapse": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "break-spaces",
          type: "string",
        },
        {
          const: "collapse",
          type: "string",
        },
        {
          const: "discard",
          type: "string",
        },
        {
          const: "preserve",
          type: "string",
        },
        {
          const: "preserve-breaks",
          type: "string",
        },
        {
          const: "preserve-spaces",
          type: "string",
        },
      ],
    },
    "Property.WhiteSpaceTrim": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "discard-after",
          type: "string",
        },
        {
          const: "discard-before",
          type: "string",
        },
        {
          const: "discard-inner",
          type: "string",
        },
        {
          const: "none",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.Widows": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "number",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.Width<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "-moz-fit-content",
          type: "string",
        },
        {
          const: "-moz-max-content",
          type: "string",
        },
        {
          const: "-moz-min-content",
          type: "string",
        },
        {
          const: "-webkit-fit-content",
          type: "string",
        },
        {
          const: "-webkit-max-content",
          type: "string",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          const: "fit-content",
          type: "string",
        },
        {
          const: "intrinsic",
          type: "string",
        },
        {
          const: "max-content",
          type: "string",
        },
        {
          const: "min-content",
          type: "string",
        },
        {
          const: "min-intrinsic",
          type: "string",
        },
      ],
    },
    "Property.WillChange": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          $ref: "#/definitions/DataType.AnimateableFeature",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.WordBreak": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "break-all",
          type: "string",
        },
        {
          const: "break-word",
          type: "string",
        },
        {
          const: "keep-all",
          type: "string",
        },
        {
          const: "normal",
          type: "string",
        },
      ],
    },
    "Property.WordSpacing<(string|number)>": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          const: "normal",
          type: "string",
        },
      ],
    },
    "Property.WordWrap": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "break-word",
          type: "string",
        },
        {
          const: "normal",
          type: "string",
        },
      ],
    },
    "Property.WritingMode": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "horizontal-tb",
          type: "string",
        },
        {
          const: "sideways-lr",
          type: "string",
        },
        {
          const: "sideways-rl",
          type: "string",
        },
        {
          const: "vertical-lr",
          type: "string",
        },
        {
          const: "vertical-rl",
          type: "string",
        },
      ],
    },
    "Property.ZIndex": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "auto",
          type: "string",
        },
        {
          type: "number",
        },
        {
          type: "string",
        },
      ],
    },
    "Property.Zoom": {
      anyOf: [
        {
          $ref: "#/definitions/Globals",
        },
        {
          const: "normal",
          type: "string",
        },
        {
          const: "reset",
          type: "string",
        },
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    "React.AnimationEventHandler<interface-173350239-481428-494898-173350239-0-1346177>":
      {
        $ref: "#/definitions/React.EventHandler%3CReact.AnimationEvent%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E%3E",
      },
    "React.AriaRole": {
      anyOf: [
        {
          type: "string",
        },
        {
          enum: [
            "alert",
            "alertdialog",
            "application",
            "article",
            "banner",
            "button",
            "cell",
            "checkbox",
            "columnheader",
            "combobox",
            "complementary",
            "contentinfo",
            "definition",
            "dialog",
            "directory",
            "document",
            "feed",
            "figure",
            "form",
            "grid",
            "gridcell",
            "group",
            "heading",
            "img",
            "link",
            "list",
            "listbox",
            "listitem",
            "log",
            "main",
            "marquee",
            "math",
            "menu",
            "menubar",
            "menuitem",
            "menuitemcheckbox",
            "menuitemradio",
            "navigation",
            "none",
            "note",
            "option",
            "presentation",
            "progressbar",
            "radio",
            "radiogroup",
            "region",
            "row",
            "rowgroup",
            "rowheader",
            "scrollbar",
            "search",
            "searchbox",
            "separator",
            "slider",
            "spinbutton",
            "status",
            "switch",
            "tab",
            "table",
            "tablist",
            "tabpanel",
            "term",
            "textbox",
            "timer",
            "toolbar",
            "tooltip",
            "tree",
            "treegrid",
            "treeitem",
          ],
          type: "string",
        },
      ],
    },
    "React.CSSProperties": {
      additionalProperties: false,
      properties: {
        KhtmlBoxAlign: {
          $ref: "#/definitions/Property.BoxAlign",
          deprecated: true,
          description:
            "The **`box-align`** CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.\n\n**Syntax**: `start | center | end | baseline | stretch`\n\n**Initial value**: `stretch`",
        },
        KhtmlBoxDirection: {
          $ref: "#/definitions/Property.BoxDirection",
          deprecated: true,
          description:
            "The **`box-direction`** CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).\n\n**Syntax**: `normal | reverse | inherit`\n\n**Initial value**: `normal`",
        },
        KhtmlBoxFlex: {
          $ref: "#/definitions/Property.BoxFlex",
          deprecated: true,
          description:
            "The **`-moz-box-flex`** and **`-webkit-box-flex`** CSS properties specify how a `-moz-box` or `-webkit-box` grows to fill the box that contains it, in the direction of the containing box's layout.\n\n**Syntax**: `<number>`\n\n**Initial value**: `0`",
        },
        KhtmlBoxFlexGroup: {
          $ref: "#/definitions/Property.BoxFlexGroup",
          deprecated: true,
          description:
            "The **`box-flex-group`** CSS property assigns the flexbox's child elements to a flex group.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `1`",
        },
        KhtmlBoxLines: {
          $ref: "#/definitions/Property.BoxLines",
          deprecated: true,
          description:
            "The **`box-lines`** CSS property determines whether the box may have a single or multiple lines (rows for horizontally oriented boxes, columns for vertically oriented boxes).\n\n**Syntax**: `single | multiple`\n\n**Initial value**: `single`",
        },
        KhtmlBoxOrdinalGroup: {
          $ref: "#/definitions/Property.BoxOrdinalGroup",
          deprecated: true,
          description:
            "The **`box-ordinal-group`** CSS property assigns the flexbox's child elements to an ordinal group.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `1`",
        },
        KhtmlBoxOrient: {
          $ref: "#/definitions/Property.BoxOrient",
          deprecated: true,
          description:
            "The **`box-orient`** CSS property sets whether an element lays out its contents horizontally or vertically.\n\n**Syntax**: `horizontal | vertical | inline-axis | block-axis | inherit`\n\n**Initial value**: `inline-axis` (`horizontal` in XUL)",
        },
        KhtmlBoxPack: {
          $ref: "#/definitions/Property.BoxPack",
          deprecated: true,
          description:
            "The **`-moz-box-pack`** and **`-webkit-box-pack`** CSS properties specify how a `-moz-box` or `-webkit-box` packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.\n\n**Syntax**: `start | center | end | justify`\n\n**Initial value**: `start`",
        },
        KhtmlLineBreak: {
          $ref: "#/definitions/Property.LineBreak",
          deprecated: true,
          description:
            "The **`line-break`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.\n\n**Syntax**: `auto | loose | normal | strict | anywhere`\n\n**Initial value**: `auto`",
        },
        KhtmlOpacity: {
          $ref: "#/definitions/Property.Opacity",
          deprecated: true,
          description:
            "The **`opacity`** CSS property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.\n\n**Syntax**: `<alpha-value>`\n\n**Initial value**: `1`",
        },
        KhtmlUserSelect: {
          $ref: "#/definitions/Property.UserSelect",
          deprecated: true,
          description:
            "The **`user-select`** CSS property controls whether the user can select text. This doesn't have any effect on content loaded as part of a browser's user interface (its chrome), except in textboxes.\n\n**Syntax**: `auto | text | none | contain | all`\n\n**Initial value**: `auto`",
        },
        MozAnimation: {
          $ref: "#/definitions/Property.Animation%3Cstring%3E",
          description:
            "The **`animation`** shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.\n\n**Syntax**: `<single-animation>#`",
        },
        MozAnimationDelay: {
          $ref: "#/definitions/Property.AnimationDelay%3Cstring%3E",
          description:
            "The **`animation-delay`** CSS property specifies the amount of time to wait from applying the animation to an element before beginning to perform the animation. The animation can start later, immediately from its beginning, or immediately and partway through the animation.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`",
        },
        MozAnimationDirection: {
          $ref: "#/definitions/Property.AnimationDirection",
          description:
            "The **`animation-direction`** CSS property sets whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward.\n\n**Syntax**: `<single-animation-direction>#`\n\n**Initial value**: `normal`",
        },
        MozAnimationDuration: {
          $ref: "#/definitions/Property.AnimationDuration%3Cstring%3E",
          description:
            "The **`animation-duration`** CSS property sets the length of time that an animation takes to complete one cycle.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`",
        },
        MozAnimationFillMode: {
          $ref: "#/definitions/Property.AnimationFillMode",
          description:
            "The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.\n\n**Syntax**: `<single-animation-fill-mode>#`\n\n**Initial value**: `none`",
        },
        MozAnimationIterationCount: {
          $ref: "#/definitions/Property.AnimationIterationCount",
          description:
            "The **`animation-iteration-count`** CSS property sets the number of times an animation sequence should be played before stopping.\n\n**Syntax**: `<single-animation-iteration-count>#`\n\n**Initial value**: `1`",
        },
        MozAnimationName: {
          $ref: "#/definitions/Property.AnimationName",
          description:
            "The **`animation-name`** CSS property specifies the names of one or more `@keyframes` at-rules that describe the animation to apply to an element. Multiple `@keyframe` at-rules are specified as a comma-separated list of names. If the specified name does not match any `@keyframe` at-rule, no properties are animated.\n\n**Syntax**: `[ none | <keyframes-name> ]#`\n\n**Initial value**: `none`",
        },
        MozAnimationPlayState: {
          $ref: "#/definitions/Property.AnimationPlayState",
          description:
            "The **`animation-play-state`** CSS property sets whether an animation is running or paused.\n\n**Syntax**: `<single-animation-play-state>#`\n\n**Initial value**: `running`",
        },
        MozAnimationTimingFunction: {
          $ref: "#/definitions/Property.AnimationTimingFunction",
          description:
            "The **`animation-timing-function`** CSS property sets how an animation progresses through the duration of each cycle.\n\n**Syntax**: `<easing-function>#`\n\n**Initial value**: `ease`",
        },
        MozAppearance: {
          $ref: "#/definitions/Property.MozAppearance",
          description:
            "The **`appearance`** CSS property is used to control native appearance of UI controls, that are based on operating system's theme.\n\n**Syntax**: `none | button | button-arrow-down | button-arrow-next | button-arrow-previous | button-arrow-up | button-bevel | button-focus | caret | checkbox | checkbox-container | checkbox-label | checkmenuitem | dualbutton | groupbox | listbox | listitem | menuarrow | menubar | menucheckbox | menuimage | menuitem | menuitemtext | menulist | menulist-button | menulist-text | menulist-textfield | menupopup | menuradio | menuseparator | meterbar | meterchunk | progressbar | progressbar-vertical | progresschunk | progresschunk-vertical | radio | radio-container | radio-label | radiomenuitem | range | range-thumb | resizer | resizerpanel | scale-horizontal | scalethumbend | scalethumb-horizontal | scalethumbstart | scalethumbtick | scalethumb-vertical | scale-vertical | scrollbarbutton-down | scrollbarbutton-left | scrollbarbutton-right | scrollbarbutton-up | scrollbarthumb-horizontal | scrollbarthumb-vertical | scrollbartrack-horizontal | scrollbartrack-vertical | searchfield | separator | sheet | spinner | spinner-downbutton | spinner-textfield | spinner-upbutton | splitter | statusbar | statusbarpanel | tab | tabpanel | tabpanels | tab-scroll-arrow-back | tab-scroll-arrow-forward | textfield | textfield-multiline | toolbar | toolbarbutton | toolbarbutton-dropdown | toolbargripper | toolbox | tooltip | treeheader | treeheadercell | treeheadersortarrow | treeitem | treeline | treetwisty | treetwistyopen | treeview | -moz-mac-unified-toolbar | -moz-win-borderless-glass | -moz-win-browsertabbar-toolbox | -moz-win-communicationstext | -moz-win-communications-toolbox | -moz-win-exclude-glass | -moz-win-glass | -moz-win-mediatext | -moz-win-media-toolbox | -moz-window-button-box | -moz-window-button-box-maximized | -moz-window-button-close | -moz-window-button-maximize | -moz-window-button-minimize | -moz-window-button-restore | -moz-window-frame-bottom | -moz-window-frame-left | -moz-window-frame-right | -moz-window-titlebar | -moz-window-titlebar-maximized`\n\n**Initial value**: `none` (but this value is overridden in the user agent CSS)",
        },
        MozBackfaceVisibility: {
          $ref: "#/definitions/Property.BackfaceVisibility",
          deprecated: true,
          description:
            "The **`backface-visibility`** CSS property sets whether the back face of an element is visible when turned towards the user.\n\n**Syntax**: `visible | hidden`\n\n**Initial value**: `visible`",
        },
        MozBackgroundClip: {
          $ref: "#/definitions/Property.BackgroundClip",
          deprecated: true,
          description:
            "The **`background-clip`** CSS property sets whether an element's background extends underneath its border box, padding box, or content box.\n\n**Syntax**: `<box>#`\n\n**Initial value**: `border-box`",
        },
        MozBackgroundInlinePolicy: {
          $ref: "#/definitions/Property.BoxDecorationBreak",
          deprecated: true,
          description:
            "The **`box-decoration-break`** CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.\n\n**Syntax**: `slice | clone`\n\n**Initial value**: `slice`",
        },
        MozBackgroundOrigin: {
          $ref: "#/definitions/Property.BackgroundOrigin",
          deprecated: true,
          description:
            "The **`background-origin`** CSS property sets the background's origin: from the border start, inside the border, or inside the padding.\n\n**Syntax**: `<box>#`\n\n**Initial value**: `padding-box`",
        },
        MozBackgroundSize: {
          $ref: "#/definitions/Property.BackgroundSize%3C(string%7Cnumber)%3E",
          deprecated: true,
          description:
            "The **`background-size`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.\n\n**Syntax**: `<bg-size>#`\n\n**Initial value**: `auto auto`",
        },
        MozBinding: {
          $ref: "#/definitions/Property.MozBinding",
          description:
            "The **`-moz-binding`** CSS property is used by Mozilla-based applications to attach an XBL binding to a DOM element.\n\n**Syntax**: `<url> | none`\n\n**Initial value**: `none`",
        },
        MozBorderBottomColors: {
          $ref: "#/definitions/Property.MozBorderBottomColors",
          description:
            "In Mozilla applications like Firefox, the **`-moz-border-bottom-colors`** CSS property sets a list of colors for the bottom border.\n\n**Syntax**: `<color>+ | none`\n\n**Initial value**: `none`",
        },
        MozBorderEndColor: {
          $ref: "#/definitions/Property.BorderInlineEndColor",
          description:
            "The **`border-inline-end-color`** CSS property defines the color of the logical inline-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-color'>`\n\n**Initial value**: `currentcolor`",
        },
        MozBorderEndStyle: {
          $ref: "#/definitions/Property.BorderInlineEndStyle",
          description:
            "The **`border-inline-end-style`** CSS property defines the style of the logical inline end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-style'>`\n\n**Initial value**: `none`",
        },
        MozBorderEndWidth: {
          $ref: "#/definitions/Property.BorderInlineEndWidth%3C(string%7Cnumber)%3E",
          description:
            "The **`border-inline-end-width`** CSS property defines the width of the logical inline-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-width'>`\n\n**Initial value**: `medium`",
        },
        MozBorderImage: {
          $ref: "#/definitions/Property.BorderImage",
          description:
            "The **`border-image`** CSS property draws an image around a given element. It replaces the element's regular border.\n\n**Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`",
        },
        MozBorderLeftColors: {
          $ref: "#/definitions/Property.MozBorderLeftColors",
          description:
            "In Mozilla applications like Firefox, the **`-moz-border-left-colors`** CSS property sets a list of colors for the left border.\n\n**Syntax**: `<color>+ | none`\n\n**Initial value**: `none`",
        },
        MozBorderRadius: {
          $ref: "#/definitions/Property.BorderRadius%3C(string%7Cnumber)%3E",
          deprecated: true,
          description:
            "The **`border-radius`** CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.\n\n**Syntax**: `<length-percentage>{1,4} [ / <length-percentage>{1,4} ]?`",
        },
        MozBorderRadiusBottomleft: {
          $ref: "#/definitions/Property.BorderBottomLeftRadius%3C(string%7Cnumber)%3E",
          deprecated: true,
          description:
            "The **`border-bottom-left-radius`** CSS property rounds the bottom-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`",
        },
        MozBorderRadiusBottomright: {
          $ref: "#/definitions/Property.BorderBottomRightRadius%3C(string%7Cnumber)%3E",
          deprecated: true,
          description:
            "The **`border-bottom-right-radius`** CSS property rounds the bottom-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`",
        },
        MozBorderRadiusTopleft: {
          $ref: "#/definitions/Property.BorderTopLeftRadius%3C(string%7Cnumber)%3E",
          deprecated: true,
          description:
            "The **`border-top-left-radius`** CSS property rounds the top-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`",
        },
        MozBorderRadiusTopright: {
          $ref: "#/definitions/Property.BorderTopRightRadius%3C(string%7Cnumber)%3E",
          deprecated: true,
          description:
            "The **`border-top-right-radius`** CSS property rounds the top-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`",
        },
        MozBorderRightColors: {
          $ref: "#/definitions/Property.MozBorderRightColors",
          description:
            "In Mozilla applications like Firefox, the **`-moz-border-right-colors`** CSS property sets a list of colors for the right border.\n\n**Syntax**: `<color>+ | none`\n\n**Initial value**: `none`",
        },
        MozBorderStartColor: {
          $ref: "#/definitions/Property.BorderInlineStartColor",
          description:
            "The **`border-inline-start-color`** CSS property defines the color of the logical inline start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-color'>`\n\n**Initial value**: `currentcolor`",
        },
        MozBorderStartStyle: {
          $ref: "#/definitions/Property.BorderInlineStartStyle",
          description:
            "The **`border-inline-start-style`** CSS property defines the style of the logical inline start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-style'>`\n\n**Initial value**: `none`",
        },
        MozBorderTopColors: {
          $ref: "#/definitions/Property.MozBorderTopColors",
          description:
            "In Mozilla applications like Firefox, the **`-moz-border-top-colors`** CSS property sets a list of colors for the top border.\n\n**Syntax**: `<color>+ | none`\n\n**Initial value**: `none`",
        },
        MozBoxAlign: {
          $ref: "#/definitions/Property.BoxAlign",
          deprecated: true,
          description:
            "The **`box-align`** CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.\n\n**Syntax**: `start | center | end | baseline | stretch`\n\n**Initial value**: `stretch`",
        },
        MozBoxDirection: {
          $ref: "#/definitions/Property.BoxDirection",
          deprecated: true,
          description:
            "The **`box-direction`** CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).\n\n**Syntax**: `normal | reverse | inherit`\n\n**Initial value**: `normal`",
        },
        MozBoxFlex: {
          $ref: "#/definitions/Property.BoxFlex",
          deprecated: true,
          description:
            "The **`-moz-box-flex`** and **`-webkit-box-flex`** CSS properties specify how a `-moz-box` or `-webkit-box` grows to fill the box that contains it, in the direction of the containing box's layout.\n\n**Syntax**: `<number>`\n\n**Initial value**: `0`",
        },
        MozBoxOrdinalGroup: {
          $ref: "#/definitions/Property.BoxOrdinalGroup",
          deprecated: true,
          description:
            "The **`box-ordinal-group`** CSS property assigns the flexbox's child elements to an ordinal group.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `1`",
        },
        MozBoxOrient: {
          $ref: "#/definitions/Property.BoxOrient",
          deprecated: true,
          description:
            "The **`box-orient`** CSS property sets whether an element lays out its contents horizontally or vertically.\n\n**Syntax**: `horizontal | vertical | inline-axis | block-axis | inherit`\n\n**Initial value**: `inline-axis` (`horizontal` in XUL)",
        },
        MozBoxPack: {
          $ref: "#/definitions/Property.BoxPack",
          deprecated: true,
          description:
            "The **`-moz-box-pack`** and **`-webkit-box-pack`** CSS properties specify how a `-moz-box` or `-webkit-box` packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.\n\n**Syntax**: `start | center | end | justify`\n\n**Initial value**: `start`",
        },
        MozBoxShadow: {
          $ref: "#/definitions/Property.BoxShadow",
          deprecated: true,
          description:
            "The **`box-shadow`** CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.\n\n**Syntax**: `none | <shadow>#`\n\n**Initial value**: `none`",
        },
        MozBoxSizing: {
          $ref: "#/definitions/Property.BoxSizing",
          description:
            "The **`box-sizing`** CSS property sets how the total width and height of an element is calculated.\n\n**Syntax**: `content-box | border-box`\n\n**Initial value**: `content-box`",
        },
        MozColumnCount: {
          $ref: "#/definitions/Property.ColumnCount",
          description:
            "The **`column-count`** CSS property breaks an element's content into the specified number of columns.\n\n**Syntax**: `<integer> | auto`\n\n**Initial value**: `auto`",
        },
        MozColumnFill: {
          $ref: "#/definitions/Property.ColumnFill",
          description:
            "The **`column-fill`** CSS property controls how an element's contents are balanced when broken into columns.\n\n**Syntax**: `auto | balance | balance-all`\n\n**Initial value**: `balance`",
        },
        MozColumnRule: {
          $ref: "#/definitions/Property.ColumnRule%3C(string%7Cnumber)%3E",
          description:
            "The **`column-rule`** shorthand CSS property sets the width, style, and color of the line drawn between columns in a multi-column layout.\n\n**Syntax**: `<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>`",
        },
        MozColumnRuleColor: {
          $ref: "#/definitions/Property.ColumnRuleColor",
          description:
            "The **`column-rule-color`** CSS property sets the color of the line drawn between columns in a multi-column layout.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`",
        },
        MozColumnRuleStyle: {
          $ref: "#/definitions/Property.ColumnRuleStyle",
          description:
            "The **`column-rule-style`** CSS property sets the style of the line drawn between columns in a multi-column layout.\n\n**Syntax**: `<'border-style'>`\n\n**Initial value**: `none`",
        },
        MozColumnRuleWidth: {
          $ref: "#/definitions/Property.ColumnRuleWidth%3C(string%7Cnumber)%3E",
          description:
            "The **`column-rule-width`** CSS property sets the width of the line drawn between columns in a multi-column layout.\n\n**Syntax**: `<'border-width'>`\n\n**Initial value**: `medium`",
        },
        MozColumnWidth: {
          $ref: "#/definitions/Property.ColumnWidth%3C(string%7Cnumber)%3E",
          description:
            "The **`column-width`** CSS property sets the ideal column width in a multi-column layout. The container will have as many columns as can fit without any of them having a width less than the `column-width` value. If the width of the container is narrower than the specified value, the single column's width will be smaller than the declared column width.\n\n**Syntax**: `<length> | auto`\n\n**Initial value**: `auto`",
        },
        MozColumns: {
          $ref: "#/definitions/Property.Columns%3C(string%7Cnumber)%3E",
          description:
            "The **`columns`** CSS shorthand property sets the number of columns to use when drawing an element's contents, as well as those columns' widths.\n\n**Syntax**: `<'column-width'> || <'column-count'>`",
        },
        MozContextProperties: {
          $ref: "#/definitions/Property.MozContextProperties",
          description:
            "The **`-moz-context-properties`** property can be used within privileged contexts in Firefox to share the values of specified properties of the element with a child SVG image.\n\n**Syntax**: `none | [ fill | fill-opacity | stroke | stroke-opacity ]#`\n\n**Initial value**: `none`",
        },
        MozFloatEdge: {
          $ref: "#/definitions/Property.MozFloatEdge",
          deprecated: true,
          description:
            "The non-standard **`-moz-float-edge`** CSS property specifies whether the height and width properties of the element include the margin, border, or padding thickness.\n\n**Syntax**: `border-box | content-box | margin-box | padding-box`\n\n**Initial value**: `content-box`",
        },
        MozFontFeatureSettings: {
          $ref: "#/definitions/Property.FontFeatureSettings",
          description:
            "The **`font-feature-settings`** CSS property controls advanced typographic features in OpenType fonts.\n\n**Syntax**: `normal | <feature-tag-value>#`\n\n**Initial value**: `normal`",
        },
        MozFontLanguageOverride: {
          $ref: "#/definitions/Property.FontLanguageOverride",
          description:
            "The **`font-language-override`** CSS property controls the use of language-specific glyphs in a typeface.\n\n**Syntax**: `normal | <string>`\n\n**Initial value**: `normal`",
        },
        MozForceBrokenImageIcon: {
          $ref: "#/definitions/Property.MozForceBrokenImageIcon",
          deprecated: true,
          description:
            "The **`-moz-force-broken-image-icon`** extended CSS property can be used to force the broken image icon to be shown even when a broken image has an `alt` attribute.\n\n**Syntax**: `0 | 1`\n\n**Initial value**: `0`",
        },
        MozHyphens: {
          $ref: "#/definitions/Property.Hyphens",
          description:
            "The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. It can prevent hyphenation entirely, hyphenate at manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.\n\n**Syntax**: `none | manual | auto`\n\n**Initial value**: `manual`",
        },
        MozImageRegion: {
          $ref: "#/definitions/Property.MozImageRegion",
          description:
            "For certain XUL elements and pseudo-elements that use an image from the `list-style-image` property, this property specifies a region of the image that is used in place of the whole image. This allows elements to use different pieces of the same image to improve performance.\n\n**Syntax**: `<shape> | auto`\n\n**Initial value**: `auto`",
        },
        MozMarginEnd: {
          $ref: "#/definitions/Property.MarginInlineEnd%3C(string%7Cnumber)%3E",
          description:
            "The **`margin-inline-end`** CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the `margin-top`, `margin-right`, `margin-bottom` or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'margin-left'>`\n\n**Initial value**: `0`",
        },
        MozMarginStart: {
          $ref: "#/definitions/Property.MarginInlineStart%3C(string%7Cnumber)%3E",
          description:
            "The **`margin-inline-start`** CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the `margin-top`, `margin-right`, `margin-bottom`, or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'margin-left'>`\n\n**Initial value**: `0`",
        },
        MozOpacity: {
          $ref: "#/definitions/Property.Opacity",
          deprecated: true,
          description:
            "The **`opacity`** CSS property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.\n\n**Syntax**: `<alpha-value>`\n\n**Initial value**: `1`",
        },
        MozOrient: {
          $ref: "#/definitions/Property.MozOrient",
          description:
            "The **`-moz-orient`** CSS property specifies the orientation of the element to which it's applied.\n\n**Syntax**: `inline | block | horizontal | vertical`\n\n**Initial value**: `inline`",
        },
        MozOsxFontSmoothing: {
          $ref: "#/definitions/Property.FontSmooth%3C(string%7Cnumber)%3E",
          description:
            "The **`font-smooth`** CSS property controls the application of anti-aliasing when fonts are rendered.\n\n**Syntax**: `auto | never | always | <absolute-size> | <length>`\n\n**Initial value**: `auto`",
        },
        MozOutline: {
          $ref: "#/definitions/Property.Outline%3C(string%7Cnumber)%3E",
          deprecated: true,
          description:
            "The **`outline`** CSS shorthand property sets most of the outline properties in a single declaration.\n\n**Syntax**: `[ <'outline-color'> || <'outline-style'> || <'outline-width'> ]`",
        },
        MozOutlineColor: {
          $ref: "#/definitions/Property.OutlineColor",
          deprecated: true,
          description:
            "The **`outline-color`** CSS property sets the color of an element's outline.\n\n**Syntax**: `<color> | invert`\n\n**Initial value**: `invert`, for browsers supporting it, `currentColor` for the other",
        },
        MozOutlineRadius: {
          $ref: "#/definitions/Property.MozOutlineRadius%3C(string%7Cnumber)%3E",
          description:
            "In Mozilla applications like Firefox, the **`-moz-outline-radius`** CSS shorthand property can be used to give an element's `outline` rounded corners.\n\n**Syntax**: `<outline-radius>{1,4} [ / <outline-radius>{1,4} ]?`",
        },
        MozOutlineRadiusBottomleft: {
          $ref: "#/definitions/Property.MozOutlineRadiusBottomleft%3C(string%7Cnumber)%3E",
          description:
            "In Mozilla applications, the **`-moz-outline-radius-bottomleft`** CSS property can be used to round the bottom-left corner of an element's `outline`.\n\n**Syntax**: `<outline-radius>`\n\n**Initial value**: `0`",
        },
        MozOutlineRadiusBottomright: {
          $ref: "#/definitions/Property.MozOutlineRadiusBottomright%3C(string%7Cnumber)%3E",
          description:
            "In Mozilla applications, the **`-moz-outline-radius-bottomright`** CSS property can be used to round the bottom-right corner of an element's `outline`.\n\n**Syntax**: `<outline-radius>`\n\n**Initial value**: `0`",
        },
        MozOutlineRadiusTopleft: {
          $ref: "#/definitions/Property.MozOutlineRadiusTopleft%3C(string%7Cnumber)%3E",
          description:
            "In Mozilla applications, the **`-moz-outline-radius-topleft`** CSS property can be used to round the top-left corner of an element's `outline`.\n\n**Syntax**: `<outline-radius>`\n\n**Initial value**: `0`",
        },
        MozOutlineRadiusTopright: {
          $ref: "#/definitions/Property.MozOutlineRadiusTopright%3C(string%7Cnumber)%3E",
          description:
            "In Mozilla applications, the **`-moz-outline-radius-topright`** CSS property can be used to round the top-right corner of an element's `outline`.\n\n**Syntax**: `<outline-radius>`\n\n**Initial value**: `0`",
        },
        MozOutlineStyle: {
          $ref: "#/definitions/Property.OutlineStyle",
          deprecated: true,
          description:
            "The **`outline-style`** CSS property sets the style of an element's outline. An outline is a line that is drawn around an element, outside the `border`.\n\n**Syntax**: `auto | <'border-style'>`\n\n**Initial value**: `none`",
        },
        MozOutlineWidth: {
          $ref: "#/definitions/Property.OutlineWidth%3C(string%7Cnumber)%3E",
          deprecated: true,
          description:
            "The CSS **`outline-width`** property sets the thickness of an element's outline. An outline is a line that is drawn around an element, outside the `border`.\n\n**Syntax**: `<line-width>`\n\n**Initial value**: `medium`",
        },
        MozPaddingEnd: {
          $ref: "#/definitions/Property.PaddingInlineEnd%3C(string%7Cnumber)%3E",
          description:
            "The **`padding-inline-end`** CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.\n\n**Syntax**: `<'padding-left'>`\n\n**Initial value**: `0`",
        },
        MozPaddingStart: {
          $ref: "#/definitions/Property.PaddingInlineStart%3C(string%7Cnumber)%3E",
          description:
            "The **`padding-inline-start`** CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.\n\n**Syntax**: `<'padding-left'>`\n\n**Initial value**: `0`",
        },
        MozPerspective: {
          $ref: "#/definitions/Property.Perspective%3C(string%7Cnumber)%3E",
          deprecated: true,
          description:
            "The **`perspective`** CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective.\n\n**Syntax**: `none | <length>`\n\n**Initial value**: `none`",
        },
        MozPerspectiveOrigin: {
          $ref: "#/definitions/Property.PerspectiveOrigin%3C(string%7Cnumber)%3E",
          deprecated: true,
          description:
            "The **`perspective-origin`** CSS property determines the position at which the viewer is looking. It is used as the _vanishing point_ by the `perspective` property.\n\n**Syntax**: `<position>`\n\n**Initial value**: `50% 50%`",
        },
        MozStackSizing: {
          $ref: "#/definitions/Property.MozStackSizing",
          description:
            "**`-moz-stack-sizing`** is an extended CSS property. Normally, a `<xul:stack>` will change its size so that all of its child elements are completely visible. For example, moving a child of the stack far to the right will widen the stack so the child remains visible.\n\n**Syntax**: `ignore | stretch-to-fit`\n\n**Initial value**: `stretch-to-fit`",
        },
        MozTabSize: {
          $ref: "#/definitions/Property.TabSize%3C(string%7Cnumber)%3E",
          description:
            "The **`tab-size`** CSS property is used to customize the width of tab characters (U+0009).\n\n**Syntax**: `<integer> | <length>`\n\n**Initial value**: `8`",
        },
        MozTextAlignLast: {
          $ref: "#/definitions/Property.TextAlignLast",
          deprecated: true,
          description:
            "The **`text-align-last`** CSS property sets how the last line of a block or a line, right before a forced line break, is aligned.\n\n**Syntax**: `auto | start | end | left | right | center | justify`\n\n**Initial value**: `auto`",
        },
        MozTextBlink: {
          $ref: "#/definitions/Property.MozTextBlink",
          description:
            "The **`-moz-text-blink`** non-standard Mozilla CSS extension specifies the blink mode.\n\n**Syntax**: `none | blink`\n\n**Initial value**: `none`",
        },
        MozTextDecorationColor: {
          $ref: "#/definitions/Property.TextDecorationColor",
          deprecated: true,
          description:
            "The **`text-decoration-color`** CSS property sets the color of decorations added to text by `text-decoration-line`.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`",
        },
        MozTextDecorationLine: {
          $ref: "#/definitions/Property.TextDecorationLine",
          deprecated: true,
          description:
            "The **`text-decoration-line`** CSS property sets the kind of decoration that is used on text in an element, such as an underline or overline.\n\n**Syntax**: `none | [ underline || overline || line-through || blink ] | spelling-error | grammar-error`\n\n**Initial value**: `none`",
        },
        MozTextDecorationStyle: {
          $ref: "#/definitions/Property.TextDecorationStyle",
          deprecated: true,
          description:
            "The **`text-decoration-style`** CSS property sets the style of the lines specified by `text-decoration-line`. The style applies to all lines that are set with `text-decoration-line`.\n\n**Syntax**: `solid | double | dotted | dashed | wavy`\n\n**Initial value**: `solid`",
        },
        MozTextSizeAdjust: {
          $ref: "#/definitions/Property.TextSizeAdjust",
          description:
            "The **`text-size-adjust`** CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.\n\n**Syntax**: `none | auto | <percentage>`\n\n**Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable).",
        },
        MozTransform: {
          $ref: "#/definitions/Property.Transform",
          deprecated: true,
          description:
            "The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.\n\n**Syntax**: `none | <transform-list>`\n\n**Initial value**: `none`",
        },
        MozTransformOrigin: {
          $ref: "#/definitions/Property.TransformOrigin%3C(string%7Cnumber)%3E",
          deprecated: true,
          description:
            "The **`transform-origin`** CSS property sets the origin for an element's transformations.\n\n**Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`\n\n**Initial value**: `50% 50% 0`",
        },
        MozTransformStyle: {
          $ref: "#/definitions/Property.TransformStyle",
          deprecated: true,
          description:
            "The **`transform-style`** CSS property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.\n\n**Syntax**: `flat | preserve-3d`\n\n**Initial value**: `flat`",
        },
        MozTransition: {
          $ref: "#/definitions/Property.Transition%3Cstring%3E",
          deprecated: true,
          description:
            "The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.\n\n**Syntax**: `<single-transition>#`",
        },
        MozTransitionDelay: {
          $ref: "#/definitions/Property.TransitionDelay%3Cstring%3E",
          deprecated: true,
          description:
            "The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`",
        },
        MozTransitionDuration: {
          $ref: "#/definitions/Property.TransitionDuration%3Cstring%3E",
          deprecated: true,
          description:
            "The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`",
        },
        MozTransitionProperty: {
          $ref: "#/definitions/Property.TransitionProperty",
          deprecated: true,
          description:
            "The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.\n\n**Syntax**: `none | <single-transition-property>#`\n\n**Initial value**: all",
        },
        MozTransitionTimingFunction: {
          $ref: "#/definitions/Property.TransitionTimingFunction",
          deprecated: true,
          description:
            "The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.\n\n**Syntax**: `<easing-function>#`\n\n**Initial value**: `ease`",
        },
        MozUserFocus: {
          $ref: "#/definitions/Property.MozUserFocus",
          description:
            "The **`-moz-user-focus`** CSS property is used to indicate whether an element can have the focus.\n\n**Syntax**: `ignore | normal | select-after | select-before | select-menu | select-same | select-all | none`\n\n**Initial value**: `none`",
        },
        MozUserInput: {
          $ref: "#/definitions/Property.MozUserInput",
          deprecated: true,
          description:
            "In Mozilla applications, **`-moz-user-input`** determines if an element will accept user input.\n\n**Syntax**: `auto | none | enabled | disabled`\n\n**Initial value**: `auto`",
        },
        MozUserModify: {
          $ref: "#/definitions/Property.MozUserModify",
          description:
            "The **`user-modify`** property has no effect in Firefox. It was originally planned to determine whether or not the content of an element can be edited by a user.\n\n**Syntax**: `read-only | read-write | write-only`\n\n**Initial value**: `read-only`",
        },
        MozUserSelect: {
          $ref: "#/definitions/Property.UserSelect",
          description:
            "The **`user-select`** CSS property controls whether the user can select text. This doesn't have any effect on content loaded as part of a browser's user interface (its chrome), except in textboxes.\n\n**Syntax**: `auto | text | none | contain | all`\n\n**Initial value**: `auto`",
        },
        MozWindowDragging: {
          $ref: "#/definitions/Property.MozWindowDragging",
          description:
            "The **`-moz-window-dragging`** CSS property specifies whether a window is draggable or not. It only works in Chrome code, and only on Mac OS X.\n\n**Syntax**: `drag | no-drag`\n\n**Initial value**: `drag`",
        },
        MozWindowShadow: {
          $ref: "#/definitions/Property.MozWindowShadow",
          description:
            "The **`-moz-window-shadow`** CSS property specifies whether a window will have a shadow. It only works on Mac OS X.\n\n**Syntax**: `default | menu | tooltip | sheet | none`\n\n**Initial value**: `default`",
        },
        OAnimation: {
          $ref: "#/definitions/Property.Animation%3Cstring%3E",
          deprecated: true,
          description:
            "The **`animation`** shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.\n\n**Syntax**: `<single-animation>#`",
        },
        OAnimationDelay: {
          $ref: "#/definitions/Property.AnimationDelay%3Cstring%3E",
          deprecated: true,
          description:
            "The **`animation-delay`** CSS property specifies the amount of time to wait from applying the animation to an element before beginning to perform the animation. The animation can start later, immediately from its beginning, or immediately and partway through the animation.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`",
        },
        OAnimationDirection: {
          $ref: "#/definitions/Property.AnimationDirection",
          deprecated: true,
          description:
            "The **`animation-direction`** CSS property sets whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward.\n\n**Syntax**: `<single-animation-direction>#`\n\n**Initial value**: `normal`",
        },
        OAnimationDuration: {
          $ref: "#/definitions/Property.AnimationDuration%3Cstring%3E",
          deprecated: true,
          description:
            "The **`animation-duration`** CSS property sets the length of time that an animation takes to complete one cycle.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`",
        },
        OAnimationFillMode: {
          $ref: "#/definitions/Property.AnimationFillMode",
          deprecated: true,
          description:
            "The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.\n\n**Syntax**: `<single-animation-fill-mode>#`\n\n**Initial value**: `none`",
        },
        OAnimationIterationCount: {
          $ref: "#/definitions/Property.AnimationIterationCount",
          deprecated: true,
          description:
            "The **`animation-iteration-count`** CSS property sets the number of times an animation sequence should be played before stopping.\n\n**Syntax**: `<single-animation-iteration-count>#`\n\n**Initial value**: `1`",
        },
        OAnimationName: {
          $ref: "#/definitions/Property.AnimationName",
          deprecated: true,
          description:
            "The **`animation-name`** CSS property specifies the names of one or more `@keyframes` at-rules that describe the animation to apply to an element. Multiple `@keyframe` at-rules are specified as a comma-separated list of names. If the specified name does not match any `@keyframe` at-rule, no properties are animated.\n\n**Syntax**: `[ none | <keyframes-name> ]#`\n\n**Initial value**: `none`",
        },
        OAnimationPlayState: {
          $ref: "#/definitions/Property.AnimationPlayState",
          deprecated: true,
          description:
            "The **`animation-play-state`** CSS property sets whether an animation is running or paused.\n\n**Syntax**: `<single-animation-play-state>#`\n\n**Initial value**: `running`",
        },
        OAnimationTimingFunction: {
          $ref: "#/definitions/Property.AnimationTimingFunction",
          deprecated: true,
          description:
            "The **`animation-timing-function`** CSS property sets how an animation progresses through the duration of each cycle.\n\n**Syntax**: `<easing-function>#`\n\n**Initial value**: `ease`",
        },
        OBackgroundSize: {
          $ref: "#/definitions/Property.BackgroundSize%3C(string%7Cnumber)%3E",
          deprecated: true,
          description:
            "The **`background-size`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.\n\n**Syntax**: `<bg-size>#`\n\n**Initial value**: `auto auto`",
        },
        OBorderImage: {
          $ref: "#/definitions/Property.BorderImage",
          deprecated: true,
          description:
            "The **`border-image`** CSS property draws an image around a given element. It replaces the element's regular border.\n\n**Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`",
        },
        OObjectFit: {
          $ref: "#/definitions/Property.ObjectFit",
          deprecated: true,
          description:
            "The **`object-fit`** CSS property sets how the content of a replaced element, such as an `<img>` or `<video>`, should be resized to fit its container.\n\n**Syntax**: `fill | contain | cover | none | scale-down`\n\n**Initial value**: `fill`",
        },
        OObjectPosition: {
          $ref: "#/definitions/Property.ObjectPosition%3C(string%7Cnumber)%3E",
          deprecated: true,
          description:
            "The **`object-position`** CSS property specifies the alignment of the selected replaced element's contents within the element's box. Areas of the box which aren't covered by the replaced element's object will show the element's background.\n\n**Syntax**: `<position>`\n\n**Initial value**: `50% 50%`",
        },
        OTabSize: {
          $ref: "#/definitions/Property.TabSize%3C(string%7Cnumber)%3E",
          deprecated: true,
          description:
            "The **`tab-size`** CSS property is used to customize the width of tab characters (U+0009).\n\n**Syntax**: `<integer> | <length>`\n\n**Initial value**: `8`",
        },
        OTextOverflow: {
          $ref: "#/definitions/Property.TextOverflow",
          deprecated: true,
          description:
            "The **`text-overflow`** CSS property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('`…`'), or display a custom string.\n\n**Syntax**: `[ clip | ellipsis | <string> ]{1,2}`\n\n**Initial value**: `clip`",
        },
        OTransform: {
          $ref: "#/definitions/Property.Transform",
          deprecated: true,
          description:
            "The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.\n\n**Syntax**: `none | <transform-list>`\n\n**Initial value**: `none`",
        },
        OTransformOrigin: {
          $ref: "#/definitions/Property.TransformOrigin%3C(string%7Cnumber)%3E",
          deprecated: true,
          description:
            "The **`transform-origin`** CSS property sets the origin for an element's transformations.\n\n**Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`\n\n**Initial value**: `50% 50% 0`",
        },
        OTransition: {
          $ref: "#/definitions/Property.Transition%3Cstring%3E",
          deprecated: true,
          description:
            "The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.\n\n**Syntax**: `<single-transition>#`",
        },
        OTransitionDelay: {
          $ref: "#/definitions/Property.TransitionDelay%3Cstring%3E",
          deprecated: true,
          description:
            "The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`",
        },
        OTransitionDuration: {
          $ref: "#/definitions/Property.TransitionDuration%3Cstring%3E",
          deprecated: true,
          description:
            "The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`",
        },
        OTransitionProperty: {
          $ref: "#/definitions/Property.TransitionProperty",
          deprecated: true,
          description:
            "The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.\n\n**Syntax**: `none | <single-transition-property>#`\n\n**Initial value**: all",
        },
        OTransitionTimingFunction: {
          $ref: "#/definitions/Property.TransitionTimingFunction",
          deprecated: true,
          description:
            "The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.\n\n**Syntax**: `<easing-function>#`\n\n**Initial value**: `ease`",
        },
        WebkitAlignContent: {
          $ref: "#/definitions/Property.AlignContent",
          description:
            "The CSS **`align-content`** property sets the distribution of space between and around content items along a flexbox's cross-axis or a grid's block axis.\n\n**Syntax**: `normal | <baseline-position> | <content-distribution> | <overflow-position>? <content-position>`\n\n**Initial value**: `normal`",
        },
        WebkitAlignItems: {
          $ref: "#/definitions/Property.AlignItems",
          description:
            "The CSS **`align-items`** property sets the `align-self` value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.\n\n**Syntax**: `normal | stretch | <baseline-position> | [ <overflow-position>? <self-position> ]`\n\n**Initial value**: `normal`",
        },
        WebkitAlignSelf: {
          $ref: "#/definitions/Property.AlignSelf",
          description:
            "The **`align-self`** CSS property overrides a grid or flex item's `align-items` value. In Grid, it aligns the item inside the grid area. In Flexbox, it aligns the item on the cross axis.\n\n**Syntax**: `auto | normal | stretch | <baseline-position> | <overflow-position>? <self-position>`\n\n**Initial value**: `auto`",
        },
        WebkitAnimation: {
          $ref: "#/definitions/Property.Animation%3Cstring%3E",
          description:
            "The **`animation`** shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.\n\n**Syntax**: `<single-animation>#`",
        },
        WebkitAnimationDelay: {
          $ref: "#/definitions/Property.AnimationDelay%3Cstring%3E",
          description:
            "The **`animation-delay`** CSS property specifies the amount of time to wait from applying the animation to an element before beginning to perform the animation. The animation can start later, immediately from its beginning, or immediately and partway through the animation.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`",
        },
        WebkitAnimationDirection: {
          $ref: "#/definitions/Property.AnimationDirection",
          description:
            "The **`animation-direction`** CSS property sets whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward.\n\n**Syntax**: `<single-animation-direction>#`\n\n**Initial value**: `normal`",
        },
        WebkitAnimationDuration: {
          $ref: "#/definitions/Property.AnimationDuration%3Cstring%3E",
          description:
            "The **`animation-duration`** CSS property sets the length of time that an animation takes to complete one cycle.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`",
        },
        WebkitAnimationFillMode: {
          $ref: "#/definitions/Property.AnimationFillMode",
          description:
            "The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.\n\n**Syntax**: `<single-animation-fill-mode>#`\n\n**Initial value**: `none`",
        },
        WebkitAnimationIterationCount: {
          $ref: "#/definitions/Property.AnimationIterationCount",
          description:
            "The **`animation-iteration-count`** CSS property sets the number of times an animation sequence should be played before stopping.\n\n**Syntax**: `<single-animation-iteration-count>#`\n\n**Initial value**: `1`",
        },
        WebkitAnimationName: {
          $ref: "#/definitions/Property.AnimationName",
          description:
            "The **`animation-name`** CSS property specifies the names of one or more `@keyframes` at-rules that describe the animation to apply to an element. Multiple `@keyframe` at-rules are specified as a comma-separated list of names. If the specified name does not match any `@keyframe` at-rule, no properties are animated.\n\n**Syntax**: `[ none | <keyframes-name> ]#`\n\n**Initial value**: `none`",
        },
        WebkitAnimationPlayState: {
          $ref: "#/definitions/Property.AnimationPlayState",
          description:
            "The **`animation-play-state`** CSS property sets whether an animation is running or paused.\n\n**Syntax**: `<single-animation-play-state>#`\n\n**Initial value**: `running`",
        },
        WebkitAnimationTimingFunction: {
          $ref: "#/definitions/Property.AnimationTimingFunction",
          description:
            "The **`animation-timing-function`** CSS property sets how an animation progresses through the duration of each cycle.\n\n**Syntax**: `<easing-function>#`\n\n**Initial value**: `ease`",
        },
        WebkitAppearance: {
          $ref: "#/definitions/Property.WebkitAppearance",
          description:
            "The **`appearance`** CSS property is used to control native appearance of UI controls, that are based on operating system's theme.\n\n**Syntax**: `none | button | button-bevel | caret | checkbox | default-button | inner-spin-button | listbox | listitem | media-controls-background | media-controls-fullscreen-background | media-current-time-display | media-enter-fullscreen-button | media-exit-fullscreen-button | media-fullscreen-button | media-mute-button | media-overlay-play-button | media-play-button | media-seek-back-button | media-seek-forward-button | media-slider | media-sliderthumb | media-time-remaining-display | media-toggle-closed-captions-button | media-volume-slider | media-volume-slider-container | media-volume-sliderthumb | menulist | menulist-button | menulist-text | menulist-textfield | meter | progress-bar | progress-bar-value | push-button | radio | searchfield | searchfield-cancel-button | searchfield-decoration | searchfield-results-button | searchfield-results-decoration | slider-horizontal | slider-vertical | sliderthumb-horizontal | sliderthumb-vertical | square-button | textarea | textfield | -apple-pay-button`\n\n**Initial value**: `none` (but this value is overridden in the user agent CSS)",
        },
        WebkitBackdropFilter: {
          $ref: "#/definitions/Property.BackdropFilter",
          description:
            "The **`backdrop-filter`** CSS property lets you apply graphical effects such as blurring or color shifting to the area behind an element. Because it applies to everything _behind_ the element, to see the effect you must make the element or its background at least partially transparent.\n\n**Syntax**: `none | <filter-function-list>`\n\n**Initial value**: `none`",
        },
        WebkitBackfaceVisibility: {
          $ref: "#/definitions/Property.BackfaceVisibility",
          description:
            "The **`backface-visibility`** CSS property sets whether the back face of an element is visible when turned towards the user.\n\n**Syntax**: `visible | hidden`\n\n**Initial value**: `visible`",
        },
        WebkitBackgroundClip: {
          $ref: "#/definitions/Property.BackgroundClip",
          description:
            "The **`background-clip`** CSS property sets whether an element's background extends underneath its border box, padding box, or content box.\n\n**Syntax**: `<box>#`\n\n**Initial value**: `border-box`",
        },
        WebkitBackgroundOrigin: {
          $ref: "#/definitions/Property.BackgroundOrigin",
          description:
            "The **`background-origin`** CSS property sets the background's origin: from the border start, inside the border, or inside the padding.\n\n**Syntax**: `<box>#`\n\n**Initial value**: `padding-box`",
        },
        WebkitBackgroundSize: {
          $ref: "#/definitions/Property.BackgroundSize%3C(string%7Cnumber)%3E",
          description:
            "The **`background-size`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.\n\n**Syntax**: `<bg-size>#`\n\n**Initial value**: `auto auto`",
        },
        WebkitBorderBefore: {
          $ref: "#/definitions/Property.WebkitBorderBefore%3C(string%7Cnumber)%3E",
          description:
            "The **`-webkit-border-before`** CSS property is a shorthand property for setting the individual logical block start border property values in a single place in the style sheet.\n\n**Syntax**: `<'border-width'> || <'border-style'> || <color>`",
        },
        WebkitBorderBeforeColor: {
          $ref: "#/definitions/Property.WebkitBorderBeforeColor",
          description:
            "**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`",
        },
        WebkitBorderBeforeStyle: {
          $ref: "#/definitions/Property.WebkitBorderBeforeStyle",
          description:
            "**Syntax**: `<'border-style'>`\n\n**Initial value**: `none`",
        },
        WebkitBorderBeforeWidth: {
          $ref: "#/definitions/Property.WebkitBorderBeforeWidth%3C(string%7Cnumber)%3E",
          description:
            "**Syntax**: `<'border-width'>`\n\n**Initial value**: `medium`",
        },
        WebkitBorderBottomLeftRadius: {
          $ref: "#/definitions/Property.BorderBottomLeftRadius%3C(string%7Cnumber)%3E",
          description:
            "The **`border-bottom-left-radius`** CSS property rounds the bottom-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`",
        },
        WebkitBorderBottomRightRadius: {
          $ref: "#/definitions/Property.BorderBottomRightRadius%3C(string%7Cnumber)%3E",
          description:
            "The **`border-bottom-right-radius`** CSS property rounds the bottom-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`",
        },
        WebkitBorderImage: {
          $ref: "#/definitions/Property.BorderImage",
          description:
            "The **`border-image`** CSS property draws an image around a given element. It replaces the element's regular border.\n\n**Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`",
        },
        WebkitBorderImageSlice: {
          $ref: "#/definitions/Property.BorderImageSlice",
          description:
            "The **`border-image-slice`** CSS property divides the image specified by `border-image-source` into regions. These regions form the components of an element's border image.\n\n**Syntax**: `<number-percentage>{1,4} && fill?`\n\n**Initial value**: `100%`",
        },
        WebkitBorderRadius: {
          $ref: "#/definitions/Property.BorderRadius%3C(string%7Cnumber)%3E",
          description:
            "The **`border-radius`** CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.\n\n**Syntax**: `<length-percentage>{1,4} [ / <length-percentage>{1,4} ]?`",
        },
        WebkitBorderTopLeftRadius: {
          $ref: "#/definitions/Property.BorderTopLeftRadius%3C(string%7Cnumber)%3E",
          description:
            "The **`border-top-left-radius`** CSS property rounds the top-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`",
        },
        WebkitBorderTopRightRadius: {
          $ref: "#/definitions/Property.BorderTopRightRadius%3C(string%7Cnumber)%3E",
          description:
            "The **`border-top-right-radius`** CSS property rounds the top-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`",
        },
        WebkitBoxAlign: {
          $ref: "#/definitions/Property.BoxAlign",
          deprecated: true,
          description:
            "The **`box-align`** CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.\n\n**Syntax**: `start | center | end | baseline | stretch`\n\n**Initial value**: `stretch`",
        },
        WebkitBoxDecorationBreak: {
          $ref: "#/definitions/Property.BoxDecorationBreak",
          description:
            "The **`box-decoration-break`** CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.\n\n**Syntax**: `slice | clone`\n\n**Initial value**: `slice`",
        },
        WebkitBoxDirection: {
          $ref: "#/definitions/Property.BoxDirection",
          deprecated: true,
          description:
            "The **`box-direction`** CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).\n\n**Syntax**: `normal | reverse | inherit`\n\n**Initial value**: `normal`",
        },
        WebkitBoxFlex: {
          $ref: "#/definitions/Property.BoxFlex",
          deprecated: true,
          description:
            "The **`-moz-box-flex`** and **`-webkit-box-flex`** CSS properties specify how a `-moz-box` or `-webkit-box` grows to fill the box that contains it, in the direction of the containing box's layout.\n\n**Syntax**: `<number>`\n\n**Initial value**: `0`",
        },
        WebkitBoxFlexGroup: {
          $ref: "#/definitions/Property.BoxFlexGroup",
          deprecated: true,
          description:
            "The **`box-flex-group`** CSS property assigns the flexbox's child elements to a flex group.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `1`",
        },
        WebkitBoxLines: {
          $ref: "#/definitions/Property.BoxLines",
          deprecated: true,
          description:
            "The **`box-lines`** CSS property determines whether the box may have a single or multiple lines (rows for horizontally oriented boxes, columns for vertically oriented boxes).\n\n**Syntax**: `single | multiple`\n\n**Initial value**: `single`",
        },
        WebkitBoxOrdinalGroup: {
          $ref: "#/definitions/Property.BoxOrdinalGroup",
          deprecated: true,
          description:
            "The **`box-ordinal-group`** CSS property assigns the flexbox's child elements to an ordinal group.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `1`",
        },
        WebkitBoxOrient: {
          $ref: "#/definitions/Property.BoxOrient",
          deprecated: true,
          description:
            "The **`box-orient`** CSS property sets whether an element lays out its contents horizontally or vertically.\n\n**Syntax**: `horizontal | vertical | inline-axis | block-axis | inherit`\n\n**Initial value**: `inline-axis` (`horizontal` in XUL)",
        },
        WebkitBoxPack: {
          $ref: "#/definitions/Property.BoxPack",
          deprecated: true,
          description:
            "The **`-moz-box-pack`** and **`-webkit-box-pack`** CSS properties specify how a `-moz-box` or `-webkit-box` packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.\n\n**Syntax**: `start | center | end | justify`\n\n**Initial value**: `start`",
        },
        WebkitBoxReflect: {
          $ref: "#/definitions/Property.WebkitBoxReflect%3C(string%7Cnumber)%3E",
          description:
            "The **`-webkit-box-reflect`** CSS property lets you reflect the content of an element in one specific direction.\n\n**Syntax**: `[ above | below | right | left ]? <length>? <image>?`\n\n**Initial value**: `none`",
        },
        WebkitBoxShadow: {
          $ref: "#/definitions/Property.BoxShadow",
          description:
            "The **`box-shadow`** CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.\n\n**Syntax**: `none | <shadow>#`\n\n**Initial value**: `none`",
        },
        WebkitBoxSizing: {
          $ref: "#/definitions/Property.BoxSizing",
          description:
            "The **`box-sizing`** CSS property sets how the total width and height of an element is calculated.\n\n**Syntax**: `content-box | border-box`\n\n**Initial value**: `content-box`",
        },
        WebkitClipPath: {
          $ref: "#/definitions/Property.ClipPath",
          description:
            "The **`clip-path`** CSS property creates a clipping region that sets what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden.\n\n**Syntax**: `<clip-source> | [ <basic-shape> || <geometry-box> ] | none`\n\n**Initial value**: `none`",
        },
        WebkitColumnCount: {
          $ref: "#/definitions/Property.ColumnCount",
          description:
            "The **`column-count`** CSS property breaks an element's content into the specified number of columns.\n\n**Syntax**: `<integer> | auto`\n\n**Initial value**: `auto`",
        },
        WebkitColumnFill: {
          $ref: "#/definitions/Property.ColumnFill",
          description:
            "The **`column-fill`** CSS property controls how an element's contents are balanced when broken into columns.\n\n**Syntax**: `auto | balance | balance-all`\n\n**Initial value**: `balance`",
        },
        WebkitColumnRule: {
          $ref: "#/definitions/Property.ColumnRule%3C(string%7Cnumber)%3E",
          description:
            "The **`column-rule`** shorthand CSS property sets the width, style, and color of the line drawn between columns in a multi-column layout.\n\n**Syntax**: `<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>`",
        },
        WebkitColumnRuleColor: {
          $ref: "#/definitions/Property.ColumnRuleColor",
          description:
            "The **`column-rule-color`** CSS property sets the color of the line drawn between columns in a multi-column layout.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`",
        },
        WebkitColumnRuleStyle: {
          $ref: "#/definitions/Property.ColumnRuleStyle",
          description:
            "The **`column-rule-style`** CSS property sets the style of the line drawn between columns in a multi-column layout.\n\n**Syntax**: `<'border-style'>`\n\n**Initial value**: `none`",
        },
        WebkitColumnRuleWidth: {
          $ref: "#/definitions/Property.ColumnRuleWidth%3C(string%7Cnumber)%3E",
          description:
            "The **`column-rule-width`** CSS property sets the width of the line drawn between columns in a multi-column layout.\n\n**Syntax**: `<'border-width'>`\n\n**Initial value**: `medium`",
        },
        WebkitColumnSpan: {
          $ref: "#/definitions/Property.ColumnSpan",
          description:
            "The **`column-span`** CSS property makes it possible for an element to span across all columns when its value is set to `all`.\n\n**Syntax**: `none | all`\n\n**Initial value**: `none`",
        },
        WebkitColumnWidth: {
          $ref: "#/definitions/Property.ColumnWidth%3C(string%7Cnumber)%3E",
          description:
            "The **`column-width`** CSS property sets the ideal column width in a multi-column layout. The container will have as many columns as can fit without any of them having a width less than the `column-width` value. If the width of the container is narrower than the specified value, the single column's width will be smaller than the declared column width.\n\n**Syntax**: `<length> | auto`\n\n**Initial value**: `auto`",
        },
        WebkitColumns: {
          $ref: "#/definitions/Property.Columns%3C(string%7Cnumber)%3E",
          description:
            "The **`columns`** CSS shorthand property sets the number of columns to use when drawing an element's contents, as well as those columns' widths.\n\n**Syntax**: `<'column-width'> || <'column-count'>`",
        },
        WebkitFilter: {
          $ref: "#/definitions/Property.Filter",
          description:
            "The **`filter`** CSS property applies graphical effects like blur or color shift to an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders.\n\n**Syntax**: `none | <filter-function-list>`\n\n**Initial value**: `none`",
        },
        WebkitFlex: {
          $ref: "#/definitions/Property.Flex%3C(string%7Cnumber)%3E",
          description:
            "The **`flex`** CSS shorthand property sets how a flex _item_ will grow or shrink to fit the space available in its flex container.\n\n**Syntax**: `none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`",
        },
        WebkitFlexBasis: {
          $ref: "#/definitions/Property.FlexBasis%3C(string%7Cnumber)%3E",
          description:
            "The **`flex-basis`** CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with `box-sizing`.\n\n**Syntax**: `content | <'width'>`\n\n**Initial value**: `auto`",
        },
        WebkitFlexDirection: {
          $ref: "#/definitions/Property.FlexDirection",
          description:
            "The **`flex-direction`** CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).\n\n**Syntax**: `row | row-reverse | column | column-reverse`\n\n**Initial value**: `row`",
        },
        WebkitFlexFlow: {
          $ref: "#/definitions/Property.FlexFlow",
          description:
            "The **`flex-flow`** CSS shorthand property specifies the direction of a flex container, as well as its wrapping behavior.\n\n**Syntax**: `<'flex-direction'> || <'flex-wrap'>`",
        },
        WebkitFlexGrow: {
          $ref: "#/definitions/Property.FlexGrow",
          description:
            "The **`flex-grow`** CSS property sets the flex grow factor of a flex item's main size.\n\n**Syntax**: `<number>`\n\n**Initial value**: `0`",
        },
        WebkitFlexShrink: {
          $ref: "#/definitions/Property.FlexShrink",
          description:
            "The **`flex-shrink`** CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to `flex-shrink`.\n\n**Syntax**: `<number>`\n\n**Initial value**: `1`",
        },
        WebkitFlexWrap: {
          $ref: "#/definitions/Property.FlexWrap",
          description:
            "The **`flex-wrap`** CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.\n\n**Syntax**: `nowrap | wrap | wrap-reverse`\n\n**Initial value**: `nowrap`",
        },
        WebkitFontFeatureSettings: {
          $ref: "#/definitions/Property.FontFeatureSettings",
          description:
            "The **`font-feature-settings`** CSS property controls advanced typographic features in OpenType fonts.\n\n**Syntax**: `normal | <feature-tag-value>#`\n\n**Initial value**: `normal`",
        },
        WebkitFontKerning: {
          $ref: "#/definitions/Property.FontKerning",
          description:
            "The **`font-kerning`** CSS property sets the use of the kerning information stored in a font.\n\n**Syntax**: `auto | normal | none`\n\n**Initial value**: `auto`",
        },
        WebkitFontSmoothing: {
          $ref: "#/definitions/Property.FontSmooth%3C(string%7Cnumber)%3E",
          description:
            "The **`font-smooth`** CSS property controls the application of anti-aliasing when fonts are rendered.\n\n**Syntax**: `auto | never | always | <absolute-size> | <length>`\n\n**Initial value**: `auto`",
        },
        WebkitFontVariantLigatures: {
          $ref: "#/definitions/Property.FontVariantLigatures",
          description:
            "The **`font-variant-ligatures`** CSS property controls which ligatures and contextual forms are used in textual content of the elements it applies to. This leads to more harmonized forms in the resulting text.\n\n**Syntax**: `normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> ]`\n\n**Initial value**: `normal`",
        },
        WebkitHyphenateCharacter: {
          $ref: "#/definitions/Property.HyphenateCharacter",
          description:
            "The **`hyphenate-character`** CSS property sets the character (or string) used at the end of a line before a hyphenation break.\n\n**Syntax**: `auto | <string>`\n\n**Initial value**: `auto`",
        },
        WebkitHyphens: {
          $ref: "#/definitions/Property.Hyphens",
          description:
            "The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. It can prevent hyphenation entirely, hyphenate at manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.\n\n**Syntax**: `none | manual | auto`\n\n**Initial value**: `manual`",
        },
        WebkitInitialLetter: {
          $ref: "#/definitions/Property.InitialLetter",
          description:
            "The `initial-letter` CSS property sets styling for dropped, raised, and sunken initial letters.\n\n**Syntax**: `normal | [ <number> <integer>? ]`\n\n**Initial value**: `normal`",
        },
        WebkitJustifyContent: {
          $ref: "#/definitions/Property.JustifyContent",
          description:
            "The CSS **`justify-content`** property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.\n\n**Syntax**: `normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ]`\n\n**Initial value**: `normal`",
        },
        WebkitLineBreak: {
          $ref: "#/definitions/Property.LineBreak",
          description:
            "The **`line-break`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.\n\n**Syntax**: `auto | loose | normal | strict | anywhere`\n\n**Initial value**: `auto`",
        },
        WebkitLineClamp: {
          $ref: "#/definitions/Property.WebkitLineClamp",
          description:
            "The **`-webkit-line-clamp`** CSS property allows limiting of the contents of a block to the specified number of lines.\n\n**Syntax**: `none | <integer>`\n\n**Initial value**: `none`",
        },
        WebkitMarginEnd: {
          $ref: "#/definitions/Property.MarginInlineEnd%3C(string%7Cnumber)%3E",
          description:
            "The **`margin-inline-end`** CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the `margin-top`, `margin-right`, `margin-bottom` or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'margin-left'>`\n\n**Initial value**: `0`",
        },
        WebkitMarginStart: {
          $ref: "#/definitions/Property.MarginInlineStart%3C(string%7Cnumber)%3E",
          description:
            "The **`margin-inline-start`** CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the `margin-top`, `margin-right`, `margin-bottom`, or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'margin-left'>`\n\n**Initial value**: `0`",
        },
        WebkitMask: {
          $ref: "#/definitions/Property.WebkitMask%3C(string%7Cnumber)%3E",
          description:
            "The **`mask`** CSS shorthand property hides an element (partially or fully) by masking or clipping the image at specific points.\n\n**Syntax**: `[ <mask-reference> || <position> [ / <bg-size> ]? || <repeat-style> || [ <box> | border | padding | content | text ] || [ <box> | border | padding | content ] ]#`",
        },
        WebkitMaskAttachment: {
          $ref: "#/definitions/Property.WebkitMaskAttachment",
          description:
            "If a `mask-image` is specified, `-webkit-mask-attachment` determines whether the mask image's position is fixed within the viewport, or scrolls along with its containing block.\n\n**Syntax**: `<attachment>#`\n\n**Initial value**: `scroll`",
        },
        WebkitMaskBoxImage: {
          $ref: "#/definitions/Property.MaskBorder",
          description:
            "The **`mask-border`** CSS shorthand property lets you create a mask along the edge of an element's border.\n\n**Syntax**: `<'mask-border-source'> || <'mask-border-slice'> [ / <'mask-border-width'>? [ / <'mask-border-outset'> ]? ]? || <'mask-border-repeat'> || <'mask-border-mode'>`",
        },
        WebkitMaskBoxImageOutset: {
          $ref: "#/definitions/Property.MaskBorderOutset%3C(string%7Cnumber)%3E",
          description:
            "The **`mask-border-outset`** CSS property specifies the distance by which an element's mask border is set out from its border box.\n\n**Syntax**: `[ <length> | <number> ]{1,4}`\n\n**Initial value**: `0`",
        },
        WebkitMaskBoxImageRepeat: {
          $ref: "#/definitions/Property.MaskBorderRepeat",
          description:
            "The **`mask-border-repeat`** CSS property sets how the edge regions of a source image are adjusted to fit the dimensions of an element's mask border.\n\n**Syntax**: `[ stretch | repeat | round | space ]{1,2}`\n\n**Initial value**: `stretch`",
        },
        WebkitMaskBoxImageSlice: {
          $ref: "#/definitions/Property.MaskBorderSlice",
          description:
            "The **`mask-border-slice`** CSS property divides the image set by `mask-border-source` into regions. These regions are used to form the components of an element's mask border.\n\n**Syntax**: `<number-percentage>{1,4} fill?`\n\n**Initial value**: `0`",
        },
        WebkitMaskBoxImageSource: {
          $ref: "#/definitions/Property.MaskBorderSource",
          description:
            "The **`mask-border-source`** CSS property sets the source image used to create an element's mask border.\n\n**Syntax**: `none | <image>`\n\n**Initial value**: `none`",
        },
        WebkitMaskBoxImageWidth: {
          $ref: "#/definitions/Property.MaskBorderWidth%3C(string%7Cnumber)%3E",
          description:
            "The **`mask-border-width`** CSS property sets the width of an element's mask border.\n\n**Syntax**: `[ <length-percentage> | <number> | auto ]{1,4}`\n\n**Initial value**: `auto`",
        },
        WebkitMaskClip: {
          $ref: "#/definitions/Property.WebkitMaskClip",
          description:
            "The **`mask-clip`** CSS property determines the area which is affected by a mask. The painted content of an element must be restricted to this area.\n\n**Syntax**: `[ <box> | border | padding | content | text ]#`\n\n**Initial value**: `border`",
        },
        WebkitMaskComposite: {
          $ref: "#/definitions/Property.WebkitMaskComposite",
          description:
            "The **`-webkit-mask-composite`** property specifies the manner in which multiple mask images applied to the same element are composited with one another. Mask images are composited in the opposite order that they are declared with the `-webkit-mask-image` property.\n\n**Syntax**: `<composite-style>#`\n\n**Initial value**: `source-over`",
        },
        WebkitMaskImage: {
          $ref: "#/definitions/Property.WebkitMaskImage",
          description:
            "The **`mask-image`** CSS property sets the image that is used as mask layer for an element. By default this means the alpha channel of the mask image will be multiplied with the alpha channel of the element. This can be controlled with the `mask-mode` property.\n\n**Syntax**: `<mask-reference>#`\n\n**Initial value**: `none`",
        },
        WebkitMaskOrigin: {
          $ref: "#/definitions/Property.WebkitMaskOrigin",
          description:
            "The **`mask-origin`** CSS property sets the origin of a mask.\n\n**Syntax**: `[ <box> | border | padding | content ]#`\n\n**Initial value**: `padding`",
        },
        WebkitMaskPosition: {
          $ref: "#/definitions/Property.WebkitMaskPosition%3C(string%7Cnumber)%3E",
          description:
            "The **`mask-position`** CSS property sets the initial position, relative to the mask position layer set by `mask-origin`, for each defined mask image.\n\n**Syntax**: `<position>#`\n\n**Initial value**: `0% 0%`",
        },
        WebkitMaskPositionX: {
          $ref: "#/definitions/Property.WebkitMaskPositionX%3C(string%7Cnumber)%3E",
          description:
            "The `-webkit-mask-position-x` CSS property sets the initial horizontal position of a mask image.\n\n**Syntax**: `[ <length-percentage> | left | center | right ]#`\n\n**Initial value**: `0%`",
        },
        WebkitMaskPositionY: {
          $ref: "#/definitions/Property.WebkitMaskPositionY%3C(string%7Cnumber)%3E",
          description:
            "The `-webkit-mask-position-y` CSS property sets the initial vertical position of a mask image.\n\n**Syntax**: `[ <length-percentage> | top | center | bottom ]#`\n\n**Initial value**: `0%`",
        },
        WebkitMaskRepeat: {
          $ref: "#/definitions/Property.WebkitMaskRepeat",
          description:
            "The **`mask-repeat`** CSS property sets how mask images are repeated. A mask image can be repeated along the horizontal axis, the vertical axis, both axes, or not repeated at all.\n\n**Syntax**: `<repeat-style>#`\n\n**Initial value**: `repeat`",
        },
        WebkitMaskRepeatX: {
          $ref: "#/definitions/Property.WebkitMaskRepeatX",
          description:
            "The `-webkit-mask-repeat-x` property specifies whether and how a mask image is repeated (tiled) horizontally.\n\n**Syntax**: `repeat | no-repeat | space | round`\n\n**Initial value**: `repeat`",
        },
        WebkitMaskRepeatY: {
          $ref: "#/definitions/Property.WebkitMaskRepeatY",
          description:
            "The `-webkit-mask-repeat-y` property sets whether and how a mask image is repeated (tiled) vertically.\n\n**Syntax**: `repeat | no-repeat | space | round`\n\n**Initial value**: `repeat`",
        },
        WebkitMaskSize: {
          $ref: "#/definitions/Property.WebkitMaskSize%3C(string%7Cnumber)%3E",
          description:
            "The **`mask-size`** CSS property specifies the sizes of the mask images. The size of the image can be fully or partially constrained in order to preserve its intrinsic ratio.\n\n**Syntax**: `<bg-size>#`\n\n**Initial value**: `auto auto`",
        },
        WebkitMaxInlineSize: {
          $ref: "#/definitions/Property.MaxInlineSize%3C(string%7Cnumber)%3E",
          description:
            "The **`max-inline-size`** CSS property defines the horizontal or vertical maximum size of an element's block, depending on its writing mode. It corresponds to either the `max-width` or the `max-height` property, depending on the value of `writing-mode`.\n\n**Syntax**: `<'max-width'>`\n\n**Initial value**: `none`",
        },
        WebkitOrder: {
          $ref: "#/definitions/Property.Order",
          description:
            "The **`order`** CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending `order` value and then by their source code order.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `0`",
        },
        WebkitOverflowScrolling: {
          $ref: "#/definitions/Property.WebkitOverflowScrolling",
          description:
            "The `-webkit-overflow-scrolling` CSS property controls whether or not touch devices use momentum-based scrolling for a given element.\n\n**Syntax**: `auto | touch`\n\n**Initial value**: `auto`",
        },
        WebkitPaddingEnd: {
          $ref: "#/definitions/Property.PaddingInlineEnd%3C(string%7Cnumber)%3E",
          description:
            "The **`padding-inline-end`** CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.\n\n**Syntax**: `<'padding-left'>`\n\n**Initial value**: `0`",
        },
        WebkitPaddingStart: {
          $ref: "#/definitions/Property.PaddingInlineStart%3C(string%7Cnumber)%3E",
          description:
            "The **`padding-inline-start`** CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.\n\n**Syntax**: `<'padding-left'>`\n\n**Initial value**: `0`",
        },
        WebkitPerspective: {
          $ref: "#/definitions/Property.Perspective%3C(string%7Cnumber)%3E",
          description:
            "The **`perspective`** CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective.\n\n**Syntax**: `none | <length>`\n\n**Initial value**: `none`",
        },
        WebkitPerspectiveOrigin: {
          $ref: "#/definitions/Property.PerspectiveOrigin%3C(string%7Cnumber)%3E",
          description:
            "The **`perspective-origin`** CSS property determines the position at which the viewer is looking. It is used as the _vanishing point_ by the `perspective` property.\n\n**Syntax**: `<position>`\n\n**Initial value**: `50% 50%`",
        },
        WebkitPrintColorAdjust: {
          $ref: "#/definitions/Property.PrintColorAdjust",
          description:
            "The **`print-color-adjust`** CSS property sets what, if anything, the user agent may do to optimize the appearance of the element on the output device. By default, the browser is allowed to make any adjustments to the element's appearance it determines to be necessary and prudent given the type and capabilities of the output device.\n\n**Syntax**: `economy | exact`\n\n**Initial value**: `economy`",
        },
        WebkitRubyPosition: {
          $ref: "#/definitions/Property.RubyPosition",
          description:
            "The **`ruby-position`** CSS property defines the position of a ruby element relatives to its base element. It can be positioned over the element (`over`), under it (`under`), or between the characters on their right side (`inter-character`).\n\n**Syntax**: `[ alternate || [ over | under ] ] | inter-character`\n\n**Initial value**: `alternate`",
        },
        WebkitScrollSnapType: {
          $ref: "#/definitions/Property.ScrollSnapType",
          description:
            "The **`scroll-snap-type`** CSS property sets how strictly snap points are enforced on the scroll container in case there is one.\n\n**Syntax**: `none | [ x | y | block | inline | both ] [ mandatory | proximity ]?`\n\n**Initial value**: `none`",
        },
        WebkitShapeMargin: {
          $ref: "#/definitions/Property.ShapeMargin%3C(string%7Cnumber)%3E",
          description:
            "The **`shape-margin`** CSS property sets a margin for a CSS shape created using `shape-outside`.\n\n**Syntax**: `<length-percentage>`\n\n**Initial value**: `0`",
        },
        WebkitTapHighlightColor: {
          $ref: "#/definitions/Property.WebkitTapHighlightColor",
          description:
            "**`-webkit-tap-highlight-color`** is a non-standard CSS property that sets the color of the highlight that appears over a link while it's being tapped. The highlighting indicates to the user that their tap is being successfully recognized, and indicates which element they're tapping on.\n\n**Syntax**: `<color>`\n\n**Initial value**: `black`",
        },
        WebkitTextCombine: {
          $ref: "#/definitions/Property.TextCombineUpright",
          description:
            "The **`text-combine-upright`** CSS property sets the combination of characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.\n\n**Syntax**: `none | all | [ digits <integer>? ]`\n\n**Initial value**: `none`",
        },
        WebkitTextDecorationColor: {
          $ref: "#/definitions/Property.TextDecorationColor",
          description:
            "The **`text-decoration-color`** CSS property sets the color of decorations added to text by `text-decoration-line`.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`",
        },
        WebkitTextDecorationLine: {
          $ref: "#/definitions/Property.TextDecorationLine",
          description:
            "The **`text-decoration-line`** CSS property sets the kind of decoration that is used on text in an element, such as an underline or overline.\n\n**Syntax**: `none | [ underline || overline || line-through || blink ] | spelling-error | grammar-error`\n\n**Initial value**: `none`",
        },
        WebkitTextDecorationSkip: {
          $ref: "#/definitions/Property.TextDecorationSkip",
          description:
            "The **`text-decoration-skip`** CSS property sets what parts of an element's content any text decoration affecting the element must skip over. It controls all text decoration lines drawn by the element and also any text decoration lines drawn by its ancestors.\n\n**Syntax**: `none | [ objects || [ spaces | [ leading-spaces || trailing-spaces ] ] || edges || box-decoration ]`\n\n**Initial value**: `objects`",
        },
        WebkitTextDecorationStyle: {
          $ref: "#/definitions/Property.TextDecorationStyle",
          description:
            "The **`text-decoration-style`** CSS property sets the style of the lines specified by `text-decoration-line`. The style applies to all lines that are set with `text-decoration-line`.\n\n**Syntax**: `solid | double | dotted | dashed | wavy`\n\n**Initial value**: `solid`",
        },
        WebkitTextEmphasis: {
          $ref: "#/definitions/Property.TextEmphasis",
          description:
            "The **`text-emphasis`** CSS property applies emphasis marks to text (except spaces and control characters). It is a shorthand for `text-emphasis-style` and `text-emphasis-color`.\n\n**Syntax**: `<'text-emphasis-style'> || <'text-emphasis-color'>`",
        },
        WebkitTextEmphasisColor: {
          $ref: "#/definitions/Property.TextEmphasisColor",
          description:
            "The **`text-emphasis-color`** CSS property sets the color of emphasis marks. This value can also be set using the `text-emphasis` shorthand.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`",
        },
        WebkitTextEmphasisPosition: {
          $ref: "#/definitions/Property.TextEmphasisPosition",
          description:
            "The **`text-emphasis-position`** CSS property sets where emphasis marks are drawn. Like ruby text, if there isn't enough room for emphasis marks, the line height is increased.\n\n**Syntax**: `[ over | under ] && [ right | left ]`\n\n**Initial value**: `over right`",
        },
        WebkitTextEmphasisStyle: {
          $ref: "#/definitions/Property.TextEmphasisStyle",
          description:
            "The **`text-emphasis-style`** CSS property sets the appearance of emphasis marks. It can also be set, and reset, using the `text-emphasis` shorthand.\n\n**Syntax**: `none | [ [ filled | open ] || [ dot | circle | double-circle | triangle | sesame ] ] | <string>`\n\n**Initial value**: `none`",
        },
        WebkitTextFillColor: {
          $ref: "#/definitions/Property.WebkitTextFillColor",
          description:
            "The **`-webkit-text-fill-color`** CSS property specifies the fill color of characters of text. If this property is not set, the value of the `color` property is used.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`",
        },
        WebkitTextOrientation: {
          $ref: "#/definitions/Property.TextOrientation",
          description:
            "The **`text-orientation`** CSS property sets the orientation of the text characters in a line. It only affects text in vertical mode (when `writing-mode` is not `horizontal-tb`). It is useful for controlling the display of languages that use vertical script, and also for making vertical table headers.\n\n**Syntax**: `mixed | upright | sideways`\n\n**Initial value**: `mixed`",
        },
        WebkitTextSizeAdjust: {
          $ref: "#/definitions/Property.TextSizeAdjust",
          description:
            "The **`text-size-adjust`** CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.\n\n**Syntax**: `none | auto | <percentage>`\n\n**Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable).",
        },
        WebkitTextStroke: {
          $ref: "#/definitions/Property.WebkitTextStroke%3C(string%7Cnumber)%3E",
          description:
            "The **`-webkit-text-stroke`** CSS property specifies the width and color of strokes for text characters. This is a shorthand property for the longhand properties `-webkit-text-stroke-width` and `-webkit-text-stroke-color`.\n\n**Syntax**: `<length> || <color>`",
        },
        WebkitTextStrokeColor: {
          $ref: "#/definitions/Property.WebkitTextStrokeColor",
          description:
            "The **`-webkit-text-stroke-color`** CSS property specifies the stroke color of characters of text. If this property is not set, the value of the `color` property is used.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`",
        },
        WebkitTextStrokeWidth: {
          $ref: "#/definitions/Property.WebkitTextStrokeWidth%3C(string%7Cnumber)%3E",
          description:
            "The **`-webkit-text-stroke-width`** CSS property specifies the width of the stroke for text.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`",
        },
        WebkitTextUnderlinePosition: {
          $ref: "#/definitions/Property.TextUnderlinePosition",
          description:
            "The **`text-underline-position`** CSS property specifies the position of the underline which is set using the `text-decoration` property's `underline` value.\n\n**Syntax**: `auto | from-font | [ under || [ left | right ] ]`\n\n**Initial value**: `auto`",
        },
        WebkitTouchCallout: {
          $ref: "#/definitions/Property.WebkitTouchCallout",
          description:
            "The `-webkit-touch-callout` CSS property controls the display of the default callout shown when you touch and hold a touch target.\n\n**Syntax**: `default | none`\n\n**Initial value**: `default`",
        },
        WebkitTransform: {
          $ref: "#/definitions/Property.Transform",
          description:
            "The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.\n\n**Syntax**: `none | <transform-list>`\n\n**Initial value**: `none`",
        },
        WebkitTransformOrigin: {
          $ref: "#/definitions/Property.TransformOrigin%3C(string%7Cnumber)%3E",
          description:
            "The **`transform-origin`** CSS property sets the origin for an element's transformations.\n\n**Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`\n\n**Initial value**: `50% 50% 0`",
        },
        WebkitTransformStyle: {
          $ref: "#/definitions/Property.TransformStyle",
          description:
            "The **`transform-style`** CSS property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.\n\n**Syntax**: `flat | preserve-3d`\n\n**Initial value**: `flat`",
        },
        WebkitTransition: {
          $ref: "#/definitions/Property.Transition%3Cstring%3E",
          description:
            "The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.\n\n**Syntax**: `<single-transition>#`",
        },
        WebkitTransitionDelay: {
          $ref: "#/definitions/Property.TransitionDelay%3Cstring%3E",
          description:
            "The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`",
        },
        WebkitTransitionDuration: {
          $ref: "#/definitions/Property.TransitionDuration%3Cstring%3E",
          description:
            "The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`",
        },
        WebkitTransitionProperty: {
          $ref: "#/definitions/Property.TransitionProperty",
          description:
            "The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.\n\n**Syntax**: `none | <single-transition-property>#`\n\n**Initial value**: all",
        },
        WebkitTransitionTimingFunction: {
          $ref: "#/definitions/Property.TransitionTimingFunction",
          description:
            "The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.\n\n**Syntax**: `<easing-function>#`\n\n**Initial value**: `ease`",
        },
        WebkitUserModify: {
          $ref: "#/definitions/Property.WebkitUserModify",
          description:
            "**Syntax**: `read-only | read-write | read-write-plaintext-only`\n\n**Initial value**: `read-only`",
        },
        WebkitUserSelect: {
          $ref: "#/definitions/Property.UserSelect",
          description:
            "The **`user-select`** CSS property controls whether the user can select text. This doesn't have any effect on content loaded as part of a browser's user interface (its chrome), except in textboxes.\n\n**Syntax**: `auto | text | none | contain | all`\n\n**Initial value**: `auto`",
        },
        WebkitWritingMode: {
          $ref: "#/definitions/Property.WritingMode",
          description:
            "The **`writing-mode`** CSS property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress. When set for an entire document, it should be set on the root element (`html` element for HTML documents).\n\n**Syntax**: `horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr`\n\n**Initial value**: `horizontal-tb`",
        },
        accentColor: {
          $ref: "#/definitions/Property.AccentColor",
          description:
            "The **`accent-color`** CSS property sets the accent color for user-interface controls generated by some elements.\n\n**Syntax**: `auto | <color>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **93** | **92**  | **15.4** | n/a  | No  |",
        },
        alignContent: {
          $ref: "#/definitions/Property.AlignContent",
          description:
            "The CSS **`align-content`** property sets the distribution of space between and around content items along a flexbox's cross-axis or a grid's block axis.\n\n**Syntax**: `normal | <baseline-position> | <content-distribution> | <overflow-position>? <content-position>`\n\n**Initial value**: `normal`\n\n|  Chrome  | Firefox | Safari  |  Edge  |   IE   | | :------: | :-----: | :-----: | :----: | :----: | |  **29**  | **28**  |  **9**  | **12** | **11** | | 21 _-x-_ |         | 7 _-x-_ |        |        |",
        },
        alignItems: {
          $ref: "#/definitions/Property.AlignItems",
          description:
            "The CSS **`align-items`** property sets the `align-self` value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.\n\n**Syntax**: `normal | stretch | <baseline-position> | [ <overflow-position>? <self-position> ]`\n\n**Initial value**: `normal`\n\n|  Chrome  | Firefox | Safari  |  Edge  |   IE   | | :------: | :-----: | :-----: | :----: | :----: | |  **29**  | **20**  |  **9**  | **12** | **11** | | 21 _-x-_ |         | 7 _-x-_ |        |        |",
        },
        alignSelf: {
          $ref: "#/definitions/Property.AlignSelf",
          description:
            "The **`align-self`** CSS property overrides a grid or flex item's `align-items` value. In Grid, it aligns the item inside the grid area. In Flexbox, it aligns the item on the cross axis.\n\n**Syntax**: `auto | normal | stretch | <baseline-position> | <overflow-position>? <self-position>`\n\n**Initial value**: `auto`\n\n|  Chrome  | Firefox | Safari  |  Edge  |   IE   | | :------: | :-----: | :-----: | :----: | :----: | |  **29**  | **20**  |  **9**  | **12** | **10** | | 21 _-x-_ |         | 7 _-x-_ |        |        |",
        },
        alignTracks: {
          $ref: "#/definitions/Property.AlignTracks",
          description:
            "The **`align-tracks`** CSS property sets the alignment in the masonry axis for grid containers that have masonry in their block axis.\n\n**Syntax**: `[ normal | <baseline-position> | <content-distribution> | <overflow-position>? <content-position> ]#`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | |   No   |   n/a   |   No   | n/a  | No  |",
        },
        alignmentBaseline: {
          $ref: "#/definitions/Property.AlignmentBaseline",
        },
        all: {
          $ref: "#/definitions/Property.All",
          description:
            "The **`all`** shorthand CSS property resets all of an element's properties except `unicode-bidi`, `direction`, and CSS Custom Properties. It can set properties to their initial or inherited values, or to the values specified in another cascade layer or stylesheet origin.\n\n**Syntax**: `initial | inherit | unset | revert | revert-layer`\n\n**Initial value**: There is no practical initial value for it.\n\n| Chrome | Firefox | Safari  | Edge | IE  | | :----: | :-----: | :-----: | :--: | :-: | | **37** | **27**  | **9.1** | n/a  | No  |",
        },
        animation: {
          $ref: "#/definitions/Property.Animation%3Cstring%3E",
          description:
            "The **`animation`** shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.\n\n**Syntax**: `<single-animation>#`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   | | :-----: | :-----: | :-----: | :----: | :----: | | **43**  | **16**  |  **9**  | **12** | **10** | | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |",
        },
        animationComposition: {
          $ref: "#/definitions/Property.AnimationComposition",
          description:
            "The **`animation-composition`** CSS property specifies the composite operation to use when multiple animations affect the same property simultaneously.\n\n**Syntax**: `<single-animation-composition>#`\n\n**Initial value**: `replace`\n\n| Chrome  | Firefox | Safari | Edge | IE  | | :-----: | :-----: | :----: | :--: | :-: | | **112** | **115** | **16** | n/a  | No  |",
        },
        animationDelay: {
          $ref: "#/definitions/Property.AnimationDelay%3Cstring%3E",
          description:
            "The **`animation-delay`** CSS property specifies the amount of time to wait from applying the animation to an element before beginning to perform the animation. The animation can start later, immediately from its beginning, or immediately and partway through the animation.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   | | :-----: | :-----: | :-----: | :----: | :----: | | **43**  | **16**  |  **9**  | **12** | **10** | | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |",
        },
        animationDirection: {
          $ref: "#/definitions/Property.AnimationDirection",
          description:
            "The **`animation-direction`** CSS property sets whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward.\n\n**Syntax**: `<single-animation-direction>#`\n\n**Initial value**: `normal`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   | | :-----: | :-----: | :-----: | :----: | :----: | | **43**  | **16**  |  **9**  | **12** | **10** | | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |",
        },
        animationDuration: {
          $ref: "#/definitions/Property.AnimationDuration%3Cstring%3E",
          description:
            "The **`animation-duration`** CSS property sets the length of time that an animation takes to complete one cycle.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   | | :-----: | :-----: | :-----: | :----: | :----: | | **43**  | **16**  |  **9**  | **12** | **10** | | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |",
        },
        animationFillMode: {
          $ref: "#/definitions/Property.AnimationFillMode",
          description:
            "The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.\n\n**Syntax**: `<single-animation-fill-mode>#`\n\n**Initial value**: `none`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   | | :-----: | :-----: | :-----: | :----: | :----: | | **43**  | **16**  |  **9**  | **12** | **10** | | 3 _-x-_ | 5 _-x-_ | 5 _-x-_ |        |        |",
        },
        animationIterationCount: {
          $ref: "#/definitions/Property.AnimationIterationCount",
          description:
            "The **`animation-iteration-count`** CSS property sets the number of times an animation sequence should be played before stopping.\n\n**Syntax**: `<single-animation-iteration-count>#`\n\n**Initial value**: `1`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   | | :-----: | :-----: | :-----: | :----: | :----: | | **43**  | **16**  |  **9**  | **12** | **10** | | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |",
        },
        animationName: {
          $ref: "#/definitions/Property.AnimationName",
          description:
            "The **`animation-name`** CSS property specifies the names of one or more `@keyframes` at-rules that describe the animation to apply to an element. Multiple `@keyframe` at-rules are specified as a comma-separated list of names. If the specified name does not match any `@keyframe` at-rule, no properties are animated.\n\n**Syntax**: `[ none | <keyframes-name> ]#`\n\n**Initial value**: `none`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   | | :-----: | :-----: | :-----: | :----: | :----: | | **43**  | **16**  |  **9**  | **12** | **10** | | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |",
        },
        animationPlayState: {
          $ref: "#/definitions/Property.AnimationPlayState",
          description:
            "The **`animation-play-state`** CSS property sets whether an animation is running or paused.\n\n**Syntax**: `<single-animation-play-state>#`\n\n**Initial value**: `running`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   | | :-----: | :-----: | :-----: | :----: | :----: | | **43**  | **16**  |  **9**  | **12** | **10** | | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |",
        },
        animationRange: {
          $ref: "#/definitions/Property.AnimationRange%3C(string%7Cnumber)%3E",
          description:
            "The **`animation-range`** CSS shorthand property is used to set the start and end of an animation's attachment range along its timeline, i.e. where along the timeline an animation will start and end.\n\n**Syntax**: `[ <'animation-range-start'> <'animation-range-end'>? ]#`\n\n| Chrome  | Firefox | Safari | Edge | IE  | | :-----: | :-----: | :----: | :--: | :-: | | **115** |   No    |   No   | n/a  | No  |",
        },
        animationRangeEnd: {
          $ref: "#/definitions/Property.AnimationRangeEnd%3C(string%7Cnumber)%3E",
          description:
            "The **`animation-range-end`** CSS property is used to set the end of an animation's attachment range along its timeline, i.e. where along the timeline an animation will end.\n\n**Syntax**: `[ normal | <length-percentage> | <timeline-range-name> <length-percentage>? ]#`\n\n**Initial value**: `normal`\n\n| Chrome  | Firefox | Safari | Edge | IE  | | :-----: | :-----: | :----: | :--: | :-: | | **115** |   No    |   No   | n/a  | No  |",
        },
        animationRangeStart: {
          $ref: "#/definitions/Property.AnimationRangeStart%3C(string%7Cnumber)%3E",
          description:
            "The **`animation-range-start`** CSS property is used to set the start of an animation's attachment range along its timeline, i.e. where along the timeline an animation will start.\n\n**Syntax**: `[ normal | <length-percentage> | <timeline-range-name> <length-percentage>? ]#`\n\n**Initial value**: `normal`\n\n| Chrome  | Firefox | Safari | Edge | IE  | | :-----: | :-----: | :----: | :--: | :-: | | **115** |   No    |   No   | n/a  | No  |",
        },
        animationTimeline: {
          $ref: "#/definitions/Property.AnimationTimeline",
          description:
            "The **`animation-timeline`** CSS property specifies the timeline that is used to control the progress of an animation.\n\n**Syntax**: `<single-animation-timeline>#`\n\n**Initial value**: `auto`\n\n| Chrome  | Firefox | Safari | Edge | IE  | | :-----: | :-----: | :----: | :--: | :-: | | **115** |   n/a   |   No   | n/a  | No  |",
        },
        animationTimingFunction: {
          $ref: "#/definitions/Property.AnimationTimingFunction",
          description:
            "The **`animation-timing-function`** CSS property sets how an animation progresses through the duration of each cycle.\n\n**Syntax**: `<easing-function>#`\n\n**Initial value**: `ease`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   | | :-----: | :-----: | :-----: | :----: | :----: | | **43**  | **16**  |  **9**  | **12** | **10** | | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |",
        },
        appearance: {
          $ref: "#/definitions/Property.Appearance",
          description:
            "The **`appearance`** CSS property is used to control native appearance of UI controls, that are based on operating system's theme.\n\n**Syntax**: `none | auto | textfield | menulist-button | <compat-auto>`\n\n**Initial value**: `none`\n\n| Chrome  | Firefox |  Safari  |   Edge   | IE  | | :-----: | :-----: | :------: | :------: | :-: | | **84**  | **80**  | **15.4** |  **84**  | No  | | 1 _-x-_ | 1 _-x-_ | 3 _-x-_  | 12 _-x-_ |     |",
        },
        aspectRatio: {
          $ref: "#/definitions/Property.AspectRatio",
          description:
            "The **`aspect-ratio`** CSS property sets a **preferred aspect ratio** for the box, which will be used in the calculation of auto sizes and some other layout functions.\n\n**Syntax**: `auto | <ratio>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **88** | **89**  | **15** | n/a  | No  |",
        },
        azimuth: {
          $ref: "#/definitions/Property.Azimuth",
          deprecated: true,
          description:
            "In combination with `elevation`, the **`azimuth`** CSS property enables different audio sources to be positioned spatially for aural presentation. This is important in that it provides a natural way to tell several voices apart, as each can be positioned to originate at a different location on the sound stage. Stereo output produce a lateral sound stage, while binaural headphones and multi-speaker setups allow for a fully three-dimensional stage.\n\n**Syntax**: `<angle> | [ [ left-side | far-left | left | center-left | center | center-right | right | far-right | right-side ] || behind ] | leftwards | rightwards`\n\n**Initial value**: `center`",
        },
        backdropFilter: {
          $ref: "#/definitions/Property.BackdropFilter",
          description:
            "The **`backdrop-filter`** CSS property lets you apply graphical effects such as blurring or color shifting to the area behind an element. Because it applies to everything _behind_ the element, to see the effect you must make the element or its background at least partially transparent.\n\n**Syntax**: `none | <filter-function-list>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox |   Safari    |  Edge  | IE  | | :----: | :-----: | :---------: | :----: | :-: | | **76** | **103** | **9** _-x-_ | **17** | No  |",
        },
        backfaceVisibility: {
          $ref: "#/definitions/Property.BackfaceVisibility",
          description:
            "The **`backface-visibility`** CSS property sets whether the back face of an element is visible when turned towards the user.\n\n**Syntax**: `visible | hidden`\n\n**Initial value**: `visible`\n\n|  Chrome  | Firefox |  Safari   |  Edge  |   IE   | | :------: | :-----: | :-------: | :----: | :----: | |  **36**  | **16**  | **15.4**  | **12** | **10** | | 12 _-x-_ |         | 5.1 _-x-_ |        |        |",
        },
        background: {
          $ref: "#/definitions/Property.Background%3C(string%7Cnumber)%3E",
          description:
            "The **`background`** shorthand CSS property sets all background style properties at once, such as color, image, origin and size, or repeat method.\n\n**Syntax**: `[ <bg-layer> , ]* <final-bg-layer>`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
        },
        backgroundAttachment: {
          $ref: "#/definitions/Property.BackgroundAttachment",
          description:
            "The **`background-attachment`** CSS property sets whether a background image's position is fixed within the viewport, or scrolls with its containing block.\n\n**Syntax**: `<attachment>#`\n\n**Initial value**: `scroll`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
        },
        backgroundBlendMode: {
          $ref: "#/definitions/Property.BackgroundBlendMode",
          description:
            "The **`background-blend-mode`** CSS property sets how an element's background images should blend with each other and with the element's background color.\n\n**Syntax**: `<blend-mode>#`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **35** | **30**  | **8**  | n/a  | No  |",
        },
        backgroundClip: {
          $ref: "#/definitions/Property.BackgroundClip",
          description:
            "The **`background-clip`** CSS property sets whether an element's background extends underneath its border box, padding box, or content box.\n\n**Syntax**: `<box>#`\n\n**Initial value**: `border-box`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   | | :----: | :-----: | :-----: | :----: | :---: | | **1**  |  **4**  |  **5**  | **12** | **9** | |        |         | 3 _-x-_ |        |       |",
        },
        backgroundColor: {
          $ref: "#/definitions/Property.BackgroundColor",
          description:
            "The **`background-color`** CSS property sets the background color of an element.\n\n**Syntax**: `<color>`\n\n**Initial value**: `transparent`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
        },
        backgroundImage: {
          $ref: "#/definitions/Property.BackgroundImage",
          description:
            "The **`background-image`** CSS property sets one or more background images on an element.\n\n**Syntax**: `<bg-image>#`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
        },
        backgroundOrigin: {
          $ref: "#/definitions/Property.BackgroundOrigin",
          description:
            "The **`background-origin`** CSS property sets the background's origin: from the border start, inside the border, or inside the padding.\n\n**Syntax**: `<box>#`\n\n**Initial value**: `padding-box`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **4**  | **3**  | **12** | **9** |",
        },
        backgroundPosition: {
          $ref: "#/definitions/Property.BackgroundPosition%3C(string%7Cnumber)%3E",
          description:
            "The **`background-position`** CSS property sets the initial position for each background image. The position is relative to the position layer set by `background-origin`.\n\n**Syntax**: `<bg-position>#`\n\n**Initial value**: `0% 0%`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
        },
        backgroundPositionX: {
          $ref: "#/definitions/Property.BackgroundPositionX%3C(string%7Cnumber)%3E",
          description:
            "The **`background-position-x`** CSS property sets the initial horizontal position for each background image. The position is relative to the position layer set by `background-origin`.\n\n**Syntax**: `[ center | [ [ left | right | x-start | x-end ]? <length-percentage>? ]! ]#`\n\n**Initial value**: `0%`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  | **49**  | **1**  | **12** | **6** |",
        },
        backgroundPositionY: {
          $ref: "#/definitions/Property.BackgroundPositionY%3C(string%7Cnumber)%3E",
          description:
            "The **`background-position-y`** CSS property sets the initial vertical position for each background image. The position is relative to the position layer set by `background-origin`.\n\n**Syntax**: `[ center | [ [ top | bottom | y-start | y-end ]? <length-percentage>? ]! ]#`\n\n**Initial value**: `0%`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  | **49**  | **1**  | **12** | **6** |",
        },
        backgroundRepeat: {
          $ref: "#/definitions/Property.BackgroundRepeat",
          description:
            "The **`background-repeat`** CSS property sets how background images are repeated. A background image can be repeated along the horizontal and vertical axes, or not repeated at all.\n\n**Syntax**: `<repeat-style>#`\n\n**Initial value**: `repeat`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
        },
        backgroundSize: {
          $ref: "#/definitions/Property.BackgroundSize%3C(string%7Cnumber)%3E",
          description:
            "The **`background-size`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.\n\n**Syntax**: `<bg-size>#`\n\n**Initial value**: `auto auto`\n\n| Chrome  | Firefox | Safari  |  Edge  |  IE   | | :-----: | :-----: | :-----: | :----: | :---: | |  **3**  |  **4**  |  **5**  | **12** | **9** | | 1 _-x-_ |         | 3 _-x-_ |        |       |",
        },
        baselineShift: {
          $ref: "#/definitions/Property.BaselineShift%3C(string%7Cnumber)%3E",
        },
        blockOverflow: {
          $ref: "#/definitions/Property.BlockOverflow",
          description:
            "**Syntax**: `clip | ellipsis | <string>`\n\n**Initial value**: `clip`",
        },
        blockSize: {
          $ref: "#/definitions/Property.BlockSize%3C(string%7Cnumber)%3E",
          description:
            "The **`block-size`** CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `width` or the `height` property, depending on the value of `writing-mode`.\n\n**Syntax**: `<'width'>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **57** | **41**  | **12.1** | n/a  | No  |",
        },
        border: {
          $ref: "#/definitions/Property.Border%3C(string%7Cnumber)%3E",
          description:
            "The **`border`** shorthand CSS property sets an element's border. It sets the values of `border-width`, `border-style`, and `border-color`.\n\n**Syntax**: `<line-width> || <line-style> || <color>`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
        },
        borderBlock: {
          $ref: "#/definitions/Property.BorderBlock%3C(string%7Cnumber)%3E",
          description:
            "The **`border-block`** CSS property is a shorthand property for setting the individual logical block border property values in a single place in the style sheet.\n\n**Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **87** | **66**  | **14.1** | n/a  | No  |",
        },
        borderBlockColor: {
          $ref: "#/definitions/Property.BorderBlockColor",
          description:
            "The **`border-block-color`** CSS property defines the color of the logical block borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color` and `border-bottom-color`, or `border-right-color` and `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-color'>{1,2}`\n\n**Initial value**: `currentcolor`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **87** | **66**  | **14.1** | n/a  | No  |",
        },
        borderBlockEnd: {
          $ref: "#/definitions/Property.BorderBlockEnd%3C(string%7Cnumber)%3E",
          description:
            "The **`border-block-end`** CSS property is a shorthand property for setting the individual logical block-end border property values in a single place in the style sheet.\n\n**Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **69** | **41**  | **12.1** | n/a  | No  |",
        },
        borderBlockEndColor: {
          $ref: "#/definitions/Property.BorderBlockEndColor",
          description:
            "The **`border-block-end-color`** CSS property defines the color of the logical block-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-color'>`\n\n**Initial value**: `currentcolor`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **69** | **41**  | **12.1** | n/a  | No  |",
        },
        borderBlockEndStyle: {
          $ref: "#/definitions/Property.BorderBlockEndStyle",
          description:
            "The **`border-block-end-style`** CSS property defines the style of the logical block-end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-style'>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **69** | **41**  | **12.1** | n/a  | No  |",
        },
        borderBlockEndWidth: {
          $ref: "#/definitions/Property.BorderBlockEndWidth%3C(string%7Cnumber)%3E",
          description:
            "The **`border-block-end-width`** CSS property defines the width of the logical block-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-width'>`\n\n**Initial value**: `medium`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **69** | **41**  | **12.1** | n/a  | No  |",
        },
        borderBlockStart: {
          $ref: "#/definitions/Property.BorderBlockStart%3C(string%7Cnumber)%3E",
          description:
            "The **`border-block-start`** CSS property is a shorthand property for setting the individual logical block-start border property values in a single place in the style sheet.\n\n**Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **69** | **41**  | **12.1** | n/a  | No  |",
        },
        borderBlockStartColor: {
          $ref: "#/definitions/Property.BorderBlockStartColor",
          description:
            "The **`border-block-start-color`** CSS property defines the color of the logical block-start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-color'>`\n\n**Initial value**: `currentcolor`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **69** | **41**  | **12.1** | n/a  | No  |",
        },
        borderBlockStartStyle: {
          $ref: "#/definitions/Property.BorderBlockStartStyle",
          description:
            "The **`border-block-start-style`** CSS property defines the style of the logical block start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-style'>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **69** | **41**  | **12.1** | n/a  | No  |",
        },
        borderBlockStartWidth: {
          $ref: "#/definitions/Property.BorderBlockStartWidth%3C(string%7Cnumber)%3E",
          description:
            "The **`border-block-start-width`** CSS property defines the width of the logical block-start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-width'>`\n\n**Initial value**: `medium`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **69** | **41**  | **12.1** | n/a  | No  |",
        },
        borderBlockStyle: {
          $ref: "#/definitions/Property.BorderBlockStyle",
          description:
            "The **`border-block-style`** CSS property defines the style of the logical block borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style` and `border-bottom-style`, or `border-left-style` and `border-right-style` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-style'>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **87** | **66**  | **14.1** | n/a  | No  |",
        },
        borderBlockWidth: {
          $ref: "#/definitions/Property.BorderBlockWidth%3C(string%7Cnumber)%3E",
          description:
            "The **`border-block-width`** CSS property defines the width of the logical block borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width` and `border-bottom-width`, or `border-left-width`, and `border-right-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-width'>`\n\n**Initial value**: `medium`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **87** | **66**  | **14.1** | n/a  | No  |",
        },
        borderBottom: {
          $ref: "#/definitions/Property.BorderBottom%3C(string%7Cnumber)%3E",
          description:
            "The **`border-bottom`** shorthand CSS property sets an element's bottom border. It sets the values of `border-bottom-width`, `border-bottom-style` and `border-bottom-color`.\n\n**Syntax**: `<line-width> || <line-style> || <color>`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
        },
        borderBottomColor: {
          $ref: "#/definitions/Property.BorderBottomColor",
          description:
            "The **`border-bottom-color`** CSS property sets the color of an element's bottom border. It can also be set with the shorthand CSS properties `border-color` or `border-bottom`.\n\n**Syntax**: `<'border-top-color'>`\n\n**Initial value**: `currentcolor`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
        },
        borderBottomLeftRadius: {
          $ref: "#/definitions/Property.BorderBottomLeftRadius%3C(string%7Cnumber)%3E",
          description:
            "The **`border-bottom-left-radius`** CSS property rounds the bottom-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`\n\n| Chrome  | Firefox | Safari  |  Edge  |  IE   | | :-----: | :-----: | :-----: | :----: | :---: | |  **4**  |  **4**  |  **5**  | **12** | **9** | | 1 _-x-_ |         | 3 _-x-_ |        |       |",
        },
        borderBottomRightRadius: {
          $ref: "#/definitions/Property.BorderBottomRightRadius%3C(string%7Cnumber)%3E",
          description:
            "The **`border-bottom-right-radius`** CSS property rounds the bottom-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`\n\n| Chrome  | Firefox | Safari  |  Edge  |  IE   | | :-----: | :-----: | :-----: | :----: | :---: | |  **4**  |  **4**  |  **5**  | **12** | **9** | | 1 _-x-_ |         | 3 _-x-_ |        |       |",
        },
        borderBottomStyle: {
          $ref: "#/definitions/Property.BorderBottomStyle",
          description:
            "The **`border-bottom-style`** CSS property sets the line style of an element's bottom `border`.\n\n**Syntax**: `<line-style>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |   IE    | | :----: | :-----: | :----: | :----: | :-----: | | **1**  |  **1**  | **1**  | **12** | **5.5** |",
        },
        borderBottomWidth: {
          $ref: "#/definitions/Property.BorderBottomWidth%3C(string%7Cnumber)%3E",
          description:
            "The **`border-bottom-width`** CSS property sets the width of the bottom border of an element.\n\n**Syntax**: `<line-width>`\n\n**Initial value**: `medium`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
        },
        borderCollapse: {
          $ref: "#/definitions/Property.BorderCollapse",
          description:
            "The **`border-collapse`** CSS property sets whether cells inside a `<table>` have shared or separate borders.\n\n**Syntax**: `collapse | separate`\n\n**Initial value**: `separate`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   | | :----: | :-----: | :-----: | :----: | :---: | | **1**  |  **1**  | **1.2** | **12** | **5** |",
        },
        borderColor: {
          $ref: "#/definitions/Property.BorderColor",
          description:
            "The **`border-color`** shorthand CSS property sets the color of an element's border.\n\n**Syntax**: `<color>{1,4}`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
        },
        borderEndEndRadius: {
          $ref: "#/definitions/Property.BorderEndEndRadius%3C(string%7Cnumber)%3E",
          description:
            "The **`border-end-end-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius that depends on the element's `writing-mode`, `direction`, and `text-orientation`. This is useful when building styles to work regardless of the text orientation and writing mode.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **89** | **66**  | **15** | n/a  | No  |",
        },
        borderEndStartRadius: {
          $ref: "#/definitions/Property.BorderEndStartRadius%3C(string%7Cnumber)%3E",
          description:
            "The **`border-end-start-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius depending on the element's `writing-mode`, `direction`, and `text-orientation`. This is useful when building styles to work regardless of the text orientation and writing mode.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **89** | **66**  | **15** | n/a  | No  |",
        },
        borderImage: {
          $ref: "#/definitions/Property.BorderImage",
          description:
            "The **`border-image`** CSS property draws an image around a given element. It replaces the element's regular border.\n\n**Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`\n\n| Chrome  |  Firefox  | Safari  |  Edge  |   IE   | | :-----: | :-------: | :-----: | :----: | :----: | | **16**  |  **15**   |  **6**  | **12** | **11** | | 7 _-x-_ | 3.5 _-x-_ | 3 _-x-_ |        |        |",
        },
        borderImageOutset: {
          $ref: "#/definitions/Property.BorderImageOutset%3C(string%7Cnumber)%3E",
          description:
            "The **`border-image-outset`** CSS property sets the distance by which an element's border image is set out from its border box.\n\n**Syntax**: `[ <length> | <number> ]{1,4}`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  |   IE   | | :----: | :-----: | :----: | :----: | :----: | | **15** | **15**  | **6**  | **12** | **11** |",
        },
        borderImageRepeat: {
          $ref: "#/definitions/Property.BorderImageRepeat",
          description:
            'The **`border-image-repeat`** CSS property defines how the edge regions and middle region of a source image are adjusted to fit the dimensions of an element\'s border image. The middle region can be displayed by using the keyword "fill" in the border-image-slice property.\n\n**Syntax**: `[ stretch | repeat | round | space ]{1,2}`\n\n**Initial value**: `stretch`\n\n| Chrome | Firefox | Safari |  Edge  |   IE   | | :----: | :-----: | :----: | :----: | :----: | | **15** | **15**  | **6**  | **12** | **11** |',
        },
        borderImageSlice: {
          $ref: "#/definitions/Property.BorderImageSlice",
          description:
            "The **`border-image-slice`** CSS property divides the image specified by `border-image-source` into regions. These regions form the components of an element's border image.\n\n**Syntax**: `<number-percentage>{1,4} && fill?`\n\n**Initial value**: `100%`\n\n| Chrome | Firefox | Safari |  Edge  |   IE   | | :----: | :-----: | :----: | :----: | :----: | | **15** | **15**  | **6**  | **12** | **11** |",
        },
        borderImageSource: {
          $ref: "#/definitions/Property.BorderImageSource",
          description:
            "The **`border-image-source`** CSS property sets the source image used to create an element's border image.\n\n**Syntax**: `none | <image>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |   IE   | | :----: | :-----: | :----: | :----: | :----: | | **15** | **15**  | **6**  | **12** | **11** |",
        },
        borderImageWidth: {
          $ref: "#/definitions/Property.BorderImageWidth%3C(string%7Cnumber)%3E",
          description:
            "The **`border-image-width`** CSS property sets the width of an element's border image.\n\n**Syntax**: `[ <length-percentage> | <number> | auto ]{1,4}`\n\n**Initial value**: `1`\n\n| Chrome | Firefox | Safari |  Edge  |   IE   | | :----: | :-----: | :----: | :----: | :----: | | **15** | **13**  | **6**  | **12** | **11** |",
        },
        borderInline: {
          $ref: "#/definitions/Property.BorderInline%3C(string%7Cnumber)%3E",
          description:
            "The **`border-inline`** CSS property is a shorthand property for setting the individual logical inline border property values in a single place in the style sheet.\n\n**Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **87** | **66**  | **14.1** | n/a  | No  |",
        },
        borderInlineColor: {
          $ref: "#/definitions/Property.BorderInlineColor",
          description:
            "The **`border-inline-color`** CSS property defines the color of the logical inline borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color` and `border-bottom-color`, or `border-right-color` and `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-color'>{1,2}`\n\n**Initial value**: `currentcolor`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **87** | **66**  | **14.1** | n/a  | No  |",
        },
        borderInlineEnd: {
          $ref: "#/definitions/Property.BorderInlineEnd%3C(string%7Cnumber)%3E",
          description:
            "The **`border-inline-end`** CSS property is a shorthand property for setting the individual logical inline-end border property values in a single place in the style sheet.\n\n**Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **69** | **41**  | **12.1** | n/a  | No  |",
        },
        borderInlineEndColor: {
          $ref: "#/definitions/Property.BorderInlineEndColor",
          description:
            "The **`border-inline-end-color`** CSS property defines the color of the logical inline-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-color'>`\n\n**Initial value**: `currentcolor`\n\n| Chrome |           Firefox           |  Safari  | Edge | IE  | | :----: | :-------------------------: | :------: | :--: | :-: | | **69** |           **41**            | **12.1** | n/a  | No  | |        | 3 _(-moz-border-end-color)_ |          |      |     |",
        },
        borderInlineEndStyle: {
          $ref: "#/definitions/Property.BorderInlineEndStyle",
          description:
            "The **`border-inline-end-style`** CSS property defines the style of the logical inline end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-style'>`\n\n**Initial value**: `none`\n\n| Chrome |           Firefox           |  Safari  | Edge | IE  | | :----: | :-------------------------: | :------: | :--: | :-: | | **69** |           **41**            | **12.1** | n/a  | No  | |        | 3 _(-moz-border-end-style)_ |          |      |     |",
        },
        borderInlineEndWidth: {
          $ref: "#/definitions/Property.BorderInlineEndWidth%3C(string%7Cnumber)%3E",
          description:
            "The **`border-inline-end-width`** CSS property defines the width of the logical inline-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-width'>`\n\n**Initial value**: `medium`\n\n| Chrome |           Firefox           |  Safari  | Edge | IE  | | :----: | :-------------------------: | :------: | :--: | :-: | | **69** |           **41**            | **12.1** | n/a  | No  | |        | 3 _(-moz-border-end-width)_ |          |      |     |",
        },
        borderInlineStart: {
          $ref: "#/definitions/Property.BorderInlineStart%3C(string%7Cnumber)%3E",
          description:
            "The **`border-inline-start`** CSS property is a shorthand property for setting the individual logical inline-start border property values in a single place in the style sheet.\n\n**Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **69** | **41**  | **12.1** | n/a  | No  |",
        },
        borderInlineStartColor: {
          $ref: "#/definitions/Property.BorderInlineStartColor",
          description:
            "The **`border-inline-start-color`** CSS property defines the color of the logical inline start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-color'>`\n\n**Initial value**: `currentcolor`\n\n| Chrome |            Firefox            |  Safari  | Edge | IE  | | :----: | :---------------------------: | :------: | :--: | :-: | | **69** |            **41**             | **12.1** | n/a  | No  | |        | 3 _(-moz-border-start-color)_ |          |      |     |",
        },
        borderInlineStartStyle: {
          $ref: "#/definitions/Property.BorderInlineStartStyle",
          description:
            "The **`border-inline-start-style`** CSS property defines the style of the logical inline start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-style'>`\n\n**Initial value**: `none`\n\n| Chrome |            Firefox            |  Safari  | Edge | IE  | | :----: | :---------------------------: | :------: | :--: | :-: | | **69** |            **41**             | **12.1** | n/a  | No  | |        | 3 _(-moz-border-start-style)_ |          |      |     |",
        },
        borderInlineStartWidth: {
          $ref: "#/definitions/Property.BorderInlineStartWidth%3C(string%7Cnumber)%3E",
          description:
            "The **`border-inline-start-width`** CSS property defines the width of the logical inline-start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-width'>`\n\n**Initial value**: `medium`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **69** | **41**  | **12.1** | n/a  | No  |",
        },
        borderInlineStyle: {
          $ref: "#/definitions/Property.BorderInlineStyle",
          description:
            "The **`border-inline-style`** CSS property defines the style of the logical inline borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style` and `border-bottom-style`, or `border-left-style` and `border-right-style` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-style'>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **87** | **66**  | **14.1** | n/a  | No  |",
        },
        borderInlineWidth: {
          $ref: "#/definitions/Property.BorderInlineWidth%3C(string%7Cnumber)%3E",
          description:
            "The **`border-inline-width`** CSS property defines the width of the logical inline borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width` and `border-bottom-width`, or `border-left-width`, and `border-right-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-width'>`\n\n**Initial value**: `medium`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **87** | **66**  | **14.1** | n/a  | No  |",
        },
        borderLeft: {
          $ref: "#/definitions/Property.BorderLeft%3C(string%7Cnumber)%3E",
          description:
            "The **`border-left`** shorthand CSS property sets all the properties of an element's left border.\n\n**Syntax**: `<line-width> || <line-style> || <color>`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
        },
        borderLeftColor: {
          $ref: "#/definitions/Property.BorderLeftColor",
          description:
            "The **`border-left-color`** CSS property sets the color of an element's left border. It can also be set with the shorthand CSS properties `border-color` or `border-left`.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
        },
        borderLeftStyle: {
          $ref: "#/definitions/Property.BorderLeftStyle",
          description:
            "The **`border-left-style`** CSS property sets the line style of an element's left `border`.\n\n**Syntax**: `<line-style>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |   IE    | | :----: | :-----: | :----: | :----: | :-----: | | **1**  |  **1**  | **1**  | **12** | **5.5** |",
        },
        borderLeftWidth: {
          $ref: "#/definitions/Property.BorderLeftWidth%3C(string%7Cnumber)%3E",
          description:
            "The **`border-left-width`** CSS property sets the width of the left border of an element.\n\n**Syntax**: `<line-width>`\n\n**Initial value**: `medium`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
        },
        borderRadius: {
          $ref: "#/definitions/Property.BorderRadius%3C(string%7Cnumber)%3E",
          description:
            "The **`border-radius`** CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.\n\n**Syntax**: `<length-percentage>{1,4} [ / <length-percentage>{1,4} ]?`\n\n| Chrome  | Firefox | Safari  |  Edge  |  IE   | | :-----: | :-----: | :-----: | :----: | :---: | |  **4**  |  **4**  |  **5**  | **12** | **9** | | 1 _-x-_ |         | 3 _-x-_ |        |       |",
        },
        borderRight: {
          $ref: "#/definitions/Property.BorderRight%3C(string%7Cnumber)%3E",
          description:
            "The **`border-right`** shorthand CSS property sets all the properties of an element's right border.\n\n**Syntax**: `<line-width> || <line-style> || <color>`\n\n| Chrome | Firefox | Safari |  Edge  |   IE    | | :----: | :-----: | :----: | :----: | :-----: | | **1**  |  **1**  | **1**  | **12** | **5.5** |",
        },
        borderRightColor: {
          $ref: "#/definitions/Property.BorderRightColor",
          description:
            "The **`border-right-color`** CSS property sets the color of an element's right border. It can also be set with the shorthand CSS properties `border-color` or `border-right`.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
        },
        borderRightStyle: {
          $ref: "#/definitions/Property.BorderRightStyle",
          description:
            "The **`border-right-style`** CSS property sets the line style of an element's right `border`.\n\n**Syntax**: `<line-style>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |   IE    | | :----: | :-----: | :----: | :----: | :-----: | | **1**  |  **1**  | **1**  | **12** | **5.5** |",
        },
        borderRightWidth: {
          $ref: "#/definitions/Property.BorderRightWidth%3C(string%7Cnumber)%3E",
          description:
            "The **`border-right-width`** CSS property sets the width of the right border of an element.\n\n**Syntax**: `<line-width>`\n\n**Initial value**: `medium`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
        },
        borderSpacing: {
          $ref: "#/definitions/Property.BorderSpacing%3C(string%7Cnumber)%3E",
          description:
            "The **`border-spacing`** CSS property sets the distance between the borders of adjacent cells in a `<table>`. This property applies only when `border-collapse` is `separate`.\n\n**Syntax**: `<length> <length>?`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **8** |",
        },
        borderStartEndRadius: {
          $ref: "#/definitions/Property.BorderStartEndRadius%3C(string%7Cnumber)%3E",
          description:
            "The **`border-start-end-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius depending on the element's `writing-mode`, `direction`, and `text-orientation`. This is useful when building styles to work regardless of the text orientation and writing mode.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **89** | **66**  | **15** | n/a  | No  |",
        },
        borderStartStartRadius: {
          $ref: "#/definitions/Property.BorderStartStartRadius%3C(string%7Cnumber)%3E",
          description:
            "The **`border-start-start-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius that depends on the element's `writing-mode`, `direction`, and `text-orientation`. This is useful when building styles to work regardless of the text orientation and writing mode.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **89** | **66**  | **15** | n/a  | No  |",
        },
        borderStyle: {
          $ref: "#/definitions/Property.BorderStyle",
          description:
            "The **`border-style`** shorthand CSS property sets the line style for all four sides of an element's border.\n\n**Syntax**: `<line-style>{1,4}`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
        },
        borderTop: {
          $ref: "#/definitions/Property.BorderTop%3C(string%7Cnumber)%3E",
          description:
            "The **`border-top`** shorthand CSS property sets all the properties of an element's top border.\n\n**Syntax**: `<line-width> || <line-style> || <color>`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
        },
        borderTopColor: {
          $ref: "#/definitions/Property.BorderTopColor",
          description:
            "The **`border-top-color`** CSS property sets the color of an element's top border. It can also be set with the shorthand CSS properties `border-color` or `border-top`.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
        },
        borderTopLeftRadius: {
          $ref: "#/definitions/Property.BorderTopLeftRadius%3C(string%7Cnumber)%3E",
          description:
            "The **`border-top-left-radius`** CSS property rounds the top-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`\n\n| Chrome  | Firefox | Safari  |  Edge  |  IE   | | :-----: | :-----: | :-----: | :----: | :---: | |  **4**  |  **4**  |  **5**  | **12** | **9** | | 1 _-x-_ |         | 3 _-x-_ |        |       |",
        },
        borderTopRightRadius: {
          $ref: "#/definitions/Property.BorderTopRightRadius%3C(string%7Cnumber)%3E",
          description:
            "The **`border-top-right-radius`** CSS property rounds the top-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`\n\n| Chrome  | Firefox | Safari  |  Edge  |  IE   | | :-----: | :-----: | :-----: | :----: | :---: | |  **4**  |  **4**  |  **5**  | **12** | **9** | | 1 _-x-_ |         | 3 _-x-_ |        |       |",
        },
        borderTopStyle: {
          $ref: "#/definitions/Property.BorderTopStyle",
          description:
            "The **`border-top-style`** CSS property sets the line style of an element's top `border`.\n\n**Syntax**: `<line-style>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |   IE    | | :----: | :-----: | :----: | :----: | :-----: | | **1**  |  **1**  | **1**  | **12** | **5.5** |",
        },
        borderTopWidth: {
          $ref: "#/definitions/Property.BorderTopWidth%3C(string%7Cnumber)%3E",
          description:
            "The **`border-top-width`** CSS property sets the width of the top border of an element.\n\n**Syntax**: `<line-width>`\n\n**Initial value**: `medium`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
        },
        borderWidth: {
          $ref: "#/definitions/Property.BorderWidth%3C(string%7Cnumber)%3E",
          description:
            "The **`border-width`** shorthand CSS property sets the width of an element's border.\n\n**Syntax**: `<line-width>{1,4}`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
        },
        bottom: {
          $ref: "#/definitions/Property.Bottom%3C(string%7Cnumber)%3E",
          description:
            "The **`bottom`** CSS property participates in setting the vertical position of a positioned element. It has no effect on non-positioned elements.\n\n**Syntax**: `<length> | <percentage> | auto`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **5** |",
        },
        boxAlign: {
          $ref: "#/definitions/Property.BoxAlign",
          deprecated: true,
          description:
            "The **`box-align`** CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.\n\n**Syntax**: `start | center | end | baseline | stretch`\n\n**Initial value**: `stretch`",
        },
        boxDecorationBreak: {
          $ref: "#/definitions/Property.BoxDecorationBreak",
          description:
            "The **`box-decoration-break`** CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.\n\n**Syntax**: `slice | clone`\n\n**Initial value**: `slice`\n\n|    Chrome    | Firefox |   Safari    | Edge | IE  | | :----------: | :-----: | :---------: | :--: | :-: | | **22** _-x-_ | **32**  | **7** _-x-_ | n/a  | No  |",
        },
        boxDirection: {
          $ref: "#/definitions/Property.BoxDirection",
          deprecated: true,
          description:
            "The **`box-direction`** CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).\n\n**Syntax**: `normal | reverse | inherit`\n\n**Initial value**: `normal`",
        },
        boxFlex: {
          $ref: "#/definitions/Property.BoxFlex",
          deprecated: true,
          description:
            "The **`-moz-box-flex`** and **`-webkit-box-flex`** CSS properties specify how a `-moz-box` or `-webkit-box` grows to fill the box that contains it, in the direction of the containing box's layout.\n\n**Syntax**: `<number>`\n\n**Initial value**: `0`",
        },
        boxFlexGroup: {
          $ref: "#/definitions/Property.BoxFlexGroup",
          deprecated: true,
          description:
            "The **`box-flex-group`** CSS property assigns the flexbox's child elements to a flex group.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `1`",
        },
        boxLines: {
          $ref: "#/definitions/Property.BoxLines",
          deprecated: true,
          description:
            "The **`box-lines`** CSS property determines whether the box may have a single or multiple lines (rows for horizontally oriented boxes, columns for vertically oriented boxes).\n\n**Syntax**: `single | multiple`\n\n**Initial value**: `single`",
        },
        boxOrdinalGroup: {
          $ref: "#/definitions/Property.BoxOrdinalGroup",
          deprecated: true,
          description:
            "The **`box-ordinal-group`** CSS property assigns the flexbox's child elements to an ordinal group.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `1`",
        },
        boxOrient: {
          $ref: "#/definitions/Property.BoxOrient",
          deprecated: true,
          description:
            "The **`box-orient`** CSS property sets whether an element lays out its contents horizontally or vertically.\n\n**Syntax**: `horizontal | vertical | inline-axis | block-axis | inherit`\n\n**Initial value**: `inline-axis` (`horizontal` in XUL)",
        },
        boxPack: {
          $ref: "#/definitions/Property.BoxPack",
          deprecated: true,
          description:
            "The **`-moz-box-pack`** and **`-webkit-box-pack`** CSS properties specify how a `-moz-box` or `-webkit-box` packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.\n\n**Syntax**: `start | center | end | justify`\n\n**Initial value**: `start`",
        },
        boxShadow: {
          $ref: "#/definitions/Property.BoxShadow",
          description:
            "The **`box-shadow`** CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.\n\n**Syntax**: `none | <shadow>#`\n\n**Initial value**: `none`\n\n| Chrome  | Firefox | Safari  |  Edge  |  IE   | | :-----: | :-----: | :-----: | :----: | :---: | | **10**  |  **4**  | **5.1** | **12** | **9** | | 1 _-x-_ |         | 3 _-x-_ |        |       |",
        },
        boxSizing: {
          $ref: "#/definitions/Property.BoxSizing",
          description:
            "The **`box-sizing`** CSS property sets how the total width and height of an element is calculated.\n\n**Syntax**: `content-box | border-box`\n\n**Initial value**: `content-box`\n\n| Chrome  | Firefox | Safari  |  Edge  |  IE   | | :-----: | :-----: | :-----: | :----: | :---: | | **10**  | **29**  | **5.1** | **12** | **8** | | 1 _-x-_ | 1 _-x-_ | 3 _-x-_ |        |       |",
        },
        breakAfter: {
          $ref: "#/definitions/Property.BreakAfter",
          description:
            "The **`break-after`** CSS property sets how page, column, or region breaks should behave after a generated box. If there is no generated box, the property is ignored.\n\n**Syntax**: `auto | avoid | always | all | avoid-page | page | left | right | recto | verso | avoid-column | column | avoid-region | region`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |   IE   | | :----: | :-----: | :----: | :----: | :----: | | **50** | **65**  | **10** | **12** | **10** |",
        },
        breakBefore: {
          $ref: "#/definitions/Property.BreakBefore",
          description:
            "The **`break-before`** CSS property sets how page, column, or region breaks should behave before a generated box. If there is no generated box, the property is ignored.\n\n**Syntax**: `auto | avoid | always | all | avoid-page | page | left | right | recto | verso | avoid-column | column | avoid-region | region`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |   IE   | | :----: | :-----: | :----: | :----: | :----: | | **50** | **65**  | **10** | **12** | **10** |",
        },
        breakInside: {
          $ref: "#/definitions/Property.BreakInside",
          description:
            "The **`break-inside`** CSS property sets how page, column, or region breaks should behave inside a generated box. If there is no generated box, the property is ignored.\n\n**Syntax**: `auto | avoid | avoid-page | avoid-column | avoid-region`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |   IE   | | :----: | :-----: | :----: | :----: | :----: | | **50** | **65**  | **10** | **12** | **10** |",
        },
        captionSide: {
          $ref: "#/definitions/Property.CaptionSide",
          description:
            "The **`caption-side`** CSS property puts the content of a table's `<caption>` on the specified side. The values are relative to the `writing-mode` of the table.\n\n**Syntax**: `top | bottom | block-start | block-end | inline-start | inline-end`\n\n**Initial value**: `top`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **8** |",
        },
        caret: {
          $ref: "#/definitions/Property.Caret",
          description: "**Syntax**: `<'caret-color'> || <'caret-shape'>`",
        },
        caretColor: {
          $ref: "#/definitions/Property.CaretColor",
          description:
            "The **`caret-color`** CSS property sets the color of the **insertion caret**, the visible marker where the next character typed will be inserted. This is sometimes referred to as the **text input cursor**. The caret appears in elements such as `<input>` or those with the `contenteditable` attribute. The caret is typically a thin vertical line that flashes to help make it more noticeable. By default, it is black, but its color can be altered with this property.\n\n**Syntax**: `auto | <color>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **57** | **53**  | **11.1** | n/a  | No  |",
        },
        caretShape: {
          $ref: "#/definitions/Property.CaretShape",
          description:
            "**Syntax**: `auto | bar | block | underscore`\n\n**Initial value**: `auto`",
        },
        clear: {
          $ref: "#/definitions/Property.Clear",
          description:
            "The **`clear`** CSS property sets whether an element must be moved below (cleared) floating elements that precede it. The `clear` property applies to floating and non-floating elements.\n\n**Syntax**: `none | left | right | both | inline-start | inline-end`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
        },
        clip: {
          $ref: "#/definitions/Property.Clip",
          deprecated: true,
          description:
            "The **`clip`** CSS property defines a visible portion of an element. The `clip` property applies only to absolutely positioned elements — that is, elements with `position:absolute` or `position:fixed`.\n\n**Syntax**: `<shape> | auto`\n\n**Initial value**: `auto`",
        },
        clipPath: {
          $ref: "#/definitions/Property.ClipPath",
          description:
            "The **`clip-path`** CSS property creates a clipping region that sets what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden.\n\n**Syntax**: `<clip-source> | [ <basic-shape> || <geometry-box> ] | none`\n\n**Initial value**: `none`\n\n|  Chrome  | Firefox | Safari  |  Edge  |   IE   | | :------: | :-----: | :-----: | :----: | :----: | |  **55**  | **3.5** | **9.1** | **79** | **10** | | 23 _-x-_ |         | 7 _-x-_ |        |        |",
        },
        clipRule: {
          $ref: "#/definitions/Property.ClipRule",
        },
        color: {
          $ref: "#/definitions/Property.Color",
          description:
            "The **`color`** CSS property sets the foreground color value of an element's text and text decorations, and sets the `currentcolor` value. `currentcolor` may be used as an indirect value on _other_ properties and is the default for other color properties, such as `border-color`.\n\n**Syntax**: `<color>`\n\n**Initial value**: `canvastext`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **3** |",
        },
        colorAdjust: {
          $ref: "#/definitions/Property.PrintColorAdjust",
          description:
            "The **`print-color-adjust`** CSS property sets what, if anything, the user agent may do to optimize the appearance of the element on the output device. By default, the browser is allowed to make any adjustments to the element's appearance it determines to be necessary and prudent given the type and capabilities of the output device.\n\n**Syntax**: `economy | exact`\n\n**Initial value**: `economy`\n\n|    Chrome    |       Firefox       |  Safari  |     Edge     | IE  | | :----------: | :-----------------: | :------: | :----------: | :-: | | **17** _-x-_ |       **97**        | **15.4** | **79** _-x-_ | No  | |              | 48 _(color-adjust)_ | 6 _-x-_  |              |     |",
        },
        colorInterpolation: {
          $ref: "#/definitions/Property.ColorInterpolation",
        },
        colorRendering: {
          $ref: "#/definitions/Property.ColorRendering",
        },
        colorScheme: {
          $ref: "#/definitions/Property.ColorScheme",
          description:
            "The **`color-scheme`** CSS property allows an element to indicate which color schemes it can comfortably be rendered in.\n\n**Syntax**: `normal | [ light | dark | <custom-ident> ]+ && only?`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **81** | **96**  | **13** | n/a  | No  |",
        },
        columnCount: {
          $ref: "#/definitions/Property.ColumnCount",
          description:
            "The **`column-count`** CSS property breaks an element's content into the specified number of columns.\n\n**Syntax**: `<integer> | auto`\n\n**Initial value**: `auto`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   | | :-----: | :-----: | :-----: | :----: | :----: | | **50**  | **52**  |  **9**  | **12** | **10** | | 1 _-x-_ |         | 3 _-x-_ |        |        |",
        },
        columnFill: {
          $ref: "#/definitions/Property.ColumnFill",
          description:
            "The **`column-fill`** CSS property controls how an element's contents are balanced when broken into columns.\n\n**Syntax**: `auto | balance | balance-all`\n\n**Initial value**: `balance`\n\n| Chrome | Firefox | Safari  |  Edge  |   IE   | | :----: | :-----: | :-----: | :----: | :----: | | **50** | **52**  |  **9**  | **12** | **10** | |        |         | 8 _-x-_ |        |        |",
        },
        columnGap: {
          $ref: "#/definitions/Property.ColumnGap%3C(string%7Cnumber)%3E",
          description:
            "The **`column-gap`** CSS property sets the size of the gap (gutter) between an element's columns.\n\n**Syntax**: `normal | <length-percentage>`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  |   IE   | | :----: | :-----: | :----: | :----: | :----: | | **1**  | **1.5** | **3**  | **12** | **10** |",
        },
        columnRule: {
          $ref: "#/definitions/Property.ColumnRule%3C(string%7Cnumber)%3E",
          description:
            "The **`column-rule`** shorthand CSS property sets the width, style, and color of the line drawn between columns in a multi-column layout.\n\n**Syntax**: `<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   | | :-----: | :-----: | :-----: | :----: | :----: | | **50**  | **52**  |  **9**  | **12** | **10** | | 1 _-x-_ |         | 3 _-x-_ |        |        |",
        },
        columnRuleColor: {
          $ref: "#/definitions/Property.ColumnRuleColor",
          description:
            "The **`column-rule-color`** CSS property sets the color of the line drawn between columns in a multi-column layout.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   | | :-----: | :-----: | :-----: | :----: | :----: | | **50**  | **52**  |  **9**  | **12** | **10** | | 1 _-x-_ |         | 3 _-x-_ |        |        |",
        },
        columnRuleStyle: {
          $ref: "#/definitions/Property.ColumnRuleStyle",
          description:
            "The **`column-rule-style`** CSS property sets the style of the line drawn between columns in a multi-column layout.\n\n**Syntax**: `<'border-style'>`\n\n**Initial value**: `none`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   | | :-----: | :-----: | :-----: | :----: | :----: | | **50**  | **52**  |  **9**  | **12** | **10** | | 1 _-x-_ |         | 3 _-x-_ |        |        |",
        },
        columnRuleWidth: {
          $ref: "#/definitions/Property.ColumnRuleWidth%3C(string%7Cnumber)%3E",
          description:
            "The **`column-rule-width`** CSS property sets the width of the line drawn between columns in a multi-column layout.\n\n**Syntax**: `<'border-width'>`\n\n**Initial value**: `medium`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   | | :-----: | :-----: | :-----: | :----: | :----: | | **50**  | **52**  |  **9**  | **12** | **10** | | 1 _-x-_ |         | 3 _-x-_ |        |        |",
        },
        columnSpan: {
          $ref: "#/definitions/Property.ColumnSpan",
          description:
            "The **`column-span`** CSS property makes it possible for an element to span across all columns when its value is set to `all`.\n\n**Syntax**: `none | all`\n\n**Initial value**: `none`\n\n| Chrome  | Firefox |  Safari   |  Edge  |   IE   | | :-----: | :-----: | :-------: | :----: | :----: | | **50**  | **71**  |   **9**   | **12** | **10** | | 6 _-x-_ |         | 5.1 _-x-_ |        |        |",
        },
        columnWidth: {
          $ref: "#/definitions/Property.ColumnWidth%3C(string%7Cnumber)%3E",
          description:
            "The **`column-width`** CSS property sets the ideal column width in a multi-column layout. The container will have as many columns as can fit without any of them having a width less than the `column-width` value. If the width of the container is narrower than the specified value, the single column's width will be smaller than the declared column width.\n\n**Syntax**: `<length> | auto`\n\n**Initial value**: `auto`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   | | :-----: | :-----: | :-----: | :----: | :----: | | **50**  | **50**  |  **9**  | **12** | **10** | | 1 _-x-_ |         | 3 _-x-_ |        |        |",
        },
        columns: {
          $ref: "#/definitions/Property.Columns%3C(string%7Cnumber)%3E",
          description:
            "The **`columns`** CSS shorthand property sets the number of columns to use when drawing an element's contents, as well as those columns' widths.\n\n**Syntax**: `<'column-width'> || <'column-count'>`\n\n| Chrome | Firefox | Safari  |  Edge  |   IE   | | :----: | :-----: | :-----: | :----: | :----: | | **50** | **52**  |  **9**  | **12** | **10** | |        |         | 3 _-x-_ |        |        |",
        },
        contain: {
          $ref: "#/definitions/Property.Contain",
          description:
            "The **`contain`** CSS property indicates that an element and its contents are, as much as possible, independent from the rest of the document tree. Containment enables isolating a subsection of the DOM, providing performance benefits by limiting calculations of layout, style, paint, size, or any combination to a DOM subtree rather than the entire page. Containment can also be used to scope CSS counters and quotes.\n\n**Syntax**: `none | strict | content | [ [ size || inline-size ] || layout || style || paint ]`\n\n**Initial value**: `none`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **52** | **69**  | **15.4** | n/a  | No  |",
        },
        containIntrinsicBlockSize: {
          $ref: "#/definitions/Property.ContainIntrinsicBlockSize%3C(string%7Cnumber)%3E",
          description:
            "The **`contain-intrinsic-block-size`** CSS logical property defines the block size of an element that a browser can use for layout when the element is subject to size containment.\n\n**Syntax**: `auto? [ none | <length> ]`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **95** | **107** | **17** | n/a  | No  |",
        },
        containIntrinsicHeight: {
          $ref: "#/definitions/Property.ContainIntrinsicHeight%3C(string%7Cnumber)%3E",
          description:
            "The **`contain-intrinsic-length`** CSS property sets the height of an element that a browser can use for layout when the element is subject to size containment.\n\n**Syntax**: `auto? [ none | <length> ]`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **95** | **107** | **17** | n/a  | No  |",
        },
        containIntrinsicInlineSize: {
          $ref: "#/definitions/Property.ContainIntrinsicInlineSize%3C(string%7Cnumber)%3E",
          description:
            "The **`contain-intrinsic-inline-size`** CSS logical property defines the inline-size of an element that a browser can use for layout when the element is subject to size containment.\n\n**Syntax**: `auto? [ none | <length> ]`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **95** | **107** | **17** | n/a  | No  |",
        },
        containIntrinsicSize: {
          $ref: "#/definitions/Property.ContainIntrinsicSize%3C(string%7Cnumber)%3E",
          description:
            "The **`contain-intrinsic-size`** CSS shorthand property sets the size of an element that a browser will use for layout when the element is subject to size containment.\n\n**Syntax**: `[ auto? [ none | <length> ] ]{1,2}`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **83** | **107** | **17** | n/a  | No  |",
        },
        containIntrinsicWidth: {
          $ref: "#/definitions/Property.ContainIntrinsicWidth%3C(string%7Cnumber)%3E",
          description:
            "The **`contain-intrinsic-width`** CSS property sets the width of an element that a browser will use for layout when the element is subject to size containment.\n\n**Syntax**: `auto? [ none | <length> ]`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **95** | **107** | **17** | n/a  | No  |",
        },
        container: {
          $ref: "#/definitions/Property.Container",
          description:
            "The **container** shorthand CSS property establishes the element as a query container and specifies the name or name for the containment context used in a container query.\n\n**Syntax**: `<'container-name'> [ / <'container-type'> ]?`\n\n| Chrome  | Firefox | Safari | Edge | IE  | | :-----: | :-----: | :----: | :--: | :-: | | **105** | **110** | **16** | n/a  | No  |",
        },
        containerName: {
          $ref: "#/definitions/Property.ContainerName",
          description:
            "The **container-name** CSS property specifies a list of query container names used by the",
        },
        containerType: {
          $ref: "#/definitions/Property.ContainerType",
          description:
            "The **container-type** CSS property is used to define the type of containment used in a container query.\n\n**Syntax**: `normal | size | inline-size`\n\n**Initial value**: `normal`\n\n| Chrome  | Firefox | Safari | Edge | IE  | | :-----: | :-----: | :----: | :--: | :-: | | **105** | **110** | **16** | n/a  | No  |",
        },
        content: {
          $ref: "#/definitions/Property.Content",
          description:
            "The **`content`** CSS property replaces an element with a generated value. Objects inserted using the `content` property are **anonymous replaced elements**.\n\n**Syntax**: `normal | none | [ <content-replacement> | <content-list> ] [/ [ <string> | <counter> ]+ ]?`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **8** |",
        },
        contentVisibility: {
          $ref: "#/definitions/Property.ContentVisibility",
          description:
            "The **`content-visibility`** CSS property controls whether or not an element renders its contents at all, along with forcing a strong set of containments, allowing user agents to potentially omit large swathes of layout and rendering work until it becomes needed. It enables the user agent to skip an element's rendering work (including layout and painting) until it is needed — which makes the initial page load much faster.\n\n**Syntax**: `visible | auto | hidden`\n\n**Initial value**: `visible`\n\n| Chrome |   Firefox   | Safari | Edge | IE  | | :----: | :---------: | :----: | :--: | :-: | | **85** | **preview** |   No   | n/a  | No  |",
        },
        counterIncrement: {
          $ref: "#/definitions/Property.CounterIncrement",
          description:
            "The **`counter-increment`** CSS property increases or decreases the value of a CSS counter by a given value.\n\n**Syntax**: `[ <counter-name> <integer>? ]+ | none`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **2**  |  **1**  | **3**  | **12** | **8** |",
        },
        counterReset: {
          $ref: "#/definitions/Property.CounterReset",
          description:
            "The **`counter-reset`** CSS property resets a CSS counter to a given value. This property will create a new counter or reversed counter with the given name on the specified element.\n\n**Syntax**: `[ <counter-name> <integer>? | <reversed-counter-name> <integer>? ]+ | none`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **2**  |  **1**  | **3**  | **12** | **8** |",
        },
        counterSet: {
          $ref: "#/definitions/Property.CounterSet",
          description:
            "The **`counter-set`** CSS property sets a CSS counter to a given value. It manipulates the value of existing counters, and will only create new counters if there isn't already a counter of the given name on the element.\n\n**Syntax**: `[ <counter-name> <integer>? ]+ | none`\n\n**Initial value**: `none`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **85** | **68**  | **17.2** | n/a  | No  |",
        },
        cursor: {
          $ref: "#/definitions/Property.Cursor",
          description:
            "The **`cursor`** CSS property sets the mouse cursor, if any, to show when the mouse pointer is over an element.\n\n**Syntax**: `[ [ <url> [ <x> <y> ]? , ]* [ auto | default | none | context-menu | help | pointer | progress | wait | cell | crosshair | text | vertical-text | alias | copy | move | no-drop | not-allowed | e-resize | n-resize | ne-resize | nw-resize | s-resize | se-resize | sw-resize | w-resize | ew-resize | ns-resize | nesw-resize | nwse-resize | col-resize | row-resize | all-scroll | zoom-in | zoom-out | grab | grabbing ] ]`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   | | :----: | :-----: | :-----: | :----: | :---: | | **1**  |  **1**  | **1.2** | **12** | **4** |",
        },
        direction: {
          $ref: "#/definitions/Property.Direction",
          description:
            "The **`direction`** CSS property sets the direction of text, table columns, and horizontal overflow. Use `rtl` for languages written from right to left (like Hebrew or Arabic), and `ltr` for those written from left to right (like English and most other languages).\n\n**Syntax**: `ltr | rtl`\n\n**Initial value**: `ltr`\n\n| Chrome | Firefox | Safari |  Edge  |   IE    | | :----: | :-----: | :----: | :----: | :-----: | | **2**  |  **1**  | **1**  | **12** | **5.5** |",
        },
        display: {
          $ref: "#/definitions/Property.Display",
          description:
            "The **`display`** CSS property sets whether an element is treated as a block or inline element and the layout used for its children, such as flow layout, grid or flex.\n\n**Syntax**: `[ <display-outside> || <display-inside> ] | <display-listitem> | <display-internal> | <display-box> | <display-legacy>`\n\n**Initial value**: `inline`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
        },
        dominantBaseline: {
          $ref: "#/definitions/Property.DominantBaseline",
        },
        emptyCells: {
          $ref: "#/definitions/Property.EmptyCells",
          description:
            "The **`empty-cells`** CSS property sets whether borders and backgrounds appear around `<table>` cells that have no visible content.\n\n**Syntax**: `show | hide`\n\n**Initial value**: `show`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   | | :----: | :-----: | :-----: | :----: | :---: | | **1**  |  **1**  | **1.2** | **12** | **8** |",
        },
        fill: {
          $ref: "#/definitions/Property.Fill",
        },
        fillOpacity: {
          $ref: "#/definitions/Property.FillOpacity",
        },
        fillRule: {
          $ref: "#/definitions/Property.FillRule",
        },
        filter: {
          $ref: "#/definitions/Property.Filter",
          description:
            "The **`filter`** CSS property applies graphical effects like blur or color shift to an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders.\n\n**Syntax**: `none | <filter-function-list>`\n\n**Initial value**: `none`\n\n|  Chrome  | Firefox | Safari  |  Edge  | IE  | | :------: | :-----: | :-----: | :----: | :-: | |  **53**  | **35**  | **9.1** | **12** | No  | | 18 _-x-_ |         | 6 _-x-_ |        |     |",
        },
        flex: {
          $ref: "#/definitions/Property.Flex%3C(string%7Cnumber)%3E",
          description:
            "The **`flex`** CSS shorthand property sets how a flex _item_ will grow or shrink to fit the space available in its flex container.\n\n**Syntax**: `none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`\n\n|  Chrome  | Firefox | Safari  |  Edge  |    IE    | | :------: | :-----: | :-----: | :----: | :------: | |  **29**  | **20**  |  **9**  | **12** |  **11**  | | 21 _-x-_ |         | 7 _-x-_ |        | 10 _-x-_ |",
        },
        flexBasis: {
          $ref: "#/definitions/Property.FlexBasis%3C(string%7Cnumber)%3E",
          description:
            "The **`flex-basis`** CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with `box-sizing`.\n\n**Syntax**: `content | <'width'>`\n\n**Initial value**: `auto`\n\n|  Chrome  | Firefox | Safari  |  Edge  |   IE   | | :------: | :-----: | :-----: | :----: | :----: | |  **29**  | **22**  |  **9**  | **12** | **11** | | 22 _-x-_ |         | 7 _-x-_ |        |        |",
        },
        flexDirection: {
          $ref: "#/definitions/Property.FlexDirection",
          description:
            "The **`flex-direction`** CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).\n\n**Syntax**: `row | row-reverse | column | column-reverse`\n\n**Initial value**: `row`\n\n|  Chrome  | Firefox  | Safari  |  Edge  |    IE    | | :------: | :------: | :-----: | :----: | :------: | |  **29**  |  **81**  |  **9**  | **12** |  **11**  | | 21 _-x-_ | 49 _-x-_ | 7 _-x-_ |        | 10 _-x-_ |",
        },
        flexFlow: {
          $ref: "#/definitions/Property.FlexFlow",
          description:
            "The **`flex-flow`** CSS shorthand property specifies the direction of a flex container, as well as its wrapping behavior.\n\n**Syntax**: `<'flex-direction'> || <'flex-wrap'>`\n\n|  Chrome  | Firefox | Safari  |  Edge  |   IE   | | :------: | :-----: | :-----: | :----: | :----: | |  **29**  | **28**  |  **9**  | **12** | **11** | | 21 _-x-_ |         | 7 _-x-_ |        |        |",
        },
        flexGrow: {
          $ref: "#/definitions/Property.FlexGrow",
          description:
            "The **`flex-grow`** CSS property sets the flex grow factor of a flex item's main size.\n\n**Syntax**: `<number>`\n\n**Initial value**: `0`\n\n|  Chrome  | Firefox | Safari  |  Edge  |            IE            | | :------: | :-----: | :-----: | :----: | :----------------------: | |  **29**  | **20**  |  **9**  | **12** |          **11**          | | 22 _-x-_ |         | 7 _-x-_ |        | 10 _(-ms-flex-positive)_ |",
        },
        flexShrink: {
          $ref: "#/definitions/Property.FlexShrink",
          description:
            "The **`flex-shrink`** CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to `flex-shrink`.\n\n**Syntax**: `<number>`\n\n**Initial value**: `1`\n\n|  Chrome  | Firefox | Safari  |  Edge  |   IE   | | :------: | :-----: | :-----: | :----: | :----: | |  **29**  | **20**  |  **9**  | **12** | **10** | | 22 _-x-_ |         | 8 _-x-_ |        |        |",
        },
        flexWrap: {
          $ref: "#/definitions/Property.FlexWrap",
          description:
            "The **`flex-wrap`** CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.\n\n**Syntax**: `nowrap | wrap | wrap-reverse`\n\n**Initial value**: `nowrap`\n\n|  Chrome  | Firefox | Safari  |  Edge  |   IE   | | :------: | :-----: | :-----: | :----: | :----: | |  **29**  | **28**  |  **9**  | **12** | **11** | | 21 _-x-_ |         | 7 _-x-_ |        |        |",
        },
        float: {
          $ref: "#/definitions/Property.Float",
          description:
            "The **`float`** CSS property places an element on the left or right side of its container, allowing text and inline elements to wrap around it. The element is removed from the normal flow of the page, though still remaining a part of the flow (in contrast to absolute positioning).\n\n**Syntax**: `left | right | none | inline-start | inline-end`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
        },
        floodColor: {
          $ref: "#/definitions/Property.FloodColor",
        },
        floodOpacity: {
          $ref: "#/definitions/Property.FloodOpacity",
        },
        font: {
          $ref: "#/definitions/Property.Font",
          description:
            "The **`font`** CSS shorthand property sets all the different properties of an element's font. Alternatively, it sets an element's font to a system font.\n\n**Syntax**: `[ [ <'font-style'> || <font-variant-css21> || <'font-weight'> || <'font-stretch'> ]? <'font-size'> [ / <'line-height'> ]? <'font-family'> ] | caption | icon | menu | message-box | small-caption | status-bar`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **3** |",
        },
        fontFamily: {
          $ref: "#/definitions/Property.FontFamily",
          description:
            "The **`font-family`** CSS property specifies a prioritized list of one or more font family names and/or generic family names for the selected element.\n\n**Syntax**: `[ <family-name> | <generic-family> ]#`\n\n**Initial value**: depends on user agent\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **3** |",
        },
        fontFeatureSettings: {
          $ref: "#/definitions/Property.FontFeatureSettings",
          description:
            "The **`font-feature-settings`** CSS property controls advanced typographic features in OpenType fonts.\n\n**Syntax**: `normal | <feature-tag-value>#`\n\n**Initial value**: `normal`\n\n|  Chrome  | Firefox  | Safari  |  Edge  |   IE   | | :------: | :------: | :-----: | :----: | :----: | |  **48**  |  **34**  | **9.1** | **15** | **10** | | 16 _-x-_ | 15 _-x-_ |         |        |        |",
        },
        fontKerning: {
          $ref: "#/definitions/Property.FontKerning",
          description:
            "The **`font-kerning`** CSS property sets the use of the kerning information stored in a font.\n\n**Syntax**: `auto | normal | none`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari  | Edge | IE  | | :----: | :-----: | :-----: | :--: | :-: | | **33** | **32**  |  **9**  | n/a  | No  | |        |         | 6 _-x-_ |      |     |",
        },
        fontLanguageOverride: {
          $ref: "#/definitions/Property.FontLanguageOverride",
          description:
            "The **`font-language-override`** CSS property controls the use of language-specific glyphs in a typeface.\n\n**Syntax**: `normal | <string>`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | |   No   | **34**  |   No   | n/a  | No  | |        | 4 _-x-_ |        |      |     |",
        },
        fontOpticalSizing: {
          $ref: "#/definitions/Property.FontOpticalSizing",
          description:
            "The **`font-optical-sizing`** CSS property sets whether text rendering is optimized for viewing at different sizes.\n\n**Syntax**: `auto | none`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **79** | **62**  | **11** | **17** | No  |",
        },
        fontPalette: {
          $ref: "#/definitions/Property.FontPalette",
          description:
            "**Syntax**: `normal | light | dark | <palette-identifier>`\n\n**Initial value**: `normal`\n\n| Chrome  | Firefox |  Safari  | Edge | IE  | | :-----: | :-----: | :------: | :--: | :-: | | **101** | **107** | **15.4** | n/a  | No  |",
        },
        fontSize: {
          $ref: "#/definitions/Property.FontSize%3C(string%7Cnumber)%3E",
          description:
            "The **`font-size`** CSS property sets the size of the font. Changing the font size also updates the sizes of the font size-relative `<length>` units, such as `em`, `ex`, and so forth.\n\n**Syntax**: `<absolute-size> | <relative-size> | <length-percentage>`\n\n**Initial value**: `medium`\n\n| Chrome | Firefox | Safari |  Edge  |   IE    | | :----: | :-----: | :----: | :----: | :-----: | | **1**  |  **1**  | **1**  | **12** | **5.5** |",
        },
        fontSizeAdjust: {
          $ref: "#/definitions/Property.FontSizeAdjust",
          description:
            "The **`font-size-adjust`** CSS property sets the size of lower-case letters relative to the current font size (which defines the size of upper-case letters).\n\n**Syntax**: `none | [ ex-height | cap-height | ch-width | ic-width | ic-height ]? [ from-font | <number> ]`\n\n**Initial value**: `none`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | |   No   |  **3**  | **16.4** | n/a  | No  |",
        },
        fontSmooth: {
          $ref: "#/definitions/Property.FontSmooth%3C(string%7Cnumber)%3E",
          description:
            "The **`font-smooth`** CSS property controls the application of anti-aliasing when fonts are rendered.\n\n**Syntax**: `auto | never | always | <absolute-size> | <length>`\n\n**Initial value**: `auto`\n\n|              Chrome              |              Firefox               |              Safari              | Edge | IE  | | :------------------------------: | :--------------------------------: | :------------------------------: | :--: | :-: | | **5** _(-webkit-font-smoothing)_ | **25** _(-moz-osx-font-smoothing)_ | **4** _(-webkit-font-smoothing)_ | n/a  | No  |",
        },
        fontStretch: {
          $ref: "#/definitions/Property.FontStretch",
          description:
            "The **`font-stretch`** CSS property selects a normal, condensed, or expanded face from a font.\n\n**Syntax**: `<font-stretch-absolute>`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **60** |  **9**  | **11** | **12** | **9** |",
        },
        fontStyle: {
          $ref: "#/definitions/Property.FontStyle",
          description:
            "The **`font-style`** CSS property sets whether a font should be styled with a normal, italic, or oblique face from its `font-family`.\n\n**Syntax**: `normal | italic | oblique <angle>?`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
        },
        fontSynthesis: {
          $ref: "#/definitions/Property.FontSynthesis",
          description:
            "The **`font-synthesis`** CSS property controls which missing typefaces, bold, italic, or small-caps, may be synthesized by the browser.\n\n**Syntax**: `none | [ weight || style || small-caps || position]`\n\n**Initial value**: `weight style small-caps position `\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **97** | **34**  | **9**  | n/a  | No  |",
        },
        fontSynthesisPosition: {
          $ref: "#/definitions/Property.FontSynthesisPosition",
          description:
            'The **`font-synthesis-position`** CSS property lets you specify whether or not a browser may synthesize the subscript and superscript "position" typefaces when they are missing in a font family, while using `font-variant-position` to set the positions.\n\n**Syntax**: `auto | none`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | |   No   | **118** |   No   | n/a  | No  |',
        },
        fontSynthesisSmallCaps: {
          $ref: "#/definitions/Property.FontSynthesisSmallCaps",
          description:
            "The **`font-synthesis-small-caps`** CSS property lets you specify whether or not the browser may synthesize small-caps typeface when it is missing in a font family. Small-caps glyphs typically use the form of uppercase letters but are reduced to the size of lowercase letters.\n\n**Syntax**: `auto | none`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **97** | **111** | **16.4** | n/a  | No  |",
        },
        fontSynthesisStyle: {
          $ref: "#/definitions/Property.FontSynthesisStyle",
          description:
            "The **`font-synthesis-style`** CSS property lets you specify whether or not the browser may synthesize the oblique typeface when it is missing in a font family.\n\n**Syntax**: `auto | none`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **97** | **111** | **16.4** | n/a  | No  |",
        },
        fontSynthesisWeight: {
          $ref: "#/definitions/Property.FontSynthesisWeight",
          description:
            "The **`font-synthesis-weight`** CSS property lets you specify whether or not the browser may synthesize the bold typeface when it is missing in a font family.\n\n**Syntax**: `auto | none`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **97** | **111** | **16.4** | n/a  | No  |",
        },
        fontVariant: {
          $ref: "#/definitions/Property.FontVariant",
          description:
            "The **`font-variant`** CSS shorthand property allows you to set all the font variants for a font.\n\n**Syntax**: `normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> || stylistic( <feature-value-name> ) || historical-forms || styleset( <feature-value-name># ) || character-variant( <feature-value-name># ) || swash( <feature-value-name> ) || ornaments( <feature-value-name> ) || annotation( <feature-value-name> ) || [ small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps ] || <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero || <east-asian-variant-values> || <east-asian-width-values> || ruby ]`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
        },
        fontVariantAlternates: {
          $ref: "#/definitions/Property.FontVariantAlternates",
          description:
            "The **`font-variant-alternates`** CSS property controls the usage of alternate glyphs. These alternate glyphs may be referenced by alternative names defined in `@font-feature-values`.\n\n**Syntax**: `normal | [ stylistic( <feature-value-name> ) || historical-forms || styleset( <feature-value-name># ) || character-variant( <feature-value-name># ) || swash( <feature-value-name> ) || ornaments( <feature-value-name> ) || annotation( <feature-value-name> ) ]`\n\n**Initial value**: `normal`\n\n| Chrome  | Firefox | Safari  | Edge | IE  | | :-----: | :-----: | :-----: | :--: | :-: | | **111** | **34**  | **9.1** | n/a  | No  |",
        },
        fontVariantCaps: {
          $ref: "#/definitions/Property.FontVariantCaps",
          description:
            "The **`font-variant-caps`** CSS property controls the use of alternate glyphs for capital letters.\n\n**Syntax**: `normal | small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari  | Edge | IE  | | :----: | :-----: | :-----: | :--: | :-: | | **52** | **34**  | **9.1** | n/a  | No  |",
        },
        fontVariantEastAsian: {
          $ref: "#/definitions/Property.FontVariantEastAsian",
          description:
            "The **`font-variant-east-asian`** CSS property controls the use of alternate glyphs for East Asian scripts, like Japanese and Chinese.\n\n**Syntax**: `normal | [ <east-asian-variant-values> || <east-asian-width-values> || ruby ]`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari  | Edge | IE  | | :----: | :-----: | :-----: | :--: | :-: | | **63** | **34**  | **9.1** | n/a  | No  |",
        },
        fontVariantEmoji: {
          $ref: "#/definitions/Property.FontVariantEmoji",
          description:
            "**Syntax**: `normal | text | emoji | unicode`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | |   No   |   n/a   |   No   | n/a  | No  |",
        },
        fontVariantLigatures: {
          $ref: "#/definitions/Property.FontVariantLigatures",
          description:
            "The **`font-variant-ligatures`** CSS property controls which ligatures and contextual forms are used in textual content of the elements it applies to. This leads to more harmonized forms in the resulting text.\n\n**Syntax**: `normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> ]`\n\n**Initial value**: `normal`\n\n|  Chrome  | Firefox | Safari  | Edge | IE  | | :------: | :-----: | :-----: | :--: | :-: | |  **34**  | **34**  | **9.1** | n/a  | No  | | 31 _-x-_ |         | 7 _-x-_ |      |     |",
        },
        fontVariantNumeric: {
          $ref: "#/definitions/Property.FontVariantNumeric",
          description:
            "The **`font-variant-numeric`** CSS property controls the usage of alternate glyphs for numbers, fractions, and ordinal markers.\n\n**Syntax**: `normal | [ <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero ]`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari  | Edge | IE  | | :----: | :-----: | :-----: | :--: | :-: | | **52** | **34**  | **9.1** | n/a  | No  |",
        },
        fontVariantPosition: {
          $ref: "#/definitions/Property.FontVariantPosition",
          description:
            "The **`font-variant-position`** CSS property controls the use of alternate, smaller glyphs that are positioned as superscript or subscript.\n\n**Syntax**: `normal | sub | super`\n\n**Initial value**: `normal`\n\n| Chrome  | Firefox | Safari  | Edge | IE  | | :-----: | :-----: | :-----: | :--: | :-: | | **117** | **34**  | **9.1** | n/a  | No  |",
        },
        fontVariationSettings: {
          $ref: "#/definitions/Property.FontVariationSettings",
          description:
            "The **`font-variation-settings`** CSS property provides low-level control over variable font characteristics, by specifying the four letter axis names of the characteristics you want to vary, along with their values.\n\n**Syntax**: `normal | [ <string> <number> ]#`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **62** | **62**  | **11** | **17** | No  |",
        },
        fontWeight: {
          $ref: "#/definitions/Property.FontWeight",
          description:
            "The **`font-weight`** CSS property sets the weight (or boldness) of the font. The weights available depend on the `font-family` that is currently set.\n\n**Syntax**: `<font-weight-absolute> | bolder | lighter`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **2**  |  **1**  | **1**  | **12** | **3** |",
        },
        forcedColorAdjust: {
          $ref: "#/definitions/Property.ForcedColorAdjust",
          description:
            "The **`forced-color-adjust`** CSS property allows authors to opt certain elements out of forced colors mode. This then restores the control of those values to CSS.\n\n**Syntax**: `auto | none`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |              Edge               |                 IE                  | | :----: | :-----: | :----: | :-----------------------------: | :---------------------------------: | | **89** | **113** |   No   |             **79**              | **10** _(-ms-high-contrast-adjust)_ | |        |         |        | 12 _(-ms-high-contrast-adjust)_ |                                     |",
        },
        gap: {
          $ref: "#/definitions/Property.Gap%3C(string%7Cnumber)%3E",
          description:
            "The **`gap`** CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for `row-gap` and `column-gap`.\n\n**Syntax**: `<'row-gap'> <'column-gap'>?`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **57** | **52**  | **10.1** | **16** | No  |",
        },
        glyphOrientationVertical: {
          $ref: "#/definitions/Property.GlyphOrientationVertical",
        },
        grid: {
          $ref: "#/definitions/Property.Grid",
          description:
            "The **`grid`** CSS property is a shorthand property that sets all of the explicit and implicit grid properties in a single declaration.\n\n**Syntax**: `<'grid-template'> | <'grid-template-rows'> / [ auto-flow && dense? ] <'grid-auto-columns'>? | [ auto-flow && dense? ] <'grid-auto-rows'>? / <'grid-template-columns'>`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **57** | **52**  | **10.1** | **16** | No  |",
        },
        gridArea: {
          $ref: "#/definitions/Property.GridArea",
          description:
            "The **`grid-area`** CSS shorthand property specifies a grid item's size and location within a grid by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the edges of its grid area.\n\n**Syntax**: `<grid-line> [ / <grid-line> ]{0,3}`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **57** | **52**  | **10.1** | **16** | No  |",
        },
        gridAutoColumns: {
          $ref: "#/definitions/Property.GridAutoColumns%3C(string%7Cnumber)%3E",
          description:
            "The **`grid-auto-columns`** CSS property specifies the size of an implicitly-created grid column track or pattern of tracks.\n\n**Syntax**: `<track-size>+`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  |  Edge  |             IE              | | :----: | :-----: | :------: | :----: | :-------------------------: | | **57** | **70**  | **10.1** | **16** | **10** _(-ms-grid-columns)_ |",
        },
        gridAutoFlow: {
          $ref: "#/definitions/Property.GridAutoFlow",
          description:
            "The **`grid-auto-flow`** CSS property controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.\n\n**Syntax**: `[ row | column ] || dense`\n\n**Initial value**: `row`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **57** | **52**  | **10.1** | **16** | No  |",
        },
        gridAutoRows: {
          $ref: "#/definitions/Property.GridAutoRows%3C(string%7Cnumber)%3E",
          description:
            "The **`grid-auto-rows`** CSS property specifies the size of an implicitly-created grid row track or pattern of tracks.\n\n**Syntax**: `<track-size>+`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  |  Edge  |            IE            | | :----: | :-----: | :------: | :----: | :----------------------: | | **57** | **70**  | **10.1** | **16** | **10** _(-ms-grid-rows)_ |",
        },
        gridColumn: {
          $ref: "#/definitions/Property.GridColumn",
          description:
            "The **`grid-column`** CSS shorthand property specifies a grid item's size and location within a grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.\n\n**Syntax**: `<grid-line> [ / <grid-line> ]?`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **57** | **52**  | **10.1** | **16** | No  |",
        },
        gridColumnEnd: {
          $ref: "#/definitions/Property.GridColumnEnd",
          description:
            "The **`grid-column-end`** CSS property specifies a grid item's end position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the block-end edge of its grid area.\n\n**Syntax**: `<grid-line>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **57** | **52**  | **10.1** | **16** | No  |",
        },
        gridColumnGap: {
          $ref: "#/definitions/Property.GridColumnGap%3C(string%7Cnumber)%3E",
          deprecated: true,
          description:
            "The **`column-gap`** CSS property sets the size of the gap (gutter) between an element's columns.\n\n**Syntax**: `<length-percentage>`\n\n**Initial value**: `0`",
        },
        gridColumnStart: {
          $ref: "#/definitions/Property.GridColumnStart",
          description:
            "The **`grid-column-start`** CSS property specifies a grid item's start position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement. This start position defines the block-start edge of the grid area.\n\n**Syntax**: `<grid-line>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **57** | **52**  | **10.1** | **16** | No  |",
        },
        gridGap: {
          $ref: "#/definitions/Property.GridGap%3C(string%7Cnumber)%3E",
          deprecated: true,
          description:
            "The **`gap`** CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for `row-gap` and `column-gap`.\n\n**Syntax**: `<'grid-row-gap'> <'grid-column-gap'>?`",
        },
        gridRow: {
          $ref: "#/definitions/Property.GridRow",
          description:
            "The **`grid-row`** CSS shorthand property specifies a grid item's size and location within a grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.\n\n**Syntax**: `<grid-line> [ / <grid-line> ]?`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **57** | **52**  | **10.1** | **16** | No  |",
        },
        gridRowEnd: {
          $ref: "#/definitions/Property.GridRowEnd",
          description:
            "The **`grid-row-end`** CSS property specifies a grid item's end position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-end edge of its grid area.\n\n**Syntax**: `<grid-line>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **57** | **52**  | **10.1** | **16** | No  |",
        },
        gridRowGap: {
          $ref: "#/definitions/Property.GridRowGap%3C(string%7Cnumber)%3E",
          deprecated: true,
          description:
            "The **`row-gap`** CSS property sets the size of the gap (gutter) between an element's rows.\n\n**Syntax**: `<length-percentage>`\n\n**Initial value**: `0`",
        },
        gridRowStart: {
          $ref: "#/definitions/Property.GridRowStart",
          description:
            "The **`grid-row-start`** CSS property specifies a grid item's start position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start edge of its grid area.\n\n**Syntax**: `<grid-line>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **57** | **52**  | **10.1** | **16** | No  |",
        },
        gridTemplate: {
          $ref: "#/definitions/Property.GridTemplate",
          description:
            "The **`grid-template`** CSS property is a shorthand property for defining grid columns, grid rows, and grid areas.\n\n**Syntax**: `none | [ <'grid-template-rows'> / <'grid-template-columns'> ] | [ <line-names>? <string> <track-size>? <line-names>? ]+ [ / <explicit-track-list> ]?`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **57** | **52**  | **10.1** | **16** | No  |",
        },
        gridTemplateAreas: {
          $ref: "#/definitions/Property.GridTemplateAreas",
          description:
            "The **`grid-template-areas`** CSS property specifies named grid areas, establishing the cells in the grid and assigning them names.\n\n**Syntax**: `none | <string>+`\n\n**Initial value**: `none`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **57** | **52**  | **10.1** | **16** | No  |",
        },
        gridTemplateColumns: {
          $ref: "#/definitions/Property.GridTemplateColumns%3C(string%7Cnumber)%3E",
          description:
            "The **`grid-template-columns`** CSS property defines the line names and track sizing functions of the grid columns.\n\n**Syntax**: `none | <track-list> | <auto-track-list> | subgrid <line-name-list>?`\n\n**Initial value**: `none`\n\n| Chrome | Firefox |  Safari  |  Edge  |             IE              | | :----: | :-----: | :------: | :----: | :-------------------------: | | **57** | **52**  | **10.1** | **16** | **10** _(-ms-grid-columns)_ |",
        },
        gridTemplateRows: {
          $ref: "#/definitions/Property.GridTemplateRows%3C(string%7Cnumber)%3E",
          description:
            "The **`grid-template-rows`** CSS property defines the line names and track sizing functions of the grid rows.\n\n**Syntax**: `none | <track-list> | <auto-track-list> | subgrid <line-name-list>?`\n\n**Initial value**: `none`\n\n| Chrome | Firefox |  Safari  |  Edge  |            IE            | | :----: | :-----: | :------: | :----: | :----------------------: | | **57** | **52**  | **10.1** | **16** | **10** _(-ms-grid-rows)_ |",
        },
        hangingPunctuation: {
          $ref: "#/definitions/Property.HangingPunctuation",
          description:
            "The **`hanging-punctuation`** CSS property specifies whether a punctuation mark should hang at the start or end of a line of text. Hanging punctuation may be placed outside the line box.\n\n**Syntax**: `none | [ first || [ force-end | allow-end ] || last ]`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | |   No   |   No    | **10** | n/a  | No  |",
        },
        height: {
          $ref: "#/definitions/Property.Height%3C(string%7Cnumber)%3E",
          description:
            "The **`height`** CSS property specifies the height of an element. By default, the property defines the height of the content area. If `box-sizing` is set to `border-box`, however, it instead determines the height of the border area.\n\n**Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
        },
        hyphenateCharacter: {
          $ref: "#/definitions/Property.HyphenateCharacter",
          description:
            "The **`hyphenate-character`** CSS property sets the character (or string) used at the end of a line before a hyphenation break.\n\n**Syntax**: `auto | <string>`\n\n**Initial value**: `auto`\n\n| Chrome  | Firefox |  Safari   | Edge | IE  | | :-----: | :-----: | :-------: | :--: | :-: | | **106** | **98**  |  **17**   | n/a  | No  | | 6 _-x-_ |         | 5.1 _-x-_ |      |     |",
        },
        hyphenateLimitChars: {
          $ref: "#/definitions/Property.HyphenateLimitChars",
          description:
            "The **`hyphenate-limit-chars`** CSS property specifies the minimum word length to allow hyphenation of words as well as the the minimum number of characters before and after the hyphen.\n\n**Syntax**: `[ auto | <integer> ]{1,3}`\n\n**Initial value**: `auto`\n\n| Chrome  | Firefox | Safari | Edge | IE  | | :-----: | :-----: | :----: | :--: | :-: | | **109** |   No    |   No   | n/a  | No  |",
        },
        hyphens: {
          $ref: "#/definitions/Property.Hyphens",
          description:
            "The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. It can prevent hyphenation entirely, hyphenate at manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.\n\n**Syntax**: `none | manual | auto`\n\n**Initial value**: `manual`\n\n|  Chrome  | Firefox |  Safari   |  Edge  |      IE      | | :------: | :-----: | :-------: | :----: | :----------: | |  **55**  | **43**  |  **17**   | **79** | **10** _-x-_ | | 13 _-x-_ | 6 _-x-_ | 5.1 _-x-_ |        |              |",
        },
        imageOrientation: {
          $ref: "#/definitions/Property.ImageOrientation",
          description:
            "The **`image-orientation`** CSS property specifies a layout-independent correction to the orientation of an image.\n\n**Syntax**: `from-image | <angle> | [ <angle>? flip ]`\n\n**Initial value**: `from-image`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **81** | **26**  | **13.1** | n/a  | No  |",
        },
        imageRendering: {
          $ref: "#/definitions/Property.ImageRendering",
          description:
            "The **`image-rendering`** CSS property sets an image scaling algorithm. The property applies to an element itself, to any images set in its other properties, and to its descendants.\n\n**Syntax**: `auto | crisp-edges | pixelated`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **13** | **3.6** | **6**  | n/a  | No  |",
        },
        imageResolution: {
          $ref: "#/definitions/Property.ImageResolution",
          description:
            "**Syntax**: `[ from-image || <resolution> ] && snap?`\n\n**Initial value**: `1dppx`",
        },
        imeMode: {
          $ref: "#/definitions/Property.ImeMode",
          deprecated: true,
          description:
            "The **`ime-mode`** CSS property controls the state of the input method editor (IME) for text fields. This property is obsolete.\n\n**Syntax**: `auto | normal | active | inactive | disabled`\n\n**Initial value**: `auto`",
        },
        initialLetter: {
          $ref: "#/definitions/Property.InitialLetter",
          description:
            "The `initial-letter` CSS property sets styling for dropped, raised, and sunken initial letters.\n\n**Syntax**: `normal | [ <number> <integer>? ]`\n\n**Initial value**: `normal`\n\n| Chrome  | Firefox |   Safari    | Edge | IE  | | :-----: | :-----: | :---------: | :--: | :-: | | **110** |   No    | **9** _-x-_ | n/a  | No  |",
        },
        inlineSize: {
          $ref: "#/definitions/Property.InlineSize%3C(string%7Cnumber)%3E",
          description:
            "The **`inline-size`** CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `width` or the `height` property, depending on the value of `writing-mode`.\n\n**Syntax**: `<'width'>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **57** | **41**  | **12.1** | n/a  | No  |",
        },
        inputSecurity: {
          $ref: "#/definitions/Property.InputSecurity",
          description: "**Syntax**: `auto | none`\n\n**Initial value**: `auto`",
        },
        inset: {
          $ref: "#/definitions/Property.Inset%3C(string%7Cnumber)%3E",
          description:
            "The **`inset`** CSS property is a shorthand that corresponds to the `top`, `right`, `bottom`, and/or `left` properties. It has the same multi-value syntax of the `margin` shorthand.\n\n**Syntax**: `<'top'>{1,4}`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **87** | **66**  | **14.1** | n/a  | No  |",
        },
        insetBlock: {
          $ref: "#/definitions/Property.InsetBlock%3C(string%7Cnumber)%3E",
          description:
            "The **`inset-block`** CSS property defines the logical block start and end offsets of an element, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>{1,2}`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **87** | **63**  | **14.1** | n/a  | No  |",
        },
        insetBlockEnd: {
          $ref: "#/definitions/Property.InsetBlockEnd%3C(string%7Cnumber)%3E",
          description:
            "The **`inset-block-end`** CSS property defines the logical block end offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **87** | **63**  | **14.1** | n/a  | No  |",
        },
        insetBlockStart: {
          $ref: "#/definitions/Property.InsetBlockStart%3C(string%7Cnumber)%3E",
          description:
            "The **`inset-block-start`** CSS property defines the logical block start offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **87** | **63**  | **14.1** | n/a  | No  |",
        },
        insetInline: {
          $ref: "#/definitions/Property.InsetInline%3C(string%7Cnumber)%3E",
          description:
            "The **`inset-inline`** CSS property defines the logical start and end offsets of an element in the inline direction, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>{1,2}`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **87** | **63**  | **14.1** | n/a  | No  |",
        },
        insetInlineEnd: {
          $ref: "#/definitions/Property.InsetInlineEnd%3C(string%7Cnumber)%3E",
          description:
            "The **`inset-inline-end`** CSS property defines the logical inline end inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **87** | **63**  | **14.1** | n/a  | No  |",
        },
        insetInlineStart: {
          $ref: "#/definitions/Property.InsetInlineStart%3C(string%7Cnumber)%3E",
          description:
            "The **`inset-inline-start`** CSS property defines the logical inline start inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **87** | **63**  | **14.1** | n/a  | No  |",
        },
        isolation: {
          $ref: "#/definitions/Property.Isolation",
          description:
            "The **`isolation`** CSS property determines whether an element must create a new stacking context.\n\n**Syntax**: `auto | isolate`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **41** | **36**  | **8**  | n/a  | No  |",
        },
        justifyContent: {
          $ref: "#/definitions/Property.JustifyContent",
          description:
            "The CSS **`justify-content`** property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.\n\n**Syntax**: `normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ]`\n\n**Initial value**: `normal`\n\n|  Chrome  | Firefox | Safari  |  Edge  |   IE   | | :------: | :-----: | :-----: | :----: | :----: | |  **29**  | **20**  |  **9**  | **12** | **11** | | 21 _-x-_ |         | 7 _-x-_ |        |        |",
        },
        justifyItems: {
          $ref: "#/definitions/Property.JustifyItems",
          description:
            "The CSS **`justify-items`** property defines the default `justify-self` for all items of the box, giving them all a default way of justifying each box along the appropriate axis.\n\n**Syntax**: `normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ] | legacy | legacy && [ left | right | center ]`\n\n**Initial value**: `legacy`\n\n| Chrome | Firefox | Safari |  Edge  |   IE   | | :----: | :-----: | :----: | :----: | :----: | | **52** | **20**  | **9**  | **12** | **11** |",
        },
        justifySelf: {
          $ref: "#/definitions/Property.JustifySelf",
          description:
            "The CSS **`justify-self`** property sets the way a box is justified inside its alignment container along the appropriate axis.\n\n**Syntax**: `auto | normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ]`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  |  Edge  |   IE   | | :----: | :-----: | :------: | :----: | :----: | | **57** | **45**  | **10.1** | **16** | **10** |",
        },
        justifyTracks: {
          $ref: "#/definitions/Property.JustifyTracks",
          description:
            "The **`justify-tracks`** CSS property sets the alignment in the masonry axis for grid containers that have masonry in their inline axis.\n\n**Syntax**: `[ normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ] ]#`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | |   No   |   n/a   |   No   | n/a  | No  |",
        },
        left: {
          $ref: "#/definitions/Property.Left%3C(string%7Cnumber)%3E",
          description:
            "The **`left`** CSS property participates in specifying the horizontal position of a positioned element. It has no effect on non-positioned elements.\n\n**Syntax**: `<length> | <percentage> | auto`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |   IE    | | :----: | :-----: | :----: | :----: | :-----: | | **1**  |  **1**  | **1**  | **12** | **5.5** |",
        },
        letterSpacing: {
          $ref: "#/definitions/Property.LetterSpacing%3C(string%7Cnumber)%3E",
          description:
            "The **`letter-spacing`** CSS property sets the horizontal spacing behavior between text characters. This value is added to the natural spacing between characters while rendering the text. Positive values of `letter-spacing` causes characters to spread farther apart, while negative values of `letter-spacing` bring characters closer together.\n\n**Syntax**: `normal | <length>`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
        },
        lightingColor: {
          $ref: "#/definitions/Property.LightingColor",
        },
        lineBreak: {
          $ref: "#/definitions/Property.LineBreak",
          description:
            "The **`line-break`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.\n\n**Syntax**: `auto | loose | normal | strict | anywhere`\n\n**Initial value**: `auto`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE    | | :-----: | :-----: | :-----: | :----: | :-----: | | **58**  | **69**  | **11**  | **14** | **5.5** | | 1 _-x-_ |         | 3 _-x-_ |        |         |",
        },
        lineClamp: {
          $ref: "#/definitions/Property.LineClamp",
          description:
            "**Syntax**: `none | <integer>`\n\n**Initial value**: `none`",
        },
        lineHeight: {
          $ref: "#/definitions/Property.LineHeight%3C(string%7Cnumber)%3E",
          description:
            "The **`line-height`** CSS property sets the height of a line box. It's commonly used to set the distance between lines of text. On block-level elements, it specifies the minimum height of line boxes within the element. On non-replaced inline elements, it specifies the height that is used to calculate line box height.\n\n**Syntax**: `normal | <number> | <length> | <percentage>`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
        },
        lineHeightStep: {
          $ref: "#/definitions/Property.LineHeightStep%3C(string%7Cnumber)%3E",
          description:
            "The **`line-height-step`** CSS property sets the step unit for line box heights. When the property is set, line box heights are rounded up to the closest multiple of the unit.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | |  n/a   |   No    |   No   | n/a  | No  |",
        },
        listStyle: {
          $ref: "#/definitions/Property.ListStyle",
          description:
            "The **`list-style`** CSS shorthand property allows you to set all the list style properties at once.\n\n**Syntax**: `<'list-style-type'> || <'list-style-position'> || <'list-style-image'>`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
        },
        listStyleImage: {
          $ref: "#/definitions/Property.ListStyleImage",
          description:
            "The **`list-style-image`** CSS property sets an image to be used as the list item marker.\n\n**Syntax**: `<image> | none`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
        },
        listStylePosition: {
          $ref: "#/definitions/Property.ListStylePosition",
          description:
            "The **`list-style-position`** CSS property sets the position of the `::marker` relative to a list item.\n\n**Syntax**: `inside | outside`\n\n**Initial value**: `outside`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
        },
        listStyleType: {
          $ref: "#/definitions/Property.ListStyleType",
          description:
            "The **`list-style-type`** CSS property sets the marker (such as a disc, character, or custom counter style) of a list item element.\n\n**Syntax**: `<counter-style> | <string> | none`\n\n**Initial value**: `disc`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
        },
        margin: {
          $ref: "#/definitions/Property.Margin%3C(string%7Cnumber)%3E",
          description:
            "The **`margin`** CSS shorthand property sets the margin area on all four sides of an element.\n\n**Syntax**: `[ <length> | <percentage> | auto ]{1,4}`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **3** |",
        },
        marginBlock: {
          $ref: "#/definitions/Property.MarginBlock%3C(string%7Cnumber)%3E",
          description:
            "The **`margin-block`** CSS shorthand property defines the logical block start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.\n\n**Syntax**: `<'margin-left'>{1,2}`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **87** | **66**  | **14.1** | n/a  | No  |",
        },
        marginBlockEnd: {
          $ref: "#/definitions/Property.MarginBlockEnd%3C(string%7Cnumber)%3E",
          description:
            "The **`margin-block-end`** CSS property defines the logical block end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.\n\n**Syntax**: `<'margin-left'>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **69** | **41**  | **12.1** | n/a  | No  |",
        },
        marginBlockStart: {
          $ref: "#/definitions/Property.MarginBlockStart%3C(string%7Cnumber)%3E",
          description:
            "The **`margin-block-start`** CSS property defines the logical block start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.\n\n**Syntax**: `<'margin-left'>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **69** | **41**  | **12.1** | n/a  | No  |",
        },
        marginBottom: {
          $ref: "#/definitions/Property.MarginBottom%3C(string%7Cnumber)%3E",
          description:
            "The **`margin-bottom`** CSS property sets the margin area on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.\n\n**Syntax**: `<length> | <percentage> | auto`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **3** |",
        },
        marginInline: {
          $ref: "#/definitions/Property.MarginInline%3C(string%7Cnumber)%3E",
          description:
            "The **`margin-inline`** CSS shorthand property is a shorthand property that defines both the logical inline start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.\n\n**Syntax**: `<'margin-left'>{1,2}`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **87** | **66**  | **14.1** | n/a  | No  |",
        },
        marginInlineEnd: {
          $ref: "#/definitions/Property.MarginInlineEnd%3C(string%7Cnumber)%3E",
          description:
            "The **`margin-inline-end`** CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the `margin-top`, `margin-right`, `margin-bottom` or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'margin-left'>`\n\n**Initial value**: `0`\n\n|          Chrome          |        Firefox        |          Safari          | Edge | IE  | | :----------------------: | :-------------------: | :----------------------: | :--: | :-: | |          **69**          |        **41**         |         **12.1**         | n/a  | No  | | 2 _(-webkit-margin-end)_ | 3 _(-moz-margin-end)_ | 3 _(-webkit-margin-end)_ |      |     |",
        },
        marginInlineStart: {
          $ref: "#/definitions/Property.MarginInlineStart%3C(string%7Cnumber)%3E",
          description:
            "The **`margin-inline-start`** CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the `margin-top`, `margin-right`, `margin-bottom`, or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'margin-left'>`\n\n**Initial value**: `0`\n\n|           Chrome           |         Firefox         |           Safari           | Edge | IE  | | :------------------------: | :---------------------: | :------------------------: | :--: | :-: | |           **69**           |         **41**          |          **12.1**          | n/a  | No  | | 2 _(-webkit-margin-start)_ | 3 _(-moz-margin-start)_ | 3 _(-webkit-margin-start)_ |      |     |",
        },
        marginLeft: {
          $ref: "#/definitions/Property.MarginLeft%3C(string%7Cnumber)%3E",
          description:
            "The **`margin-left`** CSS property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.\n\n**Syntax**: `<length> | <percentage> | auto`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **3** |",
        },
        marginRight: {
          $ref: "#/definitions/Property.MarginRight%3C(string%7Cnumber)%3E",
          description:
            "The **`margin-right`** CSS property sets the margin area on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.\n\n**Syntax**: `<length> | <percentage> | auto`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **3** |",
        },
        marginTop: {
          $ref: "#/definitions/Property.MarginTop%3C(string%7Cnumber)%3E",
          description:
            "The **`margin-top`** CSS property sets the margin area on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.\n\n**Syntax**: `<length> | <percentage> | auto`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **3** |",
        },
        marginTrim: {
          $ref: "#/definitions/Property.MarginTrim",
          description:
            "The `margin-trim` property allows the container to trim the margins of its children where they adjoin the container's edges.\n\n**Syntax**: `none | in-flow | all`\n\n**Initial value**: `none`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | |   No   |   No    | **16.4** | n/a  | No  |",
        },
        marker: {
          $ref: "#/definitions/Property.Marker",
        },
        markerEnd: {
          $ref: "#/definitions/Property.MarkerEnd",
        },
        markerMid: {
          $ref: "#/definitions/Property.MarkerMid",
        },
        markerStart: {
          $ref: "#/definitions/Property.MarkerStart",
        },
        mask: {
          $ref: "#/definitions/Property.Mask%3C(string%7Cnumber)%3E",
          description:
            "The **`mask`** CSS shorthand property hides an element (partially or fully) by masking or clipping the image at specific points.\n\n**Syntax**: `<mask-layer>#`\n\n| Chrome | Firefox |  Safari   | Edge  | IE  | | :----: | :-----: | :-------: | :---: | :-: | | **1**  | **53**  | **15.4**  | 12-79 | No  | |        |         | 3.1 _-x-_ |       |     |",
        },
        maskBorder: {
          $ref: "#/definitions/Property.MaskBorder",
          description:
            "The **`mask-border`** CSS shorthand property lets you create a mask along the edge of an element's border.\n\n**Syntax**: `<'mask-border-source'> || <'mask-border-slice'> [ / <'mask-border-width'>? [ / <'mask-border-outset'> ]? ]? || <'mask-border-repeat'> || <'mask-border-mode'>`\n\n|              Chrome              | Firefox |             Safari             | Edge | IE  | | :------------------------------: | :-----: | :----------------------------: | :--: | :-: | | **1** _(-webkit-mask-box-image)_ |   No    |            **17.2**            | n/a  | No  | |                                  |         | 3.1 _(-webkit-mask-box-image)_ |      |     |",
        },
        maskBorderMode: {
          $ref: "#/definitions/Property.MaskBorderMode",
          description:
            "The **`mask-border-mode`** CSS property specifies the blending mode used in a mask border.\n\n**Syntax**: `luminance | alpha`\n\n**Initial value**: `alpha`",
        },
        maskBorderOutset: {
          $ref: "#/definitions/Property.MaskBorderOutset%3C(string%7Cnumber)%3E",
          description:
            "The **`mask-border-outset`** CSS property specifies the distance by which an element's mask border is set out from its border box.\n\n**Syntax**: `[ <length> | <number> ]{1,4}`\n\n**Initial value**: `0`\n\n|                 Chrome                  | Firefox |                Safari                 | Edge | IE  | | :-------------------------------------: | :-----: | :-----------------------------------: | :--: | :-: | | **1** _(-webkit-mask-box-image-outset)_ |   No    |               **17.2**                | n/a  | No  | |                                         |         | 3.1 _(-webkit-mask-box-image-outset)_ |      |     |",
        },
        maskBorderRepeat: {
          $ref: "#/definitions/Property.MaskBorderRepeat",
          description:
            "The **`mask-border-repeat`** CSS property sets how the edge regions of a source image are adjusted to fit the dimensions of an element's mask border.\n\n**Syntax**: `[ stretch | repeat | round | space ]{1,2}`\n\n**Initial value**: `stretch`\n\n|                 Chrome                  | Firefox |                Safari                 | Edge | IE  | | :-------------------------------------: | :-----: | :-----------------------------------: | :--: | :-: | | **1** _(-webkit-mask-box-image-repeat)_ |   No    |               **17.2**                | n/a  | No  | |                                         |         | 3.1 _(-webkit-mask-box-image-repeat)_ |      |     |",
        },
        maskBorderSlice: {
          $ref: "#/definitions/Property.MaskBorderSlice",
          description:
            "The **`mask-border-slice`** CSS property divides the image set by `mask-border-source` into regions. These regions are used to form the components of an element's mask border.\n\n**Syntax**: `<number-percentage>{1,4} fill?`\n\n**Initial value**: `0`\n\n|                 Chrome                 | Firefox |                Safari                | Edge | IE  | | :------------------------------------: | :-----: | :----------------------------------: | :--: | :-: | | **1** _(-webkit-mask-box-image-slice)_ |   No    |               **17.2**               | n/a  | No  | |                                        |         | 3.1 _(-webkit-mask-box-image-slice)_ |      |     |",
        },
        maskBorderSource: {
          $ref: "#/definitions/Property.MaskBorderSource",
          description:
            "The **`mask-border-source`** CSS property sets the source image used to create an element's mask border.\n\n**Syntax**: `none | <image>`\n\n**Initial value**: `none`\n\n|                 Chrome                  | Firefox |                Safari                 | Edge | IE  | | :-------------------------------------: | :-----: | :-----------------------------------: | :--: | :-: | | **1** _(-webkit-mask-box-image-source)_ |   No    |               **17.2**                | n/a  | No  | |                                         |         | 3.1 _(-webkit-mask-box-image-source)_ |      |     |",
        },
        maskBorderWidth: {
          $ref: "#/definitions/Property.MaskBorderWidth%3C(string%7Cnumber)%3E",
          description:
            "The **`mask-border-width`** CSS property sets the width of an element's mask border.\n\n**Syntax**: `[ <length-percentage> | <number> | auto ]{1,4}`\n\n**Initial value**: `auto`\n\n|                 Chrome                 | Firefox |                Safari                | Edge | IE  | | :------------------------------------: | :-----: | :----------------------------------: | :--: | :-: | | **1** _(-webkit-mask-box-image-width)_ |   No    |               **17.2**               | n/a  | No  | |                                        |         | 3.1 _(-webkit-mask-box-image-width)_ |      |     |",
        },
        maskClip: {
          $ref: "#/definitions/Property.MaskClip",
          description:
            "The **`mask-clip`** CSS property determines the area which is affected by a mask. The painted content of an element must be restricted to this area.\n\n**Syntax**: `[ <geometry-box> | no-clip ]#`\n\n**Initial value**: `border-box`\n\n| Chrome  | Firefox |  Safari  | Edge | IE  | | :-----: | :-----: | :------: | :--: | :-: | | **120** | **53**  | **15.4** | n/a  | No  | | 1 _-x-_ |         | 4 _-x-_  |      |     |",
        },
        maskComposite: {
          $ref: "#/definitions/Property.MaskComposite",
          description:
            "The **`mask-composite`** CSS property represents a compositing operation used on the current mask layer with the mask layers below it.\n\n**Syntax**: `<compositing-operator>#`\n\n**Initial value**: `add`\n\n| Chrome  | Firefox |  Safari  | Edge  | IE  | | :-----: | :-----: | :------: | :---: | :-: | | **120** | **53**  | **15.4** | 18-79 | No  |",
        },
        maskImage: {
          $ref: "#/definitions/Property.MaskImage",
          description:
            "The **`mask-image`** CSS property sets the image that is used as mask layer for an element. By default this means the alpha channel of the mask image will be multiplied with the alpha channel of the element. This can be controlled with the `mask-mode` property.\n\n**Syntax**: `<mask-reference>#`\n\n**Initial value**: `none`\n\n| Chrome  | Firefox |  Safari  | Edge  | IE  | | :-----: | :-----: | :------: | :---: | :-: | | **120** | **53**  | **15.4** | 16-79 | No  | | 1 _-x-_ |         | 4 _-x-_  |       |     |",
        },
        maskMode: {
          $ref: "#/definitions/Property.MaskMode",
          description:
            "The **`mask-mode`** CSS property sets whether the mask reference defined by `mask-image` is treated as a luminance or alpha mask.\n\n**Syntax**: `<masking-mode>#`\n\n**Initial value**: `match-source`\n\n| Chrome  | Firefox |  Safari  | Edge | IE  | | :-----: | :-----: | :------: | :--: | :-: | | **120** | **53**  | **15.4** | n/a  | No  |",
        },
        maskOrigin: {
          $ref: "#/definitions/Property.MaskOrigin",
          description:
            "The **`mask-origin`** CSS property sets the origin of a mask.\n\n**Syntax**: `<geometry-box>#`\n\n**Initial value**: `border-box`\n\n| Chrome  | Firefox |  Safari  | Edge | IE  | | :-----: | :-----: | :------: | :--: | :-: | | **120** | **53**  | **15.4** | n/a  | No  | | 1 _-x-_ |         | 4 _-x-_  |      |     |",
        },
        maskPosition: {
          $ref: "#/definitions/Property.MaskPosition%3C(string%7Cnumber)%3E",
          description:
            "The **`mask-position`** CSS property sets the initial position, relative to the mask position layer set by `mask-origin`, for each defined mask image.\n\n**Syntax**: `<position>#`\n\n**Initial value**: `center`\n\n| Chrome  | Firefox |  Safari   | Edge  | IE  | | :-----: | :-----: | :-------: | :---: | :-: | | **120** | **53**  | **15.4**  | 18-79 | No  | | 1 _-x-_ |         | 3.1 _-x-_ |       |     |",
        },
        maskRepeat: {
          $ref: "#/definitions/Property.MaskRepeat",
          description:
            "The **`mask-repeat`** CSS property sets how mask images are repeated. A mask image can be repeated along the horizontal axis, the vertical axis, both axes, or not repeated at all.\n\n**Syntax**: `<repeat-style>#`\n\n**Initial value**: `repeat`\n\n| Chrome  | Firefox |  Safari   | Edge  | IE  | | :-----: | :-----: | :-------: | :---: | :-: | | **120** | **53**  | **15.4**  | 18-79 | No  | | 1 _-x-_ |         | 3.1 _-x-_ |       |     |",
        },
        maskSize: {
          $ref: "#/definitions/Property.MaskSize%3C(string%7Cnumber)%3E",
          description:
            "The **`mask-size`** CSS property specifies the sizes of the mask images. The size of the image can be fully or partially constrained in order to preserve its intrinsic ratio.\n\n**Syntax**: `<bg-size>#`\n\n**Initial value**: `auto`\n\n| Chrome  | Firefox |  Safari  | Edge  | IE  | | :-----: | :-----: | :------: | :---: | :-: | | **120** | **53**  | **15.4** | 18-79 | No  | | 4 _-x-_ |         | 4 _-x-_  |       |     |",
        },
        maskType: {
          $ref: "#/definitions/Property.MaskType",
          description:
            "The **`mask-type`** CSS property sets whether an SVG `<mask>` element is used as a _luminance_ or an _alpha_ mask. It applies to the `<mask>` element itself.\n\n**Syntax**: `luminance | alpha`\n\n**Initial value**: `luminance`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **24** | **35**  | **7**  | n/a  | No  |",
        },
        masonryAutoFlow: {
          $ref: "#/definitions/Property.MasonryAutoFlow",
          description:
            "This feature is not Baseline because it does not work in some of the most widely-used browsers.\n\n**Syntax**: `[ pack | next ] || [ definite-first | ordered ]`\n\n**Initial value**: `pack`\n\n| Chrome | Firefox |   Safari    | Edge | IE  | | :----: | :-----: | :---------: | :--: | :-: | |   No   |   No    | **preview** | n/a  | No  |",
        },
        mathDepth: {
          $ref: "#/definitions/Property.MathDepth",
          description:
            "The **`math-depth`** property describes a notion of _depth_ for each element of a mathematical formula, with respect to the top-level container of that formula. Concretely, this is used to determine the computed value of the font-size property when its specified value is `math`.\n\n**Syntax**: `auto-add | add(<integer>) | <integer>`\n\n**Initial value**: `0`\n\n| Chrome  | Firefox | Safari | Edge | IE  | | :-----: | :-----: | :----: | :--: | :-: | | **109** | **117** |   No   | n/a  | No  |",
        },
        mathShift: {
          $ref: "#/definitions/Property.MathShift",
          description:
            "The `math-shift` property indicates whether superscripts inside MathML formulas should be raised by a normal or compact shift.\n\n**Syntax**: `normal | compact`\n\n**Initial value**: `normal`\n\n| Chrome  | Firefox | Safari | Edge | IE  | | :-----: | :-----: | :----: | :--: | :-: | | **109** |   No    |   No   | n/a  | No  |",
        },
        mathStyle: {
          $ref: "#/definitions/Property.MathStyle",
          description:
            "The `math-style` property indicates whether MathML equations should render with normal or compact height.\n\n**Syntax**: `normal | compact`\n\n**Initial value**: `normal`\n\n| Chrome  | Firefox |  Safari  | Edge | IE  | | :-----: | :-----: | :------: | :--: | :-: | | **109** | **117** | **14.1** | n/a  | No  |",
        },
        maxBlockSize: {
          $ref: "#/definitions/Property.MaxBlockSize%3C(string%7Cnumber)%3E",
          description:
            "The **`max-block-size`** CSS property specifies the maximum size of an element in the direction opposite that of the writing direction as specified by `writing-mode`. That is, if the writing direction is horizontal, then `max-block-size` is equivalent to `max-height`; if the writing direction is vertical, `max-block-size` is the same as `max-width`.\n\n**Syntax**: `<'max-width'>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **57** | **41**  | **12.1** | n/a  | No  |",
        },
        maxHeight: {
          $ref: "#/definitions/Property.MaxHeight%3C(string%7Cnumber)%3E",
          description:
            "The **`max-height`** CSS property sets the maximum height of an element. It prevents the used value of the `height` property from becoming larger than the value specified for `max-height`.\n\n**Syntax**: `none | <length-percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   | | :----: | :-----: | :-----: | :----: | :---: | | **18** |  **1**  | **1.3** | **12** | **7** |",
        },
        maxInlineSize: {
          $ref: "#/definitions/Property.MaxInlineSize%3C(string%7Cnumber)%3E",
          description:
            "The **`max-inline-size`** CSS property defines the horizontal or vertical maximum size of an element's block, depending on its writing mode. It corresponds to either the `max-width` or the `max-height` property, depending on the value of `writing-mode`.\n\n**Syntax**: `<'max-width'>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox |   Safari   | Edge | IE  | | :----: | :-----: | :--------: | :--: | :-: | | **57** | **41**  |  **12.1**  | n/a  | No  | |        |         | 10.1 _-x-_ |      |     |",
        },
        maxLines: {
          $ref: "#/definitions/Property.MaxLines",
          description:
            "**Syntax**: `none | <integer>`\n\n**Initial value**: `none`",
        },
        maxWidth: {
          $ref: "#/definitions/Property.MaxWidth%3C(string%7Cnumber)%3E",
          description:
            "The **`max-width`** CSS property sets the maximum width of an element. It prevents the used value of the `width` property from becoming larger than the value specified by `max-width`.\n\n**Syntax**: `none | <length-percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **7** |",
        },
        minBlockSize: {
          $ref: "#/definitions/Property.MinBlockSize%3C(string%7Cnumber)%3E",
          description:
            "The **`min-block-size`** CSS property defines the minimum horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `min-width` or the `min-height` property, depending on the value of `writing-mode`.\n\n**Syntax**: `<'min-width'>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **57** | **41**  | **12.1** | n/a  | No  |",
        },
        minHeight: {
          $ref: "#/definitions/Property.MinHeight%3C(string%7Cnumber)%3E",
          description:
            "The **`min-height`** CSS property sets the minimum height of an element. It prevents the used value of the `height` property from becoming smaller than the value specified for `min-height`.\n\n**Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   | | :----: | :-----: | :-----: | :----: | :---: | | **1**  |  **3**  | **1.3** | **12** | **7** |",
        },
        minInlineSize: {
          $ref: "#/definitions/Property.MinInlineSize%3C(string%7Cnumber)%3E",
          description:
            "The **`min-inline-size`** CSS property defines the horizontal or vertical minimal size of an element's block, depending on its writing mode. It corresponds to either the `min-width` or the `min-height` property, depending on the value of `writing-mode`.\n\n**Syntax**: `<'min-width'>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **57** | **41**  | **12.1** | n/a  | No  |",
        },
        minWidth: {
          $ref: "#/definitions/Property.MinWidth%3C(string%7Cnumber)%3E",
          description:
            "The **`min-width`** CSS property sets the minimum width of an element. It prevents the used value of the `width` property from becoming smaller than the value specified for `min-width`.\n\n**Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **7** |",
        },
        mixBlendMode: {
          $ref: "#/definitions/Property.MixBlendMode",
          description:
            "The **`mix-blend-mode`** CSS property sets how an element's content should blend with the content of the element's parent and the element's background.\n\n**Syntax**: `<blend-mode> | plus-lighter`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **41** | **32**  | **8**  | n/a  | No  |",
        },
        motion: {
          $ref: "#/definitions/Property.Offset%3C(string%7Cnumber)%3E",
          description:
            "The **`offset`** CSS shorthand property sets all the properties required for animating an element along a defined path.\n\n**Syntax**: `[ <'offset-position'>? [ <'offset-path'> [ <'offset-distance'> || <'offset-rotate'> ]? ]? ]! [ / <'offset-anchor'> ]?`\n\n|    Chrome     | Firefox | Safari | Edge | IE  | | :-----------: | :-----: | :----: | :--: | :-: | |    **55**     | **72**  | **16** | n/a  | No  | | 46 _(motion)_ |         |        |      |     |",
        },
        motionDistance: {
          $ref: "#/definitions/Property.OffsetDistance%3C(string%7Cnumber)%3E",
          description:
            "The **`offset-distance`** CSS property specifies a position along an `offset-path` for an element to be placed.\n\n**Syntax**: `<length-percentage>`\n\n**Initial value**: `0`\n\n|         Chrome         | Firefox | Safari | Edge | IE  | | :--------------------: | :-----: | :----: | :--: | :-: | |         **55**         | **72**  | **16** | n/a  | No  | | 46 _(motion-distance)_ |         |        |      |     |",
        },
        motionPath: {
          $ref: "#/definitions/Property.OffsetPath",
          description:
            "The **`offset-path`** CSS property specifies a motion path for an element to follow and defines the element's positioning within the parent container or SVG coordinate system.\n\n**Syntax**: `none | <offset-path> || <coord-box>`\n\n**Initial value**: `none`\n\n|       Chrome       | Firefox |  Safari  | Edge | IE  | | :----------------: | :-----: | :------: | :--: | :-: | |       **55**       | **72**  | **15.4** | n/a  | No  | | 46 _(motion-path)_ |         |          |      |     |",
        },
        motionRotation: {
          $ref: "#/definitions/Property.OffsetRotate",
          description:
            "The **`offset-rotate`** CSS property defines the orientation/direction of the element as it is positioned along the `offset-path`.\n\n**Syntax**: `[ auto | reverse ] || <angle>`\n\n**Initial value**: `auto`\n\n|         Chrome         | Firefox | Safari | Edge | IE  | | :--------------------: | :-----: | :----: | :--: | :-: | |         **56**         | **72**  | **16** | n/a  | No  | | 46 _(motion-rotation)_ |         |        |      |     |",
        },
        msAccelerator: {
          $ref: "#/definitions/Property.MsAccelerator",
          description:
            "The **`-ms-accelerator`** CSS property is a Microsoft extension that sets or retrieves a string indicating whether the object represents a keyboard shortcut.\n\n**Syntax**: `false | true`\n\n**Initial value**: `false`",
        },
        msBlockProgression: {
          $ref: "#/definitions/Property.MsBlockProgression",
          description:
            "The **`-ms-block-progression`** CSS property is a Microsoft extension that specifies the block progression and layout orientation.\n\n**Syntax**: `tb | rl | bt | lr`\n\n**Initial value**: `tb`",
        },
        msContentZoomChaining: {
          $ref: "#/definitions/Property.MsContentZoomChaining",
          description:
            "The **`-ms-content-zoom-chaining`** CSS property is a Microsoft extension specifying the zoom behavior that occurs when a user hits the zoom limit during page manipulation.\n\n**Syntax**: `none | chained`\n\n**Initial value**: `none`",
        },
        msContentZoomLimit: {
          $ref: "#/definitions/Property.MsContentZoomLimit",
          description:
            "The **`-ms-content-zoom-limit`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-content-zoom-limit-min` and `-ms-content-zoom-limit-max` properties.\n\n**Syntax**: `<'-ms-content-zoom-limit-min'> <'-ms-content-zoom-limit-max'>`",
        },
        msContentZoomLimitMax: {
          $ref: "#/definitions/Property.MsContentZoomLimitMax",
          description:
            "The **`-ms-content-zoom-limit-max`** CSS property is a Microsoft extension that specifies the selected elements' maximum zoom factor.\n\n**Syntax**: `<percentage>`\n\n**Initial value**: `400%`",
        },
        msContentZoomLimitMin: {
          $ref: "#/definitions/Property.MsContentZoomLimitMin",
          description:
            "The **`-ms-content-zoom-limit-min`** CSS property is a Microsoft extension that specifies the minimum zoom factor.\n\n**Syntax**: `<percentage>`\n\n**Initial value**: `100%`",
        },
        msContentZoomSnap: {
          $ref: "#/definitions/Property.MsContentZoomSnap",
          description:
            "The **`-ms-content-zoom-snap`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-content-zoom-snap-type` and `-ms-content-zoom-snap-points` properties.\n\n**Syntax**: `<'-ms-content-zoom-snap-type'> || <'-ms-content-zoom-snap-points'>`",
        },
        msContentZoomSnapPoints: {
          $ref: "#/definitions/Property.MsContentZoomSnapPoints",
          description:
            "The **`-ms-content-zoom-snap-points`** CSS property is a Microsoft extension that specifies where zoom snap-points are located.\n\n**Syntax**: `snapInterval( <percentage>, <percentage> ) | snapList( <percentage># )`\n\n**Initial value**: `snapInterval(0%, 100%)`",
        },
        msContentZoomSnapType: {
          $ref: "#/definitions/Property.MsContentZoomSnapType",
          description:
            "The **`-ms-content-zoom-snap-type`** CSS property is a Microsoft extension that specifies how zooming is affected by defined snap-points.\n\n**Syntax**: `none | proximity | mandatory`\n\n**Initial value**: `none`",
        },
        msContentZooming: {
          $ref: "#/definitions/Property.MsContentZooming",
          description:
            "The **`-ms-content-zooming`** CSS property is a Microsoft extension that specifies whether zooming is enabled.\n\n**Syntax**: `none | zoom`\n\n**Initial value**: zoom for the top level element, none for all other elements",
        },
        msFilter: {
          $ref: "#/definitions/Property.MsFilter",
          description:
            'The `-ms-filter` CSS property is a Microsoft extension that sets or retrieves the filter or collection of filters applied to an object.\n\n**Syntax**: `<string>`\n\n**Initial value**: "" (the empty string)',
        },
        msFlex: {
          $ref: "#/definitions/Property.Flex%3C(string%7Cnumber)%3E",
          description:
            "The **`flex`** CSS shorthand property sets how a flex _item_ will grow or shrink to fit the space available in its flex container.\n\n**Syntax**: `none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`",
        },
        msFlexDirection: {
          $ref: "#/definitions/Property.FlexDirection",
          description:
            "The **`flex-direction`** CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).\n\n**Syntax**: `row | row-reverse | column | column-reverse`\n\n**Initial value**: `row`",
        },
        msFlexPositive: {
          $ref: "#/definitions/Property.FlexGrow",
          description:
            "The **`flex-grow`** CSS property sets the flex grow factor of a flex item's main size.\n\n**Syntax**: `<number>`\n\n**Initial value**: `0`",
        },
        msFlowFrom: {
          $ref: "#/definitions/Property.MsFlowFrom",
          description:
            "The **`-ms-flow-from`** CSS property is a Microsoft extension that gets or sets a value identifying a region container in the document that accepts the content flow from the data source.\n\n**Syntax**: `[ none | <custom-ident> ]#`\n\n**Initial value**: `none`",
        },
        msFlowInto: {
          $ref: "#/definitions/Property.MsFlowInto",
          description:
            "The **`-ms-flow-into`** CSS property is a Microsoft extension that gets or sets a value identifying an iframe container in the document that serves as the region's data source.\n\n**Syntax**: `[ none | <custom-ident> ]#`\n\n**Initial value**: `none`",
        },
        msGridColumns: {
          $ref: "#/definitions/Property.MsGridColumns%3C(string%7Cnumber)%3E",
          description:
            "The **`grid-template-columns`** CSS property defines the line names and track sizing functions of the grid columns.\n\n**Syntax**: `none | <track-list> | <auto-track-list>`\n\n**Initial value**: `none`",
        },
        msGridRows: {
          $ref: "#/definitions/Property.MsGridRows%3C(string%7Cnumber)%3E",
          description:
            "The **`grid-template-rows`** CSS property defines the line names and track sizing functions of the grid rows.\n\n**Syntax**: `none | <track-list> | <auto-track-list>`\n\n**Initial value**: `none`",
        },
        msHighContrastAdjust: {
          $ref: "#/definitions/Property.MsHighContrastAdjust",
          description:
            "The **`-ms-high-contrast-adjust`** CSS property is a Microsoft extension that gets or sets a value indicating whether to override any CSS properties that would have been set in high contrast mode.\n\n**Syntax**: `auto | none`\n\n**Initial value**: `auto`",
        },
        msHyphenateLimitChars: {
          $ref: "#/definitions/Property.MsHyphenateLimitChars",
          description:
            "The **`-ms-hyphenate-limit-chars`** CSS property is a Microsoft extension that specifies one to three values indicating the minimum number of characters in a hyphenated word. If the word does not meet the required minimum number of characters in the word, before the hyphen, or after the hyphen, then the word is not hyphenated.\n\n**Syntax**: `auto | <integer>{1,3}`\n\n**Initial value**: `auto`",
        },
        msHyphenateLimitLines: {
          $ref: "#/definitions/Property.MsHyphenateLimitLines",
          description:
            "The **`-ms-hyphenate-limit-lines`** CSS property is a Microsoft extension specifying the maximum number of consecutive lines in an element that may be ended with a hyphenated word.\n\n**Syntax**: `no-limit | <integer>`\n\n**Initial value**: `no-limit`",
        },
        msHyphenateLimitZone: {
          $ref: "#/definitions/Property.MsHyphenateLimitZone%3C(string%7Cnumber)%3E",
          description:
            "The `**-ms-hyphenate-limit-zone**` CSS property is a Microsoft extension specifying the width of the hyphenation zone.\n\n**Syntax**: `<percentage> | <length>`\n\n**Initial value**: `0`",
        },
        msHyphens: {
          $ref: "#/definitions/Property.Hyphens",
          description:
            "The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. It can prevent hyphenation entirely, hyphenate at manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.\n\n**Syntax**: `none | manual | auto`\n\n**Initial value**: `manual`",
        },
        msImeAlign: {
          $ref: "#/definitions/Property.MsImeAlign",
          description:
            "The **`-ms-ime-align`** CSS property is a Microsoft extension aligning the Input Method Editor (IME) candidate window box relative to the element on which the IME composition is active. The extension is implemented in Microsoft Edge and Internet Explorer 11.\n\n**Syntax**: `auto | after`\n\n**Initial value**: `auto`",
        },
        msImeMode: {
          $ref: "#/definitions/Property.ImeMode",
          deprecated: true,
          description:
            "The **`ime-mode`** CSS property controls the state of the input method editor (IME) for text fields. This property is obsolete.\n\n**Syntax**: `auto | normal | active | inactive | disabled`\n\n**Initial value**: `auto`",
        },
        msLineBreak: {
          $ref: "#/definitions/Property.LineBreak",
          description:
            "The **`line-break`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.\n\n**Syntax**: `auto | loose | normal | strict | anywhere`\n\n**Initial value**: `auto`",
        },
        msOrder: {
          $ref: "#/definitions/Property.Order",
          description:
            "The **`order`** CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending `order` value and then by their source code order.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `0`",
        },
        msOverflowStyle: {
          $ref: "#/definitions/Property.MsOverflowStyle",
          description:
            "The **`-ms-overflow-style`** CSS property is a Microsoft extension controlling the behavior of scrollbars when the content of an element overflows.\n\n**Syntax**: `auto | none | scrollbar | -ms-autohiding-scrollbar`\n\n**Initial value**: `auto`",
        },
        msOverflowX: {
          $ref: "#/definitions/Property.OverflowX",
          description:
            "The **`overflow-x`** CSS property sets what shows when content overflows a block-level element's left and right edges. This may be nothing, a scroll bar, or the overflow content.\n\n**Syntax**: `visible | hidden | clip | scroll | auto`\n\n**Initial value**: `visible`",
        },
        msOverflowY: {
          $ref: "#/definitions/Property.OverflowY",
          description:
            "The **`overflow-y`** CSS property sets what shows when content overflows a block-level element's top and bottom edges. This may be nothing, a scroll bar, or the overflow content.\n\n**Syntax**: `visible | hidden | clip | scroll | auto`\n\n**Initial value**: `visible`",
        },
        msScrollChaining: {
          $ref: "#/definitions/Property.MsScrollChaining",
          description:
            "The `**-ms-scroll-chaining**` CSS property is a Microsoft extension that specifies the scrolling behavior that occurs when a user hits the scroll limit during a manipulation.\n\n**Syntax**: `chained | none`\n\n**Initial value**: `chained`",
        },
        msScrollLimit: {
          $ref: "#/definitions/Property.MsScrollLimit",
          description:
            "The **\\-ms-scroll-limit** CSS property is a Microsoft extension that specifies values for the `-ms-scroll-limit-x-min`, `-ms-scroll-limit-y-min`, `-ms-scroll-limit-x-max`, and `-ms-scroll-limit-y-max` properties.\n\n**Syntax**: `<'-ms-scroll-limit-x-min'> <'-ms-scroll-limit-y-min'> <'-ms-scroll-limit-x-max'> <'-ms-scroll-limit-y-max'>`",
        },
        msScrollLimitXMax: {
          $ref: "#/definitions/Property.MsScrollLimitXMax%3C(string%7Cnumber)%3E",
          description:
            "The `**-ms-scroll-limit-x-max**` CSS property is a Microsoft extension that specifies the maximum value for the `Element.scrollLeft` property.\n\n**Syntax**: `auto | <length>`\n\n**Initial value**: `auto`",
        },
        msScrollLimitXMin: {
          $ref: "#/definitions/Property.MsScrollLimitXMin%3C(string%7Cnumber)%3E",
          description:
            "The **`-ms-scroll-limit-x-min`** CSS property is a Microsoft extension that specifies the minimum value for the `Element.scrollLeft` property.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`",
        },
        msScrollLimitYMax: {
          $ref: "#/definitions/Property.MsScrollLimitYMax%3C(string%7Cnumber)%3E",
          description:
            "The **`-ms-scroll-limit-y-max`** CSS property is a Microsoft extension that specifies the maximum value for the `Element.scrollTop` property.\n\n**Syntax**: `auto | <length>`\n\n**Initial value**: `auto`",
        },
        msScrollLimitYMin: {
          $ref: "#/definitions/Property.MsScrollLimitYMin%3C(string%7Cnumber)%3E",
          description:
            "The **`-ms-scroll-limit-y-min`** CSS property is a Microsoft extension that specifies the minimum value for the `Element.scrollTop` property.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`",
        },
        msScrollRails: {
          $ref: "#/definitions/Property.MsScrollRails",
          description:
            "The **`-ms-scroll-rails`** CSS property is a Microsoft extension that specifies whether scrolling locks to the primary axis of motion.\n\n**Syntax**: `none | railed`\n\n**Initial value**: `railed`",
        },
        msScrollSnapPointsX: {
          $ref: "#/definitions/Property.MsScrollSnapPointsX",
          description:
            "The **`-ms-scroll-snap-points-x`** CSS property is a Microsoft extension that specifies where snap-points will be located along the x-axis.\n\n**Syntax**: `snapInterval( <length-percentage>, <length-percentage> ) | snapList( <length-percentage># )`\n\n**Initial value**: `snapInterval(0px, 100%)`",
        },
        msScrollSnapPointsY: {
          $ref: "#/definitions/Property.MsScrollSnapPointsY",
          description:
            "The **`-ms-scroll-snap-points-y`** CSS property is a Microsoft extension that specifies where snap-points will be located along the y-axis.\n\n**Syntax**: `snapInterval( <length-percentage>, <length-percentage> ) | snapList( <length-percentage># )`\n\n**Initial value**: `snapInterval(0px, 100%)`",
        },
        msScrollSnapType: {
          $ref: "#/definitions/Property.MsScrollSnapType",
          description:
            "The **`scroll-snap-type`** CSS property sets how strictly snap points are enforced on the scroll container in case there is one.\n\n**Syntax**: `none | proximity | mandatory`\n\n**Initial value**: `none`",
        },
        msScrollSnapX: {
          $ref: "#/definitions/Property.MsScrollSnapX",
          description:
            "The **`-ms-scroll-snap-x`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-scroll-snap-type` and `-ms-scroll-snap-points-x` properties.\n\n**Syntax**: `<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-x'>`",
        },
        msScrollSnapY: {
          $ref: "#/definitions/Property.MsScrollSnapY",
          description:
            "The **`-ms-scroll-snap-x`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-scroll-snap-type` and `-ms-scroll-snap-points-y` properties.\n\n**Syntax**: `<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-y'>`",
        },
        msScrollTranslation: {
          $ref: "#/definitions/Property.MsScrollTranslation",
          description:
            "The **`-ms-scroll-translation`** CSS property is a Microsoft extension that specifies whether vertical-to-horizontal scroll wheel translation occurs on the specified element.\n\n**Syntax**: `none | vertical-to-horizontal`\n\n**Initial value**: `none`",
        },
        msScrollbar3dlightColor: {
          $ref: "#/definitions/Property.MsScrollbar3dlightColor",
          description:
            "The **`-ms-scrollbar-3dlight-color`** CSS property is a Microsoft extension specifying the color of the top and left edges of the scroll box and scroll arrows of a scroll bar.\n\n**Syntax**: `<color>`\n\n**Initial value**: depends on user agent",
        },
        msScrollbarArrowColor: {
          $ref: "#/definitions/Property.MsScrollbarArrowColor",
          description:
            "The **`-ms-scrollbar-arrow-color`** CSS property is a Microsoft extension that specifies the color of the arrow elements of a scroll arrow.\n\n**Syntax**: `<color>`\n\n**Initial value**: `ButtonText`",
        },
        msScrollbarBaseColor: {
          $ref: "#/definitions/Property.MsScrollbarBaseColor",
          description:
            "The `**-ms-scrollbar-base-color**` CSS property is a Microsoft extension that specifies the base color of the main elements of a scroll bar.\n\n**Syntax**: `<color>`\n\n**Initial value**: depends on user agent",
        },
        msScrollbarDarkshadowColor: {
          $ref: "#/definitions/Property.MsScrollbarDarkshadowColor",
          description:
            "The **`-ms-scrollbar-darkshadow-color`** CSS property is a Microsoft extension that specifies the color of a scroll bar's gutter.\n\n**Syntax**: `<color>`\n\n**Initial value**: `ThreeDDarkShadow`",
        },
        msScrollbarFaceColor: {
          $ref: "#/definitions/Property.MsScrollbarFaceColor",
          description:
            "The `**-ms-scrollbar-face-color**` CSS property is a Microsoft extension that specifies the color of the scroll box and scroll arrows of a scroll bar.\n\n**Syntax**: `<color>`\n\n**Initial value**: `ThreeDFace`",
        },
        msScrollbarHighlightColor: {
          $ref: "#/definitions/Property.MsScrollbarHighlightColor",
          description:
            "The `**-ms-scrollbar-highlight-color**` CSS property is a Microsoft extension that specifies the color of the slider tray, the top and left edges of the scroll box, and the scroll arrows of a scroll bar.\n\n**Syntax**: `<color>`\n\n**Initial value**: `ThreeDHighlight`",
        },
        msScrollbarShadowColor: {
          $ref: "#/definitions/Property.MsScrollbarShadowColor",
          description:
            "The **`-ms-scrollbar-shadow-color`** CSS property is a Microsoft extension that specifies the color of the bottom and right edges of the scroll box and scroll arrows of a scroll bar.\n\n**Syntax**: `<color>`\n\n**Initial value**: `ThreeDDarkShadow`",
        },
        msScrollbarTrackColor: {
          $ref: "#/definitions/Property.MsScrollbarTrackColor",
          description:
            "The **`-ms-scrollbar-track-color`** CSS property is a Microsoft extension that specifies the color of the track element of a scrollbar.\n\n**Syntax**: `<color>`\n\n**Initial value**: `Scrollbar`",
        },
        msTextAutospace: {
          $ref: "#/definitions/Property.MsTextAutospace",
          description:
            "The **`-ms-text-autospace`** CSS property is a Microsoft extension that specifies the autospacing and narrow space width adjustment of text.\n\n**Syntax**: `none | ideograph-alpha | ideograph-numeric | ideograph-parenthesis | ideograph-space`\n\n**Initial value**: `none`",
        },
        msTextCombineHorizontal: {
          $ref: "#/definitions/Property.TextCombineUpright",
          description:
            "The **`text-combine-upright`** CSS property sets the combination of characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.\n\n**Syntax**: `none | all | [ digits <integer>? ]`\n\n**Initial value**: `none`",
        },
        msTextOverflow: {
          $ref: "#/definitions/Property.TextOverflow",
          description:
            "The **`text-overflow`** CSS property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('`…`'), or display a custom string.\n\n**Syntax**: `[ clip | ellipsis | <string> ]{1,2}`\n\n**Initial value**: `clip`",
        },
        msTouchAction: {
          $ref: "#/definitions/Property.TouchAction",
          description:
            "The **`touch-action`** CSS property sets how an element's region can be manipulated by a touchscreen user (for example, by zooming features built into the browser).\n\n**Syntax**: `auto | none | [ [ pan-x | pan-left | pan-right ] || [ pan-y | pan-up | pan-down ] || pinch-zoom ] | manipulation`\n\n**Initial value**: `auto`",
        },
        msTouchSelect: {
          $ref: "#/definitions/Property.MsTouchSelect",
          description:
            "The **`-ms-touch-select`** CSS property is a Microsoft extension that toggles the gripper visual elements that enable touch text selection.\n\n**Syntax**: `grippers | none`\n\n**Initial value**: `grippers`",
        },
        msTransform: {
          $ref: "#/definitions/Property.Transform",
          description:
            "The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.\n\n**Syntax**: `none | <transform-list>`\n\n**Initial value**: `none`",
        },
        msTransformOrigin: {
          $ref: "#/definitions/Property.TransformOrigin%3C(string%7Cnumber)%3E",
          description:
            "The **`transform-origin`** CSS property sets the origin for an element's transformations.\n\n**Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`\n\n**Initial value**: `50% 50% 0`",
        },
        msTransition: {
          $ref: "#/definitions/Property.Transition%3Cstring%3E",
          description:
            "The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.\n\n**Syntax**: `<single-transition>#`",
        },
        msTransitionDelay: {
          $ref: "#/definitions/Property.TransitionDelay%3Cstring%3E",
          description:
            "The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`",
        },
        msTransitionDuration: {
          $ref: "#/definitions/Property.TransitionDuration%3Cstring%3E",
          description:
            "The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`",
        },
        msTransitionProperty: {
          $ref: "#/definitions/Property.TransitionProperty",
          description:
            "The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.\n\n**Syntax**: `none | <single-transition-property>#`\n\n**Initial value**: all",
        },
        msTransitionTimingFunction: {
          $ref: "#/definitions/Property.TransitionTimingFunction",
          description:
            "The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.\n\n**Syntax**: `<easing-function>#`\n\n**Initial value**: `ease`",
        },
        msUserSelect: {
          $ref: "#/definitions/Property.MsUserSelect",
          description:
            "The **`user-select`** CSS property controls whether the user can select text. This doesn't have any effect on content loaded as part of a browser's user interface (its chrome), except in textboxes.\n\n**Syntax**: `none | element | text`\n\n**Initial value**: `text`",
        },
        msWordBreak: {
          $ref: "#/definitions/Property.WordBreak",
          description:
            "The **`word-break`** CSS property sets whether line breaks appear wherever the text would otherwise overflow its content box.\n\n**Syntax**: `normal | break-all | keep-all | break-word`\n\n**Initial value**: `normal`",
        },
        msWrapFlow: {
          $ref: "#/definitions/Property.MsWrapFlow",
          description:
            "The **`-ms-wrap-flow`** CSS property is a Microsoft extension that specifies how exclusions impact inline content within block-level elements.\n\n**Syntax**: `auto | both | start | end | maximum | clear`\n\n**Initial value**: `auto`",
        },
        msWrapMargin: {
          $ref: "#/definitions/Property.MsWrapMargin%3C(string%7Cnumber)%3E",
          description:
            "The **`-ms-wrap-margin`** CSS property is a Microsoft extension that specifies a margin that offsets the inner wrap shape from other shapes.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`",
        },
        msWrapThrough: {
          $ref: "#/definitions/Property.MsWrapThrough",
          description:
            "The **`-ms-wrap-through`** CSS property is a Microsoft extension that specifies how content should wrap around an exclusion element.\n\n**Syntax**: `wrap | none`\n\n**Initial value**: `wrap`",
        },
        msWritingMode: {
          $ref: "#/definitions/Property.WritingMode",
          description:
            "The **`writing-mode`** CSS property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress. When set for an entire document, it should be set on the root element (`html` element for HTML documents).\n\n**Syntax**: `horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr`\n\n**Initial value**: `horizontal-tb`",
        },
        objectFit: {
          $ref: "#/definitions/Property.ObjectFit",
          description:
            "The **`object-fit`** CSS property sets how the content of a replaced element, such as an `<img>` or `<video>`, should be resized to fit its container.\n\n**Syntax**: `fill | contain | cover | none | scale-down`\n\n**Initial value**: `fill`\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **32** | **36**  | **10** | **79** | No  |",
        },
        objectPosition: {
          $ref: "#/definitions/Property.ObjectPosition%3C(string%7Cnumber)%3E",
          description:
            "The **`object-position`** CSS property specifies the alignment of the selected replaced element's contents within the element's box. Areas of the box which aren't covered by the replaced element's object will show the element's background.\n\n**Syntax**: `<position>`\n\n**Initial value**: `50% 50%`\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **32** | **36**  | **10** | **79** | No  |",
        },
        offset: {
          $ref: "#/definitions/Property.Offset%3C(string%7Cnumber)%3E",
          description:
            "The **`offset`** CSS shorthand property sets all the properties required for animating an element along a defined path.\n\n**Syntax**: `[ <'offset-position'>? [ <'offset-path'> [ <'offset-distance'> || <'offset-rotate'> ]? ]? ]! [ / <'offset-anchor'> ]?`\n\n|    Chrome     | Firefox | Safari | Edge | IE  | | :-----------: | :-----: | :----: | :--: | :-: | |    **55**     | **72**  | **16** | n/a  | No  | | 46 _(motion)_ |         |        |      |     |",
        },
        offsetAnchor: {
          $ref: "#/definitions/Property.OffsetAnchor%3C(string%7Cnumber)%3E",
          description:
            "**Syntax**: `auto | <position>`\n\n**Initial value**: `auto`\n\n| Chrome  | Firefox | Safari | Edge | IE  | | :-----: | :-----: | :----: | :--: | :-: | | **116** | **72**  | **16** | n/a  | No  |",
        },
        offsetBlock: {
          $ref: "#/definitions/Property.InsetBlock%3C(string%7Cnumber)%3E",
          deprecated: true,
          description:
            "The **`inset-block`** CSS property defines the logical block start and end offsets of an element, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>{1,2}`",
        },
        offsetBlockEnd: {
          $ref: "#/definitions/Property.InsetBlockEnd%3C(string%7Cnumber)%3E",
          deprecated: true,
          description:
            "The **`inset-block-end`** CSS property defines the logical block end offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>`\n\n**Initial value**: `auto`",
        },
        offsetBlockStart: {
          $ref: "#/definitions/Property.InsetBlockStart%3C(string%7Cnumber)%3E",
          deprecated: true,
          description:
            "The **`inset-block-start`** CSS property defines the logical block start offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>`\n\n**Initial value**: `auto`",
        },
        offsetDistance: {
          $ref: "#/definitions/Property.OffsetDistance%3C(string%7Cnumber)%3E",
          description:
            "The **`offset-distance`** CSS property specifies a position along an `offset-path` for an element to be placed.\n\n**Syntax**: `<length-percentage>`\n\n**Initial value**: `0`\n\n|         Chrome         | Firefox | Safari | Edge | IE  | | :--------------------: | :-----: | :----: | :--: | :-: | |         **55**         | **72**  | **16** | n/a  | No  | | 46 _(motion-distance)_ |         |        |      |     |",
        },
        offsetInline: {
          $ref: "#/definitions/Property.InsetInline%3C(string%7Cnumber)%3E",
          deprecated: true,
          description:
            "The **`inset-inline`** CSS property defines the logical start and end offsets of an element in the inline direction, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>{1,2}`",
        },
        offsetInlineEnd: {
          $ref: "#/definitions/Property.InsetInlineEnd%3C(string%7Cnumber)%3E",
          deprecated: true,
          description:
            "The **`inset-inline-end`** CSS property defines the logical inline end inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>`\n\n**Initial value**: `auto`",
        },
        offsetInlineStart: {
          $ref: "#/definitions/Property.InsetInlineStart%3C(string%7Cnumber)%3E",
          deprecated: true,
          description:
            "The **`inset-inline-start`** CSS property defines the logical inline start inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>`\n\n**Initial value**: `auto`",
        },
        offsetPath: {
          $ref: "#/definitions/Property.OffsetPath",
          description:
            "The **`offset-path`** CSS property specifies a motion path for an element to follow and defines the element's positioning within the parent container or SVG coordinate system.\n\n**Syntax**: `none | <offset-path> || <coord-box>`\n\n**Initial value**: `none`\n\n|       Chrome       | Firefox |  Safari  | Edge | IE  | | :----------------: | :-----: | :------: | :--: | :-: | |       **55**       | **72**  | **15.4** | n/a  | No  | | 46 _(motion-path)_ |         |          |      |     |",
        },
        offsetPosition: {
          $ref: "#/definitions/Property.OffsetPosition%3C(string%7Cnumber)%3E",
          description:
            "**Syntax**: `normal | auto | <position>`\n\n**Initial value**: `auto`\n\n| Chrome  | Firefox | Safari | Edge | IE  | | :-----: | :-----: | :----: | :--: | :-: | | **116** |   n/a   | **16** | n/a  | No  |",
        },
        offsetRotate: {
          $ref: "#/definitions/Property.OffsetRotate",
          description:
            "The **`offset-rotate`** CSS property defines the orientation/direction of the element as it is positioned along the `offset-path`.\n\n**Syntax**: `[ auto | reverse ] || <angle>`\n\n**Initial value**: `auto`\n\n|         Chrome         | Firefox | Safari | Edge | IE  | | :--------------------: | :-----: | :----: | :--: | :-: | |         **56**         | **72**  | **16** | n/a  | No  | | 46 _(motion-rotation)_ |         |        |      |     |",
        },
        offsetRotation: {
          $ref: "#/definitions/Property.OffsetRotate",
          description:
            "The **`offset-rotate`** CSS property defines the orientation/direction of the element as it is positioned along the `offset-path`.\n\n**Syntax**: `[ auto | reverse ] || <angle>`\n\n**Initial value**: `auto`\n\n|         Chrome         | Firefox | Safari | Edge | IE  | | :--------------------: | :-----: | :----: | :--: | :-: | |         **56**         | **72**  | **16** | n/a  | No  | | 46 _(motion-rotation)_ |         |        |      |     |",
        },
        opacity: {
          $ref: "#/definitions/Property.Opacity",
          description:
            "The **`opacity`** CSS property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.\n\n**Syntax**: `<alpha-value>`\n\n**Initial value**: `1`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **2**  | **12** | **9** |",
        },
        order: {
          $ref: "#/definitions/Property.Order",
          description:
            "The **`order`** CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending `order` value and then by their source code order.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `0`\n\n|  Chrome  | Firefox | Safari  |  Edge  |    IE    | | :------: | :-----: | :-----: | :----: | :------: | |  **29**  | **20**  |  **9**  | **12** |  **11**  | | 21 _-x-_ |         | 7 _-x-_ |        | 10 _-x-_ |",
        },
        orphans: {
          $ref: "#/definitions/Property.Orphans",
          description:
            "The **`orphans`** CSS property sets the minimum number of lines in a block container that must be shown at the _bottom_ of a page, region, or column.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `2`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   | | :----: | :-----: | :-----: | :----: | :---: | | **25** |   No    | **1.3** | **12** | **8** |",
        },
        outline: {
          $ref: "#/definitions/Property.Outline%3C(string%7Cnumber)%3E",
          description:
            "The **`outline`** CSS shorthand property sets most of the outline properties in a single declaration.\n\n**Syntax**: `[ <'outline-color'> || <'outline-style'> || <'outline-width'> ]`\n\n| Chrome | Firefox |  Safari  |  Edge  |  IE   | | :----: | :-----: | :------: | :----: | :---: | | **94** | **88**  | **16.4** | **94** | **8** |",
        },
        outlineColor: {
          $ref: "#/definitions/Property.OutlineColor",
          description:
            "The **`outline-color`** CSS property sets the color of an element's outline.\n\n**Syntax**: `<color> | invert`\n\n**Initial value**: `invert`, for browsers supporting it, `currentColor` for the other\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   | | :----: | :-----: | :-----: | :----: | :---: | | **1**  | **1.5** | **1.2** | **12** | **8** |",
        },
        outlineOffset: {
          $ref: "#/definitions/Property.OutlineOffset%3C(string%7Cnumber)%3E",
          description:
            "The **`outline-offset`** CSS property sets the amount of space between an outline and the edge or border of an element.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari  |  Edge  | IE  | | :----: | :-----: | :-----: | :----: | :-: | | **1**  | **1.5** | **1.2** | **15** | No  |",
        },
        outlineStyle: {
          $ref: "#/definitions/Property.OutlineStyle",
          description:
            "The **`outline-style`** CSS property sets the style of an element's outline. An outline is a line that is drawn around an element, outside the `border`.\n\n**Syntax**: `auto | <'border-style'>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   | | :----: | :-----: | :-----: | :----: | :---: | | **1**  | **1.5** | **1.2** | **12** | **8** |",
        },
        outlineWidth: {
          $ref: "#/definitions/Property.OutlineWidth%3C(string%7Cnumber)%3E",
          description:
            "The CSS **`outline-width`** property sets the thickness of an element's outline. An outline is a line that is drawn around an element, outside the `border`.\n\n**Syntax**: `<line-width>`\n\n**Initial value**: `medium`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   | | :----: | :-----: | :-----: | :----: | :---: | | **1**  | **1.5** | **1.2** | **12** | **8** |",
        },
        overflow: {
          $ref: "#/definitions/Property.Overflow",
          description:
            "The **`overflow`** CSS shorthand property sets the desired behavior for an element's overflow — i.e. when an element's content is too big to fit in its block formatting context — in both directions.\n\n**Syntax**: `[ visible | hidden | clip | scroll | auto ]{1,2}`\n\n**Initial value**: `visible`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
        },
        overflowAnchor: {
          $ref: "#/definitions/Property.OverflowAnchor",
          description:
            "**Syntax**: `auto | none`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **56** | **66**  |   No   | n/a  | No  |",
        },
        overflowBlock: {
          $ref: "#/definitions/Property.OverflowBlock",
          description:
            "**Syntax**: `visible | hidden | clip | scroll | auto`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | |   No   | **69**  |   No   | n/a  | No  |",
        },
        overflowClipBox: {
          $ref: "#/definitions/Property.OverflowClipBox",
          description:
            "The **`overflow-clip-box`** CSS property specifies relative to which box the clipping happens when there is an overflow. It is short hand for the `overflow-clip-box-inline` and `overflow-clip-box-block` properties.\n\n**Syntax**: `padding-box | content-box`\n\n**Initial value**: `padding-box`",
        },
        overflowClipMargin: {
          $ref: "#/definitions/Property.OverflowClipMargin%3C(string%7Cnumber)%3E",
          description:
            "**Syntax**: `<visual-box> || <length [0,∞]>`\n\n**Initial value**: `0px`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **90** | **102** |   No   | n/a  | No  |",
        },
        overflowInline: {
          $ref: "#/definitions/Property.OverflowInline",
          description:
            "**Syntax**: `visible | hidden | clip | scroll | auto`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | |   No   | **69**  |   No   | n/a  | No  |",
        },
        overflowWrap: {
          $ref: "#/definitions/Property.OverflowWrap",
          description:
            "The **`overflow-wrap`** CSS property applies to inline elements, setting whether the browser should insert line breaks within an otherwise unbreakable string to prevent text from overflowing its line box.\n\n**Syntax**: `normal | break-word | anywhere`\n\n**Initial value**: `normal`\n\n|     Chrome      |      Firefox      |     Safari      |       Edge       |          IE           | | :-------------: | :---------------: | :-------------: | :--------------: | :-------------------: | |     **23**      |      **49**       |      **7**      |      **18**      | **5.5** _(word-wrap)_ | | 1 _(word-wrap)_ | 3.5 _(word-wrap)_ | 1 _(word-wrap)_ | 12 _(word-wrap)_ |                       |",
        },
        overflowX: {
          $ref: "#/definitions/Property.OverflowX",
          description:
            "The **`overflow-x`** CSS property sets what shows when content overflows a block-level element's left and right edges. This may be nothing, a scroll bar, or the overflow content.\n\n**Syntax**: `visible | hidden | clip | scroll | auto`\n\n**Initial value**: `visible`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  | **3.5** | **3**  | **12** | **5** |",
        },
        overflowY: {
          $ref: "#/definitions/Property.OverflowY",
          description:
            "The **`overflow-y`** CSS property sets what shows when content overflows a block-level element's top and bottom edges. This may be nothing, a scroll bar, or the overflow content.\n\n**Syntax**: `visible | hidden | clip | scroll | auto`\n\n**Initial value**: `visible`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  | **3.5** | **3**  | **12** | **5** |",
        },
        overlay: {
          $ref: "#/definitions/Property.Overlay",
          description:
            "The **`overlay`** CSS property specifies whether an element appearing in the top layer (for example, a shown popover or modal `<dialog>` element) is actually rendered in the top layer. This property is only relevant within a list of `transition-property` values, and only if `allow-discrete` is set as the `transition-behavior`.\n\n**Syntax**: `none | auto`\n\n**Initial value**: `none`\n\n| Chrome  | Firefox | Safari | Edge | IE  | | :-----: | :-----: | :----: | :--: | :-: | | **117** |   No    |   No   | n/a  | No  |",
        },
        overscrollBehavior: {
          $ref: "#/definitions/Property.OverscrollBehavior",
          description:
            "The **`overscroll-behavior`** CSS property sets what a browser does when reaching the boundary of a scrolling area. It's a shorthand for `overscroll-behavior-x` and `overscroll-behavior-y`.\n\n**Syntax**: `[ contain | none | auto ]{1,2}`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **63** | **59**  | **16** | **18** | No  |",
        },
        overscrollBehaviorBlock: {
          $ref: "#/definitions/Property.OverscrollBehaviorBlock",
          description:
            "The **`overscroll-behavior-block`** CSS property sets the browser's behavior when the block direction boundary of a scrolling area is reached.\n\n**Syntax**: `contain | none | auto`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **77** | **73**  | **16** | n/a  | No  |",
        },
        overscrollBehaviorInline: {
          $ref: "#/definitions/Property.OverscrollBehaviorInline",
          description:
            "The **`overscroll-behavior-inline`** CSS property sets the browser's behavior when the inline direction boundary of a scrolling area is reached.\n\n**Syntax**: `contain | none | auto`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **77** | **73**  | **16** | n/a  | No  |",
        },
        overscrollBehaviorX: {
          $ref: "#/definitions/Property.OverscrollBehaviorX",
          description:
            "The **`overscroll-behavior-x`** CSS property sets the browser's behavior when the horizontal boundary of a scrolling area is reached.\n\n**Syntax**: `contain | none | auto`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **63** | **59**  | **16** | **18** | No  |",
        },
        overscrollBehaviorY: {
          $ref: "#/definitions/Property.OverscrollBehaviorY",
          description:
            "The **`overscroll-behavior-y`** CSS property sets the browser's behavior when the vertical boundary of a scrolling area is reached.\n\n**Syntax**: `contain | none | auto`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **63** | **59**  | **16** | **18** | No  |",
        },
        padding: {
          $ref: "#/definitions/Property.Padding%3C(string%7Cnumber)%3E",
          description:
            "The **`padding`** CSS shorthand property sets the padding area on all four sides of an element at once.\n\n**Syntax**: `[ <length> | <percentage> ]{1,4}`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
        },
        paddingBlock: {
          $ref: "#/definitions/Property.PaddingBlock%3C(string%7Cnumber)%3E",
          description:
            "The **`padding-block`** CSS shorthand property defines the logical block start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.\n\n**Syntax**: `<'padding-left'>{1,2}`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **87** | **66**  | **14.1** | n/a  | No  |",
        },
        paddingBlockEnd: {
          $ref: "#/definitions/Property.PaddingBlockEnd%3C(string%7Cnumber)%3E",
          description:
            "The **`padding-block-end`** CSS property defines the logical block end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.\n\n**Syntax**: `<'padding-left'>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **69** | **41**  | **12.1** | n/a  | No  |",
        },
        paddingBlockStart: {
          $ref: "#/definitions/Property.PaddingBlockStart%3C(string%7Cnumber)%3E",
          description:
            "The **`padding-block-start`** CSS property defines the logical block start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.\n\n**Syntax**: `<'padding-left'>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **69** | **41**  | **12.1** | n/a  | No  |",
        },
        paddingBottom: {
          $ref: "#/definitions/Property.PaddingBottom%3C(string%7Cnumber)%3E",
          description:
            "The **`padding-bottom`** CSS property sets the height of the padding area on the bottom of an element.\n\n**Syntax**: `<length> | <percentage>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
        },
        paddingInline: {
          $ref: "#/definitions/Property.PaddingInline%3C(string%7Cnumber)%3E",
          description:
            "The **`padding-inline`** CSS shorthand property defines the logical inline start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.\n\n**Syntax**: `<'padding-left'>{1,2}`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **87** | **66**  | **14.1** | n/a  | No  |",
        },
        paddingInlineEnd: {
          $ref: "#/definitions/Property.PaddingInlineEnd%3C(string%7Cnumber)%3E",
          description:
            "The **`padding-inline-end`** CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.\n\n**Syntax**: `<'padding-left'>`\n\n**Initial value**: `0`\n\n|          Chrome           |        Firefox         |          Safari           | Edge | IE  | | :-----------------------: | :--------------------: | :-----------------------: | :--: | :-: | |          **69**           |         **41**         |         **12.1**          | n/a  | No  | | 2 _(-webkit-padding-end)_ | 3 _(-moz-padding-end)_ | 3 _(-webkit-padding-end)_ |      |     |",
        },
        paddingInlineStart: {
          $ref: "#/definitions/Property.PaddingInlineStart%3C(string%7Cnumber)%3E",
          description:
            "The **`padding-inline-start`** CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.\n\n**Syntax**: `<'padding-left'>`\n\n**Initial value**: `0`\n\n|           Chrome            |         Firefox          |           Safari            | Edge | IE  | | :-------------------------: | :----------------------: | :-------------------------: | :--: | :-: | |           **69**            |          **41**          |          **12.1**           | n/a  | No  | | 2 _(-webkit-padding-start)_ | 3 _(-moz-padding-start)_ | 3 _(-webkit-padding-start)_ |      |     |",
        },
        paddingLeft: {
          $ref: "#/definitions/Property.PaddingLeft%3C(string%7Cnumber)%3E",
          description:
            "The **`padding-left`** CSS property sets the width of the padding area to the left of an element.\n\n**Syntax**: `<length> | <percentage>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
        },
        paddingRight: {
          $ref: "#/definitions/Property.PaddingRight%3C(string%7Cnumber)%3E",
          description:
            "The **`padding-right`** CSS property sets the width of the padding area on the right of an element.\n\n**Syntax**: `<length> | <percentage>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
        },
        paddingTop: {
          $ref: "#/definitions/Property.PaddingTop%3C(string%7Cnumber)%3E",
          description:
            "The **`padding-top`** CSS property sets the height of the padding area on the top of an element.\n\n**Syntax**: `<length> | <percentage>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
        },
        page: {
          $ref: "#/definitions/Property.Page",
          description:
            "The **`page`** CSS property is used to specify the named page, a specific type of page defined by the `@page` at-rule.\n\n**Syntax**: `auto | <custom-ident>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari   | Edge | IE  | | :----: | :-----: | :-------: | :--: | :-: | | **85** | **110** | **≤13.1** | n/a  | No  |",
        },
        pageBreakAfter: {
          $ref: "#/definitions/Property.PageBreakAfter",
          description:
            "The **`page-break-after`** CSS property adjusts page breaks _after_ the current element.\n\n**Syntax**: `auto | always | avoid | left | right | recto | verso`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   | | :----: | :-----: | :-----: | :----: | :---: | | **1**  |  **1**  | **1.2** | **12** | **4** |",
        },
        pageBreakBefore: {
          $ref: "#/definitions/Property.PageBreakBefore",
          description:
            "The **`page-break-before`** CSS property adjusts page breaks _before_ the current element.\n\n**Syntax**: `auto | always | avoid | left | right | recto | verso`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   | | :----: | :-----: | :-----: | :----: | :---: | | **1**  |  **1**  | **1.2** | **12** | **4** |",
        },
        pageBreakInside: {
          $ref: "#/definitions/Property.PageBreakInside",
          description:
            "The **`page-break-inside`** CSS property adjusts page breaks _inside_ the current element.\n\n**Syntax**: `auto | avoid`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   | | :----: | :-----: | :-----: | :----: | :---: | | **1**  | **19**  | **1.3** | **12** | **8** |",
        },
        paintOrder: {
          $ref: "#/definitions/Property.PaintOrder",
          description:
            "The **`paint-order`** CSS property lets you control the order in which the fill and stroke (and painting markers) of text content and shapes are drawn.\n\n**Syntax**: `normal | [ fill || stroke || markers ]`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **35** | **60**  | **8**  | **17** | No  |",
        },
        perspective: {
          $ref: "#/definitions/Property.Perspective%3C(string%7Cnumber)%3E",
          description:
            "The **`perspective`** CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective.\n\n**Syntax**: `none | <length>`\n\n**Initial value**: `none`\n\n|  Chrome  | Firefox | Safari  |  Edge  |   IE   | | :------: | :-----: | :-----: | :----: | :----: | |  **36**  | **16**  |  **9**  | **12** | **10** | | 12 _-x-_ |         | 4 _-x-_ |        |        |",
        },
        perspectiveOrigin: {
          $ref: "#/definitions/Property.PerspectiveOrigin%3C(string%7Cnumber)%3E",
          description:
            "The **`perspective-origin`** CSS property determines the position at which the viewer is looking. It is used as the _vanishing point_ by the `perspective` property.\n\n**Syntax**: `<position>`\n\n**Initial value**: `50% 50%`\n\n|  Chrome  | Firefox | Safari  |  Edge  |   IE   | | :------: | :-----: | :-----: | :----: | :----: | |  **36**  | **16**  |  **9**  | **12** | **10** | | 12 _-x-_ |         | 4 _-x-_ |        |        |",
        },
        placeContent: {
          $ref: "#/definitions/Property.PlaceContent",
          description:
            "The **`place-content`** CSS shorthand property allows you to align content along both the block and inline directions at once (i.e. the `align-content` and `justify-content` properties) in a relevant layout system such as Grid or Flexbox.\n\n**Syntax**: `<'align-content'> <'justify-content'>?`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **59** | **45**  | **9**  | n/a  | No  |",
        },
        placeItems: {
          $ref: "#/definitions/Property.PlaceItems",
          description:
            "The CSS **`place-items`** shorthand property allows you to align items along both the block and inline directions at once (i.e. the `align-items` and `justify-items` properties) in a relevant layout system such as Grid or Flexbox. If the second value is not set, the first value is also used for it.\n\n**Syntax**: `<'align-items'> <'justify-items'>?`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **59** | **45**  | **11** | n/a  | No  |",
        },
        placeSelf: {
          $ref: "#/definitions/Property.PlaceSelf",
          description:
            "The **`place-self`** CSS shorthand property allows you to align an individual item in both the block and inline directions at once (i.e. the `align-self` and `justify-self` properties) in a relevant layout system such as Grid or Flexbox. If the second value is not present, the first value is also used for it.\n\n**Syntax**: `<'align-self'> <'justify-self'>?`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **59** | **45**  | **11** | n/a  | No  |",
        },
        pointerEvents: {
          $ref: "#/definitions/Property.PointerEvents",
          description:
            "The **`pointer-events`** CSS property sets under what circumstances (if any) a particular graphic element can become the target of pointer events.\n\n**Syntax**: `auto | none | visiblePainted | visibleFill | visibleStroke | visible | painted | fill | stroke | all | inherit`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |   IE   | | :----: | :-----: | :----: | :----: | :----: | | **1**  | **1.5** | **4**  | **12** | **11** |",
        },
        position: {
          $ref: "#/definitions/Property.Position",
          description:
            "The **`position`** CSS property sets how an element is positioned in a document. The `top`, `right`, `bottom`, and `left` properties determine the final location of positioned elements.\n\n**Syntax**: `static | relative | absolute | sticky | fixed`\n\n**Initial value**: `static`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
        },
        printColorAdjust: {
          $ref: "#/definitions/Property.PrintColorAdjust",
          description:
            "The **`print-color-adjust`** CSS property sets what, if anything, the user agent may do to optimize the appearance of the element on the output device. By default, the browser is allowed to make any adjustments to the element's appearance it determines to be necessary and prudent given the type and capabilities of the output device.\n\n**Syntax**: `economy | exact`\n\n**Initial value**: `economy`\n\n|    Chrome    |       Firefox       |  Safari  |     Edge     | IE  | | :----------: | :-----------------: | :------: | :----------: | :-: | | **17** _-x-_ |       **97**        | **15.4** | **79** _-x-_ | No  | |              | 48 _(color-adjust)_ | 6 _-x-_  |              |     |",
        },
        quotes: {
          $ref: "#/definitions/Property.Quotes",
          description:
            "The **`quotes`** CSS property sets how the browser should render quotation marks that are added using the `open-quotes` or `close-quotes` values of the CSS `content` property.\n\n**Syntax**: `none | auto | [ <string> <string> ]+`\n\n**Initial value**: depends on user agent\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **11** | **1.5** | **9**  | **12** | **8** |",
        },
        resize: {
          $ref: "#/definitions/Property.Resize",
          description:
            "The **`resize`** CSS property sets whether an element is resizable, and if so, in which directions.\n\n**Syntax**: `none | both | horizontal | vertical | block | inline`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **1**  |  **4**  | **3**  | n/a  | No  |",
        },
        right: {
          $ref: "#/definitions/Property.Right%3C(string%7Cnumber)%3E",
          description:
            "The **`right`** CSS property participates in specifying the horizontal position of a positioned element. It has no effect on non-positioned elements.\n\n**Syntax**: `<length> | <percentage> | auto`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |   IE    | | :----: | :-----: | :----: | :----: | :-----: | | **1**  |  **1**  | **1**  | **12** | **5.5** |",
        },
        rotate: {
          $ref: "#/definitions/Property.Rotate",
          description:
            "The **`rotate`** CSS property allows you to specify rotation transforms individually and independently of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` property.\n\n**Syntax**: `none | <angle> | [ x | y | z | <number>{3} ] && <angle>`\n\n**Initial value**: `none`\n\n| Chrome  | Firefox |  Safari  | Edge | IE  | | :-----: | :-----: | :------: | :--: | :-: | | **104** | **72**  | **14.1** | n/a  | No  |",
        },
        rowGap: {
          $ref: "#/definitions/Property.RowGap%3C(string%7Cnumber)%3E",
          description:
            "The **`row-gap`** CSS property sets the size of the gap (gutter) between an element's rows.\n\n**Syntax**: `normal | <length-percentage>`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **47** | **52**  | **10.1** | **16** | No  |",
        },
        rubyAlign: {
          $ref: "#/definitions/Property.RubyAlign",
          description:
            "The **`ruby-align`** CSS property defines the distribution of the different ruby elements over the base.\n\n**Syntax**: `start | center | space-between | space-around`\n\n**Initial value**: `space-around`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | |   No   | **38**  |   No   | n/a  | No  |",
        },
        rubyMerge: {
          $ref: "#/definitions/Property.RubyMerge",
          description:
            "**Syntax**: `separate | collapse | auto`\n\n**Initial value**: `separate`",
        },
        rubyPosition: {
          $ref: "#/definitions/Property.RubyPosition",
          description:
            "The **`ruby-position`** CSS property defines the position of a ruby element relatives to its base element. It can be positioned over the element (`over`), under it (`under`), or between the characters on their right side (`inter-character`).\n\n**Syntax**: `[ alternate || [ over | under ] ] | inter-character`\n\n**Initial value**: `alternate`\n\n| Chrome  | Firefox |   Safari    | Edge  | IE  | | :-----: | :-----: | :---------: | :---: | :-: | | **84**  | **38**  | **7** _-x-_ | 12-79 | No  | | 1 _-x-_ |         |             |       |     |",
        },
        scale: {
          $ref: "#/definitions/Property.Scale",
          description:
            "The **`scale`** CSS property allows you to specify scale transforms individually and independently of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.\n\n**Syntax**: `none | <number>{1,3}`\n\n**Initial value**: `none`\n\n| Chrome  | Firefox |  Safari  | Edge | IE  | | :-----: | :-----: | :------: | :--: | :-: | | **104** | **72**  | **14.1** | n/a  | No  |",
        },
        scrollBehavior: {
          $ref: "#/definitions/Property.ScrollBehavior",
          description:
            "The **`scroll-behavior`** CSS property sets the behavior for a scrolling box when scrolling is triggered by the navigation or CSSOM scrolling APIs.\n\n**Syntax**: `auto | smooth`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **61** | **36**  | **15.4** | n/a  | No  |",
        },
        scrollMargin: {
          $ref: "#/definitions/Property.ScrollMargin%3C(string%7Cnumber)%3E",
          description:
            "The **`scroll-margin`** shorthand property sets all of the scroll margins of an element at once, assigning values much like the `margin` property does for margins of an element.\n\n**Syntax**: `<length>{1,4}`\n\n| Chrome | Firefox |          Safari           | Edge | IE  | | :----: | :-----: | :-----------------------: | :--: | :-: | | **69** | **90**  |         **14.1**          | n/a  | No  | |        |         | 11 _(scroll-snap-margin)_ |      |     |",
        },
        scrollMarginBlock: {
          $ref: "#/definitions/Property.ScrollMarginBlock%3C(string%7Cnumber)%3E",
          description:
            "The `scroll-margin-block` shorthand property sets the scroll margins of an element in the block dimension.\n\n**Syntax**: `<length>{1,2}`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **69** | **68**  | **15** | n/a  | No  |",
        },
        scrollMarginBlockEnd: {
          $ref: "#/definitions/Property.ScrollMarginBlockEnd%3C(string%7Cnumber)%3E",
          description:
            "The `scroll-margin-block-end` property defines the margin of the scroll snap area at the end of the block dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **69** | **68**  | **15** | n/a  | No  |",
        },
        scrollMarginBlockStart: {
          $ref: "#/definitions/Property.ScrollMarginBlockStart%3C(string%7Cnumber)%3E",
          description:
            "The `scroll-margin-block-start` property defines the margin of the scroll snap area at the start of the block dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **69** | **68**  | **15** | n/a  | No  |",
        },
        scrollMarginBottom: {
          $ref: "#/definitions/Property.ScrollMarginBottom%3C(string%7Cnumber)%3E",
          description:
            "The `scroll-margin-bottom` property defines the bottom margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |              Safari              | Edge | IE  | | :----: | :-----: | :------------------------------: | :--: | :-: | | **69** | **68**  |             **14.1**             | n/a  | No  | |        |         | 11 _(scroll-snap-margin-bottom)_ |      |     |",
        },
        scrollMarginInline: {
          $ref: "#/definitions/Property.ScrollMarginInline%3C(string%7Cnumber)%3E",
          description:
            "The `scroll-margin-inline` shorthand property sets the scroll margins of an element in the inline dimension.\n\n**Syntax**: `<length>{1,2}`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **69** | **68**  | **15** | n/a  | No  |",
        },
        scrollMarginInlineEnd: {
          $ref: "#/definitions/Property.ScrollMarginInlineEnd%3C(string%7Cnumber)%3E",
          description:
            "The `scroll-margin-inline-end` property defines the margin of the scroll snap area at the end of the inline dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **69** | **68**  | **15** | n/a  | No  |",
        },
        scrollMarginInlineStart: {
          $ref: "#/definitions/Property.ScrollMarginInlineStart%3C(string%7Cnumber)%3E",
          description:
            "The `scroll-margin-inline-start` property defines the margin of the scroll snap area at the start of the inline dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **69** | **68**  | **15** | n/a  | No  |",
        },
        scrollMarginLeft: {
          $ref: "#/definitions/Property.ScrollMarginLeft%3C(string%7Cnumber)%3E",
          description:
            "The `scroll-margin-left` property defines the left margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |             Safari             | Edge | IE  | | :----: | :-----: | :----------------------------: | :--: | :-: | | **69** | **68**  |            **14.1**            | n/a  | No  | |        |         | 11 _(scroll-snap-margin-left)_ |      |     |",
        },
        scrollMarginRight: {
          $ref: "#/definitions/Property.ScrollMarginRight%3C(string%7Cnumber)%3E",
          description:
            "The `scroll-margin-right` property defines the right margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |             Safari              | Edge | IE  | | :----: | :-----: | :-----------------------------: | :--: | :-: | | **69** | **68**  |            **14.1**             | n/a  | No  | |        |         | 11 _(scroll-snap-margin-right)_ |      |     |",
        },
        scrollMarginTop: {
          $ref: "#/definitions/Property.ScrollMarginTop%3C(string%7Cnumber)%3E",
          description:
            "The `scroll-margin-top` property defines the top margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |            Safari             | Edge | IE  | | :----: | :-----: | :---------------------------: | :--: | :-: | | **69** | **68**  |           **14.1**            | n/a  | No  | |        |         | 11 _(scroll-snap-margin-top)_ |      |     |",
        },
        scrollPadding: {
          $ref: "#/definitions/Property.ScrollPadding%3C(string%7Cnumber)%3E",
          description:
            "The **`scroll-padding`** shorthand property sets scroll padding on all sides of an element at once, much like the `padding` property does for padding on an element.\n\n**Syntax**: `[ auto | <length-percentage> ]{1,4}`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **69** | **68**  | **14.1** | n/a  | No  |",
        },
        scrollPaddingBlock: {
          $ref: "#/definitions/Property.ScrollPaddingBlock%3C(string%7Cnumber)%3E",
          description:
            "The `scroll-padding-block` shorthand property sets the scroll padding of an element in the block dimension.\n\n**Syntax**: `[ auto | <length-percentage> ]{1,2}`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **69** | **68**  | **15** | n/a  | No  |",
        },
        scrollPaddingBlockEnd: {
          $ref: "#/definitions/Property.ScrollPaddingBlockEnd%3C(string%7Cnumber)%3E",
          description:
            "The `scroll-padding-block-end` property defines offsets for the end edge in the block dimension of the _optimal viewing region_ of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.\n\n**Syntax**: `auto | <length-percentage>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **69** | **68**  | **15** | n/a  | No  |",
        },
        scrollPaddingBlockStart: {
          $ref: "#/definitions/Property.ScrollPaddingBlockStart%3C(string%7Cnumber)%3E",
          description:
            "The `scroll-padding-block-start` property defines offsets for the start edge in the block dimension of the _optimal viewing region_ of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.\n\n**Syntax**: `auto | <length-percentage>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **69** | **68**  | **15** | n/a  | No  |",
        },
        scrollPaddingBottom: {
          $ref: "#/definitions/Property.ScrollPaddingBottom%3C(string%7Cnumber)%3E",
          description:
            "The `scroll-padding-bottom` property defines offsets for the bottom of the _optimal viewing region_ of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.\n\n**Syntax**: `auto | <length-percentage>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **69** | **68**  | **14.1** | n/a  | No  |",
        },
        scrollPaddingInline: {
          $ref: "#/definitions/Property.ScrollPaddingInline%3C(string%7Cnumber)%3E",
          description:
            "The `scroll-padding-inline` shorthand property sets the scroll padding of an element in the inline dimension.\n\n**Syntax**: `[ auto | <length-percentage> ]{1,2}`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **69** | **68**  | **15** | n/a  | No  |",
        },
        scrollPaddingInlineEnd: {
          $ref: "#/definitions/Property.ScrollPaddingInlineEnd%3C(string%7Cnumber)%3E",
          description:
            "The `scroll-padding-inline-end` property defines offsets for the end edge in the inline dimension of the _optimal viewing region_ of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.\n\n**Syntax**: `auto | <length-percentage>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **69** | **68**  | **15** | n/a  | No  |",
        },
        scrollPaddingInlineStart: {
          $ref: "#/definitions/Property.ScrollPaddingInlineStart%3C(string%7Cnumber)%3E",
          description:
            "The `scroll-padding-inline-start` property defines offsets for the start edge in the inline dimension of the _optimal viewing region_ of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.\n\n**Syntax**: `auto | <length-percentage>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **69** | **68**  | **15** | n/a  | No  |",
        },
        scrollPaddingLeft: {
          $ref: "#/definitions/Property.ScrollPaddingLeft%3C(string%7Cnumber)%3E",
          description:
            "The `scroll-padding-left` property defines offsets for the left of the _optimal viewing region_ of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.\n\n**Syntax**: `auto | <length-percentage>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **69** | **68**  | **14.1** | n/a  | No  |",
        },
        scrollPaddingRight: {
          $ref: "#/definitions/Property.ScrollPaddingRight%3C(string%7Cnumber)%3E",
          description:
            "The `scroll-padding-right` property defines offsets for the right of the _optimal viewing region_ of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.\n\n**Syntax**: `auto | <length-percentage>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **69** | **68**  | **14.1** | n/a  | No  |",
        },
        scrollPaddingTop: {
          $ref: "#/definitions/Property.ScrollPaddingTop%3C(string%7Cnumber)%3E",
          description:
            "The **`scroll-padding-top`** property defines offsets for the top of the _optimal viewing region_ of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.\n\n**Syntax**: `auto | <length-percentage>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **69** | **68**  | **14.1** | n/a  | No  |",
        },
        scrollSnapAlign: {
          $ref: "#/definitions/Property.ScrollSnapAlign",
          description:
            "The `scroll-snap-align` property specifies the box's snap position as an alignment of its snap area (as the alignment subject) within its snap container's snapport (as the alignment container). The two values specify the snapping alignment in the block axis and inline axis, respectively. If only one value is specified, the second value defaults to the same value.\n\n**Syntax**: `[ none | start | end | center ]{1,2}`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **69** | **68**  | **11** | n/a  | No  |",
        },
        scrollSnapCoordinate: {
          $ref: "#/definitions/Property.ScrollSnapCoordinate%3C(string%7Cnumber)%3E",
          deprecated: true,
          description:
            "The **`scroll-snap-coordinate`** CSS property defines the x and y coordinate positions within an element that will align with its nearest ancestor scroll container's `scroll-snap-destination` for each respective axis.\n\n**Syntax**: `none | <position>#`\n\n**Initial value**: `none`",
        },
        scrollSnapDestination: {
          $ref: "#/definitions/Property.ScrollSnapDestination%3C(string%7Cnumber)%3E",
          deprecated: true,
          description:
            "The **`scroll-snap-destination`** CSS property defines the position in x and y coordinates within the scroll container's visual viewport which element snap points align with.\n\n**Syntax**: `<position>`\n\n**Initial value**: `0px 0px`",
        },
        scrollSnapMargin: {
          $ref: "#/definitions/Property.ScrollMargin%3C(string%7Cnumber)%3E",
          description:
            "The **`scroll-margin`** shorthand property sets all of the scroll margins of an element at once, assigning values much like the `margin` property does for margins of an element.\n\n**Syntax**: `<length>{1,4}`\n\n| Chrome | Firefox |          Safari           | Edge | IE  | | :----: | :-----: | :-----------------------: | :--: | :-: | | **69** |  68-90  |         **14.1**          | n/a  | No  | |        |         | 11 _(scroll-snap-margin)_ |      |     |",
        },
        scrollSnapMarginBottom: {
          $ref: "#/definitions/Property.ScrollMarginBottom%3C(string%7Cnumber)%3E",
          description:
            "The `scroll-margin-bottom` property defines the bottom margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |              Safari              | Edge | IE  | | :----: | :-----: | :------------------------------: | :--: | :-: | | **69** | **68**  |             **14.1**             | n/a  | No  | |        |         | 11 _(scroll-snap-margin-bottom)_ |      |     |",
        },
        scrollSnapMarginLeft: {
          $ref: "#/definitions/Property.ScrollMarginLeft%3C(string%7Cnumber)%3E",
          description:
            "The `scroll-margin-left` property defines the left margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |             Safari             | Edge | IE  | | :----: | :-----: | :----------------------------: | :--: | :-: | | **69** | **68**  |            **14.1**            | n/a  | No  | |        |         | 11 _(scroll-snap-margin-left)_ |      |     |",
        },
        scrollSnapMarginRight: {
          $ref: "#/definitions/Property.ScrollMarginRight%3C(string%7Cnumber)%3E",
          description:
            "The `scroll-margin-right` property defines the right margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |             Safari              | Edge | IE  | | :----: | :-----: | :-----------------------------: | :--: | :-: | | **69** | **68**  |            **14.1**             | n/a  | No  | |        |         | 11 _(scroll-snap-margin-right)_ |      |     |",
        },
        scrollSnapMarginTop: {
          $ref: "#/definitions/Property.ScrollMarginTop%3C(string%7Cnumber)%3E",
          description:
            "The `scroll-margin-top` property defines the top margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |            Safari             | Edge | IE  | | :----: | :-----: | :---------------------------: | :--: | :-: | | **69** | **68**  |           **14.1**            | n/a  | No  | |        |         | 11 _(scroll-snap-margin-top)_ |      |     |",
        },
        scrollSnapPointsX: {
          $ref: "#/definitions/Property.ScrollSnapPointsX",
          deprecated: true,
          description:
            "The **`scroll-snap-points-x`** CSS property defines the horizontal positioning of snap points within the content of the scroll container they are applied to.\n\n**Syntax**: `none | repeat( <length-percentage> )`\n\n**Initial value**: `none`",
        },
        scrollSnapPointsY: {
          $ref: "#/definitions/Property.ScrollSnapPointsY",
          deprecated: true,
          description:
            "The **`scroll-snap-points-y`** CSS property defines the vertical positioning of snap points within the content of the scroll container they are applied to.\n\n**Syntax**: `none | repeat( <length-percentage> )`\n\n**Initial value**: `none`",
        },
        scrollSnapStop: {
          $ref: "#/definitions/Property.ScrollSnapStop",
          description:
            'The **`scroll-snap-stop`** CSS property defines whether or not the scroll container is allowed to "pass over" possible snap positions.\n\n**Syntax**: `normal | always`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **75** | **103** | **15** | n/a  | No  |',
        },
        scrollSnapType: {
          $ref: "#/definitions/Property.ScrollSnapType",
          description:
            "The **`scroll-snap-type`** CSS property sets how strictly snap points are enforced on the scroll container in case there is one.\n\n**Syntax**: `none | [ x | y | block | inline | both ] [ mandatory | proximity ]?`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari  |  Edge  |      IE      | | :----: | :-----: | :-----: | :----: | :----------: | | **69** |  39-68  | **11**  | **79** | **10** _-x-_ | |        |         | 9 _-x-_ |        |              |",
        },
        scrollSnapTypeX: {
          $ref: "#/definitions/Property.ScrollSnapTypeX",
          deprecated: true,
          description:
            "The **`scroll-snap-type-x`** CSS property defines how strictly snap points are enforced on the horizontal axis of the scroll container in case there is one.\n\n**Syntax**: `none | mandatory | proximity`\n\n**Initial value**: `none`",
        },
        scrollSnapTypeY: {
          $ref: "#/definitions/Property.ScrollSnapTypeY",
          deprecated: true,
          description:
            "The **`scroll-snap-type-y`** CSS property defines how strictly snap points are enforced on the vertical axis of the scroll container in case there is one.\n\n**Syntax**: `none | mandatory | proximity`\n\n**Initial value**: `none`",
        },
        scrollTimeline: {
          $ref: "#/definitions/Property.ScrollTimeline",
          description:
            "The **`scroll-timeline`** CSS shorthand property defines a name that can be used to identify the source element of a scroll timeline, along with the scrollbar axis that should provide the timeline.\n\n**Syntax**: `[ <'scroll-timeline-name'> <'scroll-timeline-axis'>? ]#`\n\n| Chrome  | Firefox | Safari | Edge | IE  | | :-----: | :-----: | :----: | :--: | :-: | | **115** |   n/a   |   No   | n/a  | No  |",
        },
        scrollTimelineAxis: {
          $ref: "#/definitions/Property.ScrollTimelineAxis",
          description:
            "The **`scroll-timeline-axis`** CSS property can be used to specify the scrollbar that will be used to provide the timeline for a scroll-timeline animation.\n\n**Syntax**: `[ block | inline | x | y ]#`\n\n**Initial value**: `block`\n\n| Chrome  | Firefox | Safari | Edge | IE  | | :-----: | :-----: | :----: | :--: | :-: | | **115** |   n/a   |   No   | n/a  | No  |",
        },
        scrollTimelineName: {
          $ref: "#/definitions/Property.ScrollTimelineName",
          description:
            "The **`scroll-timeline-name`** CSS property defines a name that can be used to identify an element as the source of a scroll timeline for an animation.\n\n**Syntax**: `none | <dashed-ident>#`\n\n**Initial value**: `none`\n\n| Chrome  | Firefox | Safari | Edge | IE  | | :-----: | :-----: | :----: | :--: | :-: | | **115** |   n/a   |   No   | n/a  | No  |",
        },
        scrollbarColor: {
          $ref: "#/definitions/Property.ScrollbarColor",
          description:
            "The **`scrollbar-color`** CSS property sets the color of the scrollbar track and thumb.\n\n**Syntax**: `auto | <color>{2}`\n\n**Initial value**: `auto`\n\n| Chrome  | Firefox | Safari | Edge | IE  | | :-----: | :-----: | :----: | :--: | :-: | | **121** | **64**  |   No   | n/a  | No  |",
        },
        scrollbarGutter: {
          $ref: "#/definitions/Property.ScrollbarGutter",
          description:
            "The **`scrollbar-gutter`** CSS property allows authors to reserve space for the scrollbar, preventing unwanted layout changes as the content grows while also avoiding unnecessary visuals when scrolling isn't needed.\n\n**Syntax**: `auto | stable && both-edges?`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **94** | **97**  |   No   | n/a  | No  |",
        },
        scrollbarWidth: {
          $ref: "#/definitions/Property.ScrollbarWidth",
          description:
            "The **`scrollbar-width`** property allows the author to set the maximum thickness of an element's scrollbars when they are shown.\n\n**Syntax**: `auto | thin | none`\n\n**Initial value**: `auto`\n\n| Chrome  | Firefox | Safari | Edge | IE  | | :-----: | :-----: | :----: | :--: | :-: | | **121** | **64**  |   No   | n/a  | No  |",
        },
        shapeImageThreshold: {
          $ref: "#/definitions/Property.ShapeImageThreshold",
          description:
            "The **`shape-image-threshold`** CSS property sets the alpha channel threshold used to extract the shape using an image as the value for `shape-outside`.\n\n**Syntax**: `<alpha-value>`\n\n**Initial value**: `0.0`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **37** | **62**  | **10.1** | n/a  | No  |",
        },
        shapeMargin: {
          $ref: "#/definitions/Property.ShapeMargin%3C(string%7Cnumber)%3E",
          description:
            "The **`shape-margin`** CSS property sets a margin for a CSS shape created using `shape-outside`.\n\n**Syntax**: `<length-percentage>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **37** | **62**  | **10.1** | n/a  | No  |",
        },
        shapeOutside: {
          $ref: "#/definitions/Property.ShapeOutside",
          description:
            "The **`shape-outside`** CSS property defines a shape—which may be non-rectangular—around which adjacent inline content should wrap. By default, inline content wraps around its margin box; `shape-outside` provides a way to customize this wrapping, making it possible to wrap text around complex objects rather than simple boxes.\n\n**Syntax**: `none | [ <shape-box> || <basic-shape> ] | <image>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **37** | **62**  | **10.1** | n/a  | No  |",
        },
        shapeRendering: {
          $ref: "#/definitions/Property.ShapeRendering",
        },
        stopColor: {
          $ref: "#/definitions/Property.StopColor",
        },
        stopOpacity: {
          $ref: "#/definitions/Property.StopOpacity",
        },
        stroke: {
          $ref: "#/definitions/Property.Stroke",
        },
        strokeDasharray: {
          $ref: "#/definitions/Property.StrokeDasharray%3C(string%7Cnumber)%3E",
        },
        strokeDashoffset: {
          $ref: "#/definitions/Property.StrokeDashoffset%3C(string%7Cnumber)%3E",
        },
        strokeLinecap: {
          $ref: "#/definitions/Property.StrokeLinecap",
        },
        strokeLinejoin: {
          $ref: "#/definitions/Property.StrokeLinejoin",
        },
        strokeMiterlimit: {
          $ref: "#/definitions/Property.StrokeMiterlimit",
        },
        strokeOpacity: {
          $ref: "#/definitions/Property.StrokeOpacity",
        },
        strokeWidth: {
          $ref: "#/definitions/Property.StrokeWidth%3C(string%7Cnumber)%3E",
        },
        tabSize: {
          $ref: "#/definitions/Property.TabSize%3C(string%7Cnumber)%3E",
          description:
            "The **`tab-size`** CSS property is used to customize the width of tab characters (U+0009).\n\n**Syntax**: `<integer> | <length>`\n\n**Initial value**: `8`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **21** | **91**  | **7**  | n/a  | No  | |        | 4 _-x-_ |        |      |     |",
        },
        tableLayout: {
          $ref: "#/definitions/Property.TableLayout",
          description:
            "The **`table-layout`** CSS property sets the algorithm used to lay out `<table>` cells, rows, and columns.\n\n**Syntax**: `auto | fixed`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **14** |  **1**  | **1**  | **12** | **5** |",
        },
        textAlign: {
          $ref: "#/definitions/Property.TextAlign",
          description:
            "The **`text-align`** CSS property sets the horizontal alignment of the inline-level content inside a block element or table-cell box. This means it works like `vertical-align` but in the horizontal direction.\n\n**Syntax**: `start | end | left | right | center | justify | match-parent`\n\n**Initial value**: `start`, or a nameless value that acts as `left` if _direction_ is `ltr`, `right` if _direction_ is `rtl` if `start` is not supported by the browser.\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **3** |",
        },
        textAlignLast: {
          $ref: "#/definitions/Property.TextAlignLast",
          description:
            "The **`text-align-last`** CSS property sets how the last line of a block or a line, right before a forced line break, is aligned.\n\n**Syntax**: `auto | start | end | left | right | center | justify`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |   IE    | | :----: | :-----: | :----: | :----: | :-----: | | **47** | **49**  | **16** | **12** | **5.5** |",
        },
        textAnchor: {
          $ref: "#/definitions/Property.TextAnchor",
        },
        textCombineUpright: {
          $ref: "#/definitions/Property.TextCombineUpright",
          description:
            "The **`text-combine-upright`** CSS property sets the combination of characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.\n\n**Syntax**: `none | all | [ digits <integer>? ]`\n\n**Initial value**: `none`\n\n|           Chrome           | Firefox |            Safari            |  Edge  |                   IE                   | | :------------------------: | :-----: | :--------------------------: | :----: | :------------------------------------: | |           **48**           | **48**  |           **15.4**           | **79** | **11** _(-ms-text-combine-horizontal)_ | | 9 _(-webkit-text-combine)_ |         | 5.1 _(-webkit-text-combine)_ |        |                                        |",
        },
        textDecoration: {
          $ref: "#/definitions/Property.TextDecoration%3C(string%7Cnumber)%3E",
          description:
            "The **`text-decoration`** shorthand CSS property sets the appearance of decorative lines on text. It is a shorthand for `text-decoration-line`, `text-decoration-color`, `text-decoration-style`, and the newer `text-decoration-thickness` property.\n\n**Syntax**: `<'text-decoration-line'> || <'text-decoration-style'> || <'text-decoration-color'> || <'text-decoration-thickness'>`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **3** |",
        },
        textDecorationColor: {
          $ref: "#/definitions/Property.TextDecorationColor",
          description:
            "The **`text-decoration-color`** CSS property sets the color of decorations added to text by `text-decoration-line`.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **57** | **36**  | **12.1** | n/a  | No  | |        |         | 8 _-x-_  |      |     |",
        },
        textDecorationLine: {
          $ref: "#/definitions/Property.TextDecorationLine",
          description:
            "The **`text-decoration-line`** CSS property sets the kind of decoration that is used on text in an element, such as an underline or overline.\n\n**Syntax**: `none | [ underline || overline || line-through || blink ] | spelling-error | grammar-error`\n\n**Initial value**: `none`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **57** | **36**  | **12.1** | n/a  | No  | |        |         | 8 _-x-_  |      |     |",
        },
        textDecorationSkip: {
          $ref: "#/definitions/Property.TextDecorationSkip",
          description:
            "The **`text-decoration-skip`** CSS property sets what parts of an element's content any text decoration affecting the element must skip over. It controls all text decoration lines drawn by the element and also any text decoration lines drawn by its ancestors.\n\n**Syntax**: `none | [ objects || [ spaces | [ leading-spaces || trailing-spaces ] ] || edges || box-decoration ]`\n\n**Initial value**: `objects`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | 57-64  |   No    | **12.1** | n/a  | No  | |        |         | 7 _-x-_  |      |     |",
        },
        textDecorationSkipInk: {
          $ref: "#/definitions/Property.TextDecorationSkipInk",
          description:
            "The **`text-decoration-skip-ink`** CSS property specifies how overlines and underlines are drawn when they pass over glyph ascenders and descenders.\n\n**Syntax**: `auto | all | none`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **64** | **70**  | **15.4** | n/a  | No  |",
        },
        textDecorationStyle: {
          $ref: "#/definitions/Property.TextDecorationStyle",
          description:
            "The **`text-decoration-style`** CSS property sets the style of the lines specified by `text-decoration-line`. The style applies to all lines that are set with `text-decoration-line`.\n\n**Syntax**: `solid | double | dotted | dashed | wavy`\n\n**Initial value**: `solid`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **57** | **36**  | **12.1** | n/a  | No  | |        |         | 8 _-x-_  |      |     |",
        },
        textDecorationThickness: {
          $ref: "#/definitions/Property.TextDecorationThickness%3C(string%7Cnumber)%3E",
          description:
            "The **`text-decoration-thickness`** CSS property sets the stroke thickness of the decoration line that is used on text in an element, such as a line-through, underline, or overline.\n\n**Syntax**: `auto | from-font | <length> | <percentage> `\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **89** | **70**  | **12.1** | n/a  | No  |",
        },
        textEmphasis: {
          $ref: "#/definitions/Property.TextEmphasis",
          description:
            "The **`text-emphasis`** CSS property applies emphasis marks to text (except spaces and control characters). It is a shorthand for `text-emphasis-style` and `text-emphasis-color`.\n\n**Syntax**: `<'text-emphasis-style'> || <'text-emphasis-color'>`\n\n|  Chrome  | Firefox | Safari | Edge | IE  | | :------: | :-----: | :----: | :--: | :-: | |  **99**  | **46**  | **7**  | n/a  | No  | | 25 _-x-_ |         |        |      |     |",
        },
        textEmphasisColor: {
          $ref: "#/definitions/Property.TextEmphasisColor",
          description:
            "The **`text-emphasis-color`** CSS property sets the color of emphasis marks. This value can also be set using the `text-emphasis` shorthand.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`\n\n|  Chrome  | Firefox | Safari | Edge | IE  | | :------: | :-----: | :----: | :--: | :-: | |  **99**  | **46**  | **7**  | n/a  | No  | | 25 _-x-_ |         |        |      |     |",
        },
        textEmphasisPosition: {
          $ref: "#/definitions/Property.TextEmphasisPosition",
          description:
            "The **`text-emphasis-position`** CSS property sets where emphasis marks are drawn. Like ruby text, if there isn't enough room for emphasis marks, the line height is increased.\n\n**Syntax**: `[ over | under ] && [ right | left ]`\n\n**Initial value**: `over right`\n\n|  Chrome  | Firefox | Safari | Edge | IE  | | :------: | :-----: | :----: | :--: | :-: | |  **99**  | **46**  | **7**  | n/a  | No  | | 25 _-x-_ |         |        |      |     |",
        },
        textEmphasisStyle: {
          $ref: "#/definitions/Property.TextEmphasisStyle",
          description:
            "The **`text-emphasis-style`** CSS property sets the appearance of emphasis marks. It can also be set, and reset, using the `text-emphasis` shorthand.\n\n**Syntax**: `none | [ [ filled | open ] || [ dot | circle | double-circle | triangle | sesame ] ] | <string>`\n\n**Initial value**: `none`\n\n|  Chrome  | Firefox | Safari | Edge | IE  | | :------: | :-----: | :----: | :--: | :-: | |  **99**  | **46**  | **7**  | n/a  | No  | | 25 _-x-_ |         |        |      |     |",
        },
        textIndent: {
          $ref: "#/definitions/Property.TextIndent%3C(string%7Cnumber)%3E",
          description:
            "The **`text-indent`** CSS property sets the length of empty space (indentation) that is put before lines of text in a block.\n\n**Syntax**: `<length-percentage> && hanging? && each-line?`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **3** |",
        },
        textJustify: {
          $ref: "#/definitions/Property.TextJustify",
          description:
            "The **`text-justify`** CSS property sets what type of justification should be applied to text when `text-align``: justify;` is set on an element.\n\n**Syntax**: `auto | inter-character | inter-word | none`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge  |   IE   | | :----: | :-----: | :----: | :---: | :----: | |  n/a   | **55**  |   No   | 12-79 | **11** |",
        },
        textOrientation: {
          $ref: "#/definitions/Property.TextOrientation",
          description:
            "The **`text-orientation`** CSS property sets the orientation of the text characters in a line. It only affects text in vertical mode (when `writing-mode` is not `horizontal-tb`). It is useful for controlling the display of languages that use vertical script, and also for making vertical table headers.\n\n**Syntax**: `mixed | upright | sideways`\n\n**Initial value**: `mixed`\n\n|  Chrome  | Firefox |  Safari   | Edge | IE  | | :------: | :-----: | :-------: | :--: | :-: | |  **48**  | **41**  |  **14**   | n/a  | No  | | 11 _-x-_ |         | 5.1 _-x-_ |      |     |",
        },
        textOverflow: {
          $ref: "#/definitions/Property.TextOverflow",
          description:
            "The **`text-overflow`** CSS property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('`…`'), or display a custom string.\n\n**Syntax**: `[ clip | ellipsis | <string> ]{1,2}`\n\n**Initial value**: `clip`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   | | :----: | :-----: | :-----: | :----: | :---: | | **1**  |  **7**  | **1.3** | **12** | **6** |",
        },
        textRendering: {
          $ref: "#/definitions/Property.TextRendering",
          description:
            "The **`text-rendering`** CSS property provides information to the rendering engine about what to optimize for when rendering text.\n\n**Syntax**: `auto | optimizeSpeed | optimizeLegibility | geometricPrecision`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **4**  |  **1**  | **5**  | n/a  | No  |",
        },
        textShadow: {
          $ref: "#/definitions/Property.TextShadow",
          description:
            "The **`text-shadow`** CSS property adds shadows to text. It accepts a comma-separated list of shadows to be applied to the text and any of its `decorations`. Each shadow is described by some combination of X and Y offsets from the element, blur radius, and color.\n\n**Syntax**: `none | <shadow-t>#`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari  |  Edge  |   IE   | | :----: | :-----: | :-----: | :----: | :----: | | **2**  | **3.5** | **1.1** | **12** | **10** |",
        },
        textSizeAdjust: {
          $ref: "#/definitions/Property.TextSizeAdjust",
          description:
            "The **`text-size-adjust`** CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.\n\n**Syntax**: `none | auto | <percentage>`\n\n**Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable).\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **54** |   No    |   No   | **79** | No  |",
        },
        textTransform: {
          $ref: "#/definitions/Property.TextTransform",
          description:
            "The **`text-transform`** CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby.\n\n**Syntax**: `none | capitalize | uppercase | lowercase | full-width | full-size-kana`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
        },
        textUnderlineOffset: {
          $ref: "#/definitions/Property.TextUnderlineOffset%3C(string%7Cnumber)%3E",
          description:
            "The **`text-underline-offset`** CSS property sets the offset distance of an underline text decoration line (applied using `text-decoration`) from its original position.\n\n**Syntax**: `auto | <length> | <percentage> `\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | **87** | **70**  | **12.1** | n/a  | No  |",
        },
        textUnderlinePosition: {
          $ref: "#/definitions/Property.TextUnderlinePosition",
          description:
            "The **`text-underline-position`** CSS property specifies the position of the underline which is set using the `text-decoration` property's `underline` value.\n\n**Syntax**: `auto | from-font | [ under || [ left | right ] ]`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  |  Edge  |  IE   | | :----: | :-----: | :------: | :----: | :---: | | **33** | **74**  | **12.1** | **12** | **6** | |        |         | 9 _-x-_  |        |       |",
        },
        textWrap: {
          $ref: "#/definitions/Property.TextWrap",
          description:
            "The **`text-wrap`** CSS property controls how text inside an element is wrapped. The different values provide:\n\n**Syntax**: `wrap | nowrap | balance | stable | pretty`\n\n**Initial value**: `wrap`\n\n| Chrome  | Firefox | Safari | Edge | IE  | | :-----: | :-----: | :----: | :--: | :-: | | **114** | **121** |   No   | n/a  | No  |",
        },
        timelineScope: {
          $ref: "#/definitions/Property.TimelineScope",
          description:
            "The **`timeline-scope`** CSS property modifies the scope of a named animation timeline.\n\n**Syntax**: `none | <dashed-ident>#`\n\n**Initial value**: `none`\n\n| Chrome  | Firefox | Safari | Edge | IE  | | :-----: | :-----: | :----: | :--: | :-: | | **116** |   No    |   No   | n/a  | No  |",
        },
        top: {
          $ref: "#/definitions/Property.Top%3C(string%7Cnumber)%3E",
          description:
            "The **`top`** CSS property participates in specifying the vertical position of a positioned element. It has no effect on non-positioned elements.\n\n**Syntax**: `<length> | <percentage> | auto`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **5** |",
        },
        touchAction: {
          $ref: "#/definitions/Property.TouchAction",
          description:
            "The **`touch-action`** CSS property sets how an element's region can be manipulated by a touchscreen user (for example, by zooming features built into the browser).\n\n**Syntax**: `auto | none | [ [ pan-x | pan-left | pan-right ] || [ pan-y | pan-up | pan-down ] || pinch-zoom ] | manipulation`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |    IE    | | :----: | :-----: | :----: | :----: | :------: | | **36** | **52**  | **13** | **12** |  **11**  | |        |         |        |        | 10 _-x-_ |",
        },
        transform: {
          $ref: "#/definitions/Property.Transform",
          description:
            "The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.\n\n**Syntax**: `none | <transform-list>`\n\n**Initial value**: `none`\n\n| Chrome  | Firefox |  Safari   |  Edge  |   IE    | | :-----: | :-----: | :-------: | :----: | :-----: | | **36**  | **16**  |   **9**   | **12** | **10**  | | 1 _-x-_ |         | 3.1 _-x-_ |        | 9 _-x-_ |",
        },
        transformBox: {
          $ref: "#/definitions/Property.TransformBox",
          description:
            "The **`transform-box`** CSS property defines the layout box to which the `transform`, individual transform properties `translate`,`scale`, and `rotate`, and `transform-origin` properties relate.\n\n**Syntax**: `content-box | border-box | fill-box | stroke-box | view-box`\n\n**Initial value**: `view-box`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **64** | **55**  | **11** | n/a  | No  |",
        },
        transformOrigin: {
          $ref: "#/definitions/Property.TransformOrigin%3C(string%7Cnumber)%3E",
          description:
            "The **`transform-origin`** CSS property sets the origin for an element's transformations.\n\n**Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`\n\n**Initial value**: `50% 50% 0`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE    | | :-----: | :-----: | :-----: | :----: | :-----: | | **36**  | **16**  |  **9**  | **12** | **10**  | | 1 _-x-_ |         | 2 _-x-_ |        | 9 _-x-_ |",
        },
        transformStyle: {
          $ref: "#/definitions/Property.TransformStyle",
          description:
            "The **`transform-style`** CSS property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.\n\n**Syntax**: `flat | preserve-3d`\n\n**Initial value**: `flat`\n\n|  Chrome  | Firefox | Safari  |  Edge  | IE  | | :------: | :-----: | :-----: | :----: | :-: | |  **36**  | **16**  |  **9**  | **12** | No  | | 12 _-x-_ |         | 4 _-x-_ |        |     |",
        },
        transition: {
          $ref: "#/definitions/Property.Transition%3Cstring%3E",
          description:
            "The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.\n\n**Syntax**: `<single-transition>#`\n\n| Chrome  | Firefox |  Safari   |  Edge  |   IE   | | :-----: | :-----: | :-------: | :----: | :----: | | **26**  | **16**  |   **9**   | **12** | **10** | | 1 _-x-_ |         | 3.1 _-x-_ |        |        |",
        },
        transitionBehavior: {
          $ref: "#/definitions/Property.TransitionBehavior",
          description:
            "The **`transition-behavior`** CSS property specifies whether transitions will be started for properties whose animation behavior is discrete.\n\n**Syntax**: `<transition-behavior-value>#`\n\n**Initial value**: `normal`\n\n| Chrome  | Firefox | Safari | Edge | IE  | | :-----: | :-----: | :----: | :--: | :-: | | **117** |   No    |   No   | n/a  | No  |",
        },
        transitionDelay: {
          $ref: "#/definitions/Property.TransitionDelay%3Cstring%3E",
          description:
            "The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   | | :-----: | :-----: | :-----: | :----: | :----: | | **26**  | **16**  |  **9**  | **12** | **10** | | 1 _-x-_ |         | 4 _-x-_ |        |        |",
        },
        transitionDuration: {
          $ref: "#/definitions/Property.TransitionDuration%3Cstring%3E",
          description:
            "The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`\n\n| Chrome  | Firefox |  Safari   |  Edge  |   IE   | | :-----: | :-----: | :-------: | :----: | :----: | | **26**  | **16**  |   **9**   | **12** | **10** | | 1 _-x-_ |         | 3.1 _-x-_ |        |        |",
        },
        transitionProperty: {
          $ref: "#/definitions/Property.TransitionProperty",
          description:
            "The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.\n\n**Syntax**: `none | <single-transition-property>#`\n\n**Initial value**: all\n\n| Chrome  | Firefox |  Safari   |  Edge  |   IE   | | :-----: | :-----: | :-------: | :----: | :----: | | **26**  | **16**  |   **9**   | **12** | **10** | | 1 _-x-_ |         | 3.1 _-x-_ |        |        |",
        },
        transitionTimingFunction: {
          $ref: "#/definitions/Property.TransitionTimingFunction",
          description:
            "The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.\n\n**Syntax**: `<easing-function>#`\n\n**Initial value**: `ease`\n\n| Chrome  | Firefox |  Safari   |  Edge  |   IE   | | :-----: | :-----: | :-------: | :----: | :----: | | **26**  | **16**  |   **9**   | **12** | **10** | | 1 _-x-_ |         | 3.1 _-x-_ |        |        |",
        },
        translate: {
          $ref: "#/definitions/Property.Translate%3C(string%7Cnumber)%3E",
          description:
            "The **`translate`** CSS property allows you to specify translation transforms individually and independently of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.\n\n**Syntax**: `none | <length-percentage> [ <length-percentage> <length>? ]?`\n\n**Initial value**: `none`\n\n| Chrome  | Firefox |  Safari  | Edge | IE  | | :-----: | :-----: | :------: | :--: | :-: | | **104** | **72**  | **14.1** | n/a  | No  |",
        },
        unicodeBidi: {
          $ref: "#/definitions/Property.UnicodeBidi",
          description:
            "The **`unicode-bidi`** CSS property, together with the `direction` property, determines how bidirectional text in a document is handled. For example, if a block of content contains both left-to-right and right-to-left text, the user-agent uses a complex Unicode algorithm to decide how to display the text. The `unicode-bidi` property overrides this algorithm and allows the developer to control the text embedding.\n\n**Syntax**: `normal | embed | isolate | bidi-override | isolate-override | plaintext`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari  |  Edge  |   IE    | | :----: | :-----: | :-----: | :----: | :-----: | | **2**  |  **1**  | **1.3** | **12** | **5.5** |",
        },
        userSelect: {
          $ref: "#/definitions/Property.UserSelect",
          description:
            "The **`user-select`** CSS property controls whether the user can select text. This doesn't have any effect on content loaded as part of a browser's user interface (its chrome), except in textboxes.\n\n**Syntax**: `auto | text | none | contain | all`\n\n**Initial value**: `auto`\n\n| Chrome  | Firefox |   Safari    |   Edge   |      IE      | | :-----: | :-----: | :---------: | :------: | :----------: | | **54**  | **69**  | **3** _-x-_ |  **79**  | **10** _-x-_ | | 1 _-x-_ | 1 _-x-_ |             | 12 _-x-_ |              |",
        },
        vectorEffect: {
          $ref: "#/definitions/Property.VectorEffect",
        },
        verticalAlign: {
          $ref: "#/definitions/Property.VerticalAlign%3C(string%7Cnumber)%3E",
          description:
            "The **`vertical-align`** CSS property sets vertical alignment of an inline, inline-block or table-cell box.\n\n**Syntax**: `baseline | sub | super | text-top | text-bottom | middle | top | bottom | <percentage> | <length>`\n\n**Initial value**: `baseline`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
        },
        viewTimeline: {
          $ref: "#/definitions/Property.ViewTimeline",
          description:
            "The **`view-timeline`** CSS shorthand property is used to define a _named view progress timeline_, which is progressed through based on the change in visibility of an element (known as the _subject_) inside a scrollable element (_scroller_). `view-timeline` is set on the subject.\n\n**Syntax**: `[ <'view-timeline-name'> <'view-timeline-axis'>? ]#`\n\n| Chrome  | Firefox | Safari | Edge | IE  | | :-----: | :-----: | :----: | :--: | :-: | | **115** |   n/a   |   No   | n/a  | No  |",
        },
        viewTimelineAxis: {
          $ref: "#/definitions/Property.ViewTimelineAxis",
          description:
            "The **`view-timeline-axis`** CSS property is used to specify the scrollbar direction that will be used to provide the timeline for a _named view progress timeline_ animation, which is progressed through based on the change in visibility of an element (known as the _subject_) inside a scrollable element (_scroller_). `view-timeline-axis` is set on the subject. See CSS scroll-driven animations for more details.\n\n**Syntax**: `[ block | inline | x | y ]#`\n\n**Initial value**: `block`\n\n| Chrome  | Firefox | Safari | Edge | IE  | | :-----: | :-----: | :----: | :--: | :-: | | **115** |   n/a   |   No   | n/a  | No  |",
        },
        viewTimelineInset: {
          $ref: "#/definitions/Property.ViewTimelineInset%3C(string%7Cnumber)%3E",
          description:
            "The **`view-timeline-inset`** CSS property is used to specify one or two values representing an adjustment to the position of the scrollport (see Scroll container for more details) in which the subject element of a _named view progress timeline_ animation is deemed to be visible. Put another way, this allows you to specify start and/or end inset (or outset) values that offset the position of the timeline.\n\n**Syntax**: `[ [ auto | <length-percentage> ]{1,2} ]#`\n\n**Initial value**: `auto`\n\n| Chrome  | Firefox | Safari | Edge | IE  | | :-----: | :-----: | :----: | :--: | :-: | | **115** |   No    |   No   | n/a  | No  |",
        },
        viewTimelineName: {
          $ref: "#/definitions/Property.ViewTimelineName",
          description:
            "The **`view-timeline-name`** CSS property is used to define the name of a _named view progress timeline_, which is progressed through based on the change in visibility of an element (known as the _subject_) inside a scrollable element (_scroller_). `view-timeline` is set on the subject.\n\n**Syntax**: `none | <dashed-ident>#`\n\n**Initial value**: `none`\n\n| Chrome  | Firefox | Safari | Edge | IE  | | :-----: | :-----: | :----: | :--: | :-: | | **115** |   n/a   |   No   | n/a  | No  |",
        },
        viewTransitionName: {
          $ref: "#/definitions/Property.ViewTransitionName",
          description:
            "The **`view-transition-name`** CSS property provides the selected element with a distinct identifying name (a `<custom-ident>`) and causes it to participate in a separate view transition from the root view transition — or no view transition if the `none` value is specified.\n\n**Syntax**: `none | <custom-ident>`\n\n**Initial value**: `none`\n\n| Chrome  | Firefox | Safari | Edge | IE  | | :-----: | :-----: | :----: | :--: | :-: | | **111** |   No    |   No   | n/a  | No  |",
        },
        visibility: {
          $ref: "#/definitions/Property.Visibility",
          description:
            "The **`visibility`** CSS property shows or hides an element without changing the layout of a document. The property can also hide rows or columns in a `<table>`.\n\n**Syntax**: `visible | hidden | collapse`\n\n**Initial value**: `visible`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
        },
        whiteSpace: {
          $ref: "#/definitions/Property.WhiteSpace",
          description:
            "The **`white-space`** CSS property sets how white space inside an element is handled.\n\n**Syntax**: `normal | pre | nowrap | pre-wrap | pre-line | break-spaces | [ <'white-space-collapse'> || <'text-wrap'> || <'white-space-trim'> ]`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  |   IE    | | :----: | :-----: | :----: | :----: | :-----: | | **1**  |  **1**  | **1**  | **12** | **5.5** |",
        },
        whiteSpaceCollapse: {
          $ref: "#/definitions/Property.WhiteSpaceCollapse",
          description:
            "The **`white-space-collapse`** CSS property controls how white space inside an element is collapsed.\n\n**Syntax**: `collapse | discard | preserve | preserve-breaks | preserve-spaces | break-spaces`\n\n**Initial value**: `collapse`\n\n| Chrome  | Firefox | Safari | Edge | IE  | | :-----: | :-----: | :----: | :--: | :-: | | **114** |   No    |   No   | n/a  | No  |",
        },
        whiteSpaceTrim: {
          $ref: "#/definitions/Property.WhiteSpaceTrim",
          description:
            "**Syntax**: `none | discard-before || discard-after || discard-inner`\n\n**Initial value**: `none`",
        },
        widows: {
          $ref: "#/definitions/Property.Widows",
          description:
            "The **`widows`** CSS property sets the minimum number of lines in a block container that must be shown at the _top_ of a page, region, or column.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `2`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   | | :----: | :-----: | :-----: | :----: | :---: | | **25** |   No    | **1.3** | **12** | **8** |",
        },
        width: {
          $ref: "#/definitions/Property.Width%3C(string%7Cnumber)%3E",
          description:
            "The **`width`** CSS property sets an element's width. By default, it sets the width of the content area, but if `box-sizing` is set to `border-box`, it sets the width of the border area.\n\n**Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
        },
        willChange: {
          $ref: "#/definitions/Property.WillChange",
          description:
            "The **`will-change`** CSS property hints to browsers how an element is expected to change. Browsers may set up optimizations before an element is actually changed. These kinds of optimizations can increase the responsiveness of a page by doing potentially expensive work before they are actually required.\n\n**Syntax**: `auto | <animateable-feature>#`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari  | Edge | IE  | | :----: | :-----: | :-----: | :--: | :-: | | **36** | **36**  | **9.1** | n/a  | No  |",
        },
        wordBreak: {
          $ref: "#/definitions/Property.WordBreak",
          description:
            "The **`word-break`** CSS property sets whether line breaks appear wherever the text would otherwise overflow its content box.\n\n**Syntax**: `normal | break-all | keep-all | break-word`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  |   IE    | | :----: | :-----: | :----: | :----: | :-----: | | **1**  | **15**  | **3**  | **12** | **5.5** |",
        },
        wordSpacing: {
          $ref: "#/definitions/Property.WordSpacing%3C(string%7Cnumber)%3E",
          description:
            "The **`word-spacing`** CSS property sets the length of space between words and between tags.\n\n**Syntax**: `normal | <length>`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **6** |",
        },
        wordWrap: {
          $ref: "#/definitions/Property.WordWrap",
          description:
            "The **`overflow-wrap`** CSS property applies to inline elements, setting whether the browser should insert line breaks within an otherwise unbreakable string to prevent text from overflowing its line box.\n\n**Syntax**: `normal | break-word`\n\n**Initial value**: `normal`\n\n| Chrome  | Firefox |  Safari   |  Edge   | IE  | | :-----: | :-----: | :-------: | :-----: | :-: | | **≤80** | **≤72** | **≤13.1** | **≤80** | No  |",
        },
        writingMode: {
          $ref: "#/definitions/Property.WritingMode",
          description:
            "The **`writing-mode`** CSS property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress. When set for an entire document, it should be set on the root element (`html` element for HTML documents).\n\n**Syntax**: `horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr`\n\n**Initial value**: `horizontal-tb`\n\n| Chrome  | Firefox |  Safari   |  Edge  |  IE   | | :-----: | :-----: | :-------: | :----: | :---: | | **48**  | **41**  | **10.1**  | **12** | **9** | | 8 _-x-_ |         | 5.1 _-x-_ |        |       |",
        },
        zIndex: {
          $ref: "#/definitions/Property.ZIndex",
          description:
            "The **`z-index`** CSS property sets the z-order of a positioned element and its descendants or flex items. Overlapping elements with a larger z-index cover those with a smaller one.\n\n**Syntax**: `auto | <integer>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
        },
        zoom: {
          $ref: "#/definitions/Property.Zoom",
          description:
            "The non-standard **`zoom`** CSS property can be used to control the magnification level of an element. `transform: scale()` should be used instead of this property, if possible. However, unlike CSS Transforms, `zoom` affects the layout size of the element.\n\n**Syntax**: `normal | reset | <number> | <percentage>`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari  |  Edge  |   IE    | | :----: | :-----: | :-----: | :----: | :-----: | | **1**  |   n/a   | **3.1** | **12** | **5.5** |",
        },
      },
      type: "object",
    },
    "React.ChangeEventHandler<interface-173350239-481428-494898-173350239-0-1346177>":
      {
        $ref: "#/definitions/React.EventHandler%3CReact.ChangeEvent%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E%3E",
      },
    "React.ClipboardEventHandler<interface-173350239-481428-494898-173350239-0-1346177>":
      {
        $ref: "#/definitions/React.EventHandler%3CReact.ClipboardEvent%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E%3E",
      },
    "React.CompositionEventHandler<interface-173350239-481428-494898-173350239-0-1346177>":
      {
        $ref: "#/definitions/React.EventHandler%3CReact.CompositionEvent%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E%3E",
      },
    "React.DragEventHandler<interface-173350239-481428-494898-173350239-0-1346177>":
      {
        $ref: "#/definitions/React.EventHandler%3CReact.DragEvent%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E%3E",
      },
    "React.EventHandler<React.AnimationEvent<interface-173350239-481428-494898-173350239-0-1346177>>":
      {
        type: "null",
      },
    "React.EventHandler<React.ChangeEvent<interface-173350239-481428-494898-173350239-0-1346177>>":
      {
        type: "null",
      },
    "React.EventHandler<React.ClipboardEvent<interface-173350239-481428-494898-173350239-0-1346177>>":
      {
        type: "null",
      },
    "React.EventHandler<React.CompositionEvent<interface-173350239-481428-494898-173350239-0-1346177>>":
      {
        type: "null",
      },
    "React.EventHandler<React.DragEvent<interface-173350239-481428-494898-173350239-0-1346177>>":
      {
        type: "null",
      },
    "React.EventHandler<React.FocusEvent<interface-173350239-481428-494898-173350239-0-1346177>>":
      {
        type: "null",
      },
    "React.EventHandler<React.FormEvent<interface-173350239-481428-494898-173350239-0-1346177>>":
      {
        type: "null",
      },
    "React.EventHandler<React.KeyboardEvent<interface-173350239-481428-494898-173350239-0-1346177>>":
      {
        type: "null",
      },
    "React.EventHandler<React.MouseEvent<interface-173350239-481428-494898-173350239-0-1346177>>":
      {
        type: "null",
      },
    "React.EventHandler<React.PointerEvent<interface-173350239-481428-494898-173350239-0-1346177>>":
      {
        type: "null",
      },
    "React.EventHandler<React.SyntheticEvent<interface-173350239-481428-494898-173350239-0-1346177>>":
      {
        type: "null",
      },
    "React.EventHandler<React.ToggleEvent<interface-173350239-481428-494898-173350239-0-1346177>>":
      {
        type: "null",
      },
    "React.EventHandler<React.TouchEvent<interface-173350239-481428-494898-173350239-0-1346177>>":
      {
        type: "null",
      },
    "React.EventHandler<React.TransitionEvent<interface-173350239-481428-494898-173350239-0-1346177>>":
      {
        type: "null",
      },
    "React.EventHandler<React.UIEvent<interface-173350239-481428-494898-173350239-0-1346177>>":
      {
        type: "null",
      },
    "React.EventHandler<React.WheelEvent<interface-173350239-481428-494898-173350239-0-1346177>>":
      {
        type: "null",
      },
    "React.FocusEventHandler<interface-173350239-481428-494898-173350239-0-1346177>":
      {
        $ref: "#/definitions/React.EventHandler%3CReact.FocusEvent%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E%3E",
      },
    "React.FormEventHandler<interface-173350239-481428-494898-173350239-0-1346177>":
      {
        $ref: "#/definitions/React.EventHandler%3CReact.FormEvent%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E%3E",
      },
    "React.JSXElementConstructor<any>": {
      anyOf: [
        {
          $comment:
            "(\n            props: P) => ReactNode | Promise<ReactNode>",
          properties: {
            namedArgs: {
              additionalProperties: false,
              properties: {
                props: {},
              },
              required: ["props"],
              type: "object",
            },
          },
          type: "object",
        },
        {
          $comment: "new (props: P) => Component<any, any>",
          properties: {
            namedArgs: {
              additionalProperties: false,
              properties: {
                props: {},
              },
              required: ["props"],
              type: "object",
            },
          },
          type: "object",
        },
      ],
      description:
        "Represents any user-defined component, either as a function or a class.\n\nSimilar to  {@link  ComponentType } , but without extra properties like  {@link  FunctionComponent.defaultProps defaultProps  } .",
    },
    "React.KeyboardEventHandler<interface-173350239-481428-494898-173350239-0-1346177>":
      {
        $ref: "#/definitions/React.EventHandler%3CReact.KeyboardEvent%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E%3E",
      },
    "React.MouseEventHandler<interface-173350239-481428-494898-173350239-0-1346177>":
      {
        $ref: "#/definitions/React.EventHandler%3CReact.MouseEvent%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E%3E",
      },
    "React.PointerEventHandler<interface-173350239-481428-494898-173350239-0-1346177>":
      {
        $ref: "#/definitions/React.EventHandler%3CReact.PointerEvent%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E%3E",
      },
    "React.ReactElement": {
      additionalProperties: false,
      description:
        "Represents a JSX element.\n\nWhere  {@link  ReactNode }  represents everything that can be rendered, `ReactElement` only represents JSX.",
      properties: {
        key: {
          type: ["string", "null"],
        },
        props: {},
        type: {
          anyOf: [
            {
              type: "string",
            },
            {
              $ref: "#/definitions/React.JSXElementConstructor%3Cany%3E",
            },
          ],
        },
      },
      required: ["type", "props", "key"],
      type: "object",
    },
    "React.ReactEventHandler<interface-173350239-481428-494898-173350239-0-1346177>":
      {
        $ref: "#/definitions/React.EventHandler%3CReact.SyntheticEvent%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E%3E",
      },
    "React.ReactPortal": {
      additionalProperties: false,
      properties: {
        children: {
          anyOf: [
            {
              $ref: "#/definitions/React.ReactElement",
            },
            {
              type: "string",
            },
            {
              type: "number",
            },
            {
              additionalProperties: false,
              type: "object",
            },
            {
              $ref: "#/definitions/React.ReactPortal",
            },
            {
              type: "boolean",
            },
            {
              type: "null",
            },
          ],
        },
        key: {
          type: ["string", "null"],
        },
        props: {},
        type: {
          anyOf: [
            {
              type: "string",
            },
            {
              $ref: "#/definitions/React.JSXElementConstructor%3Cany%3E",
            },
          ],
        },
      },
      required: ["key", "props", "type"],
      type: "object",
    },
    "React.ToggleEventHandler<interface-173350239-481428-494898-173350239-0-1346177>":
      {
        $ref: "#/definitions/React.EventHandler%3CReact.ToggleEvent%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E%3E",
      },
    "React.TouchEventHandler<interface-173350239-481428-494898-173350239-0-1346177>":
      {
        $ref: "#/definitions/React.EventHandler%3CReact.TouchEvent%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E%3E",
      },
    "React.TransitionEventHandler<interface-173350239-481428-494898-173350239-0-1346177>":
      {
        $ref: "#/definitions/React.EventHandler%3CReact.TransitionEvent%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E%3E",
      },
    "React.UIEventHandler<interface-173350239-481428-494898-173350239-0-1346177>":
      {
        $ref: "#/definitions/React.EventHandler%3CReact.UIEvent%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E%3E",
      },
    "React.WheelEventHandler<interface-173350239-481428-494898-173350239-0-1346177>":
      {
        $ref: "#/definitions/React.EventHandler%3CReact.WheelEvent%3Cinterface-173350239-481428-494898-173350239-0-1346177%3E%3E",
      },
    ShowCountFormatter: {
      $comment:
        "(args: {\n    value: string;\n    count: number;\n    maxLength?: number;\n}) => ReactNode",
      properties: {
        namedArgs: {
          additionalProperties: false,
          properties: {
            args: {
              additionalProperties: false,
              properties: {
                count: {
                  type: "number",
                },
                maxLength: {
                  type: "number",
                },
                value: {
                  type: "string",
                },
              },
              required: ["value", "count"],
              type: "object",
            },
          },
          required: ["args"],
          type: "object",
        },
      },
      type: "object",
    },
    Variant: {
      enum: ["outlined", "borderless", "filled"],
      type: "string",
    },
  },
};
