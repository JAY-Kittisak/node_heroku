import { getModelForClass, prop } from '@typegoose/typegoose';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType({ description: 'Factory Data' })
export class Tier {
    @Field(() => ID)
    id: string;

    @Field()
    @prop({ required: true, trim: true })
    industrialEstate: string;

    @Field()
    @prop({ required: true, trim: true })
    businessType: string;

    @Field()
    @prop({ required: true, trim: true })
    companyName: string;

    @Field()
    @prop({ required: true, trim: true })
    description: string;

    @Field()
    @prop({ required: true, trim: true })
    address: string;

    @Field()
    @prop({ required: true, trim: true })
    phoneNumber: string;

    @Field()
    @prop({ required: true, trim: true })
    FAX: string;

    @Field()
    @prop({ required: true, trim: true })
    Email: string;

    @Field()
    @prop({ default: () => Date.now() + 60 * 60 * 1000 * 7 })
    createdAt: Date;
}

export const TierModel = getModelForClass(Tier);
