
import {setUiSpecForProject} from './uiSpecification';
import {ProjectUIModel} from './datamodel';

const example_ui_specs: {[key: string]: ProjectUIModel} = {
  'default/Lake Mungo': {
    fields: {
      
'idNumber': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'idNumber',
    id: 'idNumber',
    helperText: '<Element 'description' at 0x7f3f61c74d10>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'idNumber',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'gridSquare': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'gridSquare',
    id: 'gridSquare',
    helperText: '<Element 'description' at 0x7f3f61c74b80>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'gridSquare',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'notes': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'notes',
    id: 'notes',
    helperText: '<Element 'description' at 0x7f3f61c3f4a0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'notes',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'idNumber': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'idNumber',
    id: 'idNumber',
    helperText: '<Element 'description' at 0x7f3f61b512c0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'idNumber',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'gridSquare': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'gridSquare',
    id: 'gridSquare',
    helperText: '<Element 'description' at 0x7f3f61b51130>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'gridSquare',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'notes': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'notes',
    id: 'notes',
    helperText: '<Element 'description' at 0x7f3f61acce00>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'notes',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'idNumber': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'idNumber',
    id: 'idNumber',
    helperText: '<Element 'description' at 0x7f3f61bb94f0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'idNumber',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'gridSquare': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'gridSquare',
    id: 'gridSquare',
    helperText: '<Element 'description' at 0x7f3f61bb9360>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'gridSquare',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'notes': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'notes',
    id: 'notes',
    helperText: '<Element 'description' at 0x7f3f61b867c0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'notes',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'idNumber': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'idNumber',
    id: 'idNumber',
    helperText: '<Element 'description' at 0x7f3f61c3f810>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'idNumber',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'gridSquare': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'gridSquare',
    id: 'gridSquare',
    helperText: '<Element 'description' at 0x7f3f61c3f680>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'gridSquare',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'notes': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'notes',
    id: 'notes',
    helperText: '<Element 'description' at 0x7f3f61c001d0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'notes',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'idNumber': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'idNumber',
    id: 'idNumber',
    helperText: '<Element 'description' at 0x7f3f61a8b950>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'idNumber',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'gridSquare': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'gridSquare',
    id: 'gridSquare',
    helperText: '<Element 'description' at 0x7f3f61a8b7c0>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'gridSquare',
        },
    FormHelperTextProps: {},
  },
  validationSchema: [
    ['yup.string']
  ],
  initialValue: '',
}
,
'notes': {
  'component-namespace': 'formik-material-ui', // this says what web component to use to render/acquire value from
  'component-name': 'TextField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    fullWidth: true,
    name: 'notes',
    id: 'notes',
    helperText: '<Element 'description' at 0x7f3f619e1090>',
    variant: 'outlined',
    required: true,
    InputProps: {
          type: 'string',
        },
    SelectProps: {},
    InputLabelProps: {
          label: 'notes',
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
      
'hearth/basicIdentification':{
  fields:[
'idNumber',
'gridSquare']
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'hearth/hearthStructure':{
  fields:[]
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'hearth/associatedMaterials':{
  fields:[]
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'hearth/topAndStratSetting':{
  fields:[
'notes']
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'hearthAssociatedMaterials/nearbyMaterial':{
  fields:[]
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'hearthAssociatedMaterials/associatedLacustrineMaterial':{
  fields:[]
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'hearthAssociatedMaterials/associatedTerrestrialBone':{
  fields:[]
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'hearthAssociatedMaterials/associatedEggshell':{
  fields:[]
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'hearthAssociatedMaterials/associatedStoneArtefacts':{
  fields:[]
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'hearthAssociatedMaterials/associatedOtherWorkedMaterial':{
  fields:[]
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'stoneArtefactClusters/basicIdentification':{
  fields:[
'idNumber',
'gridSquare']
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'stoneArtefactClusters/inSituDescription':{
  fields:[]
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'stoneArtefactClusters/surfaceDescription':{
  fields:[]
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'stoneArtefactClusters/associatedMaterials':{
  fields:[]
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'stoneArtefactClusters/topAndStratSetting':{
  fields:[
'notes']
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'stoneAssociatedInsituMaterials/nearbyMaterial':{
  fields:[]
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'stoneAssociatedInsituMaterials/associatedHearthstones':{
  fields:[]
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'stoneAssociatedInsituMaterials/associatedLacustrineMaterial':{
  fields:[]
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'stoneAssociatedInsituMaterials/associatedTerrestrialBone':{
  fields:[]
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'stoneAssociatedInsituMaterials/associatedEggshell':{
  fields:[]
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'stoneAssociatedInsituMaterials/associatedOtherWorkedMaterial':{
  fields:[]
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'stoneAssociatedSurfaceMaterials/nearbyMaterial':{
  fields:[]
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'stoneAssociatedSurfaceMaterials/associatedHearthstones':{
  fields:[]
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'stoneAssociatedSurfaceMaterials/associatedLacustrineMaterial':{
  fields:[]
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'stoneAssociatedSurfaceMaterials/associatedTerrestrialBone':{
  fields:[]
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'stoneAssociatedSurfaceMaterials/associatedEggshell':{
  fields:[]
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'stoneAssociatedSurfaceMaterials/associatedOtherWorkedMaterial':{
  fields:[]
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'isolatedOccurrences/basicIdentification':{
  fields:[
'idNumber',
'gridSquare']
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'isolatedOccurrences/topAndStratSetting':{
  fields:[
'notes']
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'midden/basicIdentification':{
  fields:[
'idNumber',
'gridSquare']
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'midden/middenDescription':{
  fields:[]
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'midden/associatedMaterials':{
  fields:[]
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'midden/topAndStratSetting':{
  fields:[
'notes']
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'middenAssociatedMaterials/control':{
  fields:[]
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'middenAssociatedMaterials/associatedHearthMaterial':{
  fields:[]
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'middenAssociatedMaterials/associatedLacustrineMaterial':{
  fields:[]
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'middenAssociatedMaterials/associatedTerrestrialBone':{
  fields:[]
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'middenAssociatedMaterials/associatedEggshell':{
  fields:[]
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'middenAssociatedMaterials/associatedStoneArtefacts':{
  fields:[]
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'middenAssociatedMaterials/associatedOtherWorkedMaterial':{
  fields:[]
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'oldBone/basicIdentification':{
  fields:[
'idNumber',
'gridSquare']
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'oldBone/insituAndSurfaceBone':{
  fields:[]
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'oldBone/associatedMaterials':{
  fields:[]
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'oldBone/topAndStratSetting':{
  fields:[
'notes']
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'oldboneAssociatedInsituMaterials/nearbyMaterial':{
  fields:[]
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'oldboneAssociatedInsituMaterials/associatedMussel':{
  fields:[]
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'oldboneAssociatedInsituMaterials/associatedHearthMaterial':{
  fields:[]
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'oldboneAssociatedInsituMaterials/associatedEggshell':{
  fields:[]
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'oldboneAssociatedInsituMaterials/associatedStoneArtefacts':{
  fields:[]
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'oldboneAssociatedInsituMaterials/associatedOtherWorkedMaterial':{
  fields:[]
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'oldboneAssociatedSurfaceMaterials/nearbyMaterial':{
  fields:[]
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'oldboneAssociatedSurfaceMaterials/associatedMussel':{
  fields:[]
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'oldboneAssociatedSurfaceMaterials/associatedHearthMaterial':{
  fields:[]
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'oldboneAssociatedSurfaceMaterials/associatedEggshell':{
  fields:[]
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'oldboneAssociatedSurfaceMaterials/associatedStoneArtefacts':{
  fields:[]
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',
,
'oldboneAssociatedSurfaceMaterials/associatedOtherWorkedMaterial':{
  fields:[]
},
'next-view': 'FIXME',
'next-view-label': 'FIXME',

    },
    start_view: first
  }
}

