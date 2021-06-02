from collections.abc import MutableSequence

import attr


class Field:
    def __init__(
        self,
        *,
        field_name,
        component_name,
        namespace,
        return_type,
        initial_value,
        helper_text,
    ):
        self.field_name = field_name
        self.component_name = component_name
        self.namespace = namespace
        self.return_type = return_type
        self.initial_value = initial_value
        self._validation_schema = []
        self._parameters = {
            "fullWidth": True,
            "name": self.field_name,
            "id": self.field_name,
            "helperText": helper_text,
            "variant": "outlined",
        }

    def add_parameter(self, key, value):
        self._parameters[key] = value

    @property
    def validation_schema(self):
        return tuple(self._validation_schema)

    @property
    def parameters(self):
        return self._parameters

    def render(self):
        return {
            "component-namespace": self.namespace,
            "component-name": self.component_name,
            "type-returned": self.return_type,
            "component-parameters": self.parameters,
            "validationSchema": self.validation_schema,
            "initialValue": self.initial_value,
        }


class UnknownField(Field):
    def __init__(
        self,
        *,
        field_name,
        component_name="Unknown",
        namespace="Unknown",
        return_type="unknown::unknown",
        initial_value=None,
        helper_text,
    ):
        super().__init__(
            field_name=field_name,
            component_name=component_name,
            namespace=namespace,
            return_type=return_type,
            initial_value=initial_value,
            helper_text=helper_text,
        )


class StringField(Field):
    def __init__(
        self,
        *,
        field_name,
        component_name="TextField",
        namespace="formik-material-ui",
        return_type="faims-core::String",
        initial_value="",
        helper_text,
        label,
        rows=None,
    ):
        super().__init__(
            field_name=field_name,
            component_name=component_name,
            namespace=namespace,
            return_type=return_type,
            initial_value=initial_value,
            helper_text=helper_text,
        )

        if rows is not None:
            input_props = {"type": "text", "rows": rows}
        else:
            input_props = {"type": "text"}

        self.add_parameter("InputProps", input_props)
        self.add_parameter("InputLabelProps", {"label": label})
        self._validation_schema.append(["yup.string"])


class EmailField(StringField):
    def __init__(
        self,
        *,
        field_name,
        component_name="TextField",
        namespace="formik-material-ui",
        return_type="faims-core::Email",
        initial_value="",
        helper_text,
        label,
    ):
        super().__init__(
            field_name=field_name,
            component_name=component_name,
            namespace=namespace,
            return_type=return_type,
            initial_value=initial_value,
            helper_text=helper_text,
        )

        self.add_parameter("InputProps", {"type": "email"})
        self._validation_schema.append(["yup.email", "Enter a valid email"])


class NumberField(Field):
    def __init__(
        self,
        *,
        field_name,
        component_name="TextField",
        namespace="formik-material-ui",
        return_type="faims-core::Number",
        initial_value=0,
        helper_text,
        label,
    ):
        super().__init__(
            field_name=field_name,
            component_name=component_name,
            namespace=namespace,
            return_type=return_type,
            initial_value=initial_value,
            helper_text=helper_text,
        )

        self.add_parameter("InputProps", {"type": "number"})
        self.add_parameter("InputLabelProps", {"label": label})
        self._validation_schema.append(["yup.number"])


class IntegerField(NumberField):
    def __init__(
        self,
        *,
        field_name,
        component_name="TextField",
        namespace="formik-material-ui",
        return_type="faims-core::Number",
        initial_value=0,
        helper_text,
        label,
    ):
        super().__init__(
            field_name=field_name,
            component_name=component_name,
            namespace=namespace,
            return_type=return_type,
            initial_value=initial_value,
            helper_text=helper_text,
        )

        self._validation_schema.append(["yup.integer"])


class TakePointField(Field):
    def __init__(
        self,
        *,
        field_name,
        component_name="TakePoint",
        namespace="faims-custom",
        return_type="faims-pos::Location",
        initial_value=None,
        helper_text,
    ):
        super().__init__(
            field_name=field_name,
            component_name=component_name,
            namespace=namespace,
            return_type=return_type,
            initial_value=initial_value,
            helper_text=helper_text,
        )

        self._validation_schema.extend(
            [
                ["yup.object"],
                ["yup.nullable"],
                [
                    "yup.shape",
                    {
                        "latitude": [["yup.number"], ["yup.required"]],
                        "longitude": [["yup.number"], ["yup.required"]],
                    },
                ],
            ]
        )


