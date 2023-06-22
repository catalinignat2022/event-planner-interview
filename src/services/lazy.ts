export class Lazy<T> {
    constructor(private _valueFactory: () => T) {

    }

    private _value: T = undefined!;
    private _initializing = false;

    // Metoda privată pentru inițializarea valorii lazy
    private _initValue() {
        if (this._initializing) {
            throw new Error('Lazy circular dependency detected: ' + this._valueFactory);
        }
        if (!this._value) {
            this._initializing = true;
            try {
                this._value = this._valueFactory();
            } finally {
                this._initializing = false;
            }
        }
    }

    // Getter pentru obținerea valorii lazy
    get value(): T {
        this._initValue();
        return this._value;
    }

    // Metoda pentru forțarea inițializării valorii lazy
    forceInit() {
        this._initValue();
    }
}
