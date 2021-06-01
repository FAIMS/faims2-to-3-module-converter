
import {setUiSpecForProject} from './uiSpecification';
import {ProjectUIModel} from './datamodel';

const example_ui_specs: {[key: string]: ProjectUIModel} = {
  'default/CSIRO Geochem': {
    fields: {
      
'Sample_Prefix_1': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Sample_Prefix_1',
    id: 'Sample_Prefix_1',
    helperText: '<Element 'description' at 0x7f3b04dc3540>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Sample_Prefix_1',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Sample_Prefix_2': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Sample_Prefix_2',
    id: 'Sample_Prefix_2',
    helperText: '<Element 'description' at 0x7f3b04dc36d0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Sample_Prefix_2',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Sample_ID': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Sample_ID',
    id: 'Sample_ID',
    helperText: '<Element 'description' at 0x7f3b04dc3810>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Sample_ID',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Timestamp_Field': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Timestamp_Field',
    id: 'Timestamp_Field',
    helperText: '<Element 'description' at 0x7f3b04dc3f90>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Timestamp_Field',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Water_Sample_author': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Water_Sample_author',
    id: 'Water_Sample_author',
    helperText: '<Element 'description' at 0x7f3b04d05180>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Water_Sample_author',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Station_Deposit': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Station_Deposit',
    id: 'Station_Deposit',
    helperText: '<Element 'description' at 0x7f3b04d052c0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Station_Deposit',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Project': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Project',
    id: 'Project',
    helperText: '<Element 'description' at 0x7f3b04d05400>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Project',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Area': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Area',
    id: 'Area',
    helperText: '<Element 'description' at 0x7f3b04d05540>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Area',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Site_Name': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Site_Name',
    id: 'Site_Name',
    helperText: '<Element 'description' at 0x7f3b04d05680>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Site_Name',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Latitude': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Latitude',
    id: 'Latitude',
    helperText: '<Element 'description' at 0x7f3b04d093b0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Latitude',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Longitude': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Longitude',
    id: 'Longitude',
    helperText: '<Element 'description' at 0x7f3b04d094f0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Longitude',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Northing': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Northing',
    id: 'Northing',
    helperText: '<Element 'description' at 0x7f3b04d09630>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Northing',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Easting': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Easting',
    id: 'Easting',
    helperText: '<Element 'description' at 0x7f3b04d09770>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Easting',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Accuracy': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Accuracy',
    id: 'Accuracy',
    helperText: '<Element 'description' at 0x7f3b04d098b0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Accuracy',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Elevation_Metres_above_Sea_Level': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Elevation_Metres_above_Sea_Level',
    id: 'Elevation_Metres_above_Sea_Level',
    helperText: '<Element 'description' at 0x7f3b04d099f0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Elevation_Metres_above_Sea_Level',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Water_Table': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Water_Table',
    id: 'Water_Table',
    helperText: '<Element 'description' at 0x7f3b04d09b30>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Water_Table',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Sample_Depth': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Sample_Depth',
    id: 'Sample_Depth',
    helperText: '<Element 'description' at 0x7f3b04d09c70>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Sample_Depth',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Bottom_Of_Hole': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Bottom_Of_Hole',
    id: 'Bottom_Of_Hole',
    helperText: '<Element 'description' at 0x7f3b04d09db0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Bottom_Of_Hole',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Notes': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Notes',
    id: 'Notes',
    helperText: '<Element 'description' at 0x7f3b04d0f3b0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Notes',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Suffix':{
        'component-namespace': 'faims-custom', // this says what web component to use to render/acquire value from
        'component-name': 'Select',
        'type-returned': 'faims-core::String', // matches a type in the Project Model
        'component-parameters': {
                  fullWidth: true,
                  name: 'Suffix',
                  id: 'Suffix',
                  helperText: 'Suffix',
                  variant: 'outlined',
                  required: true,
                  select: true,
                  InputProps: {
                                      type: 'string',
                                    },
                  SelectProps: {
                                options: [
                                  
{
  value: '{AK}',
  label: '{AK}',
}
,
{
  value: '{AN}',
  label: '{AN}',
}
,
{
  value: '{CB}',
  label: '{CB}',
}
,
{
  value: '{CT}',
  label: '{CT}',
}

                                ],
                              },
                  InputLabelProps: {
                                      label: 'Suffix',
                                    },
                  FormHelperTextProps: {children: 'Some helper text'},
                },
        validationSchema: [['yup.string']],
        initialValue: '',
      }
,
'Observation_Type':{
        'component-namespace': 'faims-custom', // this says what web component to use to render/acquire value from
        'component-name': 'Select',
        'type-returned': 'faims-core::String', // matches a type in the Project Model
        'component-parameters': {
                  fullWidth: true,
                  name: 'Observation_Type',
                  id: 'Observation_Type',
                  helperText: 'Observation_Type',
                  variant: 'outlined',
                  required: true,
                  select: true,
                  InputProps: {
                                      type: 'string',
                                    },
                  SelectProps: {
                                options: [
                                  
{
  value: '{Sampling_Location}',
  label: '{Sampling_Location}',
}
,
{
  value: '{Observation_Only}',
  label: '{Observation_Only}',
}

                                ],
                              },
                  InputLabelProps: {
                                      label: 'Observation_Type',
                                    },
                  FormHelperTextProps: {children: 'Some helper text'},
                },
        validationSchema: [['yup.string']],
        initialValue: '',
      }
,
'SRID':{
        'component-namespace': 'faims-custom', // this says what web component to use to render/acquire value from
        'component-name': 'Select',
        'type-returned': 'faims-core::String', // matches a type in the Project Model
        'component-parameters': {
                  fullWidth: true,
                  name: 'SRID',
                  id: 'SRID',
                  helperText: 'SRID',
                  variant: 'outlined',
                  required: true,
                  select: true,
                  InputProps: {
                                      type: 'string',
                                    },
                  SelectProps: {
                                options: [
                                  
{
  value: '{28349}',
  label: '{28349}',
}
,
{
  value: '{28350}',
  label: '{28350}',
}
,
{
  value: '{28351}',
  label: '{28351}',
}
,
{
  value: '{28352}',
  label: '{28352}',
}
,
{
  value: '{28353}',
  label: '{28353}',
}
,
{
  value: '{28354}',
  label: '{28354}',
}
,
{
  value: '{28355}',
  label: '{28355}',
}
,
{
  value: '{28356}',
  label: '{28356}',
}

                                ],
                              },
                  InputLabelProps: {
                                      label: 'SRID',
                                    },
                  FormHelperTextProps: {children: 'Some helper text'},
                },
        validationSchema: [['yup.string']],
        initialValue: '',
      }
,
'Estimated_Angle': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Estimated_Angle',
    id: 'Estimated_Angle',
    helperText: '<Element 'description' at 0x7f3b04d16130>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Estimated_Angle',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Hole_Type':{
        'component-namespace': 'faims-custom', // this says what web component to use to render/acquire value from
        'component-name': 'Select',
        'type-returned': 'faims-core::String', // matches a type in the Project Model
        'component-parameters': {
                  fullWidth: true,
                  name: 'Hole_Type',
                  id: 'Hole_Type',
                  helperText: 'Hole_Type',
                  variant: 'outlined',
                  required: true,
                  select: true,
                  InputProps: {
                                      type: 'string',
                                    },
                  SelectProps: {
                                options: [
                                  
{
  value: '{Still_Bore__Bailed_}',
  label: '{Still_Bore__Bailed_}',
}
,
{
  value: '{Still_Well__Bailed_}',
  label: '{Still_Well__Bailed_}',
}
,
{
  value: '{Flowing_Bore}',
  label: '{Flowing_Bore}',
}
,
{
  value: '{Flowing_Well}',
  label: '{Flowing_Well}',
}
,
{
  value: '{Other}',
  label: '{Other}',
}

                                ],
                              },
                  InputLabelProps: {
                                      label: 'Hole_Type',
                                    },
                  FormHelperTextProps: {children: 'Some helper text'},
                },
        validationSchema: [['yup.string']],
        initialValue: '',
      }
,
'Hole_Lining':{
        'component-namespace': 'faims-custom', // this says what web component to use to render/acquire value from
        'component-name': 'Select',
        'type-returned': 'faims-core::String', // matches a type in the Project Model
        'component-parameters': {
                  fullWidth: true,
                  name: 'Hole_Lining',
                  id: 'Hole_Lining',
                  helperText: 'Hole_Lining',
                  variant: 'outlined',
                  required: true,
                  select: true,
                  InputProps: {
                                      type: 'string',
                                    },
                  SelectProps: {
                                options: [
                                  
{
  value: '{Metal}',
  label: '{Metal}',
}
,
{
  value: '{Rusty}',
  label: '{Rusty}',
}
,
{
  value: '{Poly_pipe_plastic}',
  label: '{Poly_pipe_plastic}',
}
,
{
  value: '{Cement}',
  label: '{Cement}',
}
,
{
  value: '{Wood}',
  label: '{Wood}',
}
,
{
  value: '{Dirt}',
  label: '{Dirt}',
}
,
{
  value: '{Other}',
  label: '{Other}',
}

                                ],
                              },
                  InputLabelProps: {
                                      label: 'Hole_Lining',
                                    },
                  FormHelperTextProps: {children: 'Some helper text'},
                },
        validationSchema: [['yup.string']],
        initialValue: '',
      }
,
'Hole_Open_Closed':{
        'component-namespace': 'faims-custom', // this says what web component to use to render/acquire value from
        'component-name': 'Select',
        'type-returned': 'faims-core::String', // matches a type in the Project Model
        'component-parameters': {
                  fullWidth: true,
                  name: 'Hole_Open_Closed',
                  id: 'Hole_Open_Closed',
                  helperText: 'Hole_Open_Closed',
                  variant: 'outlined',
                  required: true,
                  select: true,
                  InputProps: {
                                      type: 'string',
                                    },
                  SelectProps: {
                                options: [
                                  
{
  value: '{No_Observation}',
  label: '{No_Observation}',
}
,
{
  value: '{Open_uncovered}',
  label: '{Open_uncovered}',
}
,
{
  value: '{Closed_covered}',
  label: '{Closed_covered}',
}

                                ],
                              },
                  InputLabelProps: {
                                      label: 'Hole_Open_Closed',
                                    },
                  FormHelperTextProps: {children: 'Some helper text'},
                },
        validationSchema: [['yup.string']],
        initialValue: '',
      }
,
'Pipes_In_Hole':{
        'component-namespace': 'faims-custom', // this says what web component to use to render/acquire value from
        'component-name': 'Select',
        'type-returned': 'faims-core::String', // matches a type in the Project Model
        'component-parameters': {
                  fullWidth: true,
                  name: 'Pipes_In_Hole',
                  id: 'Pipes_In_Hole',
                  helperText: 'Pipes_In_Hole',
                  variant: 'outlined',
                  required: true,
                  select: true,
                  InputProps: {
                                      type: 'string',
                                    },
                  SelectProps: {
                                options: [
                                  
{
  value: '{Metal_Pipes}',
  label: '{Metal_Pipes}',
}
,
{
  value: '{Poly_Pipes}',
  label: '{Poly_Pipes}',
}
,
{
  value: '{Fibreglass_Pipes}',
  label: '{Fibreglass_Pipes}',
}
,
{
  value: '{No_pipes_clear}',
  label: '{No_pipes_clear}',
}
,
{
  value: '{Other}',
  label: '{Other}',
}

                                ],
                              },
                  InputLabelProps: {
                                      label: 'Pipes_In_Hole',
                                    },
                  FormHelperTextProps: {children: 'Some helper text'},
                },
        validationSchema: [['yup.string']],
        initialValue: '',
      }
,
'Hole_Angle':{
        'component-namespace': 'faims-custom', // this says what web component to use to render/acquire value from
        'component-name': 'Select',
        'type-returned': 'faims-core::String', // matches a type in the Project Model
        'component-parameters': {
                  fullWidth: true,
                  name: 'Hole_Angle',
                  id: 'Hole_Angle',
                  helperText: 'Hole_Angle',
                  variant: 'outlined',
                  required: true,
                  select: true,
                  InputProps: {
                                      type: 'string',
                                    },
                  SelectProps: {
                                options: [
                                  
{
  value: '{Vertical}',
  label: '{Vertical}',
}
,
{
  value: '{Angled}',
  label: '{Angled}',
}
,
{
  value: '{Other}',
  label: '{Other}',
}

                                ],
                              },
                  InputLabelProps: {
                                      label: 'Hole_Angle',
                                    },
                  FormHelperTextProps: {children: 'Some helper text'},
                },
        validationSchema: [['yup.string']],
        initialValue: '',
      }
,
'Outflow_Present':{
        'component-namespace': 'faims-custom', // this says what web component to use to render/acquire value from
        'component-name': 'Select',
        'type-returned': 'faims-core::String', // matches a type in the Project Model
        'component-parameters': {
                  fullWidth: true,
                  name: 'Outflow_Present',
                  id: 'Outflow_Present',
                  helperText: 'Outflow_Present',
                  variant: 'outlined',
                  required: true,
                  select: true,
                  InputProps: {
                                      type: 'string',
                                    },
                  SelectProps: {
                                options: [
                                  
{
  value: '{No_Observation}',
  label: '{No_Observation}',
}
,
{
  value: '{Yes}',
  label: '{Yes}',
}
,
{
  value: '{No}',
  label: '{No}',
}

                                ],
                              },
                  InputLabelProps: {
                                      label: 'Outflow_Present',
                                    },
                  FormHelperTextProps: {children: 'Some helper text'},
                },
        validationSchema: [['yup.string']],
        initialValue: '',
      }
,
'Sampling_Issues':{
        'component-namespace': 'faims-custom', // this says what web component to use to render/acquire value from
        'component-name': 'Select',
        'type-returned': 'faims-core::String', // matches a type in the Project Model
        'component-parameters': {
                  fullWidth: true,
                  name: 'Sampling_Issues',
                  id: 'Sampling_Issues',
                  helperText: 'Sampling_Issues',
                  variant: 'outlined',
                  required: true,
                  select: true,
                  InputProps: {
                                      type: 'string',
                                    },
                  SelectProps: {
                                options: [
                                  
{
  value: '{Sampled_from_outflow_of_tank}',
  label: '{Sampled_from_outflow_of_tank}',
}
,
{
  value: '{Bailed_from_a_flowing_windmill__access_issues__no_wind_etc__}',
  label: '{Bailed_from_a_flowing_windmill__access_issues__no_wind_etc__}',
}
,
{
  value: '{Pumped}',
  label: '{Pumped}',
}
,
{
  value: '{Other}',
  label: '{Other}',
}

                                ],
                              },
                  InputLabelProps: {
                                      label: 'Sampling_Issues',
                                    },
                  FormHelperTextProps: {children: 'Some helper text'},
                },
        validationSchema: [['yup.string']],
        initialValue: '',
      }
,
'Temperature': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Temperature',
    id: 'Temperature',
    helperText: '<Element 'description' at 0x7f3b04d16a90>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Temperature',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Conductivity': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Conductivity',
    id: 'Conductivity',
    helperText: '<Element 'description' at 0x7f3b04d16bd0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Conductivity',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Preferred_pH': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Preferred_pH',
    id: 'Preferred_pH',
    helperText: '<Element 'description' at 0x7f3b04d16d10>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Preferred_pH',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Preferred_Eh': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Preferred_Eh',
    id: 'Preferred_Eh',
    helperText: '<Element 'description' at 0x7f3b04d16e50>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Preferred_Eh',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Preferred_pH_Time': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Preferred_pH_Time',
    id: 'Preferred_pH_Time',
    helperText: '<Element 'description' at 0x7f3b04d1c040>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Preferred_pH_Time',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Preferred_Eh_Time': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Preferred_Eh_Time',
    id: 'Preferred_Eh_Time',
    helperText: '<Element 'description' at 0x7f3b04d1c1d0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Preferred_Eh_Time',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Timestamp': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Timestamp',
    id: 'Timestamp',
    helperText: '<Element 'description' at 0x7f3b04dc3e50>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Timestamp',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Sample_Prefix_1': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Sample_Prefix_1',
    id: 'Sample_Prefix_1',
    helperText: '<Element 'description' at 0x7f3b04d1c400>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Sample_Prefix_1',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Sample_Prefix_2': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Sample_Prefix_2',
    id: 'Sample_Prefix_2',
    helperText: '<Element 'description' at 0x7f3b04d1c540>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Sample_Prefix_2',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Sample_ID': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Sample_ID',
    id: 'Sample_ID',
    helperText: '<Element 'description' at 0x7f3b04d1c680>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Sample_ID',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Timestamp_Field': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Timestamp_Field',
    id: 'Timestamp_Field',
    helperText: '<Element 'description' at 0x7f3b04d1c950>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Timestamp_Field',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Vegetation_Sample_author': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Vegetation_Sample_author',
    id: 'Vegetation_Sample_author',
    helperText: '<Element 'description' at 0x7f3b04d1cae0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Vegetation_Sample_author',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Station_Deposit': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Station_Deposit',
    id: 'Station_Deposit',
    helperText: '<Element 'description' at 0x7f3b04d1cc20>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Station_Deposit',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Project': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Project',
    id: 'Project',
    helperText: '<Element 'description' at 0x7f3b04d1cd60>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Project',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Area': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Area',
    id: 'Area',
    helperText: '<Element 'description' at 0x7f3b04d1cea0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Area',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Vegetation_Species': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Vegetation_Species',
    id: 'Vegetation_Species',
    helperText: '<Element 'description' at 0x7f3b04d20590>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Vegetation_Species',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Latitude': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Latitude',
    id: 'Latitude',
    helperText: '<Element 'description' at 0x7f3b04d20d60>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Latitude',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Longitude': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Longitude',
    id: 'Longitude',
    helperText: '<Element 'description' at 0x7f3b04d20ea0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Longitude',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Northing': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Northing',
    id: 'Northing',
    helperText: '<Element 'description' at 0x7f3b04d24040>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Northing',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Easting': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Easting',
    id: 'Easting',
    helperText: '<Element 'description' at 0x7f3b04d24180>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Easting',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Accuracy': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Accuracy',
    id: 'Accuracy',
    helperText: '<Element 'description' at 0x7f3b04d242c0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Accuracy',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Elevation_Metres_above_Sea_Level': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Elevation_Metres_above_Sea_Level',
    id: 'Elevation_Metres_above_Sea_Level',
    helperText: '<Element 'description' at 0x7f3b04d24400>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Elevation_Metres_above_Sea_Level',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Vegetation_Height': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Vegetation_Height',
    id: 'Vegetation_Height',
    helperText: '<Element 'description' at 0x7f3b04d24590>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Vegetation_Height',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Vegetation_Width': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Vegetation_Width',
    id: 'Vegetation_Width',
    helperText: '<Element 'description' at 0x7f3b04d24720>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Vegetation_Width',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Notes': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Notes',
    id: 'Notes',
    helperText: '<Element 'description' at 0x7f3b04d2dd60>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Notes',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Observation_Type':{
        'component-namespace': 'faims-custom', // this says what web component to use to render/acquire value from
        'component-name': 'Select',
        'type-returned': 'faims-core::String', // matches a type in the Project Model
        'component-parameters': {
                  fullWidth: true,
                  name: 'Observation_Type',
                  id: 'Observation_Type',
                  helperText: 'Observation_Type',
                  variant: 'outlined',
                  required: true,
                  select: true,
                  InputProps: {
                                      type: 'string',
                                    },
                  SelectProps: {
                                options: [
                                  
{
  value: '{Sampling_Location}',
  label: '{Sampling_Location}',
}
,
{
  value: '{Observation_Only}',
  label: '{Observation_Only}',
}

                                ],
                              },
                  InputLabelProps: {
                                      label: 'Observation_Type',
                                    },
                  FormHelperTextProps: {children: 'Some helper text'},
                },
        validationSchema: [['yup.string']],
        initialValue: '',
      }
