'use client'

import Modal from "./Modal"
import CustomButton from "../forms/CustomButton"
import useSignupModal from "@/app/hooks/useSignupModal"

const SignupModal = () => {
    const signupModal = useSignupModal()

    const content = (
        <>
            <form className="space-y-4">
                <input placeholder="Your e-mail address" type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

                <input placeholder="Your password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

                <input placeholder="Repeat your password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

                <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                    The error message
                </div>

                <CustomButton
                    label="Submit"
                    onClick={() => console.log('Test')}
                />
            </form>
        </>
    )
    return(
        <Modal 
            isOpen={signupModal.isOpen}
            close={signupModal.close}
            label="Sign in"
            content={content}
        />
    )
}

export default SignupModal