class SelectField(Field):
    def __init__(
        self,
        *,
        field_name,
        component_name="Select",
        namespace="faims-custom",
        return_type="faims-core::String",
        initial_value="",
        helper_text,
        options,
        label,
        multiple=False,
    ):
        super().__init__(
            field_name=field_name,
            component_name=component_name,
            namespace=namespace,
            return_type=return_type,
            initial_value=initial_value,
            helper_text=helper_text,
        )

        if not isinstance(options, OptionList):
            raise ValueError("Must be instance of OptionList")

        self.add_parameter("ElementProps", {"options": options.render()})
        self.add_parameter("InputLabelProps", {"label": label})

        if multiple:
            self.add_parameter("SelectProps", {"multiple": True})

        self._validation_schema.append(["yup.string"])


class RadioGroupField(Field):
    def __init__(
        self,
        *,
        field_name,
        component_name="RadioGroup",
        namespace="faims-custom",
        return_type="faims-core::String",
        initial_value="",
        helper_text,
        options,
    ):
        super().__init__(
            field_name=field_name,
            component_name=component_name,
            namespace=namespace,
            return_type=return_type,
            initial_value=initial_value,
            helper_text=helper_text,
        )

        if not isinstance(options, OptionList):
            raise ValueError("Must be instance of OptionList")

        self.add_parameter("ElementProps", {"options": options})
        self.add_parameter("FormLabelProps", {"children": label})

        self._validation_schema.append(["yup.string"])


class CheckboxField(Field):
    def __init__(
        self,
        *,
        field_name,
        component_name="Checkbox",
        namespace="faims-custom",
        return_type="faims-core::Bool",
        initial_value=False,
        helper_text,
    ):
        super().__init__(
            field_name=field_name,
            component_name=component_name,
            namespace=namespace,
            return_type=return_type,
            initial_value=initial_value,
            helper_text=helper_text,
        )

        if not isinstance(options, OptionList):
            raise ValueError("Must be instance of OptionList")

        self.add_parameter("FormControlLabelProps", {"label": label})

        self._validation_schema.append(["yup.bool"])


class Fields(MutableSequence):
    def __init__(self, *fields):
        self._fields = []
        self.extend(fields)

    def __len__(self):
        return len(self._fields)

    def __getitem__(self, key):
        return self._fields[key]

    def __setitem__(self, key, value):
        if not isinstance(value, Field):
            raise ValueError("Must be instance of Field")
        self._fields[key] = value

    def __delitem__(self, key):
        del self._fields[key]

    def insert(self, key, value):
        self._fields.insert(key, value)

    def render(self):
        return {f.field_name: f.render() for f in self}


class OptionList(MutableSequence):
    def __init__(self, *options):
        self._option_list = []
        self.extend(options)

    def __len__(self):
        return len(self._option_list)

    def __getitem__(self, key):
        return self._option_list[key]

    def __setitem__(self, key, value):
        if not isinstance(value, Option):
            raise ValueError("Must be instance of Option")
        self._option_list[key] = value

    def __delitem__(self, key):
        del self._option_list[key]

    def insert(self, key, value):
        self._option_list.insert(key, value)

    def render(self):
        return [o.render() for o in self]


@attr.s(kw_only=True)
class Option:
    value = attr.ib()
    label = attr.ib()

    def render(self):
        return {
            "value": self.value,
            "label": self.label,
        }


class View(MutableSequence):
    def __init__(self, *, view_name, fields=None):
        self.name = view_name
        self._fields = []
        if fields is not None:
            self.extend(fields)

    def __len__(self):
        return len(self._fields)

    def __getitem__(self, key):
        return self._fields[key]

    def __setitem__(self, key, value):
        if not isinstance(value, Field):
            raise ValueError("Must be instance of Field")
        self._fields[key] = value

    def __delitem__(self, key):
        del self._fields[key]

    def insert(self, key, value):
        self._fields.insert(key, value)

    def render(self):
        return {
            "fields": [f.field_name for f in self],
            "next-view": "BAD",
            "next-view-label": "BAD",
        }


class UISpecification(MutableSequence):
    def __init__(self, *views):
        self._views = []
        self.extend(views)

    def __len__(self):
        return len(self._views)

    def __getitem__(self, key):
        return self._views[key]

    def __setitem__(self, key, value):
        if not isinstance(value, View):
            raise ValueError("Must be instance of View")
        self._views[key] = value

    def __delitem__(self, key):
        del self._views[key]

    def insert(self, key, value):
        self._views.insert(key, value)

    def render(self):
        start_view = self._views[0]
        fields = Fields()
        for view in self:
            fields.extend(view)
        return {
            "_id": "ui-specification",
            "fields": fields.render(),
            "fviews": {view.name: view.render() for view in self},
            "start_view": start_view.name,
        }
