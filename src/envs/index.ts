interface IEnvironment {
    mode: 'development' | 'production',
    googleMapAutoCompleteApiKey: string,
    phone: { label: string, value: string, }
}

const ENVS: IEnvironment = {
    mode: 'development',
    googleMapAutoCompleteApiKey: 'AIzaSyDNI_ZWPqvdS6r6gPVO50I4TlYkfkZdXh8',
    phone: { label: '0349.665.665', value: '+84349665665' }
};

export default ENVS;