,
'SRID':{
        'component-namespace': 'faims-custom', // this says what web component to use to render/acquire value from
        'component-name': 'Select',
        'type-returned': 'faims-core::String', // matches a type in the Project Model
        'component-parameters': {
                  fullWidth: true,
                  name: 'SRID',
                  id: 'SRID',
                  helperText: 'SRID',
                  variant: 'outlined',
                  required: true,
                  select: true,
                  InputProps: {
                                      type: 'string',
                                    },
                  SelectProps: {
                                options: [
                                  
{
  value: '{28349}',
  label: '{28349}',
}
,
{
  value: '{28350}',
  label: '{28350}',
}
,
{
  value: '{28351}',
  label: '{28351}',
}
,
{
  value: '{28352}',
  label: '{28352}',
}
,
{
  value: '{28353}',
  label: '{28353}',
}
,
{
  value: '{28354}',
  label: '{28354}',
}
,
{
  value: '{28355}',
  label: '{28355}',
}
,
{
  value: '{28356}',
  label: '{28356}',
}

                                ],
                              },
                  InputLabelProps: {
                                      label: 'SRID',
                                    },
                  FormHelperTextProps: {children: 'Some helper text'},
                },
        validationSchema: [['yup.string']],
        initialValue: '',
      }
,
'Landform':{
        'component-namespace': 'faims-custom', // this says what web component to use to render/acquire value from
        'component-name': 'Select',
        'type-returned': 'faims-core::String', // matches a type in the Project Model
        'component-parameters': {
                  fullWidth: true,
                  name: 'Landform',
                  id: 'Landform',
                  helperText: 'Landform',
                  variant: 'outlined',
                  required: true,
                  select: true,
                  InputProps: {
                                      type: 'string',
                                    },
                  SelectProps: {
                                options: [
                                  
{
  value: '{Alluvial_Landforms}',
  label: '{Alluvial_Landforms}',
}
,
{
  value: '{Dune_Field}',
  label: '{Dune_Field}',
}
,
{
  value: '{Fan}',
  label: '{Fan}',
}
,
{
  value: '{Plain}',
  label: '{Plain}',
}
,
{
  value: '{Glacial_Landforms}',
  label: '{Glacial_Landforms}',
}
,
{
  value: '{Delta}',
  label: '{Delta}',
}
,
{
  value: '{Coastal_Lands}',
  label: '{Coastal_Lands}',
}
,
{
  value: '{Erosional_Landforms}',
  label: '{Erosional_Landforms}',
}
,
{
  value: '{Karst}',
  label: '{Karst}',
}
,
{
  value: '{Plateau}',
  label: '{Plateau}',
}
,
{
  value: '{Volcanic_Landform}',
  label: '{Volcanic_Landform}',
}
,
{
  value: '{Made_Land}',
  label: '{Made_Land}',
}
,
{
  value: '{Meteor_Crater}',
  label: '{Meteor_Crater}',
}
,
{
  value: '{Other}',
  label: '{Other}',
}

                                ],
                              },
                  InputLabelProps: {
                                      label: 'Landform',
                                    },
                  FormHelperTextProps: {children: 'Some helper text'},
                },
        validationSchema: [['yup.string']],
        initialValue: '',
      }
