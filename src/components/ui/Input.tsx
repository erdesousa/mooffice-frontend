export default function Input({ type, name, label }) {
    return (
        <div className="mt-4">
            <div>
                <div className="group relative rounded-lg border focus-within:border-violet-500 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                    <div className="flex justify-between">
                        <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">
                            {label}
                        </label>
                        {type === 'text' && <div className="absolute right-3 translate-y-2 text-green-200"></div>}
                    </div>
                    <div className={type === 'password' ? 'flex items-center' : ''}>
                        <input
                            type={type}
                            name={name}
                            className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}