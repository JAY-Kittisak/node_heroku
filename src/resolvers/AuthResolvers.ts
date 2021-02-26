import { Resolver, Query, Mutation, Arg } from 'type-graphql';

import { User, UserModel } from '../entities/User';
@Resolver()
export class AuthResolvers {
    @Query(() => [User], { nullable: 'items' })
    async users(): Promise<User[] | null> {
        try {
            return UserModel.find();
        } catch (error) {
            throw error;
        }
    }
    @Mutation(() => User, { nullable: true })
    async signUp(
        @Arg('username') username: string,
        @Arg('password') password: string
    ): Promise<User | null> {
        try {
            if (!username) throw new Error('Username is required.');
            if (!password) throw new Error('Password is required.');

            const newUser = await UserModel.create({
                username,
                password
            });

            await newUser.save();

            return newUser;
        } catch (error) {
            throw error;
        }
    }
}