,
'Timestamp': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Timestamp',
    id: 'Timestamp',
    helperText: '<Element 'description' at 0x7f3b04d1c810>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Timestamp',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Sample_Prefix_1': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Sample_Prefix_1',
    id: 'Sample_Prefix_1',
    helperText: '<Element 'description' at 0x7f3b04d31220>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Sample_Prefix_1',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Sample_Prefix_2': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Sample_Prefix_2',
    id: 'Sample_Prefix_2',
    helperText: '<Element 'description' at 0x7f3b04d31360>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Sample_Prefix_2',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Sample_ID': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Sample_ID',
    id: 'Sample_ID',
    helperText: '<Element 'description' at 0x7f3b04d314a0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Sample_ID',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Timestamp_Field': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Timestamp_Field',
    id: 'Timestamp_Field',
    helperText: '<Element 'description' at 0x7f3b04d31ae0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Timestamp_Field',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Soil_Sample_author': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Soil_Sample_author',
    id: 'Soil_Sample_author',
    helperText: '<Element 'description' at 0x7f3b04d31c70>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Soil_Sample_author',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Station_Deposit': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Station_Deposit',
    id: 'Station_Deposit',
    helperText: '<Element 'description' at 0x7f3b04d31db0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Station_Deposit',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Project': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Project',
    id: 'Project',
    helperText: '<Element 'description' at 0x7f3b04d31ef0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Project',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Area': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Area',
    id: 'Area',
    helperText: '<Element 'description' at 0x7f3b04d36090>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Area',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Latitude': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Latitude',
    id: 'Latitude',
    helperText: '<Element 'description' at 0x7f3b04d36d60>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Latitude',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Longitude': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Longitude',
    id: 'Longitude',
    helperText: '<Element 'description' at 0x7f3b04d36ea0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Longitude',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Northing': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Northing',
    id: 'Northing',
    helperText: '<Element 'description' at 0x7f3b04d3a040>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Northing',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Easting': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Easting',
    id: 'Easting',
    helperText: '<Element 'description' at 0x7f3b04d3a180>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Easting',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Accuracy': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Accuracy',
    id: 'Accuracy',
    helperText: '<Element 'description' at 0x7f3b04d3a2c0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Accuracy',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Elevation_Metres_above_Sea_Level': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Elevation_Metres_above_Sea_Level',
    id: 'Elevation_Metres_above_Sea_Level',
    helperText: '<Element 'description' at 0x7f3b04d3a400>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Elevation_Metres_above_Sea_Level',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Depth': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Depth',
    id: 'Depth',
    helperText: '<Element 'description' at 0x7f3b04d3a540>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Depth',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Colour': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Colour',
    id: 'Colour',
    helperText: '<Element 'description' at 0x7f3b04d3a680>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Colour',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Vegetation': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Vegetation',
    id: 'Vegetation',
    helperText: '<Element 'description' at 0x7f3b04cd4770>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Vegetation',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Notes': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Notes',
    id: 'Notes',
    helperText: '<Element 'description' at 0x7f3b04cd48b0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Notes',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Suffix':{
        'component-namespace': 'faims-custom', // this says what web component to use to render/acquire value from
        'component-name': 'Select',
        'type-returned': 'faims-core::String', // matches a type in the Project Model
        'component-parameters': {
                  fullWidth: true,
                  name: 'Suffix',
                  id: 'Suffix',
                  helperText: 'Suffix',
                  variant: 'outlined',
                  required: true,
                  select: true,
                  InputProps: {
                                      type: 'string',
                                    },
                  SelectProps: {
                                options: [
                                  
{
  value: '{A}',
  label: '{A}',
}
,
{
  value: '{B}',
  label: '{B}',
}

                                ],
                              },
                  InputLabelProps: {
                                      label: 'Suffix',
                                    },
                  FormHelperTextProps: {children: 'Some helper text'},
                },
        validationSchema: [['yup.string']],
        initialValue: '',
      }
