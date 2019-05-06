module.exports = {
    /*  - настольный монитор   -  1600х992px

        - ноутбук                - 1280x802px

       - планшет                        - 768х1024рх

       - мобильный телефон    - 320х480рх

*/
	columns:12,
	offset: "30px",
	container: {
		maxWidth: "1140px",
		fields: "15px"
	},
	breakPoints: {
		md: {
            width: "992px",
            
        },
        sm: {
            width: "720px",
            fields: "8px"
        },
        xs: {
            width: "576px",
            /* offset: "10px",
            fields: "5px" */
	    },
        xxs: {
            width: "400px"
	    }
	}
};