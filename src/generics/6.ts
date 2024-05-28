type Errors = {
    firstName?: string[];
    lastName?: string[];
    phone?: string[];
    email?: string[];
};

type Form = {
    firstName: string | null;
    lastName: string | null;
    phone: string | null;
    errors: Errors;
    email: string | null;
};

// Реалізуйте Params так, 
// щоб унеможливити поле 'errors' з типу Form
type Params = Omit<Form, 'errors'>;