,
'Observation_Type':{
        'component-namespace': 'faims-custom', // this says what web component to use to render/acquire value from
        'component-name': 'Select',
        'type-returned': 'faims-core::String', // matches a type in the Project Model
        'component-parameters': {
                  fullWidth: true,
                  name: 'Observation_Type',
                  id: 'Observation_Type',
                  helperText: 'Observation_Type',
                  variant: 'outlined',
                  required: true,
                  select: true,
                  InputProps: {
                                      type: 'string',
                                    },
                  SelectProps: {
                                options: [
                                  
{
  value: '{Sampling_Location}',
  label: '{Sampling_Location}',
}
,
{
  value: '{Observation_Only}',
  label: '{Observation_Only}',
}

                                ],
                              },
                  InputLabelProps: {
                                      label: 'Observation_Type',
                                    },
                  FormHelperTextProps: {children: 'Some helper text'},
                },
        validationSchema: [['yup.string']],
        initialValue: '',
      }
,
'SRID':{
        'component-namespace': 'faims-custom', // this says what web component to use to render/acquire value from
        'component-name': 'Select',
        'type-returned': 'faims-core::String', // matches a type in the Project Model
        'component-parameters': {
                  fullWidth: true,
                  name: 'SRID',
                  id: 'SRID',
                  helperText: 'SRID',
                  variant: 'outlined',
                  required: true,
                  select: true,
                  InputProps: {
                                      type: 'string',
                                    },
                  SelectProps: {
                                options: [
                                  
{
  value: '{28349}',
  label: '{28349}',
}
,
{
  value: '{28350}',
  label: '{28350}',
}
,
{
  value: '{28351}',
  label: '{28351}',
}
,
{
  value: '{28352}',
  label: '{28352}',
}
,
{
  value: '{28353}',
  label: '{28353}',
}
,
{
  value: '{28354}',
  label: '{28354}',
}
,
{
  value: '{28355}',
  label: '{28355}',
}
,
{
  value: '{28356}',
  label: '{28356}',
}

                                ],
                              },
                  InputLabelProps: {
                                      label: 'SRID',
                                    },
                  FormHelperTextProps: {children: 'Some helper text'},
                },
        validationSchema: [['yup.string']],
        initialValue: '',
      }
,
'Lag':{
        'component-namespace': 'faims-custom', // this says what web component to use to render/acquire value from
        'component-name': 'Select',
        'type-returned': 'faims-core::String', // matches a type in the Project Model
        'component-parameters': {
                  fullWidth: true,
                  name: 'Lag',
                  id: 'Lag',
                  helperText: 'Lag',
                  variant: 'outlined',
                  required: true,
                  select: true,
                  InputProps: {
                                      type: 'string',
                                    },
                  SelectProps: {
                                options: [
                                  
{
  value: '{No_Observation}',
  label: '{No_Observation}',
}
,
{
  value: '{Yes}',
  label: '{Yes}',
}
,
{
  value: '{No}',
  label: '{No}',
}

                                ],
                              },
                  InputLabelProps: {
                                      label: 'Lag',
                                    },
                  FormHelperTextProps: {children: 'Some helper text'},
                },
        validationSchema: [['yup.string']],
        initialValue: '',
      }
,
'Geology':{
        'component-namespace': 'faims-custom', // this says what web component to use to render/acquire value from
        'component-name': 'Select',
        'type-returned': 'faims-core::String', // matches a type in the Project Model
        'component-parameters': {
                  fullWidth: true,
                  name: 'Geology',
                  id: 'Geology',
                  helperText: 'Geology',
                  variant: 'outlined',
                  required: true,
                  select: true,
                  InputProps: {
                                      type: 'string',
                                    },
                  SelectProps: {
                                options: [
                                  
{
  value: '{Sedimentary}',
  label: '{Sedimentary}',
}
,
{
  value: '{Metamorphic}',
  label: '{Metamorphic}',
}
,
{
  value: '{Igneous}',
  label: '{Igneous}',
}
,
{
  value: '{Other}',
  label: '{Other}',
}

                                ],
                              },
                  InputLabelProps: {
                                      label: 'Geology',
                                    },
                  FormHelperTextProps: {children: 'Some helper text'},
                },
        validationSchema: [['yup.string']],
        initialValue: '',
      }
,
'Drainage':{
        'component-namespace': 'faims-custom', // this says what web component to use to render/acquire value from
        'component-name': 'Select',
        'type-returned': 'faims-core::String', // matches a type in the Project Model
        'component-parameters': {
                  fullWidth: true,
                  name: 'Drainage',
                  id: 'Drainage',
                  helperText: 'Drainage',
                  variant: 'outlined',
                  required: true,
                  select: true,
                  InputProps: {
                                      type: 'string',
                                    },
                  SelectProps: {
                                options: [
                                  
{
  value: '{No_Observation}',
  label: '{No_Observation}',
}
,
{
  value: '{Yes}',
  label: '{Yes}',
}
,
{
  value: '{No}',
  label: '{No}',
}

                                ],
                              },
                  InputLabelProps: {
                                      label: 'Drainage',
                                    },
                  FormHelperTextProps: {children: 'Some helper text'},
                },
        validationSchema: [['yup.string']],
        initialValue: '',
      }
,
'Contamination':{
        'component-namespace': 'faims-custom', // this says what web component to use to render/acquire value from
        'component-name': 'Select',
        'type-returned': 'faims-core::String', // matches a type in the Project Model
        'component-parameters': {
                  fullWidth: true,
                  name: 'Contamination',
                  id: 'Contamination',
                  helperText: 'Contamination',
                  variant: 'outlined',
                  required: true,
                  select: true,
                  InputProps: {
                                      type: 'string',
                                    },
                  SelectProps: {
                                options: [
                                  
{
  value: '{No_Observation}',
  label: '{No_Observation}',
}
,
{
  value: '{Yes}',
  label: '{Yes}',
}
,
{
  value: '{No}',
  label: '{No}',
}

                                ],
                              },
                  InputLabelProps: {
                                      label: 'Contamination',
                                    },
                  FormHelperTextProps: {children: 'Some helper text'},
                },
        validationSchema: [['yup.string']],
        initialValue: '',
      }
,
'Regolith_Type':{
        'component-namespace': 'faims-custom', // this says what web component to use to render/acquire value from
        'component-name': 'Select',
        'type-returned': 'faims-core::String', // matches a type in the Project Model
        'component-parameters': {
                  fullWidth: true,
                  name: 'Regolith_Type',
                  id: 'Regolith_Type',
                  helperText: 'Regolith_Type',
                  variant: 'outlined',
                  required: true,
                  select: true,
                  InputProps: {
                                      type: 'string',
                                    },
                  SelectProps: {
                                options: [
                                  
{
  value: '{Transported_Regolith}',
  label: '{Transported_Regolith}',
}
,
{
  value: '{In_Situ_Regolith}',
  label: '{In_Situ_Regolith}',
}
,
{
  value: '{Other}',
  label: '{Other}',
}

                                ],
                              },
                  InputLabelProps: {
                                      label: 'Regolith_Type',
                                    },
                  FormHelperTextProps: {children: 'Some helper text'},
                },
        validationSchema: [['yup.string']],
        initialValue: '',
      }
,
'Landform':{
        'component-namespace': 'faims-custom', // this says what web component to use to render/acquire value from
        'component-name': 'Select',
        'type-returned': 'faims-core::String', // matches a type in the Project Model
        'component-parameters': {
                  fullWidth: true,
                  name: 'Landform',
                  id: 'Landform',
                  helperText: 'Landform',
                  variant: 'outlined',
                  required: true,
                  select: true,
                  InputProps: {
                                      type: 'string',
                                    },
                  SelectProps: {
                                options: [
                                  
{
  value: '{Alluvial_Landforms}',
  label: '{Alluvial_Landforms}',
}
,
{
  value: '{Dune_Field}',
  label: '{Dune_Field}',
}
,
{
  value: '{Fan}',
  label: '{Fan}',
}
,
{
  value: '{Plain}',
  label: '{Plain}',
}
,
{
  value: '{Glacial_Landforms}',
  label: '{Glacial_Landforms}',
}
,
{
  value: '{Delta}',
  label: '{Delta}',
}
,
{
  value: '{Coastal_Lands}',
  label: '{Coastal_Lands}',
}
,
{
  value: '{Erosional_Landforms}',
  label: '{Erosional_Landforms}',
}
,
{
  value: '{Karst}',
  label: '{Karst}',
}
,
{
  value: '{Plateau}',
  label: '{Plateau}',
}
,
{
  value: '{Volcanic_Landform}',
  label: '{Volcanic_Landform}',
}
,
{
  value: '{Made_Land}',
  label: '{Made_Land}',
}
,
{
  value: '{Meteor_Crater}',
  label: '{Meteor_Crater}',
}
,
{
  value: '{Other}',
  label: '{Other}',
}

                                ],
                              },
                  InputLabelProps: {
                                      label: 'Landform',
                                    },
                  FormHelperTextProps: {children: 'Some helper text'},
                },
        validationSchema: [['yup.string']],
        initialValue: '',
      }
