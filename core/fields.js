import _ from "lodash";

export function initField(schema, nameCommit, pathStore) {
    const fields = {};
    for (let key in schema) {
        let val = schema[key];
        fields[key] = {
            get() {
                const store = pathStore ? _.get(this.$store.state, pathStore) : this.data
                return _.get(store, val);
            },
            set(value) {
                this.$store.commit(nameCommit, {
                    value,
                    prop: val
                });
            }
        };
    }
    return fields;
}