,
'Timestamp': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Timestamp',
    id: 'Timestamp',
    helperText: '<Element 'description' at 0x7f3b04d319a0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Timestamp',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Sample_Prefix_1': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Sample_Prefix_1',
    id: 'Sample_Prefix_1',
    helperText: '<Element 'description' at 0x7f3b04cd4d60>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Sample_Prefix_1',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Sample_Prefix_2': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Sample_Prefix_2',
    id: 'Sample_Prefix_2',
    helperText: '<Element 'description' at 0x7f3b04cd4ea0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Sample_Prefix_2',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Sample_ID': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Sample_ID',
    id: 'Sample_ID',
    helperText: '<Element 'description' at 0x7f3b04cd8040>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Sample_ID',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Timestamp_Field': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Timestamp_Field',
    id: 'Timestamp_Field',
    helperText: '<Element 'description' at 0x7f3b04cd8680>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Timestamp_Field',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Soil_Crust_Sample_author': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Soil_Crust_Sample_author',
    id: 'Soil_Crust_Sample_author',
    helperText: '<Element 'description' at 0x7f3b04cd8810>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Soil_Crust_Sample_author',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Station_Deposit': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Station_Deposit',
    id: 'Station_Deposit',
    helperText: '<Element 'description' at 0x7f3b04cd8950>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Station_Deposit',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Project': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Project',
    id: 'Project',
    helperText: '<Element 'description' at 0x7f3b04cd8a90>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Project',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Area': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Area',
    id: 'Area',
    helperText: '<Element 'description' at 0x7f3b04cd8bd0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Area',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Latitude': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Latitude',
    id: 'Latitude',
    helperText: '<Element 'description' at 0x7f3b04cde900>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Latitude',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Longitude': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Longitude',
    id: 'Longitude',
    helperText: '<Element 'description' at 0x7f3b04cdea40>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Longitude',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Northing': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Northing',
    id: 'Northing',
    helperText: '<Element 'description' at 0x7f3b04cdeb80>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Northing',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Easting': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Easting',
    id: 'Easting',
    helperText: '<Element 'description' at 0x7f3b04cdecc0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Easting',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Accuracy': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Accuracy',
    id: 'Accuracy',
    helperText: '<Element 'description' at 0x7f3b04cdee00>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Accuracy',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Elevation_Metres_above_Sea_Level': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Elevation_Metres_above_Sea_Level',
    id: 'Elevation_Metres_above_Sea_Level',
    helperText: '<Element 'description' at 0x7f3b04cdef40>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Elevation_Metres_above_Sea_Level',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Depth': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Depth',
    id: 'Depth',
    helperText: '<Element 'description' at 0x7f3b04ce20e0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Depth',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Colour': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Colour',
    id: 'Colour',
    helperText: '<Element 'description' at 0x7f3b04ce2220>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Colour',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Vegetation': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Vegetation',
    id: 'Vegetation',
    helperText: '<Element 'description' at 0x7f3b04c7c310>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Vegetation',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Notes': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Notes',
    id: 'Notes',
    helperText: '<Element 'description' at 0x7f3b04c7c450>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Notes',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Suffix':{
        'component-namespace': 'faims-custom', // this says what web component to use to render/acquire value from
        'component-name': 'Select',
        'type-returned': 'faims-core::String', // matches a type in the Project Model
        'component-parameters': {
                  fullWidth: true,
                  name: 'Suffix',
                  id: 'Suffix',
                  helperText: 'Suffix',
                  variant: 'outlined',
                  required: true,
                  select: true,
                  InputProps: {
                                      type: 'string',
                                    },
                  SelectProps: {
                                options: [
                                  
{
  value: '{A}',
  label: '{A}',
}
,
{
  value: '{B}',
  label: '{B}',
}

                                ],
                              },
                  InputLabelProps: {
                                      label: 'Suffix',
                                    },
                  FormHelperTextProps: {children: 'Some helper text'},
                },
        validationSchema: [['yup.string']],
        initialValue: '',
      }
,
'Observation_Type':{
        'component-namespace': 'faims-custom', // this says what web component to use to render/acquire value from
        'component-name': 'Select',
        'type-returned': 'faims-core::String', // matches a type in the Project Model
        'component-parameters': {
                  fullWidth: true,
                  name: 'Observation_Type',
                  id: 'Observation_Type',
                  helperText: 'Observation_Type',
                  variant: 'outlined',
                  required: true,
                  select: true,
                  InputProps: {
                                      type: 'string',
                                    },
                  SelectProps: {
                                options: [
                                  
{
  value: '{Sampling_Location}',
  label: '{Sampling_Location}',
}
,
{
  value: '{Observation_Only}',
  label: '{Observation_Only}',
}

                                ],
                              },
                  InputLabelProps: {
                                      label: 'Observation_Type',
                                    },
                  FormHelperTextProps: {children: 'Some helper text'},
                },
        validationSchema: [['yup.string']],
        initialValue: '',
      }
,
'SRID':{
        'component-namespace': 'faims-custom', // this says what web component to use to render/acquire value from
        'component-name': 'Select',
        'type-returned': 'faims-core::String', // matches a type in the Project Model
        'component-parameters': {
                  fullWidth: true,
                  name: 'SRID',
                  id: 'SRID',
                  helperText: 'SRID',
                  variant: 'outlined',
                  required: true,
                  select: true,
                  InputProps: {
                                      type: 'string',
                                    },
                  SelectProps: {
                                options: [
                                  
{
  value: '{28349}',
  label: '{28349}',
}
,
{
  value: '{28350}',
  label: '{28350}',
}
,
{
  value: '{28351}',
  label: '{28351}',
}
,
{
  value: '{28352}',
  label: '{28352}',
}
,
{
  value: '{28353}',
  label: '{28353}',
}
,
{
  value: '{28354}',
  label: '{28354}',
}
,
{
  value: '{28355}',
  label: '{28355}',
}
,
{
  value: '{28356}',
  label: '{28356}',
}

                                ],
                              },
                  InputLabelProps: {
                                      label: 'SRID',
                                    },
                  FormHelperTextProps: {children: 'Some helper text'},
                },
        validationSchema: [['yup.string']],
        initialValue: '',
      }
,
'Lag':{
        'component-namespace': 'faims-custom', // this says what web component to use to render/acquire value from
        'component-name': 'Select',
        'type-returned': 'faims-core::String', // matches a type in the Project Model
        'component-parameters': {
                  fullWidth: true,
                  name: 'Lag',
                  id: 'Lag',
                  helperText: 'Lag',
                  variant: 'outlined',
                  required: true,
                  select: true,
                  InputProps: {
                                      type: 'string',
                                    },
                  SelectProps: {
                                options: [
                                  
{
  value: '{No_Observation}',
  label: '{No_Observation}',
}
,
{
  value: '{Yes}',
  label: '{Yes}',
}
,
{
  value: '{No}',
  label: '{No}',
}

                                ],
                              },
                  InputLabelProps: {
                                      label: 'Lag',
                                    },
                  FormHelperTextProps: {children: 'Some helper text'},
                },
        validationSchema: [['yup.string']],
        initialValue: '',
      }
,
'Geology':{
        'component-namespace': 'faims-custom', // this says what web component to use to render/acquire value from
        'component-name': 'Select',
        'type-returned': 'faims-core::String', // matches a type in the Project Model
        'component-parameters': {
                  fullWidth: true,
                  name: 'Geology',
                  id: 'Geology',
                  helperText: 'Geology',
                  variant: 'outlined',
                  required: true,
                  select: true,
                  InputProps: {
                                      type: 'string',
                                    },
                  SelectProps: {
                                options: [
                                  
{
  value: '{Sedimentary}',
  label: '{Sedimentary}',
}
,
{
  value: '{Metamorphic}',
  label: '{Metamorphic}',
}
,
{
  value: '{Igneous}',
  label: '{Igneous}',
}
,
{
  value: '{Other}',
  label: '{Other}',
}

                                ],
                              },
                  InputLabelProps: {
                                      label: 'Geology',
                                    },
                  FormHelperTextProps: {children: 'Some helper text'},
                },
        validationSchema: [['yup.string']],
        initialValue: '',
      }
,
'Drainage':{
        'component-namespace': 'faims-custom', // this says what web component to use to render/acquire value from
        'component-name': 'Select',
        'type-returned': 'faims-core::String', // matches a type in the Project Model
        'component-parameters': {
                  fullWidth: true,
                  name: 'Drainage',
                  id: 'Drainage',
                  helperText: 'Drainage',
                  variant: 'outlined',
                  required: true,
                  select: true,
                  InputProps: {
                                      type: 'string',
                                    },
                  SelectProps: {
                                options: [
                                  
{
  value: '{No_Observation}',
  label: '{No_Observation}',
}
,
{
  value: '{Yes}',
  label: '{Yes}',
}
,
{
  value: '{No}',
  label: '{No}',
}

                                ],
                              },
                  InputLabelProps: {
                                      label: 'Drainage',
                                    },
                  FormHelperTextProps: {children: 'Some helper text'},
                },
        validationSchema: [['yup.string']],
        initialValue: '',
      }
,
'Contamination':{
        'component-namespace': 'faims-custom', // this says what web component to use to render/acquire value from
        'component-name': 'Select',
        'type-returned': 'faims-core::String', // matches a type in the Project Model
        'component-parameters': {
                  fullWidth: true,
                  name: 'Contamination',
                  id: 'Contamination',
                  helperText: 'Contamination',
                  variant: 'outlined',
                  required: true,
                  select: true,
                  InputProps: {
                                      type: 'string',
                                    },
                  SelectProps: {
                                options: [
                                  
{
  value: '{No_Observation}',
  label: '{No_Observation}',
}
,
{
  value: '{Yes}',
  label: '{Yes}',
}
,
{
  value: '{No}',
  label: '{No}',
}

                                ],
                              },
                  InputLabelProps: {
                                      label: 'Contamination',
                                    },
                  FormHelperTextProps: {children: 'Some helper text'},
                },
        validationSchema: [['yup.string']],
        initialValue: '',
      }
,
'Regolith_Type':{
        'component-namespace': 'faims-custom', // this says what web component to use to render/acquire value from
        'component-name': 'Select',
        'type-returned': 'faims-core::String', // matches a type in the Project Model
        'component-parameters': {
                  fullWidth: true,
                  name: 'Regolith_Type',
                  id: 'Regolith_Type',
                  helperText: 'Regolith_Type',
                  variant: 'outlined',
                  required: true,
                  select: true,
                  InputProps: {
                                      type: 'string',
                                    },
                  SelectProps: {
                                options: [
                                  
{
  value: '{Transported_Regolith}',
  label: '{Transported_Regolith}',
}
,
{
  value: '{In_Situ_Regolith}',
  label: '{In_Situ_Regolith}',
}
,
{
  value: '{Other}',
  label: '{Other}',
}

                                ],
                              },
                  InputLabelProps: {
                                      label: 'Regolith_Type',
                                    },
                  FormHelperTextProps: {children: 'Some helper text'},
                },
        validationSchema: [['yup.string']],
        initialValue: '',
      }
,
'Landform':{
        'component-namespace': 'faims-custom', // this says what web component to use to render/acquire value from
        'component-name': 'Select',
        'type-returned': 'faims-core::String', // matches a type in the Project Model
        'component-parameters': {
                  fullWidth: true,
                  name: 'Landform',
                  id: 'Landform',
                  helperText: 'Landform',
                  variant: 'outlined',
                  required: true,
                  select: true,
                  InputProps: {
                                      type: 'string',
                                    },
                  SelectProps: {
                                options: [
                                  
{
  value: '{Alluvial_Landforms}',
  label: '{Alluvial_Landforms}',
}
,
{
  value: '{Dune_Field}',
  label: '{Dune_Field}',
}
,
{
  value: '{Fan}',
  label: '{Fan}',
}
,
{
  value: '{Plain}',
  label: '{Plain}',
}
,
{
  value: '{Glacial_Landforms}',
  label: '{Glacial_Landforms}',
}
,
{
  value: '{Delta}',
  label: '{Delta}',
}
,
{
  value: '{Coastal_Lands}',
  label: '{Coastal_Lands}',
}
,
{
  value: '{Erosional_Landforms}',
  label: '{Erosional_Landforms}',
}
,
{
  value: '{Karst}',
  label: '{Karst}',
}
,
{
  value: '{Plateau}',
  label: '{Plateau}',
}
,
{
  value: '{Volcanic_Landform}',
  label: '{Volcanic_Landform}',
}
,
{
  value: '{Made_Land}',
  label: '{Made_Land}',
}
,
{
  value: '{Meteor_Crater}',
  label: '{Meteor_Crater}',
}
,
{
  value: '{Other}',
  label: '{Other}',
}

                                ],
                              },
                  InputLabelProps: {
                                      label: 'Landform',
                                    },
                  FormHelperTextProps: {children: 'Some helper text'},
                },
        validationSchema: [['yup.string']],
        initialValue: '',
      }
,
'Timestamp': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Timestamp',
    id: 'Timestamp',
    helperText: '<Element 'description' at 0x7f3b04cd8540>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Timestamp',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Sample_Prefix_1': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Sample_Prefix_1',
    id: 'Sample_Prefix_1',
    helperText: '<Element 'description' at 0x7f3b04c7c8b0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Sample_Prefix_1',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Sample_Prefix_2': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Sample_Prefix_2',
    id: 'Sample_Prefix_2',
    helperText: '<Element 'description' at 0x7f3b04c7c9f0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Sample_Prefix_2',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Sample_ID': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Sample_ID',
    id: 'Sample_ID',
    helperText: '<Element 'description' at 0x7f3b04c7cb30>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Sample_ID',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Timestamp_Field': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Timestamp_Field',
    id: 'Timestamp_Field',
    helperText: '<Element 'description' at 0x7f3b04c7ce00>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Timestamp_Field',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Rock_Sample_author': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Rock_Sample_author',
    id: 'Rock_Sample_author',
    helperText: '<Element 'description' at 0x7f3b04c7cf90>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Rock_Sample_author',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Station_Deposit': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Station_Deposit',
    id: 'Station_Deposit',
    helperText: '<Element 'description' at 0x7f3b04c81130>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Station_Deposit',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Project': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Project',
    id: 'Project',
    helperText: '<Element 'description' at 0x7f3b04c81270>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Project',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Area': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Area',
    id: 'Area',
    helperText: '<Element 'description' at 0x7f3b04c813b0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Area',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Location_Number': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Location_Number',
    id: 'Location_Number',
    helperText: '<Element 'description' at 0x7f3b04c814f0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Location_Number',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Core_ID': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Core_ID',
    id: 'Core_ID',
    helperText: '<Element 'description' at 0x7f3b04c819f0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Core_ID',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Latitude': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Latitude',
    id: 'Latitude',
    helperText: '<Element 'description' at 0x7f3b04c85220>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Latitude',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Longitude': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Longitude',
    id: 'Longitude',
    helperText: '<Element 'description' at 0x7f3b04c85360>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Longitude',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Northing': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Northing',
    id: 'Northing',
    helperText: '<Element 'description' at 0x7f3b04c854a0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Northing',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Easting': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Easting',
    id: 'Easting',
    helperText: '<Element 'description' at 0x7f3b04c855e0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Easting',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Accuracy': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Accuracy',
    id: 'Accuracy',
    helperText: '<Element 'description' at 0x7f3b04c85720>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Accuracy',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Elevation_Metres_above_Sea_Level': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Elevation_Metres_above_Sea_Level',
    id: 'Elevation_Metres_above_Sea_Level',
    helperText: '<Element 'description' at 0x7f3b04c85860>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Elevation_Metres_above_Sea_Level',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Observation_Type':{
        'component-namespace': 'faims-custom', // this says what web component to use to render/acquire value from
        'component-name': 'Select',
        'type-returned': 'faims-core::String', // matches a type in the Project Model
        'component-parameters': {
                  fullWidth: true,
                  name: 'Observation_Type',
                  id: 'Observation_Type',
                  helperText: 'Observation_Type',
                  variant: 'outlined',
                  required: true,
                  select: true,
                  InputProps: {
                                      type: 'string',
                                    },
                  SelectProps: {
                                options: [
                                  
{
  value: '{Sampling_Location}',
  label: '{Sampling_Location}',
}
,
{
  value: '{Observation_Only}',
  label: '{Observation_Only}',
}

                                ],
                              },
                  InputLabelProps: {
                                      label: 'Observation_Type',
                                    },
                  FormHelperTextProps: {children: 'Some helper text'},
                },
        validationSchema: [['yup.string']],
        initialValue: '',
      }
,
'SRID':{
        'component-namespace': 'faims-custom', // this says what web component to use to render/acquire value from
        'component-name': 'Select',
        'type-returned': 'faims-core::String', // matches a type in the Project Model
        'component-parameters': {
                  fullWidth: true,
                  name: 'SRID',
                  id: 'SRID',
                  helperText: 'SRID',
                  variant: 'outlined',
                  required: true,
                  select: true,
                  InputProps: {
                                      type: 'string',
                                    },
                  SelectProps: {
                                options: [
                                  
{
  value: '{28349}',
  label: '{28349}',
}
,
{
  value: '{28350}',
  label: '{28350}',
}
,
{
  value: '{28351}',
  label: '{28351}',
}
,
{
  value: '{28352}',
  label: '{28352}',
}
,
{
  value: '{28353}',
  label: '{28353}',
}
,
{
  value: '{28354}',
  label: '{28354}',
}
,
{
  value: '{28355}',
  label: '{28355}',
}
,
{
  value: '{28356}',
  label: '{28356}',
}

                                ],
                              },
                  InputLabelProps: {
                                      label: 'SRID',
                                    },
                  FormHelperTextProps: {children: 'Some helper text'},
                },
        validationSchema: [['yup.string']],
        initialValue: '',
      }
,
'Bedding_Strike': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Bedding_Strike',
    id: 'Bedding_Strike',
    helperText: '<Element 'description' at 0x7f3b04c859a0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Bedding_Strike',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Cleavage_Strike': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Cleavage_Strike',
    id: 'Cleavage_Strike',
    helperText: '<Element 'description' at 0x7f3b04c85ae0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Cleavage_Strike',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Foliation_Strike': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Foliation_Strike',
    id: 'Foliation_Strike',
    helperText: '<Element 'description' at 0x7f3b04c85c70>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Foliation_Strike',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Veins_1_Strike': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Veins_1_Strike',
    id: 'Veins_1_Strike',
    helperText: '<Element 'description' at 0x7f3b04c85db0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Veins_1_Strike',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Veins_2_Strike': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Veins_2_Strike',
    id: 'Veins_2_Strike',
    helperText: '<Element 'description' at 0x7f3b04c85ef0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Veins_2_Strike',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Bedding_Dip': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Bedding_Dip',
    id: 'Bedding_Dip',
    helperText: '<Element 'description' at 0x7f3b04c8c090>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Bedding_Dip',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Cleavage_Dip': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Cleavage_Dip',
    id: 'Cleavage_Dip',
    helperText: '<Element 'description' at 0x7f3b04c8c1d0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Cleavage_Dip',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Foliation_Dip': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Foliation_Dip',
    id: 'Foliation_Dip',
    helperText: '<Element 'description' at 0x7f3b04c8c310>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Foliation_Dip',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Veins_1_Dip': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Veins_1_Dip',
    id: 'Veins_1_Dip',
    helperText: '<Element 'description' at 0x7f3b04c8c450>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Veins_1_Dip',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Veins_2_Dip': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Veins_2_Dip',
    id: 'Veins_2_Dip',
    helperText: '<Element 'description' at 0x7f3b04c8c590>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Veins_2_Dip',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Other_Structural_Measurements': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Other_Structural_Measurements',
    id: 'Other_Structural_Measurements',
    helperText: '<Element 'description' at 0x7f3b04c8c720>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Other_Structural_Measurements',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Fold_Axis_Plunge': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Fold_Axis_Plunge',
    id: 'Fold_Axis_Plunge',
    helperText: '<Element 'description' at 0x7f3b04c8c8b0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Fold_Axis_Plunge',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Mineral_Lineation_Plunge': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Mineral_Lineation_Plunge',
    id: 'Mineral_Lineation_Plunge',
    helperText: '<Element 'description' at 0x7f3b04c8ca40>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Mineral_Lineation_Plunge',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Stretching_Lineation_Plunge': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Stretching_Lineation_Plunge',
    id: 'Stretching_Lineation_Plunge',
    helperText: '<Element 'description' at 0x7f3b04c8cbd0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Stretching_Lineation_Plunge',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Fold_Axis_Azimuth': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Fold_Axis_Azimuth',
    id: 'Fold_Axis_Azimuth',
    helperText: '<Element 'description' at 0x7f3b04c8cd60>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Fold_Axis_Azimuth',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Mineral_Lineation_Azimuth': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Mineral_Lineation_Azimuth',
    id: 'Mineral_Lineation_Azimuth',
    helperText: '<Element 'description' at 0x7f3b04c8cef0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Mineral_Lineation_Azimuth',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Stretching_Lineation_Azimuth': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Stretching_Lineation_Azimuth',
    id: 'Stretching_Lineation_Azimuth',
    helperText: '<Element 'description' at 0x7f3b04c900e0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Stretching_Lineation_Azimuth',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Other_Lineation': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Other_Lineation',
    id: 'Other_Lineation',
    helperText: '<Element 'description' at 0x7f3b04c90220>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Other_Lineation',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Other_Lithological_Descriptors': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Other_Lithological_Descriptors',
    id: 'Other_Lithological_Descriptors',
    helperText: '<Element 'description' at 0x7f3b04c9f090>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Other_Lithological_Descriptors',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Stratigraphic_Unit': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Stratigraphic_Unit',
    id: 'Stratigraphic_Unit',
    helperText: '<Element 'description' at 0x7f3b04c9f220>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Stratigraphic_Unit',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Large-Scale_Structure': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Large-Scale_Structure',
    id: 'Large-Scale_Structure',
    helperText: '<Element 'description' at 0x7f3b04c9f3b0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Large-Scale_Structure',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Alteration': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Alteration',
    id: 'Alteration',
    helperText: '<Element 'description' at 0x7f3b04c9f4f0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Alteration',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Veining': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Veining',
    id: 'Veining',
    helperText: '<Element 'description' at 0x7f3b04c9f630>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Veining',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Notes': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Notes',
    id: 'Notes',
    helperText: '<Element 'description' at 0x7f3b04c9f770>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Notes',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Lithology':{
        'component-namespace': 'faims-custom', // this says what web component to use to render/acquire value from
        'component-name': 'Select',
        'type-returned': 'faims-core::String', // matches a type in the Project Model
        'component-parameters': {
                  fullWidth: true,
                  name: 'Lithology',
                  id: 'Lithology',
                  helperText: 'Lithology',
                  variant: 'outlined',
                  required: true,
                  select: true,
                  InputProps: {
                                      type: 'string',
                                    },
                  SelectProps: {
                                options: [
                                  
{
  value: '{Sedimentary}',
  label: '{Sedimentary}',
}
,
{
  value: '{Metamorphic}',
  label: '{Metamorphic}',
}
,
{
  value: '{Igneous}',
  label: '{Igneous}',
}
,
{
  value: '{Other}',
  label: '{Other}',
}

                                ],
                              },
                  InputLabelProps: {
                                      label: 'Lithology',
                                    },
                  FormHelperTextProps: {children: 'Some helper text'},
                },
        validationSchema: [['yup.string']],
        initialValue: '',
      }
,
'Inclusion_Size':{
        'component-namespace': 'faims-custom', // this says what web component to use to render/acquire value from
        'component-name': 'Select',
        'type-returned': 'faims-core::String', // matches a type in the Project Model
        'component-parameters': {
                  fullWidth: true,
                  name: 'Inclusion_Size',
                  id: 'Inclusion_Size',
                  helperText: 'Inclusion_Size',
                  variant: 'outlined',
                  required: true,
                  select: true,
                  InputProps: {
                                      type: 'string',
                                    },
                  SelectProps: {
                                options: [
                                  
{
  value: '{Fine}',
  label: '{Fine}',
}
,
{
  value: '{Medium}',
  label: '{Medium}',
}
,
{
  value: '{Coarse}',
  label: '{Coarse}',
}
,
{
  value: '{Other}',
  label: '{Other}',
}

                                ],
                              },
                  InputLabelProps: {
                                      label: 'Inclusion_Size',
                                    },
                  FormHelperTextProps: {children: 'Some helper text'},
                },
        validationSchema: [['yup.string']],
        initialValue: '',
      }
,
'Grain_Size':{
        'component-namespace': 'faims-custom', // this says what web component to use to render/acquire value from
        'component-name': 'Select',
        'type-returned': 'faims-core::String', // matches a type in the Project Model
        'component-parameters': {
                  fullWidth: true,
                  name: 'Grain_Size',
                  id: 'Grain_Size',
                  helperText: 'Grain_Size',
                  variant: 'outlined',
                  required: true,
                  select: true,
                  InputProps: {
                                      type: 'string',
                                    },
                  SelectProps: {
                                options: [
                                  
{
  value: '{Fine}',
  label: '{Fine}',
}
,
{
  value: '{Medium}',
  label: '{Medium}',
}
,
{
  value: '{Coarse}',
  label: '{Coarse}',
}
,
{
  value: '{Other}',
  label: '{Other}',
}

                                ],
                              },
                  InputLabelProps: {
                                      label: 'Grain_Size',
                                    },
                  FormHelperTextProps: {children: 'Some helper text'},
                },
        validationSchema: [['yup.string']],
        initialValue: '',
      }
,
'Sorting':{
        'component-namespace': 'faims-custom', // this says what web component to use to render/acquire value from
        'component-name': 'Select',
        'type-returned': 'faims-core::String', // matches a type in the Project Model
        'component-parameters': {
                  fullWidth: true,
                  name: 'Sorting',
                  id: 'Sorting',
                  helperText: 'Sorting',
                  variant: 'outlined',
                  required: true,
                  select: true,
                  InputProps: {
                                      type: 'string',
                                    },
                  SelectProps: {
                                options: [
                                  
{
  value: '{Poor}',
  label: '{Poor}',
}
,
{
  value: '{Moderate}',
  label: '{Moderate}',
}
,
{
  value: '{Well_Sorted}',
  label: '{Well_Sorted}',
}
,
{
  value: '{Other}',
  label: '{Other}',
}

                                ],
                              },
                  InputLabelProps: {
                                      label: 'Sorting',
                                    },
                  FormHelperTextProps: {children: 'Some helper text'},
                },
        validationSchema: [['yup.string']],
        initialValue: '',
      }
,
'Timestamp': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Timestamp',
    id: 'Timestamp',
    helperText: '<Element 'description' at 0x7f3b04c7ccc0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Timestamp',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'pH': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'pH',
    id: 'pH',
    helperText: '<Element 'description' at 0x7f3b04c9fbd0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'pH',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Time': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Time',
    id: 'Time',
    helperText: '<Element 'description' at 0x7f3b04c9fd10>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Time',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Preferred': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Preferred',
    id: 'Preferred',
    helperText: '<Element 'description' at 0x7f3b04c9fe50>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Preferred',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Eh': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Eh',
    id: 'Eh',
    helperText: '<Element 'description' at 0x7f3b04ca3090>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Eh',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Time': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Time',
    id: 'Time',
    helperText: '<Element 'description' at 0x7f3b04ca31d0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Time',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Preferred': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Preferred',
    id: 'Preferred',
    helperText: '<Element 'description' at 0x7f3b04ca3310>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Preferred',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Photo_ID': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Photo_ID',
    id: 'Photo_ID',
    helperText: '<Element 'description' at 0x7f3b04ca34f0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Photo_ID',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Photolog_timestamp': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Photolog_timestamp',
    id: 'Photolog_timestamp',
    helperText: '<Element 'description' at 0x7f3b04ca3680>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Photolog_timestamp',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Photo_Note': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Photo_Note',
    id: 'Photo_Note',
    helperText: '<Element 'description' at 0x7f3b04ca37c0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Photo_Note',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Label': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Label',
    id: 'Label',
    helperText: '<Element 'description' at 0x7f3b04ca39a0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Label',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'Note': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'Note',
    id: 'Note',
    helperText: '<Element 'description' at 0x7f3b04ca3ae0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'Note',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}

    },
    views:{
      
'Water_Sample/Basic_Info':{
  fields:[
'Sample_Prefix_1',
'Sample_Prefix_2',
'Sample_ID',
'Timestamp_Field',
'Water_Sample_author',
'Station_Deposit',
'Project',
'Area',
'Site_Name',
'Latitude',
'Longitude',
'Northing',
'Easting',
'Accuracy',
'Elevation_Metres_above_Sea_Level',
'Water_Table',
'Sample_Depth',
'Bottom_Of_Hole',
'Notes',
'Suffix',
'Observation_Type',
'SRID']
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'Water_Sample/Codes':{
  fields:[
'Estimated_Angle',
'Hole_Type',
'Hole_Lining',
'Hole_Open_Closed',
'Pipes_In_Hole',
'Hole_Angle',
'Outflow_Present',
'Sampling_Issues']
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'Water_Sample/pH_Eh':{
  fields:[
'Temperature',
'Conductivity',
'Preferred_pH',
'Preferred_Eh']
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'Water_Sample/Photolog':{
  fields:[]
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'Water_Sample/Map':{
  fields:[]
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'Water_Sample/Hidden':{
  fields:[
'Preferred_pH_Time',
'Preferred_Eh_Time']
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'Water_Sample/Vars':{
  fields:[
'Timestamp']
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'Vegetation_Sample/Basic_Info':{
  fields:[
'Sample_Prefix_1',
'Sample_Prefix_2',
'Sample_ID',
'Timestamp_Field',
'Vegetation_Sample_author',
'Station_Deposit',
'Project',
'Area',
'Vegetation_Species',
'Latitude',
'Longitude',
'Northing',
'Easting',
'Accuracy',
'Elevation_Metres_above_Sea_Level',
'Vegetation_Height',
'Vegetation_Width',
'Notes',
'Observation_Type',
'SRID',
'Landform']
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'Vegetation_Sample/Photolog':{
  fields:[]
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'Vegetation_Sample/Map':{
  fields:[]
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'Vegetation_Sample/Vars':{
  fields:[
'Timestamp']
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'Soil_Sample/Basic_Info':{
  fields:[
'Sample_Prefix_1',
'Sample_Prefix_2',
'Sample_ID',
'Timestamp_Field',
'Soil_Sample_author',
'Station_Deposit',
'Project',
'Area',
'Latitude',
'Longitude',
'Northing',
'Easting',
'Accuracy',
'Elevation_Metres_above_Sea_Level',
'Depth',
'Colour',
'Vegetation',
'Notes',
'Suffix',
'Observation_Type',
'SRID',
'Lag',
'Geology',
'Drainage',
'Contamination',
'Regolith_Type',
'Landform']
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'Soil_Sample/Photolog':{
  fields:[]
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'Soil_Sample/Map':{
  fields:[]
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'Soil_Sample/Vars':{
  fields:[
'Timestamp']
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'Soil_Crust_Sample/Basic_Info':{
  fields:[
'Sample_Prefix_1',
'Sample_Prefix_2',
'Sample_ID',
'Timestamp_Field',
'Soil_Crust_Sample_author',
'Station_Deposit',
'Project',
'Area',
'Latitude',
'Longitude',
'Northing',
'Easting',
'Accuracy',
'Elevation_Metres_above_Sea_Level',
'Depth',
'Colour',
'Vegetation',
'Notes',
'Suffix',
'Observation_Type',
'SRID',
'Lag',
'Geology',
'Drainage',
'Contamination',
'Regolith_Type',
'Landform']
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'Soil_Crust_Sample/Photolog':{
  fields:[]
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'Soil_Crust_Sample/Map':{
  fields:[]
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'Soil_Crust_Sample/Vars':{
  fields:[
'Timestamp']
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'Rock_Sample/Basic_Info':{
  fields:[
'Sample_Prefix_1',
'Sample_Prefix_2',
'Sample_ID',
'Timestamp_Field',
'Rock_Sample_author',
'Station_Deposit',
'Project',
'Area',
'Location_Number',
'Core_ID',
'Latitude',
'Longitude',
'Northing',
'Easting',
'Accuracy',
'Elevation_Metres_above_Sea_Level',
'Observation_Type',
'SRID']
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'Rock_Sample/Measurements':{
  fields:[
'Bedding_Strike',
'Cleavage_Strike',
'Foliation_Strike',
'Veins_1_Strike',
'Veins_2_Strike',
'Bedding_Dip',
'Cleavage_Dip',
'Foliation_Dip',
'Veins_1_Dip',
'Veins_2_Dip',
'Other_Structural_Measurements',
'Fold_Axis_Plunge',
'Mineral_Lineation_Plunge',
'Stretching_Lineation_Plunge',
'Fold_Axis_Azimuth',
'Mineral_Lineation_Azimuth',
'Stretching_Lineation_Azimuth',
'Other_Lineation']
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'Rock_Sample/Lithological_Info':{
  fields:[
'Other_Lithological_Descriptors',
'Stratigraphic_Unit',
'Large-Scale_Structure',
'Alteration',
'Veining',
'Notes',
'Lithology',
'Inclusion_Size',
'Grain_Size',
'Sorting']
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'Rock_Sample/Photolog':{
  fields:[]
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'Rock_Sample/Map':{
  fields:[]
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'Rock_Sample/Vars':{
  fields:[
'Timestamp']
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'pH/pH':{
  fields:[
'pH',
'Time',
'Preferred']
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'Eh/Eh':{
  fields:[
'Eh',
'Time',
'Preferred']
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'Photolog/Photolog':{
  fields:[
'Photo_ID',
'Photolog_timestamp',
'Photo_Note']
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'Shape/Shape_Note':{
  fields:[
'Label',
'Note']
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',

    },
    start_view: first
  }
}

