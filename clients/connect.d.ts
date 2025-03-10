import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class Connect extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Connect.Types.ClientConfiguration)
  config: Config & Connect.Types.ClientConfiguration;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Associates an approved origin to an Amazon Connect instance.
   */
  associateApprovedOrigin(params: Connect.Types.AssociateApprovedOriginRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Associates an approved origin to an Amazon Connect instance.
   */
  associateApprovedOrigin(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Allows the specified Amazon Connect instance to access the specified Amazon Lex or Amazon Lex V2 bot.
   */
  associateBot(params: Connect.Types.AssociateBotRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Allows the specified Amazon Connect instance to access the specified Amazon Lex or Amazon Lex V2 bot.
   */
  associateBot(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Associates an existing vocabulary as the default. Contact Lens for Amazon Connect uses the vocabulary in post-call and real-time analysis sessions for the given language.
   */
  associateDefaultVocabulary(params: Connect.Types.AssociateDefaultVocabularyRequest, callback?: (err: AWSError, data: Connect.Types.AssociateDefaultVocabularyResponse) => void): Request<Connect.Types.AssociateDefaultVocabularyResponse, AWSError>;
  /**
   * Associates an existing vocabulary as the default. Contact Lens for Amazon Connect uses the vocabulary in post-call and real-time analysis sessions for the given language.
   */
  associateDefaultVocabulary(callback?: (err: AWSError, data: Connect.Types.AssociateDefaultVocabularyResponse) => void): Request<Connect.Types.AssociateDefaultVocabularyResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Associates a storage resource type for the first time. You can only associate one type of storage configuration in a single call. This means, for example, that you can't define an instance with multiple S3 buckets for storing chat transcripts. This API does not create a resource that doesn't exist. It only associates it to the instance. Ensure that the resource being specified in the storage configuration, like an S3 bucket, exists when being used for association.
   */
  associateInstanceStorageConfig(params: Connect.Types.AssociateInstanceStorageConfigRequest, callback?: (err: AWSError, data: Connect.Types.AssociateInstanceStorageConfigResponse) => void): Request<Connect.Types.AssociateInstanceStorageConfigResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Associates a storage resource type for the first time. You can only associate one type of storage configuration in a single call. This means, for example, that you can't define an instance with multiple S3 buckets for storing chat transcripts. This API does not create a resource that doesn't exist. It only associates it to the instance. Ensure that the resource being specified in the storage configuration, like an S3 bucket, exists when being used for association.
   */
  associateInstanceStorageConfig(callback?: (err: AWSError, data: Connect.Types.AssociateInstanceStorageConfigResponse) => void): Request<Connect.Types.AssociateInstanceStorageConfigResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Allows the specified Amazon Connect instance to access the specified Lambda function.
   */
  associateLambdaFunction(params: Connect.Types.AssociateLambdaFunctionRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Allows the specified Amazon Connect instance to access the specified Lambda function.
   */
  associateLambdaFunction(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Allows the specified Amazon Connect instance to access the specified Amazon Lex bot.
   */
  associateLexBot(params: Connect.Types.AssociateLexBotRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Allows the specified Amazon Connect instance to access the specified Amazon Lex bot.
   */
  associateLexBot(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Associates a flow with a phone number claimed to your Amazon Connect instance.  If the number is claimed to a traffic distribution group, and you are calling this API using an instance in the Amazon Web Services Region where the traffic distribution group was created, you can use either a full phone number ARN or UUID value for the PhoneNumberId URI request parameter. However, if the number is claimed to a traffic distribution group and you are calling this API using an instance in the alternate Amazon Web Services Region associated with the traffic distribution group, you must provide a full phone number ARN. If a UUID is provided in this scenario, you will receive a ResourceNotFoundException. 
   */
  associatePhoneNumberContactFlow(params: Connect.Types.AssociatePhoneNumberContactFlowRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Associates a flow with a phone number claimed to your Amazon Connect instance.  If the number is claimed to a traffic distribution group, and you are calling this API using an instance in the Amazon Web Services Region where the traffic distribution group was created, you can use either a full phone number ARN or UUID value for the PhoneNumberId URI request parameter. However, if the number is claimed to a traffic distribution group and you are calling this API using an instance in the alternate Amazon Web Services Region associated with the traffic distribution group, you must provide a full phone number ARN. If a UUID is provided in this scenario, you will receive a ResourceNotFoundException. 
   */
  associatePhoneNumberContactFlow(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Associates a set of quick connects with a queue.
   */
  associateQueueQuickConnects(params: Connect.Types.AssociateQueueQuickConnectsRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Associates a set of quick connects with a queue.
   */
  associateQueueQuickConnects(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Associates a set of queues with a routing profile.
   */
  associateRoutingProfileQueues(params: Connect.Types.AssociateRoutingProfileQueuesRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Associates a set of queues with a routing profile.
   */
  associateRoutingProfileQueues(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Associates a security key to the instance.
   */
  associateSecurityKey(params: Connect.Types.AssociateSecurityKeyRequest, callback?: (err: AWSError, data: Connect.Types.AssociateSecurityKeyResponse) => void): Request<Connect.Types.AssociateSecurityKeyResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Associates a security key to the instance.
   */
  associateSecurityKey(callback?: (err: AWSError, data: Connect.Types.AssociateSecurityKeyResponse) => void): Request<Connect.Types.AssociateSecurityKeyResponse, AWSError>;
  /**
   * Claims an available phone number to your Amazon Connect instance or traffic distribution group. You can call this API only in the same Amazon Web Services Region where the Amazon Connect instance or traffic distribution group was created. For more information about how to use this operation, see Claim a phone number in your country and Claim phone numbers to traffic distribution groups in the Amazon Connect Administrator Guide.   You can call the SearchAvailablePhoneNumbers API for available phone numbers that you can claim. Call the DescribePhoneNumber API to verify the status of a previous ClaimPhoneNumber operation. 
   */
  claimPhoneNumber(params: Connect.Types.ClaimPhoneNumberRequest, callback?: (err: AWSError, data: Connect.Types.ClaimPhoneNumberResponse) => void): Request<Connect.Types.ClaimPhoneNumberResponse, AWSError>;
  /**
   * Claims an available phone number to your Amazon Connect instance or traffic distribution group. You can call this API only in the same Amazon Web Services Region where the Amazon Connect instance or traffic distribution group was created. For more information about how to use this operation, see Claim a phone number in your country and Claim phone numbers to traffic distribution groups in the Amazon Connect Administrator Guide.   You can call the SearchAvailablePhoneNumbers API for available phone numbers that you can claim. Call the DescribePhoneNumber API to verify the status of a previous ClaimPhoneNumber operation. 
   */
  claimPhoneNumber(callback?: (err: AWSError, data: Connect.Types.ClaimPhoneNumberResponse) => void): Request<Connect.Types.ClaimPhoneNumberResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Creates an agent status for the specified Amazon Connect instance.
   */
  createAgentStatus(params: Connect.Types.CreateAgentStatusRequest, callback?: (err: AWSError, data: Connect.Types.CreateAgentStatusResponse) => void): Request<Connect.Types.CreateAgentStatusResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Creates an agent status for the specified Amazon Connect instance.
   */
  createAgentStatus(callback?: (err: AWSError, data: Connect.Types.CreateAgentStatusResponse) => void): Request<Connect.Types.CreateAgentStatusResponse, AWSError>;
  /**
   * Creates a flow for the specified Amazon Connect instance. You can also create and update flows using the Amazon Connect Flow language.
   */
  createContactFlow(params: Connect.Types.CreateContactFlowRequest, callback?: (err: AWSError, data: Connect.Types.CreateContactFlowResponse) => void): Request<Connect.Types.CreateContactFlowResponse, AWSError>;
  /**
   * Creates a flow for the specified Amazon Connect instance. You can also create and update flows using the Amazon Connect Flow language.
   */
  createContactFlow(callback?: (err: AWSError, data: Connect.Types.CreateContactFlowResponse) => void): Request<Connect.Types.CreateContactFlowResponse, AWSError>;
  /**
   * Creates a flow module for the specified Amazon Connect instance. 
   */
  createContactFlowModule(params: Connect.Types.CreateContactFlowModuleRequest, callback?: (err: AWSError, data: Connect.Types.CreateContactFlowModuleResponse) => void): Request<Connect.Types.CreateContactFlowModuleResponse, AWSError>;
  /**
   * Creates a flow module for the specified Amazon Connect instance. 
   */
  createContactFlowModule(callback?: (err: AWSError, data: Connect.Types.CreateContactFlowModuleResponse) => void): Request<Connect.Types.CreateContactFlowModuleResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Creates hours of operation. 
   */
  createHoursOfOperation(params: Connect.Types.CreateHoursOfOperationRequest, callback?: (err: AWSError, data: Connect.Types.CreateHoursOfOperationResponse) => void): Request<Connect.Types.CreateHoursOfOperationResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Creates hours of operation. 
   */
  createHoursOfOperation(callback?: (err: AWSError, data: Connect.Types.CreateHoursOfOperationResponse) => void): Request<Connect.Types.CreateHoursOfOperationResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Initiates an Amazon Connect instance with all the supported channels enabled. It does not attach any storage, such as Amazon Simple Storage Service (Amazon S3) or Amazon Kinesis. It also does not allow for any configurations on features, such as Contact Lens for Amazon Connect.  Amazon Connect enforces a limit on the total number of instances that you can create or delete in 30 days. If you exceed this limit, you will get an error message indicating there has been an excessive number of attempts at creating or deleting instances. You must wait 30 days before you can restart creating and deleting instances in your account.
   */
  createInstance(params: Connect.Types.CreateInstanceRequest, callback?: (err: AWSError, data: Connect.Types.CreateInstanceResponse) => void): Request<Connect.Types.CreateInstanceResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Initiates an Amazon Connect instance with all the supported channels enabled. It does not attach any storage, such as Amazon Simple Storage Service (Amazon S3) or Amazon Kinesis. It also does not allow for any configurations on features, such as Contact Lens for Amazon Connect.  Amazon Connect enforces a limit on the total number of instances that you can create or delete in 30 days. If you exceed this limit, you will get an error message indicating there has been an excessive number of attempts at creating or deleting instances. You must wait 30 days before you can restart creating and deleting instances in your account.
   */
  createInstance(callback?: (err: AWSError, data: Connect.Types.CreateInstanceResponse) => void): Request<Connect.Types.CreateInstanceResponse, AWSError>;
  /**
   * Creates an Amazon Web Services resource association with an Amazon Connect instance.
   */
  createIntegrationAssociation(params: Connect.Types.CreateIntegrationAssociationRequest, callback?: (err: AWSError, data: Connect.Types.CreateIntegrationAssociationResponse) => void): Request<Connect.Types.CreateIntegrationAssociationResponse, AWSError>;
  /**
   * Creates an Amazon Web Services resource association with an Amazon Connect instance.
   */
  createIntegrationAssociation(callback?: (err: AWSError, data: Connect.Types.CreateIntegrationAssociationResponse) => void): Request<Connect.Types.CreateIntegrationAssociationResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Creates a new queue for the specified Amazon Connect instance.  If the number being used in the input is claimed to a traffic distribution group, and you are calling this API using an instance in the Amazon Web Services Region where the traffic distribution group was created, you can use either a full phone number ARN or UUID value for the OutboundCallerIdNumberId value of the OutboundCallerConfig request body parameter. However, if the number is claimed to a traffic distribution group and you are calling this API using an instance in the alternate Amazon Web Services Region associated with the traffic distribution group, you must provide a full phone number ARN. If a UUID is provided in this scenario, you will receive a ResourceNotFoundException. 
   */
  createQueue(params: Connect.Types.CreateQueueRequest, callback?: (err: AWSError, data: Connect.Types.CreateQueueResponse) => void): Request<Connect.Types.CreateQueueResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Creates a new queue for the specified Amazon Connect instance.  If the number being used in the input is claimed to a traffic distribution group, and you are calling this API using an instance in the Amazon Web Services Region where the traffic distribution group was created, you can use either a full phone number ARN or UUID value for the OutboundCallerIdNumberId value of the OutboundCallerConfig request body parameter. However, if the number is claimed to a traffic distribution group and you are calling this API using an instance in the alternate Amazon Web Services Region associated with the traffic distribution group, you must provide a full phone number ARN. If a UUID is provided in this scenario, you will receive a ResourceNotFoundException. 
   */
  createQueue(callback?: (err: AWSError, data: Connect.Types.CreateQueueResponse) => void): Request<Connect.Types.CreateQueueResponse, AWSError>;
  /**
   * Creates a quick connect for the specified Amazon Connect instance.
   */
  createQuickConnect(params: Connect.Types.CreateQuickConnectRequest, callback?: (err: AWSError, data: Connect.Types.CreateQuickConnectResponse) => void): Request<Connect.Types.CreateQuickConnectResponse, AWSError>;
  /**
   * Creates a quick connect for the specified Amazon Connect instance.
   */
  createQuickConnect(callback?: (err: AWSError, data: Connect.Types.CreateQuickConnectResponse) => void): Request<Connect.Types.CreateQuickConnectResponse, AWSError>;
  /**
   * Creates a new routing profile.
   */
  createRoutingProfile(params: Connect.Types.CreateRoutingProfileRequest, callback?: (err: AWSError, data: Connect.Types.CreateRoutingProfileResponse) => void): Request<Connect.Types.CreateRoutingProfileResponse, AWSError>;
  /**
   * Creates a new routing profile.
   */
  createRoutingProfile(callback?: (err: AWSError, data: Connect.Types.CreateRoutingProfileResponse) => void): Request<Connect.Types.CreateRoutingProfileResponse, AWSError>;
  /**
   * Creates a rule for the specified Amazon Connect instance. Use the Rules Function language to code conditions for the rule. 
   */
  createRule(params: Connect.Types.CreateRuleRequest, callback?: (err: AWSError, data: Connect.Types.CreateRuleResponse) => void): Request<Connect.Types.CreateRuleResponse, AWSError>;
  /**
   * Creates a rule for the specified Amazon Connect instance. Use the Rules Function language to code conditions for the rule. 
   */
  createRule(callback?: (err: AWSError, data: Connect.Types.CreateRuleResponse) => void): Request<Connect.Types.CreateRuleResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Creates a security profile.
   */
  createSecurityProfile(params: Connect.Types.CreateSecurityProfileRequest, callback?: (err: AWSError, data: Connect.Types.CreateSecurityProfileResponse) => void): Request<Connect.Types.CreateSecurityProfileResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Creates a security profile.
   */
  createSecurityProfile(callback?: (err: AWSError, data: Connect.Types.CreateSecurityProfileResponse) => void): Request<Connect.Types.CreateSecurityProfileResponse, AWSError>;
  /**
   * Creates a new task template in the specified Amazon Connect instance.
   */
  createTaskTemplate(params: Connect.Types.CreateTaskTemplateRequest, callback?: (err: AWSError, data: Connect.Types.CreateTaskTemplateResponse) => void): Request<Connect.Types.CreateTaskTemplateResponse, AWSError>;
  /**
   * Creates a new task template in the specified Amazon Connect instance.
   */
  createTaskTemplate(callback?: (err: AWSError, data: Connect.Types.CreateTaskTemplateResponse) => void): Request<Connect.Types.CreateTaskTemplateResponse, AWSError>;
  /**
   * Creates a traffic distribution group given an Amazon Connect instance that has been replicated.  For more information about creating traffic distribution groups, see Set up traffic distribution groups in the Amazon Connect Administrator Guide. 
   */
  createTrafficDistributionGroup(params: Connect.Types.CreateTrafficDistributionGroupRequest, callback?: (err: AWSError, data: Connect.Types.CreateTrafficDistributionGroupResponse) => void): Request<Connect.Types.CreateTrafficDistributionGroupResponse, AWSError>;
  /**
   * Creates a traffic distribution group given an Amazon Connect instance that has been replicated.  For more information about creating traffic distribution groups, see Set up traffic distribution groups in the Amazon Connect Administrator Guide. 
   */
  createTrafficDistributionGroup(callback?: (err: AWSError, data: Connect.Types.CreateTrafficDistributionGroupResponse) => void): Request<Connect.Types.CreateTrafficDistributionGroupResponse, AWSError>;
  /**
   * Creates a use case for an integration association.
   */
  createUseCase(params: Connect.Types.CreateUseCaseRequest, callback?: (err: AWSError, data: Connect.Types.CreateUseCaseResponse) => void): Request<Connect.Types.CreateUseCaseResponse, AWSError>;
  /**
   * Creates a use case for an integration association.
   */
  createUseCase(callback?: (err: AWSError, data: Connect.Types.CreateUseCaseResponse) => void): Request<Connect.Types.CreateUseCaseResponse, AWSError>;
  /**
   * Creates a user account for the specified Amazon Connect instance. For information about how to create user accounts using the Amazon Connect console, see Add Users in the Amazon Connect Administrator Guide.
   */
  createUser(params: Connect.Types.CreateUserRequest, callback?: (err: AWSError, data: Connect.Types.CreateUserResponse) => void): Request<Connect.Types.CreateUserResponse, AWSError>;
  /**
   * Creates a user account for the specified Amazon Connect instance. For information about how to create user accounts using the Amazon Connect console, see Add Users in the Amazon Connect Administrator Guide.
   */
  createUser(callback?: (err: AWSError, data: Connect.Types.CreateUserResponse) => void): Request<Connect.Types.CreateUserResponse, AWSError>;
  /**
   * Creates a new user hierarchy group.
   */
  createUserHierarchyGroup(params: Connect.Types.CreateUserHierarchyGroupRequest, callback?: (err: AWSError, data: Connect.Types.CreateUserHierarchyGroupResponse) => void): Request<Connect.Types.CreateUserHierarchyGroupResponse, AWSError>;
  /**
   * Creates a new user hierarchy group.
   */
  createUserHierarchyGroup(callback?: (err: AWSError, data: Connect.Types.CreateUserHierarchyGroupResponse) => void): Request<Connect.Types.CreateUserHierarchyGroupResponse, AWSError>;
  /**
   * Creates a custom vocabulary associated with your Amazon Connect instance. You can set a custom vocabulary to be your default vocabulary for a given language. Contact Lens for Amazon Connect uses the default vocabulary in post-call and real-time contact analysis sessions for that language.
   */
  createVocabulary(params: Connect.Types.CreateVocabularyRequest, callback?: (err: AWSError, data: Connect.Types.CreateVocabularyResponse) => void): Request<Connect.Types.CreateVocabularyResponse, AWSError>;
  /**
   * Creates a custom vocabulary associated with your Amazon Connect instance. You can set a custom vocabulary to be your default vocabulary for a given language. Contact Lens for Amazon Connect uses the default vocabulary in post-call and real-time contact analysis sessions for that language.
   */
  createVocabulary(callback?: (err: AWSError, data: Connect.Types.CreateVocabularyResponse) => void): Request<Connect.Types.CreateVocabularyResponse, AWSError>;
  /**
   * Deletes a flow for the specified Amazon Connect instance.
   */
  deleteContactFlow(params: Connect.Types.DeleteContactFlowRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a flow for the specified Amazon Connect instance.
   */
  deleteContactFlow(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified flow module.
   */
  deleteContactFlowModule(params: Connect.Types.DeleteContactFlowModuleRequest, callback?: (err: AWSError, data: Connect.Types.DeleteContactFlowModuleResponse) => void): Request<Connect.Types.DeleteContactFlowModuleResponse, AWSError>;
  /**
   * Deletes the specified flow module.
   */
  deleteContactFlowModule(callback?: (err: AWSError, data: Connect.Types.DeleteContactFlowModuleResponse) => void): Request<Connect.Types.DeleteContactFlowModuleResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Deletes an hours of operation.
   */
  deleteHoursOfOperation(params: Connect.Types.DeleteHoursOfOperationRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Deletes an hours of operation.
   */
  deleteHoursOfOperation(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Deletes the Amazon Connect instance. Amazon Connect enforces a limit on the total number of instances that you can create or delete in 30 days. If you exceed this limit, you will get an error message indicating there has been an excessive number of attempts at creating or deleting instances. You must wait 30 days before you can restart creating and deleting instances in your account.
   */
  deleteInstance(params: Connect.Types.DeleteInstanceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Deletes the Amazon Connect instance. Amazon Connect enforces a limit on the total number of instances that you can create or delete in 30 days. If you exceed this limit, you will get an error message indicating there has been an excessive number of attempts at creating or deleting instances. You must wait 30 days before you can restart creating and deleting instances in your account.
   */
  deleteInstance(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an Amazon Web Services resource association from an Amazon Connect instance. The association must not have any use cases associated with it.
   */
  deleteIntegrationAssociation(params: Connect.Types.DeleteIntegrationAssociationRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an Amazon Web Services resource association from an Amazon Connect instance. The association must not have any use cases associated with it.
   */
  deleteIntegrationAssociation(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a quick connect.
   */
  deleteQuickConnect(params: Connect.Types.DeleteQuickConnectRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a quick connect.
   */
  deleteQuickConnect(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a rule for the specified Amazon Connect instance.
   */
  deleteRule(params: Connect.Types.DeleteRuleRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a rule for the specified Amazon Connect instance.
   */
  deleteRule(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Deletes a security profile.
   */
  deleteSecurityProfile(params: Connect.Types.DeleteSecurityProfileRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Deletes a security profile.
   */
  deleteSecurityProfile(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the task template.
   */
  deleteTaskTemplate(params: Connect.Types.DeleteTaskTemplateRequest, callback?: (err: AWSError, data: Connect.Types.DeleteTaskTemplateResponse) => void): Request<Connect.Types.DeleteTaskTemplateResponse, AWSError>;
  /**
   * Deletes the task template.
   */
  deleteTaskTemplate(callback?: (err: AWSError, data: Connect.Types.DeleteTaskTemplateResponse) => void): Request<Connect.Types.DeleteTaskTemplateResponse, AWSError>;
  /**
   * Deletes a traffic distribution group. This API can be called only in the Region where the traffic distribution group is created. For more information about deleting traffic distribution groups, see Delete traffic distribution groups in the Amazon Connect Administrator Guide.
   */
  deleteTrafficDistributionGroup(params: Connect.Types.DeleteTrafficDistributionGroupRequest, callback?: (err: AWSError, data: Connect.Types.DeleteTrafficDistributionGroupResponse) => void): Request<Connect.Types.DeleteTrafficDistributionGroupResponse, AWSError>;
  /**
   * Deletes a traffic distribution group. This API can be called only in the Region where the traffic distribution group is created. For more information about deleting traffic distribution groups, see Delete traffic distribution groups in the Amazon Connect Administrator Guide.
   */
  deleteTrafficDistributionGroup(callback?: (err: AWSError, data: Connect.Types.DeleteTrafficDistributionGroupResponse) => void): Request<Connect.Types.DeleteTrafficDistributionGroupResponse, AWSError>;
  /**
   * Deletes a use case from an integration association.
   */
  deleteUseCase(params: Connect.Types.DeleteUseCaseRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a use case from an integration association.
   */
  deleteUseCase(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a user account from the specified Amazon Connect instance. For information about what happens to a user's data when their account is deleted, see Delete Users from Your Amazon Connect Instance in the Amazon Connect Administrator Guide.
   */
  deleteUser(params: Connect.Types.DeleteUserRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a user account from the specified Amazon Connect instance. For information about what happens to a user's data when their account is deleted, see Delete Users from Your Amazon Connect Instance in the Amazon Connect Administrator Guide.
   */
  deleteUser(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an existing user hierarchy group. It must not be associated with any agents or have any active child groups.
   */
  deleteUserHierarchyGroup(params: Connect.Types.DeleteUserHierarchyGroupRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an existing user hierarchy group. It must not be associated with any agents or have any active child groups.
   */
  deleteUserHierarchyGroup(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the vocabulary that has the given identifier.
   */
  deleteVocabulary(params: Connect.Types.DeleteVocabularyRequest, callback?: (err: AWSError, data: Connect.Types.DeleteVocabularyResponse) => void): Request<Connect.Types.DeleteVocabularyResponse, AWSError>;
  /**
   * Deletes the vocabulary that has the given identifier.
   */
  deleteVocabulary(callback?: (err: AWSError, data: Connect.Types.DeleteVocabularyResponse) => void): Request<Connect.Types.DeleteVocabularyResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Describes an agent status.
   */
  describeAgentStatus(params: Connect.Types.DescribeAgentStatusRequest, callback?: (err: AWSError, data: Connect.Types.DescribeAgentStatusResponse) => void): Request<Connect.Types.DescribeAgentStatusResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Describes an agent status.
   */
  describeAgentStatus(callback?: (err: AWSError, data: Connect.Types.DescribeAgentStatusResponse) => void): Request<Connect.Types.DescribeAgentStatusResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Describes the specified contact.   Contact information remains available in Amazon Connect for 24 months, and then it is deleted. Only data from November 12, 2021, and later is returned by this API. 
   */
  describeContact(params: Connect.Types.DescribeContactRequest, callback?: (err: AWSError, data: Connect.Types.DescribeContactResponse) => void): Request<Connect.Types.DescribeContactResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Describes the specified contact.   Contact information remains available in Amazon Connect for 24 months, and then it is deleted. Only data from November 12, 2021, and later is returned by this API. 
   */
  describeContact(callback?: (err: AWSError, data: Connect.Types.DescribeContactResponse) => void): Request<Connect.Types.DescribeContactResponse, AWSError>;
  /**
   * Describes the specified flow. You can also create and update flows using the Amazon Connect Flow language.
   */
  describeContactFlow(params: Connect.Types.DescribeContactFlowRequest, callback?: (err: AWSError, data: Connect.Types.DescribeContactFlowResponse) => void): Request<Connect.Types.DescribeContactFlowResponse, AWSError>;
  /**
   * Describes the specified flow. You can also create and update flows using the Amazon Connect Flow language.
   */
  describeContactFlow(callback?: (err: AWSError, data: Connect.Types.DescribeContactFlowResponse) => void): Request<Connect.Types.DescribeContactFlowResponse, AWSError>;
  /**
   * Describes the specified flow module.
   */
  describeContactFlowModule(params: Connect.Types.DescribeContactFlowModuleRequest, callback?: (err: AWSError, data: Connect.Types.DescribeContactFlowModuleResponse) => void): Request<Connect.Types.DescribeContactFlowModuleResponse, AWSError>;
  /**
   * Describes the specified flow module.
   */
  describeContactFlowModule(callback?: (err: AWSError, data: Connect.Types.DescribeContactFlowModuleResponse) => void): Request<Connect.Types.DescribeContactFlowModuleResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Describes the hours of operation.
   */
  describeHoursOfOperation(params: Connect.Types.DescribeHoursOfOperationRequest, callback?: (err: AWSError, data: Connect.Types.DescribeHoursOfOperationResponse) => void): Request<Connect.Types.DescribeHoursOfOperationResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Describes the hours of operation.
   */
  describeHoursOfOperation(callback?: (err: AWSError, data: Connect.Types.DescribeHoursOfOperationResponse) => void): Request<Connect.Types.DescribeHoursOfOperationResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Returns the current state of the specified instance identifier. It tracks the instance while it is being created and returns an error status, if applicable.  If an instance is not created successfully, the instance status reason field returns details relevant to the reason. The instance in a failed state is returned only for 24 hours after the CreateInstance API was invoked.
   */
  describeInstance(params: Connect.Types.DescribeInstanceRequest, callback?: (err: AWSError, data: Connect.Types.DescribeInstanceResponse) => void): Request<Connect.Types.DescribeInstanceResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Returns the current state of the specified instance identifier. It tracks the instance while it is being created and returns an error status, if applicable.  If an instance is not created successfully, the instance status reason field returns details relevant to the reason. The instance in a failed state is returned only for 24 hours after the CreateInstance API was invoked.
   */
  describeInstance(callback?: (err: AWSError, data: Connect.Types.DescribeInstanceResponse) => void): Request<Connect.Types.DescribeInstanceResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Describes the specified instance attribute.
   */
  describeInstanceAttribute(params: Connect.Types.DescribeInstanceAttributeRequest, callback?: (err: AWSError, data: Connect.Types.DescribeInstanceAttributeResponse) => void): Request<Connect.Types.DescribeInstanceAttributeResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Describes the specified instance attribute.
   */
  describeInstanceAttribute(callback?: (err: AWSError, data: Connect.Types.DescribeInstanceAttributeResponse) => void): Request<Connect.Types.DescribeInstanceAttributeResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Retrieves the current storage configurations for the specified resource type, association ID, and instance ID.
   */
  describeInstanceStorageConfig(params: Connect.Types.DescribeInstanceStorageConfigRequest, callback?: (err: AWSError, data: Connect.Types.DescribeInstanceStorageConfigResponse) => void): Request<Connect.Types.DescribeInstanceStorageConfigResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Retrieves the current storage configurations for the specified resource type, association ID, and instance ID.
   */
  describeInstanceStorageConfig(callback?: (err: AWSError, data: Connect.Types.DescribeInstanceStorageConfigResponse) => void): Request<Connect.Types.DescribeInstanceStorageConfigResponse, AWSError>;
  /**
   * Gets details and status of a phone number that’s claimed to your Amazon Connect instance or traffic distribution group.  If the number is claimed to a traffic distribution group, and you are calling in the Amazon Web Services Region where the traffic distribution group was created, you can use either a phone number ARN or UUID value for the PhoneNumberId URI request parameter. However, if the number is claimed to a traffic distribution group and you are calling this API in the alternate Amazon Web Services Region associated with the traffic distribution group, you must provide a full phone number ARN. If a UUID is provided in this scenario, you will receive a ResourceNotFoundException. 
   */
  describePhoneNumber(params: Connect.Types.DescribePhoneNumberRequest, callback?: (err: AWSError, data: Connect.Types.DescribePhoneNumberResponse) => void): Request<Connect.Types.DescribePhoneNumberResponse, AWSError>;
  /**
   * Gets details and status of a phone number that’s claimed to your Amazon Connect instance or traffic distribution group.  If the number is claimed to a traffic distribution group, and you are calling in the Amazon Web Services Region where the traffic distribution group was created, you can use either a phone number ARN or UUID value for the PhoneNumberId URI request parameter. However, if the number is claimed to a traffic distribution group and you are calling this API in the alternate Amazon Web Services Region associated with the traffic distribution group, you must provide a full phone number ARN. If a UUID is provided in this scenario, you will receive a ResourceNotFoundException. 
   */
  describePhoneNumber(callback?: (err: AWSError, data: Connect.Types.DescribePhoneNumberResponse) => void): Request<Connect.Types.DescribePhoneNumberResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Describes the specified queue.
   */
  describeQueue(params: Connect.Types.DescribeQueueRequest, callback?: (err: AWSError, data: Connect.Types.DescribeQueueResponse) => void): Request<Connect.Types.DescribeQueueResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Describes the specified queue.
   */
  describeQueue(callback?: (err: AWSError, data: Connect.Types.DescribeQueueResponse) => void): Request<Connect.Types.DescribeQueueResponse, AWSError>;
  /**
   * Describes the quick connect.
   */
  describeQuickConnect(params: Connect.Types.DescribeQuickConnectRequest, callback?: (err: AWSError, data: Connect.Types.DescribeQuickConnectResponse) => void): Request<Connect.Types.DescribeQuickConnectResponse, AWSError>;
  /**
   * Describes the quick connect.
   */
  describeQuickConnect(callback?: (err: AWSError, data: Connect.Types.DescribeQuickConnectResponse) => void): Request<Connect.Types.DescribeQuickConnectResponse, AWSError>;
  /**
   * Describes the specified routing profile.
   */
  describeRoutingProfile(params: Connect.Types.DescribeRoutingProfileRequest, callback?: (err: AWSError, data: Connect.Types.DescribeRoutingProfileResponse) => void): Request<Connect.Types.DescribeRoutingProfileResponse, AWSError>;
  /**
   * Describes the specified routing profile.
   */
  describeRoutingProfile(callback?: (err: AWSError, data: Connect.Types.DescribeRoutingProfileResponse) => void): Request<Connect.Types.DescribeRoutingProfileResponse, AWSError>;
  /**
   * Describes a rule for the specified Amazon Connect instance.
   */
  describeRule(params: Connect.Types.DescribeRuleRequest, callback?: (err: AWSError, data: Connect.Types.DescribeRuleResponse) => void): Request<Connect.Types.DescribeRuleResponse, AWSError>;
  /**
   * Describes a rule for the specified Amazon Connect instance.
   */
  describeRule(callback?: (err: AWSError, data: Connect.Types.DescribeRuleResponse) => void): Request<Connect.Types.DescribeRuleResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Gets basic information about the security profle.
   */
  describeSecurityProfile(params: Connect.Types.DescribeSecurityProfileRequest, callback?: (err: AWSError, data: Connect.Types.DescribeSecurityProfileResponse) => void): Request<Connect.Types.DescribeSecurityProfileResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Gets basic information about the security profle.
   */
  describeSecurityProfile(callback?: (err: AWSError, data: Connect.Types.DescribeSecurityProfileResponse) => void): Request<Connect.Types.DescribeSecurityProfileResponse, AWSError>;
  /**
   * Gets details and status of a traffic distribution group.
   */
  describeTrafficDistributionGroup(params: Connect.Types.DescribeTrafficDistributionGroupRequest, callback?: (err: AWSError, data: Connect.Types.DescribeTrafficDistributionGroupResponse) => void): Request<Connect.Types.DescribeTrafficDistributionGroupResponse, AWSError>;
  /**
   * Gets details and status of a traffic distribution group.
   */
  describeTrafficDistributionGroup(callback?: (err: AWSError, data: Connect.Types.DescribeTrafficDistributionGroupResponse) => void): Request<Connect.Types.DescribeTrafficDistributionGroupResponse, AWSError>;
  /**
   * Describes the specified user account. You can find the instance ID in the console (it’s the final part of the ARN). The console does not display the user IDs. Instead, list the users and note the IDs provided in the output.
   */
  describeUser(params: Connect.Types.DescribeUserRequest, callback?: (err: AWSError, data: Connect.Types.DescribeUserResponse) => void): Request<Connect.Types.DescribeUserResponse, AWSError>;
  /**
   * Describes the specified user account. You can find the instance ID in the console (it’s the final part of the ARN). The console does not display the user IDs. Instead, list the users and note the IDs provided in the output.
   */
  describeUser(callback?: (err: AWSError, data: Connect.Types.DescribeUserResponse) => void): Request<Connect.Types.DescribeUserResponse, AWSError>;
  /**
   * Describes the specified hierarchy group.
   */
  describeUserHierarchyGroup(params: Connect.Types.DescribeUserHierarchyGroupRequest, callback?: (err: AWSError, data: Connect.Types.DescribeUserHierarchyGroupResponse) => void): Request<Connect.Types.DescribeUserHierarchyGroupResponse, AWSError>;
  /**
   * Describes the specified hierarchy group.
   */
  describeUserHierarchyGroup(callback?: (err: AWSError, data: Connect.Types.DescribeUserHierarchyGroupResponse) => void): Request<Connect.Types.DescribeUserHierarchyGroupResponse, AWSError>;
  /**
   * Describes the hierarchy structure of the specified Amazon Connect instance.
   */
  describeUserHierarchyStructure(params: Connect.Types.DescribeUserHierarchyStructureRequest, callback?: (err: AWSError, data: Connect.Types.DescribeUserHierarchyStructureResponse) => void): Request<Connect.Types.DescribeUserHierarchyStructureResponse, AWSError>;
  /**
   * Describes the hierarchy structure of the specified Amazon Connect instance.
   */
  describeUserHierarchyStructure(callback?: (err: AWSError, data: Connect.Types.DescribeUserHierarchyStructureResponse) => void): Request<Connect.Types.DescribeUserHierarchyStructureResponse, AWSError>;
  /**
   * Describes the specified vocabulary.
   */
  describeVocabulary(params: Connect.Types.DescribeVocabularyRequest, callback?: (err: AWSError, data: Connect.Types.DescribeVocabularyResponse) => void): Request<Connect.Types.DescribeVocabularyResponse, AWSError>;
  /**
   * Describes the specified vocabulary.
   */
  describeVocabulary(callback?: (err: AWSError, data: Connect.Types.DescribeVocabularyResponse) => void): Request<Connect.Types.DescribeVocabularyResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Revokes access to integrated applications from Amazon Connect.
   */
  disassociateApprovedOrigin(params: Connect.Types.DisassociateApprovedOriginRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Revokes access to integrated applications from Amazon Connect.
   */
  disassociateApprovedOrigin(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Revokes authorization from the specified instance to access the specified Amazon Lex or Amazon Lex V2 bot. 
   */
  disassociateBot(params: Connect.Types.DisassociateBotRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Revokes authorization from the specified instance to access the specified Amazon Lex or Amazon Lex V2 bot. 
   */
  disassociateBot(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Removes the storage type configurations for the specified resource type and association ID.
   */
  disassociateInstanceStorageConfig(params: Connect.Types.DisassociateInstanceStorageConfigRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Removes the storage type configurations for the specified resource type and association ID.
   */
  disassociateInstanceStorageConfig(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Remove the Lambda function from the dropdown options available in the relevant flow blocks.
   */
  disassociateLambdaFunction(params: Connect.Types.DisassociateLambdaFunctionRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Remove the Lambda function from the dropdown options available in the relevant flow blocks.
   */
  disassociateLambdaFunction(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Revokes authorization from the specified instance to access the specified Amazon Lex bot.
   */
  disassociateLexBot(params: Connect.Types.DisassociateLexBotRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Revokes authorization from the specified instance to access the specified Amazon Lex bot.
   */
  disassociateLexBot(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the flow association from a phone number claimed to your Amazon Connect instance.  If the number is claimed to a traffic distribution group, and you are calling this API using an instance in the Amazon Web Services Region where the traffic distribution group was created, you can use either a full phone number ARN or UUID value for the PhoneNumberId URI request parameter. However, if the number is claimed to a traffic distribution group and you are calling this API using an instance in the alternate Amazon Web Services Region associated with the traffic distribution group, you must provide a full phone number ARN. If a UUID is provided in this scenario, you will receive a ResourceNotFoundException. 
   */
  disassociatePhoneNumberContactFlow(params: Connect.Types.DisassociatePhoneNumberContactFlowRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the flow association from a phone number claimed to your Amazon Connect instance.  If the number is claimed to a traffic distribution group, and you are calling this API using an instance in the Amazon Web Services Region where the traffic distribution group was created, you can use either a full phone number ARN or UUID value for the PhoneNumberId URI request parameter. However, if the number is claimed to a traffic distribution group and you are calling this API using an instance in the alternate Amazon Web Services Region associated with the traffic distribution group, you must provide a full phone number ARN. If a UUID is provided in this scenario, you will receive a ResourceNotFoundException. 
   */
  disassociatePhoneNumberContactFlow(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Disassociates a set of quick connects from a queue.
   */
  disassociateQueueQuickConnects(params: Connect.Types.DisassociateQueueQuickConnectsRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Disassociates a set of quick connects from a queue.
   */
  disassociateQueueQuickConnects(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Disassociates a set of queues from a routing profile.
   */
  disassociateRoutingProfileQueues(params: Connect.Types.DisassociateRoutingProfileQueuesRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Disassociates a set of queues from a routing profile.
   */
  disassociateRoutingProfileQueues(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Deletes the specified security key.
   */
  disassociateSecurityKey(params: Connect.Types.DisassociateSecurityKeyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Deletes the specified security key.
   */
  disassociateSecurityKey(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Dismisses contacts from an agent’s CCP and returns the agent to an available state, which allows the agent to receive a new routed contact. Contacts can only be dismissed if they are in a MISSED, ERROR, ENDED, or REJECTED state in the Agent Event Stream.
   */
  dismissUserContact(params: Connect.Types.DismissUserContactRequest, callback?: (err: AWSError, data: Connect.Types.DismissUserContactResponse) => void): Request<Connect.Types.DismissUserContactResponse, AWSError>;
  /**
   * Dismisses contacts from an agent’s CCP and returns the agent to an available state, which allows the agent to receive a new routed contact. Contacts can only be dismissed if they are in a MISSED, ERROR, ENDED, or REJECTED state in the Agent Event Stream.
   */
  dismissUserContact(callback?: (err: AWSError, data: Connect.Types.DismissUserContactResponse) => void): Request<Connect.Types.DismissUserContactResponse, AWSError>;
  /**
   * Retrieves the contact attributes for the specified contact.
   */
  getContactAttributes(params: Connect.Types.GetContactAttributesRequest, callback?: (err: AWSError, data: Connect.Types.GetContactAttributesResponse) => void): Request<Connect.Types.GetContactAttributesResponse, AWSError>;
  /**
   * Retrieves the contact attributes for the specified contact.
   */
  getContactAttributes(callback?: (err: AWSError, data: Connect.Types.GetContactAttributesResponse) => void): Request<Connect.Types.GetContactAttributesResponse, AWSError>;
  /**
   * Gets the real-time metric data from the specified Amazon Connect instance. For a description of each metric, see Real-time Metrics Definitions in the Amazon Connect Administrator Guide.
   */
  getCurrentMetricData(params: Connect.Types.GetCurrentMetricDataRequest, callback?: (err: AWSError, data: Connect.Types.GetCurrentMetricDataResponse) => void): Request<Connect.Types.GetCurrentMetricDataResponse, AWSError>;
  /**
   * Gets the real-time metric data from the specified Amazon Connect instance. For a description of each metric, see Real-time Metrics Definitions in the Amazon Connect Administrator Guide.
   */
  getCurrentMetricData(callback?: (err: AWSError, data: Connect.Types.GetCurrentMetricDataResponse) => void): Request<Connect.Types.GetCurrentMetricDataResponse, AWSError>;
  /**
   * Gets the real-time active user data from the specified Amazon Connect instance. 
   */
  getCurrentUserData(params: Connect.Types.GetCurrentUserDataRequest, callback?: (err: AWSError, data: Connect.Types.GetCurrentUserDataResponse) => void): Request<Connect.Types.GetCurrentUserDataResponse, AWSError>;
  /**
   * Gets the real-time active user data from the specified Amazon Connect instance. 
   */
  getCurrentUserData(callback?: (err: AWSError, data: Connect.Types.GetCurrentUserDataResponse) => void): Request<Connect.Types.GetCurrentUserDataResponse, AWSError>;
  /**
   * Retrieves a token for federation.  This API doesn't support root users. If you try to invoke GetFederationToken with root credentials, an error message similar to the following one appears:   Provided identity: Principal: .... User: .... cannot be used for federation with Amazon Connect  
   */
  getFederationToken(params: Connect.Types.GetFederationTokenRequest, callback?: (err: AWSError, data: Connect.Types.GetFederationTokenResponse) => void): Request<Connect.Types.GetFederationTokenResponse, AWSError>;
  /**
   * Retrieves a token for federation.  This API doesn't support root users. If you try to invoke GetFederationToken with root credentials, an error message similar to the following one appears:   Provided identity: Principal: .... User: .... cannot be used for federation with Amazon Connect  
   */
  getFederationToken(callback?: (err: AWSError, data: Connect.Types.GetFederationTokenResponse) => void): Request<Connect.Types.GetFederationTokenResponse, AWSError>;
  /**
   * Gets historical metric data from the specified Amazon Connect instance. For a description of each historical metric, see Historical Metrics Definitions in the Amazon Connect Administrator Guide.
   */
  getMetricData(params: Connect.Types.GetMetricDataRequest, callback?: (err: AWSError, data: Connect.Types.GetMetricDataResponse) => void): Request<Connect.Types.GetMetricDataResponse, AWSError>;
  /**
   * Gets historical metric data from the specified Amazon Connect instance. For a description of each historical metric, see Historical Metrics Definitions in the Amazon Connect Administrator Guide.
   */
  getMetricData(callback?: (err: AWSError, data: Connect.Types.GetMetricDataResponse) => void): Request<Connect.Types.GetMetricDataResponse, AWSError>;
  /**
   * Gets details about a specific task template in the specified Amazon Connect instance.
   */
  getTaskTemplate(params: Connect.Types.GetTaskTemplateRequest, callback?: (err: AWSError, data: Connect.Types.GetTaskTemplateResponse) => void): Request<Connect.Types.GetTaskTemplateResponse, AWSError>;
  /**
   * Gets details about a specific task template in the specified Amazon Connect instance.
   */
  getTaskTemplate(callback?: (err: AWSError, data: Connect.Types.GetTaskTemplateResponse) => void): Request<Connect.Types.GetTaskTemplateResponse, AWSError>;
  /**
   * Retrieves the current traffic distribution for a given traffic distribution group.
   */
  getTrafficDistribution(params: Connect.Types.GetTrafficDistributionRequest, callback?: (err: AWSError, data: Connect.Types.GetTrafficDistributionResponse) => void): Request<Connect.Types.GetTrafficDistributionResponse, AWSError>;
  /**
   * Retrieves the current traffic distribution for a given traffic distribution group.
   */
  getTrafficDistribution(callback?: (err: AWSError, data: Connect.Types.GetTrafficDistributionResponse) => void): Request<Connect.Types.GetTrafficDistributionResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Lists agent statuses.
   */
  listAgentStatuses(params: Connect.Types.ListAgentStatusRequest, callback?: (err: AWSError, data: Connect.Types.ListAgentStatusResponse) => void): Request<Connect.Types.ListAgentStatusResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Lists agent statuses.
   */
  listAgentStatuses(callback?: (err: AWSError, data: Connect.Types.ListAgentStatusResponse) => void): Request<Connect.Types.ListAgentStatusResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Returns a paginated list of all approved origins associated with the instance.
   */
  listApprovedOrigins(params: Connect.Types.ListApprovedOriginsRequest, callback?: (err: AWSError, data: Connect.Types.ListApprovedOriginsResponse) => void): Request<Connect.Types.ListApprovedOriginsResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Returns a paginated list of all approved origins associated with the instance.
   */
  listApprovedOrigins(callback?: (err: AWSError, data: Connect.Types.ListApprovedOriginsResponse) => void): Request<Connect.Types.ListApprovedOriginsResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. For the specified version of Amazon Lex, returns a paginated list of all the Amazon Lex bots currently associated with the instance. Use this API to returns both Amazon Lex V1 and V2 bots.
   */
  listBots(params: Connect.Types.ListBotsRequest, callback?: (err: AWSError, data: Connect.Types.ListBotsResponse) => void): Request<Connect.Types.ListBotsResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. For the specified version of Amazon Lex, returns a paginated list of all the Amazon Lex bots currently associated with the instance. Use this API to returns both Amazon Lex V1 and V2 bots.
   */
  listBots(callback?: (err: AWSError, data: Connect.Types.ListBotsResponse) => void): Request<Connect.Types.ListBotsResponse, AWSError>;
  /**
   * Provides information about the flow modules for the specified Amazon Connect instance.
   */
  listContactFlowModules(params: Connect.Types.ListContactFlowModulesRequest, callback?: (err: AWSError, data: Connect.Types.ListContactFlowModulesResponse) => void): Request<Connect.Types.ListContactFlowModulesResponse, AWSError>;
  /**
   * Provides information about the flow modules for the specified Amazon Connect instance.
   */
  listContactFlowModules(callback?: (err: AWSError, data: Connect.Types.ListContactFlowModulesResponse) => void): Request<Connect.Types.ListContactFlowModulesResponse, AWSError>;
  /**
   * Provides information about the flows for the specified Amazon Connect instance. You can also create and update flows using the Amazon Connect Flow language. For more information about flows, see Flows in the Amazon Connect Administrator Guide.
   */
  listContactFlows(params: Connect.Types.ListContactFlowsRequest, callback?: (err: AWSError, data: Connect.Types.ListContactFlowsResponse) => void): Request<Connect.Types.ListContactFlowsResponse, AWSError>;
  /**
   * Provides information about the flows for the specified Amazon Connect instance. You can also create and update flows using the Amazon Connect Flow language. For more information about flows, see Flows in the Amazon Connect Administrator Guide.
   */
  listContactFlows(callback?: (err: AWSError, data: Connect.Types.ListContactFlowsResponse) => void): Request<Connect.Types.ListContactFlowsResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. For the specified referenceTypes, returns a list of references associated with the contact. 
   */
  listContactReferences(params: Connect.Types.ListContactReferencesRequest, callback?: (err: AWSError, data: Connect.Types.ListContactReferencesResponse) => void): Request<Connect.Types.ListContactReferencesResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. For the specified referenceTypes, returns a list of references associated with the contact. 
   */
  listContactReferences(callback?: (err: AWSError, data: Connect.Types.ListContactReferencesResponse) => void): Request<Connect.Types.ListContactReferencesResponse, AWSError>;
  /**
   * Lists the default vocabularies for the specified Amazon Connect instance.
   */
  listDefaultVocabularies(params: Connect.Types.ListDefaultVocabulariesRequest, callback?: (err: AWSError, data: Connect.Types.ListDefaultVocabulariesResponse) => void): Request<Connect.Types.ListDefaultVocabulariesResponse, AWSError>;
  /**
   * Lists the default vocabularies for the specified Amazon Connect instance.
   */
  listDefaultVocabularies(callback?: (err: AWSError, data: Connect.Types.ListDefaultVocabulariesResponse) => void): Request<Connect.Types.ListDefaultVocabulariesResponse, AWSError>;
  /**
   * Provides information about the hours of operation for the specified Amazon Connect instance. For more information about hours of operation, see Set the Hours of Operation for a Queue in the Amazon Connect Administrator Guide.
   */
  listHoursOfOperations(params: Connect.Types.ListHoursOfOperationsRequest, callback?: (err: AWSError, data: Connect.Types.ListHoursOfOperationsResponse) => void): Request<Connect.Types.ListHoursOfOperationsResponse, AWSError>;
  /**
   * Provides information about the hours of operation for the specified Amazon Connect instance. For more information about hours of operation, see Set the Hours of Operation for a Queue in the Amazon Connect Administrator Guide.
   */
  listHoursOfOperations(callback?: (err: AWSError, data: Connect.Types.ListHoursOfOperationsResponse) => void): Request<Connect.Types.ListHoursOfOperationsResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Returns a paginated list of all attribute types for the given instance.
   */
  listInstanceAttributes(params: Connect.Types.ListInstanceAttributesRequest, callback?: (err: AWSError, data: Connect.Types.ListInstanceAttributesResponse) => void): Request<Connect.Types.ListInstanceAttributesResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Returns a paginated list of all attribute types for the given instance.
   */
  listInstanceAttributes(callback?: (err: AWSError, data: Connect.Types.ListInstanceAttributesResponse) => void): Request<Connect.Types.ListInstanceAttributesResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Returns a paginated list of storage configs for the identified instance and resource type.
   */
  listInstanceStorageConfigs(params: Connect.Types.ListInstanceStorageConfigsRequest, callback?: (err: AWSError, data: Connect.Types.ListInstanceStorageConfigsResponse) => void): Request<Connect.Types.ListInstanceStorageConfigsResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Returns a paginated list of storage configs for the identified instance and resource type.
   */
  listInstanceStorageConfigs(callback?: (err: AWSError, data: Connect.Types.ListInstanceStorageConfigsResponse) => void): Request<Connect.Types.ListInstanceStorageConfigsResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Return a list of instances which are in active state, creation-in-progress state, and failed state. Instances that aren't successfully created (they are in a failed state) are returned only for 24 hours after the CreateInstance API was invoked.
   */
  listInstances(params: Connect.Types.ListInstancesRequest, callback?: (err: AWSError, data: Connect.Types.ListInstancesResponse) => void): Request<Connect.Types.ListInstancesResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Return a list of instances which are in active state, creation-in-progress state, and failed state. Instances that aren't successfully created (they are in a failed state) are returned only for 24 hours after the CreateInstance API was invoked.
   */
  listInstances(callback?: (err: AWSError, data: Connect.Types.ListInstancesResponse) => void): Request<Connect.Types.ListInstancesResponse, AWSError>;
  /**
   * Provides summary information about the Amazon Web Services resource associations for the specified Amazon Connect instance.
   */
  listIntegrationAssociations(params: Connect.Types.ListIntegrationAssociationsRequest, callback?: (err: AWSError, data: Connect.Types.ListIntegrationAssociationsResponse) => void): Request<Connect.Types.ListIntegrationAssociationsResponse, AWSError>;
  /**
   * Provides summary information about the Amazon Web Services resource associations for the specified Amazon Connect instance.
   */
  listIntegrationAssociations(callback?: (err: AWSError, data: Connect.Types.ListIntegrationAssociationsResponse) => void): Request<Connect.Types.ListIntegrationAssociationsResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Returns a paginated list of all Lambda functions that display in the dropdown options in the relevant flow blocks.
   */
  listLambdaFunctions(params: Connect.Types.ListLambdaFunctionsRequest, callback?: (err: AWSError, data: Connect.Types.ListLambdaFunctionsResponse) => void): Request<Connect.Types.ListLambdaFunctionsResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Returns a paginated list of all Lambda functions that display in the dropdown options in the relevant flow blocks.
   */
  listLambdaFunctions(callback?: (err: AWSError, data: Connect.Types.ListLambdaFunctionsResponse) => void): Request<Connect.Types.ListLambdaFunctionsResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Returns a paginated list of all the Amazon Lex V1 bots currently associated with the instance. To return both Amazon Lex V1 and V2 bots, use the ListBots API. 
   */
  listLexBots(params: Connect.Types.ListLexBotsRequest, callback?: (err: AWSError, data: Connect.Types.ListLexBotsResponse) => void): Request<Connect.Types.ListLexBotsResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Returns a paginated list of all the Amazon Lex V1 bots currently associated with the instance. To return both Amazon Lex V1 and V2 bots, use the ListBots API. 
   */
  listLexBots(callback?: (err: AWSError, data: Connect.Types.ListLexBotsResponse) => void): Request<Connect.Types.ListLexBotsResponse, AWSError>;
  /**
   * Provides information about the phone numbers for the specified Amazon Connect instance.  For more information about phone numbers, see Set Up Phone Numbers for Your Contact Center in the Amazon Connect Administrator Guide.  The phone number Arn value that is returned from each of the items in the PhoneNumberSummaryList cannot be used to tag phone number resources. It will fail with a ResourceNotFoundException. Instead, use the ListPhoneNumbersV2 API. It returns the new phone number ARN that can be used to tag phone number resources. 
   */
  listPhoneNumbers(params: Connect.Types.ListPhoneNumbersRequest, callback?: (err: AWSError, data: Connect.Types.ListPhoneNumbersResponse) => void): Request<Connect.Types.ListPhoneNumbersResponse, AWSError>;
  /**
   * Provides information about the phone numbers for the specified Amazon Connect instance.  For more information about phone numbers, see Set Up Phone Numbers for Your Contact Center in the Amazon Connect Administrator Guide.  The phone number Arn value that is returned from each of the items in the PhoneNumberSummaryList cannot be used to tag phone number resources. It will fail with a ResourceNotFoundException. Instead, use the ListPhoneNumbersV2 API. It returns the new phone number ARN that can be used to tag phone number resources. 
   */
  listPhoneNumbers(callback?: (err: AWSError, data: Connect.Types.ListPhoneNumbersResponse) => void): Request<Connect.Types.ListPhoneNumbersResponse, AWSError>;
  /**
   * Lists phone numbers claimed to your Amazon Connect instance or traffic distribution group. If the provided TargetArn is a traffic distribution group, you can call this API in both Amazon Web Services Regions associated with traffic distribution group. For more information about phone numbers, see Set Up Phone Numbers for Your Contact Center in the Amazon Connect Administrator Guide.
   */
  listPhoneNumbersV2(params: Connect.Types.ListPhoneNumbersV2Request, callback?: (err: AWSError, data: Connect.Types.ListPhoneNumbersV2Response) => void): Request<Connect.Types.ListPhoneNumbersV2Response, AWSError>;
  /**
   * Lists phone numbers claimed to your Amazon Connect instance or traffic distribution group. If the provided TargetArn is a traffic distribution group, you can call this API in both Amazon Web Services Regions associated with traffic distribution group. For more information about phone numbers, see Set Up Phone Numbers for Your Contact Center in the Amazon Connect Administrator Guide.
   */
  listPhoneNumbersV2(callback?: (err: AWSError, data: Connect.Types.ListPhoneNumbersV2Response) => void): Request<Connect.Types.ListPhoneNumbersV2Response, AWSError>;
  /**
   * Provides information about the prompts for the specified Amazon Connect instance.
   */
  listPrompts(params: Connect.Types.ListPromptsRequest, callback?: (err: AWSError, data: Connect.Types.ListPromptsResponse) => void): Request<Connect.Types.ListPromptsResponse, AWSError>;
  /**
   * Provides information about the prompts for the specified Amazon Connect instance.
   */
  listPrompts(callback?: (err: AWSError, data: Connect.Types.ListPromptsResponse) => void): Request<Connect.Types.ListPromptsResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Lists the quick connects associated with a queue.
   */
  listQueueQuickConnects(params: Connect.Types.ListQueueQuickConnectsRequest, callback?: (err: AWSError, data: Connect.Types.ListQueueQuickConnectsResponse) => void): Request<Connect.Types.ListQueueQuickConnectsResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Lists the quick connects associated with a queue.
   */
  listQueueQuickConnects(callback?: (err: AWSError, data: Connect.Types.ListQueueQuickConnectsResponse) => void): Request<Connect.Types.ListQueueQuickConnectsResponse, AWSError>;
  /**
   * Provides information about the queues for the specified Amazon Connect instance. If you do not specify a QueueTypes parameter, both standard and agent queues are returned. This might cause an unexpected truncation of results if you have more than 1000 agents and you limit the number of results of the API call in code. For more information about queues, see Queues: Standard and Agent in the Amazon Connect Administrator Guide.
   */
  listQueues(params: Connect.Types.ListQueuesRequest, callback?: (err: AWSError, data: Connect.Types.ListQueuesResponse) => void): Request<Connect.Types.ListQueuesResponse, AWSError>;
  /**
   * Provides information about the queues for the specified Amazon Connect instance. If you do not specify a QueueTypes parameter, both standard and agent queues are returned. This might cause an unexpected truncation of results if you have more than 1000 agents and you limit the number of results of the API call in code. For more information about queues, see Queues: Standard and Agent in the Amazon Connect Administrator Guide.
   */
  listQueues(callback?: (err: AWSError, data: Connect.Types.ListQueuesResponse) => void): Request<Connect.Types.ListQueuesResponse, AWSError>;
  /**
   * Provides information about the quick connects for the specified Amazon Connect instance. 
   */
  listQuickConnects(params: Connect.Types.ListQuickConnectsRequest, callback?: (err: AWSError, data: Connect.Types.ListQuickConnectsResponse) => void): Request<Connect.Types.ListQuickConnectsResponse, AWSError>;
  /**
   * Provides information about the quick connects for the specified Amazon Connect instance. 
   */
  listQuickConnects(callback?: (err: AWSError, data: Connect.Types.ListQuickConnectsResponse) => void): Request<Connect.Types.ListQuickConnectsResponse, AWSError>;
  /**
   * Lists the queues associated with a routing profile.
   */
  listRoutingProfileQueues(params: Connect.Types.ListRoutingProfileQueuesRequest, callback?: (err: AWSError, data: Connect.Types.ListRoutingProfileQueuesResponse) => void): Request<Connect.Types.ListRoutingProfileQueuesResponse, AWSError>;
  /**
   * Lists the queues associated with a routing profile.
   */
  listRoutingProfileQueues(callback?: (err: AWSError, data: Connect.Types.ListRoutingProfileQueuesResponse) => void): Request<Connect.Types.ListRoutingProfileQueuesResponse, AWSError>;
  /**
   * Provides summary information about the routing profiles for the specified Amazon Connect instance. For more information about routing profiles, see Routing Profiles and Create a Routing Profile in the Amazon Connect Administrator Guide.
   */
  listRoutingProfiles(params: Connect.Types.ListRoutingProfilesRequest, callback?: (err: AWSError, data: Connect.Types.ListRoutingProfilesResponse) => void): Request<Connect.Types.ListRoutingProfilesResponse, AWSError>;
  /**
   * Provides summary information about the routing profiles for the specified Amazon Connect instance. For more information about routing profiles, see Routing Profiles and Create a Routing Profile in the Amazon Connect Administrator Guide.
   */
  listRoutingProfiles(callback?: (err: AWSError, data: Connect.Types.ListRoutingProfilesResponse) => void): Request<Connect.Types.ListRoutingProfilesResponse, AWSError>;
  /**
   * List all rules for the specified Amazon Connect instance.
   */
  listRules(params: Connect.Types.ListRulesRequest, callback?: (err: AWSError, data: Connect.Types.ListRulesResponse) => void): Request<Connect.Types.ListRulesResponse, AWSError>;
  /**
   * List all rules for the specified Amazon Connect instance.
   */
  listRules(callback?: (err: AWSError, data: Connect.Types.ListRulesResponse) => void): Request<Connect.Types.ListRulesResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Returns a paginated list of all security keys associated with the instance.
   */
  listSecurityKeys(params: Connect.Types.ListSecurityKeysRequest, callback?: (err: AWSError, data: Connect.Types.ListSecurityKeysResponse) => void): Request<Connect.Types.ListSecurityKeysResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Returns a paginated list of all security keys associated with the instance.
   */
  listSecurityKeys(callback?: (err: AWSError, data: Connect.Types.ListSecurityKeysResponse) => void): Request<Connect.Types.ListSecurityKeysResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Lists the permissions granted to a security profile.
   */
  listSecurityProfilePermissions(params: Connect.Types.ListSecurityProfilePermissionsRequest, callback?: (err: AWSError, data: Connect.Types.ListSecurityProfilePermissionsResponse) => void): Request<Connect.Types.ListSecurityProfilePermissionsResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Lists the permissions granted to a security profile.
   */
  listSecurityProfilePermissions(callback?: (err: AWSError, data: Connect.Types.ListSecurityProfilePermissionsResponse) => void): Request<Connect.Types.ListSecurityProfilePermissionsResponse, AWSError>;
  /**
   * Provides summary information about the security profiles for the specified Amazon Connect instance. For more information about security profiles, see Security Profiles in the Amazon Connect Administrator Guide.
   */
  listSecurityProfiles(params: Connect.Types.ListSecurityProfilesRequest, callback?: (err: AWSError, data: Connect.Types.ListSecurityProfilesResponse) => void): Request<Connect.Types.ListSecurityProfilesResponse, AWSError>;
  /**
   * Provides summary information about the security profiles for the specified Amazon Connect instance. For more information about security profiles, see Security Profiles in the Amazon Connect Administrator Guide.
   */
  listSecurityProfiles(callback?: (err: AWSError, data: Connect.Types.ListSecurityProfilesResponse) => void): Request<Connect.Types.ListSecurityProfilesResponse, AWSError>;
  /**
   * Lists the tags for the specified resource. For sample policies that use tags, see Amazon Connect Identity-Based Policy Examples in the Amazon Connect Administrator Guide.
   */
  listTagsForResource(params: Connect.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: Connect.Types.ListTagsForResourceResponse) => void): Request<Connect.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists the tags for the specified resource. For sample policies that use tags, see Amazon Connect Identity-Based Policy Examples in the Amazon Connect Administrator Guide.
   */
  listTagsForResource(callback?: (err: AWSError, data: Connect.Types.ListTagsForResourceResponse) => void): Request<Connect.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists task templates for the specified Amazon Connect instance.
   */
  listTaskTemplates(params: Connect.Types.ListTaskTemplatesRequest, callback?: (err: AWSError, data: Connect.Types.ListTaskTemplatesResponse) => void): Request<Connect.Types.ListTaskTemplatesResponse, AWSError>;
  /**
   * Lists task templates for the specified Amazon Connect instance.
   */
  listTaskTemplates(callback?: (err: AWSError, data: Connect.Types.ListTaskTemplatesResponse) => void): Request<Connect.Types.ListTaskTemplatesResponse, AWSError>;
  /**
   * Lists traffic distribution groups.
   */
  listTrafficDistributionGroups(params: Connect.Types.ListTrafficDistributionGroupsRequest, callback?: (err: AWSError, data: Connect.Types.ListTrafficDistributionGroupsResponse) => void): Request<Connect.Types.ListTrafficDistributionGroupsResponse, AWSError>;
  /**
   * Lists traffic distribution groups.
   */
  listTrafficDistributionGroups(callback?: (err: AWSError, data: Connect.Types.ListTrafficDistributionGroupsResponse) => void): Request<Connect.Types.ListTrafficDistributionGroupsResponse, AWSError>;
  /**
   * Lists the use cases for the integration association. 
   */
  listUseCases(params: Connect.Types.ListUseCasesRequest, callback?: (err: AWSError, data: Connect.Types.ListUseCasesResponse) => void): Request<Connect.Types.ListUseCasesResponse, AWSError>;
  /**
   * Lists the use cases for the integration association. 
   */
  listUseCases(callback?: (err: AWSError, data: Connect.Types.ListUseCasesResponse) => void): Request<Connect.Types.ListUseCasesResponse, AWSError>;
  /**
   * Provides summary information about the hierarchy groups for the specified Amazon Connect instance. For more information about agent hierarchies, see Set Up Agent Hierarchies in the Amazon Connect Administrator Guide.
   */
  listUserHierarchyGroups(params: Connect.Types.ListUserHierarchyGroupsRequest, callback?: (err: AWSError, data: Connect.Types.ListUserHierarchyGroupsResponse) => void): Request<Connect.Types.ListUserHierarchyGroupsResponse, AWSError>;
  /**
   * Provides summary information about the hierarchy groups for the specified Amazon Connect instance. For more information about agent hierarchies, see Set Up Agent Hierarchies in the Amazon Connect Administrator Guide.
   */
  listUserHierarchyGroups(callback?: (err: AWSError, data: Connect.Types.ListUserHierarchyGroupsResponse) => void): Request<Connect.Types.ListUserHierarchyGroupsResponse, AWSError>;
  /**
   * Provides summary information about the users for the specified Amazon Connect instance.
   */
  listUsers(params: Connect.Types.ListUsersRequest, callback?: (err: AWSError, data: Connect.Types.ListUsersResponse) => void): Request<Connect.Types.ListUsersResponse, AWSError>;
  /**
   * Provides summary information about the users for the specified Amazon Connect instance.
   */
  listUsers(callback?: (err: AWSError, data: Connect.Types.ListUsersResponse) => void): Request<Connect.Types.ListUsersResponse, AWSError>;
  /**
   * Initiates silent monitoring of a contact. The Contact Control Panel (CCP) of the user specified by userId will be set to silent monitoring mode on the contact.
   */
  monitorContact(params: Connect.Types.MonitorContactRequest, callback?: (err: AWSError, data: Connect.Types.MonitorContactResponse) => void): Request<Connect.Types.MonitorContactResponse, AWSError>;
  /**
   * Initiates silent monitoring of a contact. The Contact Control Panel (CCP) of the user specified by userId will be set to silent monitoring mode on the contact.
   */
  monitorContact(callback?: (err: AWSError, data: Connect.Types.MonitorContactResponse) => void): Request<Connect.Types.MonitorContactResponse, AWSError>;
  /**
   * Changes the current status of a user or agent in Amazon Connect. If the agent is currently handling a contact, this sets the agent's next status. For more information, see Agent status and Set your next status in the Amazon Connect Administrator Guide.
   */
  putUserStatus(params: Connect.Types.PutUserStatusRequest, callback?: (err: AWSError, data: Connect.Types.PutUserStatusResponse) => void): Request<Connect.Types.PutUserStatusResponse, AWSError>;
  /**
   * Changes the current status of a user or agent in Amazon Connect. If the agent is currently handling a contact, this sets the agent's next status. For more information, see Agent status and Set your next status in the Amazon Connect Administrator Guide.
   */
  putUserStatus(callback?: (err: AWSError, data: Connect.Types.PutUserStatusResponse) => void): Request<Connect.Types.PutUserStatusResponse, AWSError>;
  /**
   * Releases a phone number previously claimed to an Amazon Connect instance or traffic distribution group. You can call this API only in the Amazon Web Services Region where the number was claimed.  To release phone numbers from a traffic distribution group, use the ReleasePhoneNumber API, not the Amazon Connect console. After releasing a phone number, the phone number enters into a cooldown period of 30 days. It cannot be searched for or claimed again until the period has ended. If you accidentally release a phone number, contact Amazon Web Services Support. 
   */
  releasePhoneNumber(params: Connect.Types.ReleasePhoneNumberRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Releases a phone number previously claimed to an Amazon Connect instance or traffic distribution group. You can call this API only in the Amazon Web Services Region where the number was claimed.  To release phone numbers from a traffic distribution group, use the ReleasePhoneNumber API, not the Amazon Connect console. After releasing a phone number, the phone number enters into a cooldown period of 30 days. It cannot be searched for or claimed again until the period has ended. If you accidentally release a phone number, contact Amazon Web Services Support. 
   */
  releasePhoneNumber(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Replicates an Amazon Connect instance in the specified Amazon Web Services Region. For more information about replicating an Amazon Connect instance, see Create a replica of your existing Amazon Connect instance in the Amazon Connect Administrator Guide.
   */
  replicateInstance(params: Connect.Types.ReplicateInstanceRequest, callback?: (err: AWSError, data: Connect.Types.ReplicateInstanceResponse) => void): Request<Connect.Types.ReplicateInstanceResponse, AWSError>;
  /**
   * Replicates an Amazon Connect instance in the specified Amazon Web Services Region. For more information about replicating an Amazon Connect instance, see Create a replica of your existing Amazon Connect instance in the Amazon Connect Administrator Guide.
   */
  replicateInstance(callback?: (err: AWSError, data: Connect.Types.ReplicateInstanceResponse) => void): Request<Connect.Types.ReplicateInstanceResponse, AWSError>;
  /**
   * When a contact is being recorded, and the recording has been suspended using SuspendContactRecording, this API resumes recording the call. Only voice recordings are supported at this time.
   */
  resumeContactRecording(params: Connect.Types.ResumeContactRecordingRequest, callback?: (err: AWSError, data: Connect.Types.ResumeContactRecordingResponse) => void): Request<Connect.Types.ResumeContactRecordingResponse, AWSError>;
  /**
   * When a contact is being recorded, and the recording has been suspended using SuspendContactRecording, this API resumes recording the call. Only voice recordings are supported at this time.
   */
  resumeContactRecording(callback?: (err: AWSError, data: Connect.Types.ResumeContactRecordingResponse) => void): Request<Connect.Types.ResumeContactRecordingResponse, AWSError>;
  /**
   * Searches for available phone numbers that you can claim to your Amazon Connect instance or traffic distribution group. If the provided TargetArn is a traffic distribution group, you can call this API in both Amazon Web Services Regions associated with the traffic distribution group.
   */
  searchAvailablePhoneNumbers(params: Connect.Types.SearchAvailablePhoneNumbersRequest, callback?: (err: AWSError, data: Connect.Types.SearchAvailablePhoneNumbersResponse) => void): Request<Connect.Types.SearchAvailablePhoneNumbersResponse, AWSError>;
  /**
   * Searches for available phone numbers that you can claim to your Amazon Connect instance or traffic distribution group. If the provided TargetArn is a traffic distribution group, you can call this API in both Amazon Web Services Regions associated with the traffic distribution group.
   */
  searchAvailablePhoneNumbers(callback?: (err: AWSError, data: Connect.Types.SearchAvailablePhoneNumbersResponse) => void): Request<Connect.Types.SearchAvailablePhoneNumbersResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Searches queues in an Amazon Connect instance, with optional filtering.
   */
  searchQueues(params: Connect.Types.SearchQueuesRequest, callback?: (err: AWSError, data: Connect.Types.SearchQueuesResponse) => void): Request<Connect.Types.SearchQueuesResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Searches queues in an Amazon Connect instance, with optional filtering.
   */
  searchQueues(callback?: (err: AWSError, data: Connect.Types.SearchQueuesResponse) => void): Request<Connect.Types.SearchQueuesResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Searches routing profiles in an Amazon Connect instance, with optional filtering.
   */
  searchRoutingProfiles(params: Connect.Types.SearchRoutingProfilesRequest, callback?: (err: AWSError, data: Connect.Types.SearchRoutingProfilesResponse) => void): Request<Connect.Types.SearchRoutingProfilesResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Searches routing profiles in an Amazon Connect instance, with optional filtering.
   */
  searchRoutingProfiles(callback?: (err: AWSError, data: Connect.Types.SearchRoutingProfilesResponse) => void): Request<Connect.Types.SearchRoutingProfilesResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Searches security profiles in an Amazon Connect instance, with optional filtering.
   */
  searchSecurityProfiles(params: Connect.Types.SearchSecurityProfilesRequest, callback?: (err: AWSError, data: Connect.Types.SearchSecurityProfilesResponse) => void): Request<Connect.Types.SearchSecurityProfilesResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Searches security profiles in an Amazon Connect instance, with optional filtering.
   */
  searchSecurityProfiles(callback?: (err: AWSError, data: Connect.Types.SearchSecurityProfilesResponse) => void): Request<Connect.Types.SearchSecurityProfilesResponse, AWSError>;
  /**
   * Searches users in an Amazon Connect instance, with optional filtering.   AfterContactWorkTimeLimit is returned in milliseconds.  
   */
  searchUsers(params: Connect.Types.SearchUsersRequest, callback?: (err: AWSError, data: Connect.Types.SearchUsersResponse) => void): Request<Connect.Types.SearchUsersResponse, AWSError>;
  /**
   * Searches users in an Amazon Connect instance, with optional filtering.   AfterContactWorkTimeLimit is returned in milliseconds.  
   */
  searchUsers(callback?: (err: AWSError, data: Connect.Types.SearchUsersResponse) => void): Request<Connect.Types.SearchUsersResponse, AWSError>;
  /**
   * Searches for vocabularies within a specific Amazon Connect instance using State, NameStartsWith, and LanguageCode.
   */
  searchVocabularies(params: Connect.Types.SearchVocabulariesRequest, callback?: (err: AWSError, data: Connect.Types.SearchVocabulariesResponse) => void): Request<Connect.Types.SearchVocabulariesResponse, AWSError>;
  /**
   * Searches for vocabularies within a specific Amazon Connect instance using State, NameStartsWith, and LanguageCode.
   */
  searchVocabularies(callback?: (err: AWSError, data: Connect.Types.SearchVocabulariesResponse) => void): Request<Connect.Types.SearchVocabulariesResponse, AWSError>;
  /**
   * Initiates a flow to start a new chat for the customer. Response of this API provides a token required to obtain credentials from the CreateParticipantConnection API in the Amazon Connect Participant Service. When a new chat contact is successfully created, clients must subscribe to the participant’s connection for the created chat within 5 minutes. This is achieved by invoking CreateParticipantConnection with WEBSOCKET and CONNECTION_CREDENTIALS.  A 429 error occurs in the following situations:   API rate limit is exceeded. API TPS throttling returns a TooManyRequests exception.   The quota for concurrent active chats is exceeded. Active chat throttling returns a LimitExceededException.   If you use the ChatDurationInMinutes parameter and receive a 400 error, your account may not support the ability to configure custom chat durations. For more information, contact Amazon Web Services Support.  For more information about chat, see Chat in the Amazon Connect Administrator Guide.
   */
  startChatContact(params: Connect.Types.StartChatContactRequest, callback?: (err: AWSError, data: Connect.Types.StartChatContactResponse) => void): Request<Connect.Types.StartChatContactResponse, AWSError>;
  /**
   * Initiates a flow to start a new chat for the customer. Response of this API provides a token required to obtain credentials from the CreateParticipantConnection API in the Amazon Connect Participant Service. When a new chat contact is successfully created, clients must subscribe to the participant’s connection for the created chat within 5 minutes. This is achieved by invoking CreateParticipantConnection with WEBSOCKET and CONNECTION_CREDENTIALS.  A 429 error occurs in the following situations:   API rate limit is exceeded. API TPS throttling returns a TooManyRequests exception.   The quota for concurrent active chats is exceeded. Active chat throttling returns a LimitExceededException.   If you use the ChatDurationInMinutes parameter and receive a 400 error, your account may not support the ability to configure custom chat durations. For more information, contact Amazon Web Services Support.  For more information about chat, see Chat in the Amazon Connect Administrator Guide.
   */
  startChatContact(callback?: (err: AWSError, data: Connect.Types.StartChatContactResponse) => void): Request<Connect.Types.StartChatContactResponse, AWSError>;
  /**
   * Starts recording the contact:    If the API is called before the agent joins the call, recording starts when the agent joins the call.   If the API is called after the agent joins the call, recording starts at the time of the API call.   StartContactRecording is a one-time action. For example, if you use StopContactRecording to stop recording an ongoing call, you can't use StartContactRecording to restart it. For scenarios where the recording has started and you want to suspend and resume it, such as when collecting sensitive information (for example, a credit card number), use SuspendContactRecording and ResumeContactRecording. You can use this API to override the recording behavior configured in the Set recording behavior block. Only voice recordings are supported at this time.
   */
  startContactRecording(params: Connect.Types.StartContactRecordingRequest, callback?: (err: AWSError, data: Connect.Types.StartContactRecordingResponse) => void): Request<Connect.Types.StartContactRecordingResponse, AWSError>;
  /**
   * Starts recording the contact:    If the API is called before the agent joins the call, recording starts when the agent joins the call.   If the API is called after the agent joins the call, recording starts at the time of the API call.   StartContactRecording is a one-time action. For example, if you use StopContactRecording to stop recording an ongoing call, you can't use StartContactRecording to restart it. For scenarios where the recording has started and you want to suspend and resume it, such as when collecting sensitive information (for example, a credit card number), use SuspendContactRecording and ResumeContactRecording. You can use this API to override the recording behavior configured in the Set recording behavior block. Only voice recordings are supported at this time.
   */
  startContactRecording(callback?: (err: AWSError, data: Connect.Types.StartContactRecordingResponse) => void): Request<Connect.Types.StartContactRecordingResponse, AWSError>;
  /**
   *  Initiates real-time message streaming for a new chat contact.  For more information about message streaming, see Enable real-time chat message streaming in the Amazon Connect Administrator Guide.
   */
  startContactStreaming(params: Connect.Types.StartContactStreamingRequest, callback?: (err: AWSError, data: Connect.Types.StartContactStreamingResponse) => void): Request<Connect.Types.StartContactStreamingResponse, AWSError>;
  /**
   *  Initiates real-time message streaming for a new chat contact.  For more information about message streaming, see Enable real-time chat message streaming in the Amazon Connect Administrator Guide.
   */
  startContactStreaming(callback?: (err: AWSError, data: Connect.Types.StartContactStreamingResponse) => void): Request<Connect.Types.StartContactStreamingResponse, AWSError>;
  /**
   * Places an outbound call to a contact, and then initiates the flow. It performs the actions in the flow that's specified (in ContactFlowId). Agents do not initiate the outbound API, which means that they do not dial the contact. If the flow places an outbound call to a contact, and then puts the contact in queue, the call is then routed to the agent, like any other inbound case. There is a 60-second dialing timeout for this operation. If the call is not connected after 60 seconds, it fails.  UK numbers with a 447 prefix are not allowed by default. Before you can dial these UK mobile numbers, you must submit a service quota increase request. For more information, see Amazon Connect Service Quotas in the Amazon Connect Administrator Guide.    Campaign calls are not allowed by default. Before you can make a call with TrafficType = CAMPAIGN, you must submit a service quota increase request to the quota Amazon Connect campaigns.  
   */
  startOutboundVoiceContact(params: Connect.Types.StartOutboundVoiceContactRequest, callback?: (err: AWSError, data: Connect.Types.StartOutboundVoiceContactResponse) => void): Request<Connect.Types.StartOutboundVoiceContactResponse, AWSError>;
  /**
   * Places an outbound call to a contact, and then initiates the flow. It performs the actions in the flow that's specified (in ContactFlowId). Agents do not initiate the outbound API, which means that they do not dial the contact. If the flow places an outbound call to a contact, and then puts the contact in queue, the call is then routed to the agent, like any other inbound case. There is a 60-second dialing timeout for this operation. If the call is not connected after 60 seconds, it fails.  UK numbers with a 447 prefix are not allowed by default. Before you can dial these UK mobile numbers, you must submit a service quota increase request. For more information, see Amazon Connect Service Quotas in the Amazon Connect Administrator Guide.    Campaign calls are not allowed by default. Before you can make a call with TrafficType = CAMPAIGN, you must submit a service quota increase request to the quota Amazon Connect campaigns.  
   */
  startOutboundVoiceContact(callback?: (err: AWSError, data: Connect.Types.StartOutboundVoiceContactResponse) => void): Request<Connect.Types.StartOutboundVoiceContactResponse, AWSError>;
  /**
   * Initiates a flow to start a new task.
   */
  startTaskContact(params: Connect.Types.StartTaskContactRequest, callback?: (err: AWSError, data: Connect.Types.StartTaskContactResponse) => void): Request<Connect.Types.StartTaskContactResponse, AWSError>;
  /**
   * Initiates a flow to start a new task.
   */
  startTaskContact(callback?: (err: AWSError, data: Connect.Types.StartTaskContactResponse) => void): Request<Connect.Types.StartTaskContactResponse, AWSError>;
  /**
   * Ends the specified contact. This call does not work for the following initiation methods:   DISCONNECT   TRANSFER   QUEUE_TRANSFER  
   */
  stopContact(params: Connect.Types.StopContactRequest, callback?: (err: AWSError, data: Connect.Types.StopContactResponse) => void): Request<Connect.Types.StopContactResponse, AWSError>;
  /**
   * Ends the specified contact. This call does not work for the following initiation methods:   DISCONNECT   TRANSFER   QUEUE_TRANSFER  
   */
  stopContact(callback?: (err: AWSError, data: Connect.Types.StopContactResponse) => void): Request<Connect.Types.StopContactResponse, AWSError>;
  /**
   * Stops recording a call when a contact is being recorded. StopContactRecording is a one-time action. If you use StopContactRecording to stop recording an ongoing call, you can't use StartContactRecording to restart it. For scenarios where the recording has started and you want to suspend it for sensitive information (for example, to collect a credit card number), and then restart it, use SuspendContactRecording and ResumeContactRecording. Only voice recordings are supported at this time.
   */
  stopContactRecording(params: Connect.Types.StopContactRecordingRequest, callback?: (err: AWSError, data: Connect.Types.StopContactRecordingResponse) => void): Request<Connect.Types.StopContactRecordingResponse, AWSError>;
  /**
   * Stops recording a call when a contact is being recorded. StopContactRecording is a one-time action. If you use StopContactRecording to stop recording an ongoing call, you can't use StartContactRecording to restart it. For scenarios where the recording has started and you want to suspend it for sensitive information (for example, to collect a credit card number), and then restart it, use SuspendContactRecording and ResumeContactRecording. Only voice recordings are supported at this time.
   */
  stopContactRecording(callback?: (err: AWSError, data: Connect.Types.StopContactRecordingResponse) => void): Request<Connect.Types.StopContactRecordingResponse, AWSError>;
  /**
   *  Ends message streaming on a specified contact. To restart message streaming on that contact, call the StartContactStreaming API. 
   */
  stopContactStreaming(params: Connect.Types.StopContactStreamingRequest, callback?: (err: AWSError, data: Connect.Types.StopContactStreamingResponse) => void): Request<Connect.Types.StopContactStreamingResponse, AWSError>;
  /**
   *  Ends message streaming on a specified contact. To restart message streaming on that contact, call the StartContactStreaming API. 
   */
  stopContactStreaming(callback?: (err: AWSError, data: Connect.Types.StopContactStreamingResponse) => void): Request<Connect.Types.StopContactStreamingResponse, AWSError>;
  /**
   * When a contact is being recorded, this API suspends recording the call. For example, you might suspend the call recording while collecting sensitive information, such as a credit card number. Then use ResumeContactRecording to restart recording.  The period of time that the recording is suspended is filled with silence in the final recording.  Only voice recordings are supported at this time.
   */
  suspendContactRecording(params: Connect.Types.SuspendContactRecordingRequest, callback?: (err: AWSError, data: Connect.Types.SuspendContactRecordingResponse) => void): Request<Connect.Types.SuspendContactRecordingResponse, AWSError>;
  /**
   * When a contact is being recorded, this API suspends recording the call. For example, you might suspend the call recording while collecting sensitive information, such as a credit card number. Then use ResumeContactRecording to restart recording.  The period of time that the recording is suspended is filled with silence in the final recording.  Only voice recordings are supported at this time.
   */
  suspendContactRecording(callback?: (err: AWSError, data: Connect.Types.SuspendContactRecordingResponse) => void): Request<Connect.Types.SuspendContactRecordingResponse, AWSError>;
  /**
   * Adds the specified tags to the specified resource. Some of the supported resource types are agents, routing profiles, queues, quick connects, contact flows, agent statuses, hours of operation, phone numbers, security profiles, and task templates. For a complete list, see Tagging resources in Amazon Connect. For sample policies that use tags, see Amazon Connect Identity-Based Policy Examples in the Amazon Connect Administrator Guide.
   */
  tagResource(params: Connect.Types.TagResourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds the specified tags to the specified resource. Some of the supported resource types are agents, routing profiles, queues, quick connects, contact flows, agent statuses, hours of operation, phone numbers, security profiles, and task templates. For a complete list, see Tagging resources in Amazon Connect. For sample policies that use tags, see Amazon Connect Identity-Based Policy Examples in the Amazon Connect Administrator Guide.
   */
  tagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Transfers contacts from one agent or queue to another agent or queue at any point after a contact is created. You can transfer a contact to another queue by providing the flow which orchestrates the contact to the destination queue. This gives you more control over contact handling and helps you adhere to the service level agreement (SLA) guaranteed to your customers. Note the following requirements:   Transfer is supported for only TASK contacts.   Do not use both QueueId and UserId in the same call.   The following flow types are supported: Inbound flow, Transfer to agent flow, and Transfer to queue flow.   The TransferContact API can be called only on active contacts.   A contact cannot be transferred more than 11 times.  
   */
  transferContact(params: Connect.Types.TransferContactRequest, callback?: (err: AWSError, data: Connect.Types.TransferContactResponse) => void): Request<Connect.Types.TransferContactResponse, AWSError>;
  /**
   * Transfers contacts from one agent or queue to another agent or queue at any point after a contact is created. You can transfer a contact to another queue by providing the flow which orchestrates the contact to the destination queue. This gives you more control over contact handling and helps you adhere to the service level agreement (SLA) guaranteed to your customers. Note the following requirements:   Transfer is supported for only TASK contacts.   Do not use both QueueId and UserId in the same call.   The following flow types are supported: Inbound flow, Transfer to agent flow, and Transfer to queue flow.   The TransferContact API can be called only on active contacts.   A contact cannot be transferred more than 11 times.  
   */
  transferContact(callback?: (err: AWSError, data: Connect.Types.TransferContactResponse) => void): Request<Connect.Types.TransferContactResponse, AWSError>;
  /**
   * Removes the specified tags from the specified resource.
   */
  untagResource(params: Connect.Types.UntagResourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the specified tags from the specified resource.
   */
  untagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Updates agent status.
   */
  updateAgentStatus(params: Connect.Types.UpdateAgentStatusRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Updates agent status.
   */
  updateAgentStatus(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Adds or updates user-defined contact information associated with the specified contact. At least one field to be updated must be present in the request.  You can add or update user-defined contact information for both ongoing and completed contacts. 
   */
  updateContact(params: Connect.Types.UpdateContactRequest, callback?: (err: AWSError, data: Connect.Types.UpdateContactResponse) => void): Request<Connect.Types.UpdateContactResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Adds or updates user-defined contact information associated with the specified contact. At least one field to be updated must be present in the request.  You can add or update user-defined contact information for both ongoing and completed contacts. 
   */
  updateContact(callback?: (err: AWSError, data: Connect.Types.UpdateContactResponse) => void): Request<Connect.Types.UpdateContactResponse, AWSError>;
  /**
   * Creates or updates user-defined contact attributes associated with the specified contact. You can create or update user-defined attributes for both ongoing and completed contacts. For example, while the call is active, you can update the customer's name or the reason the customer called. You can add notes about steps that the agent took during the call that display to the next agent that takes the call. You can also update attributes for a contact using data from your CRM application and save the data with the contact in Amazon Connect. You could also flag calls for additional analysis, such as legal review or to identify abusive callers. Contact attributes are available in Amazon Connect for 24 months, and are then deleted. For information about contact record retention and the maximum size of the contact record attributes section, see Feature specifications in the Amazon Connect Administrator Guide. 
   */
  updateContactAttributes(params: Connect.Types.UpdateContactAttributesRequest, callback?: (err: AWSError, data: Connect.Types.UpdateContactAttributesResponse) => void): Request<Connect.Types.UpdateContactAttributesResponse, AWSError>;
  /**
   * Creates or updates user-defined contact attributes associated with the specified contact. You can create or update user-defined attributes for both ongoing and completed contacts. For example, while the call is active, you can update the customer's name or the reason the customer called. You can add notes about steps that the agent took during the call that display to the next agent that takes the call. You can also update attributes for a contact using data from your CRM application and save the data with the contact in Amazon Connect. You could also flag calls for additional analysis, such as legal review or to identify abusive callers. Contact attributes are available in Amazon Connect for 24 months, and are then deleted. For information about contact record retention and the maximum size of the contact record attributes section, see Feature specifications in the Amazon Connect Administrator Guide. 
   */
  updateContactAttributes(callback?: (err: AWSError, data: Connect.Types.UpdateContactAttributesResponse) => void): Request<Connect.Types.UpdateContactAttributesResponse, AWSError>;
  /**
   * Updates the specified flow. You can also create and update flows using the Amazon Connect Flow language.
   */
  updateContactFlowContent(params: Connect.Types.UpdateContactFlowContentRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the specified flow. You can also create and update flows using the Amazon Connect Flow language.
   */
  updateContactFlowContent(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates metadata about specified flow.
   */
  updateContactFlowMetadata(params: Connect.Types.UpdateContactFlowMetadataRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates metadata about specified flow.
   */
  updateContactFlowMetadata(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates specified flow module for the specified Amazon Connect instance. 
   */
  updateContactFlowModuleContent(params: Connect.Types.UpdateContactFlowModuleContentRequest, callback?: (err: AWSError, data: Connect.Types.UpdateContactFlowModuleContentResponse) => void): Request<Connect.Types.UpdateContactFlowModuleContentResponse, AWSError>;
  /**
   * Updates specified flow module for the specified Amazon Connect instance. 
   */
  updateContactFlowModuleContent(callback?: (err: AWSError, data: Connect.Types.UpdateContactFlowModuleContentResponse) => void): Request<Connect.Types.UpdateContactFlowModuleContentResponse, AWSError>;
  /**
   * Updates metadata about specified flow module.
   */
  updateContactFlowModuleMetadata(params: Connect.Types.UpdateContactFlowModuleMetadataRequest, callback?: (err: AWSError, data: Connect.Types.UpdateContactFlowModuleMetadataResponse) => void): Request<Connect.Types.UpdateContactFlowModuleMetadataResponse, AWSError>;
  /**
   * Updates metadata about specified flow module.
   */
  updateContactFlowModuleMetadata(callback?: (err: AWSError, data: Connect.Types.UpdateContactFlowModuleMetadataResponse) => void): Request<Connect.Types.UpdateContactFlowModuleMetadataResponse, AWSError>;
  /**
   * The name of the flow. You can also create and update flows using the Amazon Connect Flow language.
   */
  updateContactFlowName(params: Connect.Types.UpdateContactFlowNameRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * The name of the flow. You can also create and update flows using the Amazon Connect Flow language.
   */
  updateContactFlowName(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the scheduled time of a task contact that is already scheduled.
   */
  updateContactSchedule(params: Connect.Types.UpdateContactScheduleRequest, callback?: (err: AWSError, data: Connect.Types.UpdateContactScheduleResponse) => void): Request<Connect.Types.UpdateContactScheduleResponse, AWSError>;
  /**
   * Updates the scheduled time of a task contact that is already scheduled.
   */
  updateContactSchedule(callback?: (err: AWSError, data: Connect.Types.UpdateContactScheduleResponse) => void): Request<Connect.Types.UpdateContactScheduleResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Updates the hours of operation.
   */
  updateHoursOfOperation(params: Connect.Types.UpdateHoursOfOperationRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Updates the hours of operation.
   */
  updateHoursOfOperation(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Updates the value for the specified attribute type.
   */
  updateInstanceAttribute(params: Connect.Types.UpdateInstanceAttributeRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Updates the value for the specified attribute type.
   */
  updateInstanceAttribute(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Updates an existing configuration for a resource type. This API is idempotent.
   */
  updateInstanceStorageConfig(params: Connect.Types.UpdateInstanceStorageConfigRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Updates an existing configuration for a resource type. This API is idempotent.
   */
  updateInstanceStorageConfig(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates timeouts for when human chat participants are to be considered idle, and when agents are automatically disconnected from a chat due to idleness. You can set four timers:   Customer idle timeout   Customer auto-disconnect timeout   Agent idle timeout   Agent auto-disconnect timeout   For more information about how chat timeouts work, see Set up chat timeouts for human participants. 
   */
  updateParticipantRoleConfig(params: Connect.Types.UpdateParticipantRoleConfigRequest, callback?: (err: AWSError, data: Connect.Types.UpdateParticipantRoleConfigResponse) => void): Request<Connect.Types.UpdateParticipantRoleConfigResponse, AWSError>;
  /**
   * Updates timeouts for when human chat participants are to be considered idle, and when agents are automatically disconnected from a chat due to idleness. You can set four timers:   Customer idle timeout   Customer auto-disconnect timeout   Agent idle timeout   Agent auto-disconnect timeout   For more information about how chat timeouts work, see Set up chat timeouts for human participants. 
   */
  updateParticipantRoleConfig(callback?: (err: AWSError, data: Connect.Types.UpdateParticipantRoleConfigResponse) => void): Request<Connect.Types.UpdateParticipantRoleConfigResponse, AWSError>;
  /**
   * Updates your claimed phone number from its current Amazon Connect instance or traffic distribution group to another Amazon Connect instance or traffic distribution group in the same Amazon Web Services Region.  You can call DescribePhoneNumber API to verify the status of a previous UpdatePhoneNumber operation. 
   */
  updatePhoneNumber(params: Connect.Types.UpdatePhoneNumberRequest, callback?: (err: AWSError, data: Connect.Types.UpdatePhoneNumberResponse) => void): Request<Connect.Types.UpdatePhoneNumberResponse, AWSError>;
  /**
   * Updates your claimed phone number from its current Amazon Connect instance or traffic distribution group to another Amazon Connect instance or traffic distribution group in the same Amazon Web Services Region.  You can call DescribePhoneNumber API to verify the status of a previous UpdatePhoneNumber operation. 
   */
  updatePhoneNumber(callback?: (err: AWSError, data: Connect.Types.UpdatePhoneNumberResponse) => void): Request<Connect.Types.UpdatePhoneNumberResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Updates the hours of operation for the specified queue.
   */
  updateQueueHoursOfOperation(params: Connect.Types.UpdateQueueHoursOfOperationRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Updates the hours of operation for the specified queue.
   */
  updateQueueHoursOfOperation(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Updates the maximum number of contacts allowed in a queue before it is considered full.
   */
  updateQueueMaxContacts(params: Connect.Types.UpdateQueueMaxContactsRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Updates the maximum number of contacts allowed in a queue before it is considered full.
   */
  updateQueueMaxContacts(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Updates the name and description of a queue. At least Name or Description must be provided.
   */
  updateQueueName(params: Connect.Types.UpdateQueueNameRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Updates the name and description of a queue. At least Name or Description must be provided.
   */
  updateQueueName(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Updates the outbound caller ID name, number, and outbound whisper flow for a specified queue.  If the number being used in the input is claimed to a traffic distribution group, and you are calling this API using an instance in the Amazon Web Services Region where the traffic distribution group was created, you can use either a full phone number ARN or UUID value for the OutboundCallerIdNumberId value of the OutboundCallerConfig request body parameter. However, if the number is claimed to a traffic distribution group and you are calling this API using an instance in the alternate Amazon Web Services Region associated with the traffic distribution group, you must provide a full phone number ARN. If a UUID is provided in this scenario, you will receive a ResourceNotFoundException. 
   */
  updateQueueOutboundCallerConfig(params: Connect.Types.UpdateQueueOutboundCallerConfigRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Updates the outbound caller ID name, number, and outbound whisper flow for a specified queue.  If the number being used in the input is claimed to a traffic distribution group, and you are calling this API using an instance in the Amazon Web Services Region where the traffic distribution group was created, you can use either a full phone number ARN or UUID value for the OutboundCallerIdNumberId value of the OutboundCallerConfig request body parameter. However, if the number is claimed to a traffic distribution group and you are calling this API using an instance in the alternate Amazon Web Services Region associated with the traffic distribution group, you must provide a full phone number ARN. If a UUID is provided in this scenario, you will receive a ResourceNotFoundException. 
   */
  updateQueueOutboundCallerConfig(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Updates the status of the queue.
   */
  updateQueueStatus(params: Connect.Types.UpdateQueueStatusRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Updates the status of the queue.
   */
  updateQueueStatus(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the configuration settings for the specified quick connect.
   */
  updateQuickConnectConfig(params: Connect.Types.UpdateQuickConnectConfigRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the configuration settings for the specified quick connect.
   */
  updateQuickConnectConfig(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the name and description of a quick connect. The request accepts the following data in JSON format. At least Name or Description must be provided.
   */
  updateQuickConnectName(params: Connect.Types.UpdateQuickConnectNameRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the name and description of a quick connect. The request accepts the following data in JSON format. At least Name or Description must be provided.
   */
  updateQuickConnectName(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the channels that agents can handle in the Contact Control Panel (CCP) for a routing profile.
   */
  updateRoutingProfileConcurrency(params: Connect.Types.UpdateRoutingProfileConcurrencyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the channels that agents can handle in the Contact Control Panel (CCP) for a routing profile.
   */
  updateRoutingProfileConcurrency(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the default outbound queue of a routing profile.
   */
  updateRoutingProfileDefaultOutboundQueue(params: Connect.Types.UpdateRoutingProfileDefaultOutboundQueueRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the default outbound queue of a routing profile.
   */
  updateRoutingProfileDefaultOutboundQueue(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the name and description of a routing profile. The request accepts the following data in JSON format. At least Name or Description must be provided.
   */
  updateRoutingProfileName(params: Connect.Types.UpdateRoutingProfileNameRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the name and description of a routing profile. The request accepts the following data in JSON format. At least Name or Description must be provided.
   */
  updateRoutingProfileName(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the properties associated with a set of queues for a routing profile.
   */
  updateRoutingProfileQueues(params: Connect.Types.UpdateRoutingProfileQueuesRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the properties associated with a set of queues for a routing profile.
   */
  updateRoutingProfileQueues(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates a rule for the specified Amazon Connect instance. Use the Rules Function language to code conditions for the rule. 
   */
  updateRule(params: Connect.Types.UpdateRuleRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates a rule for the specified Amazon Connect instance. Use the Rules Function language to code conditions for the rule. 
   */
  updateRule(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Updates a security profile.
   */
  updateSecurityProfile(params: Connect.Types.UpdateSecurityProfileRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Updates a security profile.
   */
  updateSecurityProfile(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates details about a specific task template in the specified Amazon Connect instance. This operation does not support partial updates. Instead it does a full update of template content.
   */
  updateTaskTemplate(params: Connect.Types.UpdateTaskTemplateRequest, callback?: (err: AWSError, data: Connect.Types.UpdateTaskTemplateResponse) => void): Request<Connect.Types.UpdateTaskTemplateResponse, AWSError>;
  /**
   * Updates details about a specific task template in the specified Amazon Connect instance. This operation does not support partial updates. Instead it does a full update of template content.
   */
  updateTaskTemplate(callback?: (err: AWSError, data: Connect.Types.UpdateTaskTemplateResponse) => void): Request<Connect.Types.UpdateTaskTemplateResponse, AWSError>;
  /**
   * Updates the traffic distribution for a given traffic distribution group.  For more information about updating a traffic distribution group, see Update telephony traffic distribution across Amazon Web Services Regions  in the Amazon Connect Administrator Guide. 
   */
  updateTrafficDistribution(params: Connect.Types.UpdateTrafficDistributionRequest, callback?: (err: AWSError, data: Connect.Types.UpdateTrafficDistributionResponse) => void): Request<Connect.Types.UpdateTrafficDistributionResponse, AWSError>;
  /**
   * Updates the traffic distribution for a given traffic distribution group.  For more information about updating a traffic distribution group, see Update telephony traffic distribution across Amazon Web Services Regions  in the Amazon Connect Administrator Guide. 
   */
  updateTrafficDistribution(callback?: (err: AWSError, data: Connect.Types.UpdateTrafficDistributionResponse) => void): Request<Connect.Types.UpdateTrafficDistributionResponse, AWSError>;
  /**
   * Assigns the specified hierarchy group to the specified user.
   */
  updateUserHierarchy(params: Connect.Types.UpdateUserHierarchyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Assigns the specified hierarchy group to the specified user.
   */
  updateUserHierarchy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the name of the user hierarchy group. 
   */
  updateUserHierarchyGroupName(params: Connect.Types.UpdateUserHierarchyGroupNameRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the name of the user hierarchy group. 
   */
  updateUserHierarchyGroupName(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the user hierarchy structure: add, remove, and rename user hierarchy levels.
   */
  updateUserHierarchyStructure(params: Connect.Types.UpdateUserHierarchyStructureRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the user hierarchy structure: add, remove, and rename user hierarchy levels.
   */
  updateUserHierarchyStructure(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the identity information for the specified user.  We strongly recommend limiting who has the ability to invoke UpdateUserIdentityInfo. Someone with that ability can change the login credentials of other users by changing their email address. This poses a security risk to your organization. They can change the email address of a user to the attacker's email address, and then reset the password through email. For more information, see Best Practices for Security Profiles in the Amazon Connect Administrator Guide. 
   */
  updateUserIdentityInfo(params: Connect.Types.UpdateUserIdentityInfoRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the identity information for the specified user.  We strongly recommend limiting who has the ability to invoke UpdateUserIdentityInfo. Someone with that ability can change the login credentials of other users by changing their email address. This poses a security risk to your organization. They can change the email address of a user to the attacker's email address, and then reset the password through email. For more information, see Best Practices for Security Profiles in the Amazon Connect Administrator Guide. 
   */
  updateUserIdentityInfo(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the phone configuration settings for the specified user.
   */
  updateUserPhoneConfig(params: Connect.Types.UpdateUserPhoneConfigRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the phone configuration settings for the specified user.
   */
  updateUserPhoneConfig(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Assigns the specified routing profile to the specified user.
   */
  updateUserRoutingProfile(params: Connect.Types.UpdateUserRoutingProfileRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Assigns the specified routing profile to the specified user.
   */
  updateUserRoutingProfile(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Assigns the specified security profiles to the specified user.
   */
  updateUserSecurityProfiles(params: Connect.Types.UpdateUserSecurityProfilesRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Assigns the specified security profiles to the specified user.
   */
  updateUserSecurityProfiles(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
}
declare namespace Connect {
  export type ARN = string;
  export type ActionSummaries = ActionSummary[];
  export interface ActionSummary {
    /**
     * The action type.
     */
    ActionType: ActionType;
  }
  export type ActionType = "CREATE_TASK"|"ASSIGN_CONTACT_CATEGORY"|"GENERATE_EVENTBRIDGE_EVENT"|"SEND_NOTIFICATION"|string;
  export type AfterContactWorkTimeLimit = number;
  export interface AgentContactReference {
    /**
     * The identifier of the contact in this instance of Amazon Connect. 
     */
    ContactId?: ContactId;
    /**
     * The channel of the contact.
     */
    Channel?: Channel;
    /**
     * How the contact was initiated.
     */
    InitiationMethod?: ContactInitiationMethod;
    /**
     * The state of the contact.
     */
    AgentContactState?: ContactState;
    /**
     * The epoch timestamp when the contact state started.
     */
    StateStartTimestamp?: Timestamp;
    /**
     * The time at which the contact was connected to an agent.
     */
    ConnectedToAgentTimestamp?: Timestamp;
    Queue?: QueueReference;
  }
  export type AgentContactReferenceList = AgentContactReference[];
  export type AgentFirstName = string;
  export interface AgentInfo {
    /**
     * The identifier of the agent who accepted the contact.
     */
    Id?: AgentResourceId;
    /**
     * The timestamp when the contact was connected to the agent.
     */
    ConnectedToAgentTimestamp?: timestamp;
  }
  export type AgentLastName = string;
  export type AgentResourceId = string;
  export interface AgentStatus {
    /**
     * The Amazon Resource Name (ARN) of the agent status.
     */
    AgentStatusARN?: ARN;
    /**
     * The identifier of the agent status.
     */
    AgentStatusId?: AgentStatusId;
    /**
     * The name of the agent status.
     */
    Name?: AgentStatusName;
    /**
     * The description of the agent status.
     */
    Description?: AgentStatusDescription;
    /**
     * The type of agent status.
     */
    Type?: AgentStatusType;
    /**
     * The display order of the agent status.
     */
    DisplayOrder?: AgentStatusOrderNumber;
    /**
     * The state of the agent status.
     */
    State?: AgentStatusState;
    /**
     * The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     */
    Tags?: TagMap;
  }
  export type AgentStatusDescription = string;
  export type AgentStatusId = string;
  export type AgentStatusName = string;
  export type AgentStatusOrderNumber = number;
  export interface AgentStatusReference {
    /**
     * The start timestamp of the agent's status.
     */
    StatusStartTimestamp?: Timestamp;
    /**
     * The Amazon Resource Name (ARN) of the agent's status.
     */
    StatusArn?: ARN;
    /**
     * The name of the agent status.
     */
    StatusName?: AgentStatusName;
  }
  export type AgentStatusState = "ENABLED"|"DISABLED"|string;
  export interface AgentStatusSummary {
    /**
     * The identifier for an agent status.
     */
    Id?: AgentStatusId;
    /**
     * The Amazon Resource Name (ARN) for the agent status.
     */
    Arn?: ARN;
    /**
     * The name of the agent status.
     */
    Name?: AgentStatusName;
    /**
     * The type of the agent status.
     */
    Type?: AgentStatusType;
  }
  export type AgentStatusSummaryList = AgentStatusSummary[];
  export type AgentStatusType = "ROUTABLE"|"CUSTOM"|"OFFLINE"|string;
  export type AgentStatusTypes = AgentStatusType[];
  export type AgentUsername = string;
  export type AgentsMinOneMaxHundred = UserId[];
  export type AliasArn = string;
  export type AllowedAccessControlTags = {[key: string]: SecurityProfilePolicyValue};
  export type AllowedMonitorCapabilities = MonitorCapability[];
  export interface AnswerMachineDetectionConfig {
    /**
     * The flag to indicate if answer machine detection analysis needs to be performed for a voice call. If set to true, TrafficType must be set as CAMPAIGN. 
     */
    EnableAnswerMachineDetection?: Boolean;
    /**
     * Wait for the answering machine prompt.
     */
    AwaitAnswerMachinePrompt?: Boolean;
  }
  export type ApproximateTotalCount = number;
  export interface AssignContactCategoryActionDefinition {
  }
  export interface AssociateApprovedOriginRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The domain to add to your allow list.
     */
    Origin: Origin;
  }
  export interface AssociateBotRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    LexBot?: LexBot;
    /**
     * The Amazon Lex V2 bot to associate with the instance.
     */
    LexV2Bot?: LexV2Bot;
  }
  export interface AssociateDefaultVocabularyRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see What is Amazon Transcribe? 
     */
    LanguageCode: VocabularyLanguageCode;
    /**
     * The identifier of the custom vocabulary. If this is empty, the default is set to none.
     */
    VocabularyId?: VocabularyId;
  }
  export interface AssociateDefaultVocabularyResponse {
  }
  export interface AssociateInstanceStorageConfigRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * A valid resource type.
     */
    ResourceType: InstanceStorageResourceType;
    /**
     * A valid storage type.
     */
    StorageConfig: InstanceStorageConfig;
  }
  export interface AssociateInstanceStorageConfigResponse {
    /**
     * The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.
     */
    AssociationId?: AssociationId;
  }
  export interface AssociateLambdaFunctionRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The Amazon Resource Name (ARN) for the Lambda function being associated. Maximum number of characters allowed is 140.
     */
    FunctionArn: FunctionArn;
  }
  export interface AssociateLexBotRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The Amazon Lex bot to associate with the instance.
     */
    LexBot: LexBot;
  }
  export interface AssociatePhoneNumberContactFlowRequest {
    /**
     * A unique identifier for the phone number.
     */
    PhoneNumberId: PhoneNumberId;
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the flow.
     */
    ContactFlowId: ContactFlowId;
  }
  export interface AssociateQueueQuickConnectsRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier for the queue.
     */
    QueueId: QueueId;
    /**
     * The quick connects to associate with this queue.
     */
    QuickConnectIds: QuickConnectsList;
  }
  export interface AssociateRoutingProfileQueuesRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the routing profile.
     */
    RoutingProfileId: RoutingProfileId;
    /**
     * The queues to associate with this routing profile.
     */
    QueueConfigs: RoutingProfileQueueConfigList;
  }
  export interface AssociateSecurityKeyRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * A valid security key in PEM format.
     */
    Key: PEM;
  }
  export interface AssociateSecurityKeyResponse {
    /**
     * The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.
     */
    AssociationId?: AssociationId;
  }
  export type AssociationId = string;
  export interface AttachmentReference {
    /**
     * Identifier of the attachment reference.
     */
    Name?: ReferenceKey;
    /**
     * The location path of the attachment reference.
     */
    Value?: ReferenceValue;
    /**
     * Status of the attachment reference type.
     */
    Status?: ReferenceStatus;
  }
  export interface Attribute {
    /**
     * The type of attribute.
     */
    AttributeType?: InstanceAttributeType;
    /**
     * The value of the attribute.
     */
    Value?: InstanceAttributeValue;
  }
  export type AttributeName = string;
  export type AttributeValue = string;
  export type Attributes = {[key: string]: AttributeValue};
  export type AttributesList = Attribute[];
  export type AutoAccept = boolean;
  export interface AvailableNumberSummary {
    /**
     * The phone number. Phone numbers are formatted [+] [country code] [subscriber number including area code].
     */
    PhoneNumber?: PhoneNumber;
    /**
     * The ISO country code.
     */
    PhoneNumberCountryCode?: PhoneNumberCountryCode;
    /**
     * The type of phone number.
     */
    PhoneNumberType?: PhoneNumberType;
  }
  export type AvailableNumbersList = AvailableNumberSummary[];
  export type AwsRegion = string;
  export type Boolean = boolean;
  export type BotName = string;
  export type BucketName = string;
  export type CampaignId = string;
  export type Channel = "VOICE"|"CHAT"|"TASK"|string;
  export type ChannelToCountMap = {[key: string]: IntegerCount};
  export type Channels = Channel[];
  export type ChatContent = string;
  export type ChatContentType = string;
  export type ChatDurationInMinutes = number;
  export interface ChatMessage {
    /**
     * The type of the content. Supported types are text/plain, text/markdown, and application/json.
     */
    ContentType: ChatContentType;
    /**
     * The content of the chat message.    For text/plain and text/markdown, the Length Constraints are Minimum of 1, Maximum of 1024.    For application/json, the Length Constraints are Minimum of 1, Maximum of 12000.   
     */
    Content: ChatContent;
  }
  export interface ChatParticipantRoleConfig {
    /**
     * A list of participant timers. You can specify any unique combination of role and timer type. Duplicate entries error out the request with a 400.
     */
    ParticipantTimerConfigList: ParticipantTimerConfigList;
  }
  export interface ChatStreamingConfiguration {
    /**
     * The Amazon Resource Name (ARN) of the standard Amazon SNS topic. The Amazon Resource Name (ARN) of the streaming endpoint that is used to publish real-time message streaming for chat conversations.
     */
    StreamingEndpointArn: ChatStreamingEndpointARN;
  }
  export type ChatStreamingEndpointARN = string;
  export interface ClaimPhoneNumberRequest {
    /**
     * The Amazon Resource Name (ARN) for Amazon Connect instances or traffic distribution groups that phone numbers are claimed to.
     */
    TargetArn: ARN;
    /**
     * The phone number you want to claim. Phone numbers are formatted [+] [country code] [subscriber number including area code].
     */
    PhoneNumber: PhoneNumber;
    /**
     * The description of the phone number.
     */
    PhoneNumberDescription?: PhoneNumberDescription;
    /**
     * The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     */
    Tags?: TagMap;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs. Pattern: ^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$ 
     */
    ClientToken?: ClientToken;
  }
  export interface ClaimPhoneNumberResponse {
    /**
     * A unique identifier for the phone number.
     */
    PhoneNumberId?: PhoneNumberId;
    /**
     * The Amazon Resource Name (ARN) of the phone number.
     */
    PhoneNumberArn?: ARN;
  }
  export interface ClaimedPhoneNumberSummary {
    /**
     * A unique identifier for the phone number.
     */
    PhoneNumberId?: PhoneNumberId;
    /**
     * The Amazon Resource Name (ARN) of the phone number.
     */
    PhoneNumberArn?: ARN;
    /**
     * The phone number. Phone numbers are formatted [+] [country code] [subscriber number including area code].
     */
    PhoneNumber?: PhoneNumber;
    /**
     * The ISO country code.
     */
    PhoneNumberCountryCode?: PhoneNumberCountryCode;
    /**
     * The type of phone number.
     */
    PhoneNumberType?: PhoneNumberType;
    /**
     * The description of the phone number.
     */
    PhoneNumberDescription?: PhoneNumberDescription;
    /**
     * The Amazon Resource Name (ARN) for Amazon Connect instances or traffic distribution groups that phone numbers are claimed to.
     */
    TargetArn?: ARN;
    /**
     * The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     */
    Tags?: TagMap;
    /**
     * The status of the phone number.    CLAIMED means the previous ClaimedPhoneNumber or UpdatePhoneNumber operation succeeded.    IN_PROGRESS means a ClaimedPhoneNumber or UpdatePhoneNumber operation is still in progress and has not yet completed. You can call DescribePhoneNumber at a later time to verify if the previous operation has completed.    FAILED indicates that the previous ClaimedPhoneNumber or UpdatePhoneNumber operation has failed. It will include a message indicating the failure reason. A common reason for a failure may be that the TargetArn value you are claiming or updating a phone number to has reached its limit of total claimed numbers. If you received a FAILED status from a ClaimPhoneNumber API call, you have one day to retry claiming the phone number before the number is released back to the inventory for other customers to claim.    You will not be billed for the phone number during the 1-day period if number claiming fails.  
     */
    PhoneNumberStatus?: PhoneNumberStatus;
  }
  export type ClientToken = string;
  export type CommonNameLength127 = string;
  export type Comparison = "LT"|string;
  export type Concurrency = number;
  export interface Contact {
    /**
     * The Amazon Resource Name (ARN) for the contact.
     */
    Arn?: ARN;
    /**
     * The identifier for the contact.
     */
    Id?: ContactId;
    /**
     * If this contact is related to other contacts, this is the ID of the initial contact.
     */
    InitialContactId?: ContactId;
    /**
     * If this contact is not the first contact, this is the ID of the previous contact.
     */
    PreviousContactId?: ContactId;
    /**
     * Indicates how the contact was initiated.
     */
    InitiationMethod?: ContactInitiationMethod;
    /**
     * The name of the contact.
     */
    Name?: Name;
    /**
     * The description of the contact.
     */
    Description?: Description;
    /**
     * How the contact reached your contact center.
     */
    Channel?: Channel;
    /**
     * If this contact was queued, this contains information about the queue. 
     */
    QueueInfo?: QueueInfo;
    /**
     * Information about the agent who accepted the contact.
     */
    AgentInfo?: AgentInfo;
    /**
     * The date and time this contact was initiated, in UTC time. For INBOUND, this is when the contact arrived. For OUTBOUND, this is when the agent began dialing. For CALLBACK, this is when the callback contact was created. For TRANSFER and QUEUE_TRANSFER, this is when the transfer was initiated. For API, this is when the request arrived.
     */
    InitiationTimestamp?: timestamp;
    /**
     * The timestamp when the customer endpoint disconnected from Amazon Connect.
     */
    DisconnectTimestamp?: timestamp;
    /**
     * The timestamp when contact was last updated.
     */
    LastUpdateTimestamp?: timestamp;
    /**
     * The timestamp, in Unix epoch time format, at which to start running the inbound flow. 
     */
    ScheduledTimestamp?: timestamp;
  }
  export interface ContactFilter {
    /**
     * A list of up to 9 contact states.
     */
    ContactStates?: ContactStates;
  }
  export interface ContactFlow {
    /**
     * The Amazon Resource Name (ARN) of the flow.
     */
    Arn?: ARN;
    /**
     * The identifier of the flow.
     */
    Id?: ContactFlowId;
    /**
     * The name of the flow.
     */
    Name?: ContactFlowName;
    /**
     * The type of the flow. For descriptions of the available types, see Choose a flow type in the Amazon Connect Administrator Guide.
     */
    Type?: ContactFlowType;
    /**
     * The type of flow.
     */
    State?: ContactFlowState;
    /**
     * The description of the flow.
     */
    Description?: ContactFlowDescription;
    /**
     * The content of the flow.
     */
    Content?: ContactFlowContent;
    /**
     * The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     */
    Tags?: TagMap;
  }
  export type ContactFlowContent = string;
  export type ContactFlowDescription = string;
  export type ContactFlowId = string;
  export interface ContactFlowModule {
    /**
     * The Amazon Resource Name (ARN).
     */
    Arn?: ARN;
    /**
     * The identifier of the flow module.
     */
    Id?: ContactFlowModuleId;
    /**
     * The name of the flow module.
     */
    Name?: ContactFlowModuleName;
    /**
     * The content of the flow module.
     */
    Content?: ContactFlowModuleContent;
    /**
     * The description of the flow module.
     */
    Description?: ContactFlowModuleDescription;
    /**
     * The type of flow module.
     */
    State?: ContactFlowModuleState;
    /**
     * The status of the flow module.
     */
    Status?: ContactFlowModuleStatus;
    /**
     * The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     */
    Tags?: TagMap;
  }
  export type ContactFlowModuleContent = string;
  export type ContactFlowModuleDescription = string;
  export type ContactFlowModuleId = string;
  export type ContactFlowModuleName = string;
  export type ContactFlowModuleState = "ACTIVE"|"ARCHIVED"|string;
  export type ContactFlowModuleStatus = "PUBLISHED"|"SAVED"|string;
  export interface ContactFlowModuleSummary {
    /**
     * The identifier of the flow module.
     */
    Id?: ContactFlowModuleId;
    /**
     * The Amazon Resource Name (ARN) of the flow module.
     */
    Arn?: ARN;
    /**
     * The name of the flow module.
     */
    Name?: ContactFlowModuleName;
    /**
     * The type of flow module.
     */
    State?: ContactFlowModuleState;
  }
  export type ContactFlowModulesSummaryList = ContactFlowModuleSummary[];
  export type ContactFlowName = string;
  export type ContactFlowState = "ACTIVE"|"ARCHIVED"|string;
  export interface ContactFlowSummary {
    /**
     * The identifier of the flow.
     */
    Id?: ContactFlowId;
    /**
     * The Amazon Resource Name (ARN) of the flow.
     */
    Arn?: ARN;
    /**
     * The name of the flow.
     */
    Name?: ContactFlowName;
    /**
     * The type of flow.
     */
    ContactFlowType?: ContactFlowType;
    /**
     * The type of flow.
     */
    ContactFlowState?: ContactFlowState;
  }
  export type ContactFlowSummaryList = ContactFlowSummary[];
  export type ContactFlowType = "CONTACT_FLOW"|"CUSTOMER_QUEUE"|"CUSTOMER_HOLD"|"CUSTOMER_WHISPER"|"AGENT_HOLD"|"AGENT_WHISPER"|"OUTBOUND_WHISPER"|"AGENT_TRANSFER"|"QUEUE_TRANSFER"|string;
  export type ContactFlowTypes = ContactFlowType[];
  export type ContactId = string;
  export type ContactInitiationMethod = "INBOUND"|"OUTBOUND"|"TRANSFER"|"QUEUE_TRANSFER"|"CALLBACK"|"API"|"DISCONNECT"|"MONITOR"|string;
  export type ContactReferences = {[key: string]: Reference};
  export type ContactState = "INCOMING"|"PENDING"|"CONNECTING"|"CONNECTED"|"CONNECTED_ONHOLD"|"MISSED"|"ERROR"|"ENDED"|"REJECTED"|string;
  export type ContactStates = ContactState[];
  export type Content = string;
  export interface ControlPlaneTagFilter {
    /**
     * A list of conditions which would be applied together with an OR condition. 
     */
    OrConditions?: TagOrConditionList;
    /**
     * A list of conditions which would be applied together with an AND condition.
     */
    AndConditions?: TagAndConditionList;
    /**
     * A leaf node condition which can be used to specify a tag condition. 
     */
    TagCondition?: TagCondition;
  }
  export interface CreateAgentStatusRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The name of the status.
     */
    Name: AgentStatusName;
    /**
     * The description of the status.
     */
    Description?: AgentStatusDescription;
    /**
     * The state of the status.
     */
    State: AgentStatusState;
    /**
     * The display order of the status.
     */
    DisplayOrder?: AgentStatusOrderNumber;
    /**
     * The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     */
    Tags?: TagMap;
  }
  export interface CreateAgentStatusResponse {
    /**
     * The Amazon Resource Name (ARN) of the agent status.
     */
    AgentStatusARN?: ARN;
    /**
     * The identifier of the agent status.
     */
    AgentStatusId?: AgentStatusId;
  }
  export interface CreateContactFlowModuleRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The name of the flow module.
     */
    Name: ContactFlowModuleName;
    /**
     * The description of the flow module. 
     */
    Description?: ContactFlowModuleDescription;
    /**
     * The content of the flow module.
     */
    Content: ContactFlowModuleContent;
    /**
     * The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     */
    Tags?: TagMap;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs.
     */
    ClientToken?: ClientToken;
  }
  export interface CreateContactFlowModuleResponse {
    /**
     * The identifier of the flow module.
     */
    Id?: ContactFlowModuleId;
    /**
     * The Amazon Resource Name (ARN) of the flow module.
     */
    Arn?: ARN;
  }
  export interface CreateContactFlowRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The name of the flow.
     */
    Name: ContactFlowName;
    /**
     * The type of the flow. For descriptions of the available types, see Choose a flow type in the Amazon Connect Administrator Guide.
     */
    Type: ContactFlowType;
    /**
     * The description of the flow. 
     */
    Description?: ContactFlowDescription;
    /**
     * The content of the flow. 
     */
    Content: ContactFlowContent;
    /**
     * The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     */
    Tags?: TagMap;
  }
  export interface CreateContactFlowResponse {
    /**
     * The identifier of the flow.
     */
    ContactFlowId?: ContactFlowId;
    /**
     * The Amazon Resource Name (ARN) of the flow.
     */
    ContactFlowArn?: ARN;
  }
  export interface CreateHoursOfOperationRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The name of the hours of operation.
     */
    Name: CommonNameLength127;
    /**
     * The description of the hours of operation.
     */
    Description?: HoursOfOperationDescription;
    /**
     * The time zone of the hours of operation.
     */
    TimeZone: TimeZone;
    /**
     * Configuration information for the hours of operation: day, start time, and end time.
     */
    Config: HoursOfOperationConfigList;
    /**
     * The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     */
    Tags?: TagMap;
  }
  export interface CreateHoursOfOperationResponse {
    /**
     * The identifier for the hours of operation.
     */
    HoursOfOperationId?: HoursOfOperationId;
    /**
     * The Amazon Resource Name (ARN) for the hours of operation.
     */
    HoursOfOperationArn?: ARN;
  }
  export interface CreateInstanceRequest {
    /**
     * The idempotency token.
     */
    ClientToken?: ClientToken;
    /**
     * The type of identity management for your Amazon Connect users.
     */
    IdentityManagementType: DirectoryType;
    /**
     * The name for your instance.
     */
    InstanceAlias?: DirectoryAlias;
    /**
     * The identifier for the directory.
     */
    DirectoryId?: DirectoryId;
    /**
     * Your contact center handles incoming contacts.
     */
    InboundCallsEnabled: InboundCallsEnabled;
    /**
     * Your contact center allows outbound calls.
     */
    OutboundCallsEnabled: OutboundCallsEnabled;
  }
  export interface CreateInstanceResponse {
    /**
     * The identifier for the instance.
     */
    Id?: InstanceId;
    /**
     * The Amazon Resource Name (ARN) of the instance.
     */
    Arn?: ARN;
  }
  export interface CreateIntegrationAssociationRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The type of information to be ingested.
     */
    IntegrationType: IntegrationType;
    /**
     * The Amazon Resource Name (ARN) of the integration.  When integrating with Amazon Pinpoint, the Amazon Connect and Amazon Pinpoint instances must be in the same account. 
     */
    IntegrationArn: ARN;
    /**
     * The URL for the external application. This field is only required for the EVENT integration type.
     */
    SourceApplicationUrl?: URI;
    /**
     * The name of the external application. This field is only required for the EVENT integration type.
     */
    SourceApplicationName?: SourceApplicationName;
    /**
     * The type of the data source. This field is only required for the EVENT integration type.
     */
    SourceType?: SourceType;
    /**
     * The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     */
    Tags?: TagMap;
  }
  export interface CreateIntegrationAssociationResponse {
    /**
     * The identifier for the integration association.
     */
    IntegrationAssociationId?: IntegrationAssociationId;
    /**
     * The Amazon Resource Name (ARN) for the association.
     */
    IntegrationAssociationArn?: ARN;
  }
  export interface CreateQueueRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The name of the queue.
     */
    Name: CommonNameLength127;
    /**
     * The description of the queue.
     */
    Description?: QueueDescription;
    /**
     * The outbound caller ID name, number, and outbound whisper flow.
     */
    OutboundCallerConfig?: OutboundCallerConfig;
    /**
     * The identifier for the hours of operation.
     */
    HoursOfOperationId: HoursOfOperationId;
    /**
     * The maximum number of contacts that can be in the queue before it is considered full.
     */
    MaxContacts?: QueueMaxContacts;
    /**
     * The quick connects available to agents who are working the queue.
     */
    QuickConnectIds?: QuickConnectsList;
    /**
     * The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     */
    Tags?: TagMap;
  }
  export interface CreateQueueResponse {
    /**
     * The Amazon Resource Name (ARN) of the queue.
     */
    QueueArn?: ARN;
    /**
     * The identifier for the queue.
     */
    QueueId?: QueueId;
  }
  export interface CreateQuickConnectRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The name of the quick connect.
     */
    Name: QuickConnectName;
    /**
     * The description of the quick connect.
     */
    Description?: QuickConnectDescription;
    /**
     * Configuration settings for the quick connect.
     */
    QuickConnectConfig: QuickConnectConfig;
    /**
     * The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     */
    Tags?: TagMap;
  }
  export interface CreateQuickConnectResponse {
    /**
     * The Amazon Resource Name (ARN) for the quick connect. 
     */
    QuickConnectARN?: ARN;
    /**
     * The identifier for the quick connect. 
     */
    QuickConnectId?: QuickConnectId;
  }
  export interface CreateRoutingProfileRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The name of the routing profile. Must not be more than 127 characters.
     */
    Name: RoutingProfileName;
    /**
     * Description of the routing profile. Must not be more than 250 characters.
     */
    Description: RoutingProfileDescription;
    /**
     * The default outbound queue for the routing profile.
     */
    DefaultOutboundQueueId: QueueId;
    /**
     * The inbound queues associated with the routing profile. If no queue is added, the agent can make only outbound calls.
     */
    QueueConfigs?: RoutingProfileQueueConfigList;
    /**
     * The channels that agents can handle in the Contact Control Panel (CCP) for this routing profile.
     */
    MediaConcurrencies: MediaConcurrencies;
    /**
     * The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     */
    Tags?: TagMap;
  }
  export interface CreateRoutingProfileResponse {
    /**
     * The Amazon Resource Name (ARN) of the routing profile.
     */
    RoutingProfileArn?: ARN;
    /**
     * The identifier of the routing profile.
     */
    RoutingProfileId?: RoutingProfileId;
  }
  export interface CreateRuleRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * A unique name for the rule.
     */
    Name: RuleName;
    /**
     * The event source to trigger the rule.
     */
    TriggerEventSource: RuleTriggerEventSource;
    /**
     * The conditions of the rule.
     */
    Function: RuleFunction;
    /**
     * A list of actions to be run when the rule is triggered.
     */
    Actions: RuleActions;
    /**
     * The publish status of the rule.
     */
    PublishStatus: RulePublishStatus;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs.
     */
    ClientToken?: ClientToken;
  }
  export interface CreateRuleResponse {
    /**
     * The Amazon Resource Name (ARN) of the rule.
     */
    RuleArn: ARN;
    /**
     * A unique identifier for the rule.
     */
    RuleId: RuleId;
  }
  export type CreateSecurityProfileName = string;
  export interface CreateSecurityProfileRequest {
    /**
     * The name of the security profile.
     */
    SecurityProfileName: CreateSecurityProfileName;
    /**
     * The description of the security profile.
     */
    Description?: SecurityProfileDescription;
    /**
     * Permissions assigned to the security profile. For a list of valid permissions, see List of security profile permissions. 
     */
    Permissions?: PermissionsList;
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     */
    Tags?: TagMap;
    /**
     * The list of tags that a security profile uses to restrict access to resources in Amazon Connect.
     */
    AllowedAccessControlTags?: AllowedAccessControlTags;
    /**
     * The list of resources that a security profile applies tag restrictions to in Amazon Connect. Following are acceptable ResourceNames: User | SecurityProfile | Queue | RoutingProfile 
     */
    TagRestrictedResources?: TagRestrictedResourceList;
  }
  export interface CreateSecurityProfileResponse {
    /**
     * The identifier for the security profle.
     */
    SecurityProfileId?: SecurityProfileId;
    /**
     * The Amazon Resource Name (ARN) for the security profile.
     */
    SecurityProfileArn?: ARN;
  }
  export interface CreateTaskTemplateRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The name of the task template.
     */
    Name: TaskTemplateName;
    /**
     * The description of the task template.
     */
    Description?: TaskTemplateDescription;
    /**
     * The identifier of the flow that runs by default when a task is created by referencing this template.
     */
    ContactFlowId?: ContactFlowId;
    /**
     * Constraints that are applicable to the fields listed.
     */
    Constraints?: TaskTemplateConstraints;
    /**
     * The default values for fields when a task is created by referencing this template.
     */
    Defaults?: TaskTemplateDefaults;
    /**
     * Marks a template as ACTIVE or INACTIVE for a task to refer to it. Tasks can only be created from ACTIVE templates. If a template is marked as INACTIVE, then a task that refers to this template cannot be created. 
     */
    Status?: TaskTemplateStatus;
    /**
     * Fields that are part of the template.
     */
    Fields: TaskTemplateFields;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs.
     */
    ClientToken?: ClientToken;
  }
  export interface CreateTaskTemplateResponse {
    /**
     * The identifier of the task template resource.
     */
    Id: TaskTemplateId;
    /**
     * The Amazon Resource Name (ARN) for the task template resource.
     */
    Arn: TaskTemplateArn;
  }
  export interface CreateTrafficDistributionGroupRequest {
    /**
     * The name for the traffic distribution group. 
     */
    Name: Name128;
    /**
     * A description for the traffic distribution group.
     */
    Description?: Description250;
    /**
     * The identifier of the Amazon Connect instance that has been replicated. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceIdOrArn;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs.
     */
    ClientToken?: ClientToken;
    /**
     * The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     */
    Tags?: TagMap;
  }
  export interface CreateTrafficDistributionGroupResponse {
    /**
     * The identifier of the traffic distribution group. This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created. The ARN must be provided if the call is from the replicated Region.
     */
    Id?: TrafficDistributionGroupId;
    /**
     * The Amazon Resource Name (ARN) of the traffic distribution group.
     */
    Arn?: TrafficDistributionGroupArn;
  }
  export interface CreateUseCaseRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier for the integration association.
     */
    IntegrationAssociationId: IntegrationAssociationId;
    /**
     * The type of use case to associate to the integration association. Each integration association can have only one of each use case type.
     */
    UseCaseType: UseCaseType;
    /**
     * The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     */
    Tags?: TagMap;
  }
  export interface CreateUseCaseResponse {
    /**
     * The identifier of the use case.
     */
    UseCaseId?: UseCaseId;
    /**
     * The Amazon Resource Name (ARN) for the use case.
     */
    UseCaseArn?: ARN;
  }
  export interface CreateUserHierarchyGroupRequest {
    /**
     * The name of the user hierarchy group. Must not be more than 100 characters.
     */
    Name: HierarchyGroupName;
    /**
     * The identifier for the parent hierarchy group. The user hierarchy is created at level one if the parent group ID is null.
     */
    ParentGroupId?: HierarchyGroupId;
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     */
    Tags?: TagMap;
  }
  export interface CreateUserHierarchyGroupResponse {
    /**
     * The identifier of the hierarchy group.
     */
    HierarchyGroupId?: HierarchyGroupId;
    /**
     * The Amazon Resource Name (ARN) of the hierarchy group. 
     */
    HierarchyGroupArn?: ARN;
  }
  export interface CreateUserRequest {
    /**
     * The user name for the account. For instances not using SAML for identity management, the user name can include up to 20 characters. If you are using SAML for identity management, the user name can include up to 64 characters from [a-zA-Z0-9_-.\@]+.
     */
    Username: AgentUsername;
    /**
     * The password for the user account. A password is required if you are using Amazon Connect for identity management. Otherwise, it is an error to include a password.
     */
    Password?: Password;
    /**
     * The information about the identity of the user.
     */
    IdentityInfo?: UserIdentityInfo;
    /**
     * The phone settings for the user.
     */
    PhoneConfig: UserPhoneConfig;
    /**
     * The identifier of the user account in the directory used for identity management. If Amazon Connect cannot access the directory, you can specify this identifier to authenticate users. If you include the identifier, we assume that Amazon Connect cannot access the directory. Otherwise, the identity information is used to authenticate users from your directory. This parameter is required if you are using an existing directory for identity management in Amazon Connect when Amazon Connect cannot access your directory to authenticate users. If you are using SAML for identity management and include this parameter, an error is returned.
     */
    DirectoryUserId?: DirectoryUserId;
    /**
     * The identifier of the security profile for the user.
     */
    SecurityProfileIds: SecurityProfileIds;
    /**
     * The identifier of the routing profile for the user.
     */
    RoutingProfileId: RoutingProfileId;
    /**
     * The identifier of the hierarchy group for the user.
     */
    HierarchyGroupId?: HierarchyGroupId;
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     */
    Tags?: TagMap;
  }
  export interface CreateUserResponse {
    /**
     * The identifier of the user account.
     */
    UserId?: UserId;
    /**
     * The Amazon Resource Name (ARN) of the user account.
     */
    UserArn?: ARN;
  }
  export interface CreateVocabularyRequest {
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs. If a create request is received more than once with same client token, subsequent requests return the previous response without creating a vocabulary again.
     */
    ClientToken?: ClientToken;
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * A unique name of the custom vocabulary.
     */
    VocabularyName: VocabularyName;
    /**
     * The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see What is Amazon Transcribe? 
     */
    LanguageCode: VocabularyLanguageCode;
    /**
     * The content of the custom vocabulary in plain-text format with a table of values. Each row in the table represents a word or a phrase, described with Phrase, IPA, SoundsLike, and DisplayAs fields. Separate the fields with TAB characters. The size limit is 50KB. For more information, see Create a custom vocabulary using a table.
     */
    Content: VocabularyContent;
    /**
     * The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     */
    Tags?: TagMap;
  }
  export interface CreateVocabularyResponse {
    /**
     * The Amazon Resource Name (ARN) of the custom vocabulary.
     */
    VocabularyArn: ARN;
    /**
     * The identifier of the custom vocabulary.
     */
    VocabularyId: VocabularyId;
    /**
     * The current state of the custom vocabulary.
     */
    State: VocabularyState;
  }
  export interface Credentials {
    /**
     * An access token generated for a federated user to access Amazon Connect.
     */
    AccessToken?: SecurityToken;
    /**
     * A token generated with an expiration time for the session a user is logged in to Amazon Connect.
     */
    AccessTokenExpiration?: timestamp;
    /**
     * Renews a token generated for a user to access the Amazon Connect instance.
     */
    RefreshToken?: SecurityToken;
    /**
     * Renews the expiration timer for a generated token.
     */
    RefreshTokenExpiration?: timestamp;
  }
  export interface CurrentMetric {
    /**
     * The name of the metric.
     */
    Name?: CurrentMetricName;
    /**
     * The unit for the metric.
     */
    Unit?: Unit;
  }
  export interface CurrentMetricData {
    /**
     * Information about the metric.
     */
    Metric?: CurrentMetric;
    /**
     * The value of the metric.
     */
    Value?: Value;
  }
  export type CurrentMetricDataCollections = CurrentMetricData[];
  export type CurrentMetricName = "AGENTS_ONLINE"|"AGENTS_AVAILABLE"|"AGENTS_ON_CALL"|"AGENTS_NON_PRODUCTIVE"|"AGENTS_AFTER_CONTACT_WORK"|"AGENTS_ERROR"|"AGENTS_STAFFED"|"CONTACTS_IN_QUEUE"|"OLDEST_CONTACT_AGE"|"CONTACTS_SCHEDULED"|"AGENTS_ON_CONTACT"|"SLOTS_ACTIVE"|"SLOTS_AVAILABLE"|string;
  export interface CurrentMetricResult {
    /**
     * The dimensions for the metrics.
     */
    Dimensions?: Dimensions;
    /**
     * The set of metrics.
     */
    Collections?: CurrentMetricDataCollections;
  }
  export type CurrentMetricResults = CurrentMetricResult[];
  export interface CurrentMetricSortCriteria {
    SortByMetric?: CurrentMetricName;
    /**
     * The way to sort.
     */
    SortOrder?: SortOrder;
  }
  export type CurrentMetricSortCriteriaMaxOne = CurrentMetricSortCriteria[];
  export type CurrentMetrics = CurrentMetric[];
  export interface DateReference {
    /**
     * Identifier of the date reference.
     */
    Name?: ReferenceKey;
    /**
     * A valid date.
     */
    Value?: ReferenceValue;
  }
  export interface DefaultVocabulary {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see What is Amazon Transcribe? 
     */
    LanguageCode: VocabularyLanguageCode;
    /**
     * The identifier of the custom vocabulary.
     */
    VocabularyId: VocabularyId;
    /**
     * A unique name of the custom vocabulary.
     */
    VocabularyName: VocabularyName;
  }
  export type DefaultVocabularyList = DefaultVocabulary[];
  export type Delay = number;
  export interface DeleteContactFlowModuleRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the flow module.
     */
    ContactFlowModuleId: ContactFlowModuleId;
  }
  export interface DeleteContactFlowModuleResponse {
  }
  export interface DeleteContactFlowRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the flow.
     */
    ContactFlowId: ContactFlowId;
  }
  export interface DeleteHoursOfOperationRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier for the hours of operation.
     */
    HoursOfOperationId: HoursOfOperationId;
  }
  export interface DeleteInstanceRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
  }
  export interface DeleteIntegrationAssociationRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier for the integration association.
     */
    IntegrationAssociationId: IntegrationAssociationId;
  }
  export interface DeleteQuickConnectRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier for the quick connect.
     */
    QuickConnectId: QuickConnectId;
  }
  export interface DeleteRuleRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * A unique identifier for the rule.
     */
    RuleId: RuleId;
  }
  export interface DeleteSecurityProfileRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier for the security profle.
     */
    SecurityProfileId: SecurityProfileId;
  }
  export interface DeleteTaskTemplateRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * A unique identifier for the task template.
     */
    TaskTemplateId: TaskTemplateId;
  }
  export interface DeleteTaskTemplateResponse {
  }
  export interface DeleteTrafficDistributionGroupRequest {
    /**
     * The identifier of the traffic distribution group. This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created. The ARN must be provided if the call is from the replicated Region.
     */
    TrafficDistributionGroupId: TrafficDistributionGroupIdOrArn;
  }
  export interface DeleteTrafficDistributionGroupResponse {
  }
  export interface DeleteUseCaseRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier for the integration association.
     */
    IntegrationAssociationId: IntegrationAssociationId;
    /**
     * The identifier for the use case.
     */
    UseCaseId: UseCaseId;
  }
  export interface DeleteUserHierarchyGroupRequest {
    /**
     * The identifier of the hierarchy group.
     */
    HierarchyGroupId: HierarchyGroupId;
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
  }
  export interface DeleteUserRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the user.
     */
    UserId: UserId;
  }
  export interface DeleteVocabularyRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the custom vocabulary.
     */
    VocabularyId: VocabularyId;
  }
  export interface DeleteVocabularyResponse {
    /**
     * The Amazon Resource Name (ARN) of the custom vocabulary.
     */
    VocabularyArn: ARN;
    /**
     * The identifier of the custom vocabulary.
     */
    VocabularyId: VocabularyId;
    /**
     * The current state of the custom vocabulary.
     */
    State: VocabularyState;
  }
  export interface DescribeAgentStatusRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier for the agent status.
     */
    AgentStatusId: AgentStatusId;
  }
  export interface DescribeAgentStatusResponse {
    /**
     * The agent status.
     */
    AgentStatus?: AgentStatus;
  }
  export interface DescribeContactFlowModuleRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the flow module.
     */
    ContactFlowModuleId: ContactFlowModuleId;
  }
  export interface DescribeContactFlowModuleResponse {
    /**
     * Information about the flow module.
     */
    ContactFlowModule?: ContactFlowModule;
  }
  export interface DescribeContactFlowRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the flow.
     */
    ContactFlowId: ContactFlowId;
  }
  export interface DescribeContactFlowResponse {
    /**
     * Information about the flow.
     */
    ContactFlow?: ContactFlow;
  }
  export interface DescribeContactRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the contact.
     */
    ContactId: ContactId;
  }
  export interface DescribeContactResponse {
    /**
     * Information about the contact.
     */
    Contact?: Contact;
  }
  export interface DescribeHoursOfOperationRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier for the hours of operation.
     */
    HoursOfOperationId: HoursOfOperationId;
  }
  export interface DescribeHoursOfOperationResponse {
    /**
     * The hours of operation.
     */
    HoursOfOperation?: HoursOfOperation;
  }
  export interface DescribeInstanceAttributeRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The type of attribute.
     */
    AttributeType: InstanceAttributeType;
  }
  export interface DescribeInstanceAttributeResponse {
    /**
     * The type of attribute.
     */
    Attribute?: Attribute;
  }
  export interface DescribeInstanceRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
  }
  export interface DescribeInstanceResponse {
    /**
     * The name of the instance.
     */
    Instance?: Instance;
  }
  export interface DescribeInstanceStorageConfigRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.
     */
    AssociationId: AssociationId;
    /**
     * A valid resource type.
     */
    ResourceType: InstanceStorageResourceType;
  }
  export interface DescribeInstanceStorageConfigResponse {
    /**
     * A valid storage type.
     */
    StorageConfig?: InstanceStorageConfig;
  }
  export interface DescribePhoneNumberRequest {
    /**
     * A unique identifier for the phone number.
     */
    PhoneNumberId: PhoneNumberId;
  }
  export interface DescribePhoneNumberResponse {
    /**
     * Information about a phone number that's been claimed to your Amazon Connect instance or traffic distribution group.
     */
    ClaimedPhoneNumberSummary?: ClaimedPhoneNumberSummary;
  }
  export interface DescribeQueueRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier for the queue.
     */
    QueueId: QueueId;
  }
  export interface DescribeQueueResponse {
    /**
     * The name of the queue.
     */
    Queue?: Queue;
  }
  export interface DescribeQuickConnectRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier for the quick connect.
     */
    QuickConnectId: QuickConnectId;
  }
  export interface DescribeQuickConnectResponse {
    /**
     * Information about the quick connect.
     */
    QuickConnect?: QuickConnect;
  }
  export interface DescribeRoutingProfileRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the routing profile.
     */
    RoutingProfileId: RoutingProfileId;
  }
  export interface DescribeRoutingProfileResponse {
    /**
     * The routing profile.
     */
    RoutingProfile?: RoutingProfile;
  }
  export interface DescribeRuleRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * A unique identifier for the rule.
     */
    RuleId: RuleId;
  }
  export interface DescribeRuleResponse {
    /**
     * Information about the rule.
     */
    Rule: Rule;
  }
  export interface DescribeSecurityProfileRequest {
    /**
     * The identifier for the security profle.
     */
    SecurityProfileId: SecurityProfileId;
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
  }
  export interface DescribeSecurityProfileResponse {
    /**
     * The security profile.
     */
    SecurityProfile?: SecurityProfile;
  }
  export interface DescribeTrafficDistributionGroupRequest {
    /**
     * The identifier of the traffic distribution group. This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created. The ARN must be provided if the call is from the replicated Region.
     */
    TrafficDistributionGroupId: TrafficDistributionGroupIdOrArn;
  }
  export interface DescribeTrafficDistributionGroupResponse {
    /**
     * Information about the traffic distribution group.
     */
    TrafficDistributionGroup?: TrafficDistributionGroup;
  }
  export interface DescribeUserHierarchyGroupRequest {
    /**
     * The identifier of the hierarchy group.
     */
    HierarchyGroupId: HierarchyGroupId;
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
  }
  export interface DescribeUserHierarchyGroupResponse {
    /**
     * Information about the hierarchy group.
     */
    HierarchyGroup?: HierarchyGroup;
  }
  export interface DescribeUserHierarchyStructureRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
  }
  export interface DescribeUserHierarchyStructureResponse {
    /**
     * Information about the hierarchy structure.
     */
    HierarchyStructure?: HierarchyStructure;
  }
  export interface DescribeUserRequest {
    /**
     * The identifier of the user account.
     */
    UserId: UserId;
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
  }
  export interface DescribeUserResponse {
    /**
     * Information about the user account and configuration settings.
     */
    User?: User;
  }
  export interface DescribeVocabularyRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the custom vocabulary.
     */
    VocabularyId: VocabularyId;
  }
  export interface DescribeVocabularyResponse {
    /**
     * A list of specific words that you want Contact Lens for Amazon Connect to recognize in your audio input. They are generally domain-specific words and phrases, words that Contact Lens is not recognizing, or proper nouns.
     */
    Vocabulary: Vocabulary;
  }
  export type Description = string;
  export type Description250 = string;
  export interface Dimensions {
    /**
     * Information about the queue for which metrics are returned.
     */
    Queue?: QueueReference;
    /**
     * The channel used for grouping and filters.
     */
    Channel?: Channel;
    RoutingProfile?: RoutingProfileReference;
  }
  export type DirectoryAlias = string;
  export type DirectoryId = string;
  export type DirectoryType = "SAML"|"CONNECT_MANAGED"|"EXISTING_DIRECTORY"|string;
  export type DirectoryUserId = string;
  export interface DisassociateApprovedOriginRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The domain URL of the integrated application.
     */
    Origin: Origin;
  }
  export interface DisassociateBotRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    LexBot?: LexBot;
    /**
     * The Amazon Lex V2 bot to disassociate from the instance.
     */
    LexV2Bot?: LexV2Bot;
  }
  export interface DisassociateInstanceStorageConfigRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.
     */
    AssociationId: AssociationId;
    /**
     * A valid resource type.
     */
    ResourceType: InstanceStorageResourceType;
  }
  export interface DisassociateLambdaFunctionRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance..
     */
    InstanceId: InstanceId;
    /**
     * The Amazon Resource Name (ARN) of the Lambda function being disassociated.
     */
    FunctionArn: FunctionArn;
  }
  export interface DisassociateLexBotRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The name of the Amazon Lex bot. Maximum character limit of 50.
     */
    BotName: BotName;
    /**
     * The Amazon Web Services Region in which the Amazon Lex bot has been created.
     */
    LexRegion: LexRegion;
  }
  export interface DisassociatePhoneNumberContactFlowRequest {
    /**
     * A unique identifier for the phone number.
     */
    PhoneNumberId: PhoneNumberId;
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
  }
  export interface DisassociateQueueQuickConnectsRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier for the queue.
     */
    QueueId: QueueId;
    /**
     * The quick connects to disassociate from the queue.
     */
    QuickConnectIds: QuickConnectsList;
  }
  export interface DisassociateRoutingProfileQueuesRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the routing profile.
     */
    RoutingProfileId: RoutingProfileId;
    /**
     * The queues to disassociate from this routing profile.
     */
    QueueReferences: RoutingProfileQueueReferenceList;
  }
  export interface DisassociateSecurityKeyRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.
     */
    AssociationId: AssociationId;
  }
  export interface DismissUserContactRequest {
    /**
     * The identifier of the user account.
     */
    UserId: UserId;
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the contact.
     */
    ContactId: ContactId;
  }
  export interface DismissUserContactResponse {
  }
  export type DisplayName = string;
  export interface Distribution {
    /**
     * The Amazon Web Services Region where the traffic is distributed.
     */
    Region: AwsRegion;
    /**
     * The percentage of the traffic that is distributed, in increments of 10.
     */
    Percentage: Percentage;
  }
  export type DistributionList = Distribution[];
  export type Email = string;
  export interface EmailReference {
    /**
     * Identifier of the email reference.
     */
    Name?: ReferenceKey;
    /**
     * A valid email address.
     */
    Value?: ReferenceValue;
  }
  export interface EncryptionConfig {
    /**
     * The type of encryption.
     */
    EncryptionType: EncryptionType;
    /**
     * The full ARN of the encryption key.   Be sure to provide the full ARN of the encryption key, not just the ID. 
     */
    KeyId: KeyId;
  }
  export type EncryptionType = "KMS"|string;
  export interface EventBridgeActionDefinition {
    /**
     * The name.
     */
    Name: EventBridgeActionName;
  }
  export type EventBridgeActionName = string;
  export type EventSourceName = "OnPostCallAnalysisAvailable"|"OnRealTimeCallAnalysisAvailable"|"OnPostChatAnalysisAvailable"|"OnZendeskTicketCreate"|"OnZendeskTicketStatusUpdate"|"OnSalesforceCaseCreate"|string;
  export interface Filters {
    /**
     * The queues to use to filter the metrics. You should specify at least one queue, and can specify up to 100 queues per request. The GetCurrentMetricsData API in particular requires a queue when you include a Filter in your request. 
     */
    Queues?: Queues;
    /**
     * The channel to use to filter the metrics.
     */
    Channels?: Channels;
    /**
     * A list of up to 100 routing profile IDs or ARNs.
     */
    RoutingProfiles?: RoutingProfiles;
  }
  export type FunctionArn = string;
  export type FunctionArnsList = FunctionArn[];
  export interface GetContactAttributesRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the initial contact.
     */
    InitialContactId: ContactId;
  }
  export interface GetContactAttributesResponse {
    /**
     * Information about the attributes.
     */
    Attributes?: Attributes;
  }
  export interface GetCurrentMetricDataRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The filters to apply to returned metrics. You can filter up to the following limits:   Queues: 100   Routing profiles: 100   Channels: 3 (VOICE, CHAT, and TASK channels are supported.)   Metric data is retrieved only for the resources associated with the queues or routing profiles, and by any channels included in the filter. (You cannot filter by both queue AND routing profile.) You can include both resource IDs and resource ARNs in the same request.  Currently tagging is only supported on the resources that are passed in the filter.
     */
    Filters: Filters;
    /**
     * The grouping applied to the metrics returned. For example, when grouped by QUEUE, the metrics returned apply to each queue rather than aggregated for all queues.    If you group by CHANNEL, you should include a Channels filter. VOICE, CHAT, and TASK channels are supported.   If you group by ROUTING_PROFILE, you must include either a queue or routing profile filter. In addition, a routing profile filter is required for metrics CONTACTS_SCHEDULED, CONTACTS_IN_QUEUE, and  OLDEST_CONTACT_AGE.   If no Grouping is included in the request, a summary of metrics is returned.  
     */
    Groupings?: Groupings;
    /**
     * The metrics to retrieve. Specify the name and unit for each metric. The following metrics are available. For a description of all the metrics, see Real-time Metrics Definitions in the Amazon Connect Administrator Guide.  AGENTS_AFTER_CONTACT_WORK  Unit: COUNT Name in real-time metrics report: ACW   AGENTS_AVAILABLE  Unit: COUNT Name in real-time metrics report: Available   AGENTS_ERROR  Unit: COUNT Name in real-time metrics report: Error   AGENTS_NON_PRODUCTIVE  Unit: COUNT Name in real-time metrics report: NPT (Non-Productive Time)   AGENTS_ON_CALL  Unit: COUNT Name in real-time metrics report: On contact   AGENTS_ON_CONTACT  Unit: COUNT Name in real-time metrics report: On contact   AGENTS_ONLINE  Unit: COUNT Name in real-time metrics report: Online   AGENTS_STAFFED  Unit: COUNT Name in real-time metrics report: Staffed   CONTACTS_IN_QUEUE  Unit: COUNT Name in real-time metrics report: In queue   CONTACTS_SCHEDULED  Unit: COUNT Name in real-time metrics report: Scheduled   OLDEST_CONTACT_AGE  Unit: SECONDS When you use groupings, Unit says SECONDS and the Value is returned in SECONDS.  When you do not use groupings, Unit says SECONDS but the Value is returned in MILLISECONDS. For example, if you get a response like this:  { "Metric": { "Name": "OLDEST_CONTACT_AGE", "Unit": "SECONDS" }, "Value": 24113.0 } The actual OLDEST_CONTACT_AGE is 24 seconds. Name in real-time metrics report: Oldest   SLOTS_ACTIVE  Unit: COUNT Name in real-time metrics report: Active   SLOTS_AVAILABLE  Unit: COUNT Name in real-time metrics report: Availability   
     */
    CurrentMetrics: CurrentMetrics;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. The token expires after 5 minutes from the time it is created. Subsequent requests that use the token must use the same request parameters as the request that generated the token.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return per page.
     */
    MaxResults?: MaxResult100;
    /**
     * The way to sort the resulting response based on metrics. You can enter one sort criteria. By default resources are sorted based on AGENTS_ONLINE, DESCENDING. The metric collection is sorted based on the input metrics. Note the following:   Sorting on SLOTS_ACTIVE and SLOTS_AVAILABLE is not supported.  
     */
    SortCriteria?: CurrentMetricSortCriteriaMaxOne;
  }
  export interface GetCurrentMetricDataResponse {
    /**
     * If there are additional results, this is the token for the next set of results. The token expires after 5 minutes from the time it is created. Subsequent requests that use the token must use the same request parameters as the request that generated the token.
     */
    NextToken?: NextToken;
    /**
     * Information about the real-time metrics.
     */
    MetricResults?: CurrentMetricResults;
    /**
     * The time at which the metrics were retrieved and cached for pagination.
     */
    DataSnapshotTime?: timestamp;
    /**
     * The total count of the result, regardless of the current page size. 
     */
    ApproximateTotalCount?: ApproximateTotalCount;
  }
  export interface GetCurrentUserDataRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The filters to apply to returned user data. You can filter up to the following limits:   Queues: 100   Routing profiles: 100   Agents: 100   Contact states: 9   User hierarchy groups: 1    The user data is retrieved for only the specified values/resources in the filter. A maximum of one filter can be passed from queues, routing profiles, agents, and user hierarchy groups.  Currently tagging is only supported on the resources that are passed in the filter.
     */
    Filters: UserDataFilters;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return per page.
     */
    MaxResults?: MaxResult100;
  }
  export interface GetCurrentUserDataResponse {
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: NextToken;
    /**
     * A list of the user data that is returned.
     */
    UserDataList?: UserDataList;
    /**
     * The total count of the result, regardless of the current page size.
     */
    ApproximateTotalCount?: ApproximateTotalCount;
  }
  export interface GetFederationTokenRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
  }
  export interface GetFederationTokenResponse {
    /**
     * The credentials to use for federation.
     */
    Credentials?: Credentials;
    /**
     * The URL to sign into the user's instance. 
     */
    SignInUrl?: Url;
    /**
     * The Amazon Resource Name (ARN) of the user.
     */
    UserArn?: ARN;
    /**
     * The identifier for the user.
     */
    UserId?: AgentResourceId;
  }
  export interface GetMetricDataRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The timestamp, in UNIX Epoch time format, at which to start the reporting interval for the retrieval of historical metrics data. The time must be specified using a multiple of 5 minutes, such as 10:05, 10:10, 10:15. The start time cannot be earlier than 24 hours before the time of the request. Historical metrics are available only for 24 hours.
     */
    StartTime: timestamp;
    /**
     * The timestamp, in UNIX Epoch time format, at which to end the reporting interval for the retrieval of historical metrics data. The time must be specified using an interval of 5 minutes, such as 11:00, 11:05, 11:10, and must be later than the start time timestamp. The time range between the start and end time must be less than 24 hours.
     */
    EndTime: timestamp;
    /**
     * The queues, up to 100, or channels, to use to filter the metrics returned. Metric data is retrieved only for the resources associated with the queues or channels included in the filter. You can include both queue IDs and queue ARNs in the same request. VOICE, CHAT, and TASK channels are supported.  To filter by Queues, enter the queue ID/ARN, not the name of the queue. 
     */
    Filters: Filters;
    /**
     * The grouping applied to the metrics returned. For example, when results are grouped by queue, the metrics returned are grouped by queue. The values returned apply to the metrics for each queue rather than aggregated for all queues. If no grouping is specified, a summary of metrics for all queues is returned.
     */
    Groupings?: Groupings;
    /**
     * The metrics to retrieve. Specify the name, unit, and statistic for each metric. The following historical metrics are available. For a description of each metric, see Historical Metrics Definitions in the Amazon Connect Administrator Guide.  This API does not support a contacts incoming metric (there's no CONTACTS_INCOMING metric missing from the documented list).    ABANDON_TIME  Unit: SECONDS Statistic: AVG  AFTER_CONTACT_WORK_TIME  Unit: SECONDS Statistic: AVG  API_CONTACTS_HANDLED  Unit: COUNT Statistic: SUM  CALLBACK_CONTACTS_HANDLED  Unit: COUNT Statistic: SUM  CONTACTS_ABANDONED  Unit: COUNT Statistic: SUM  CONTACTS_AGENT_HUNG_UP_FIRST  Unit: COUNT Statistic: SUM  CONTACTS_CONSULTED  Unit: COUNT Statistic: SUM  CONTACTS_HANDLED  Unit: COUNT Statistic: SUM  CONTACTS_HANDLED_INCOMING  Unit: COUNT Statistic: SUM  CONTACTS_HANDLED_OUTBOUND  Unit: COUNT Statistic: SUM  CONTACTS_HOLD_ABANDONS  Unit: COUNT Statistic: SUM  CONTACTS_MISSED  Unit: COUNT Statistic: SUM  CONTACTS_QUEUED  Unit: COUNT Statistic: SUM  CONTACTS_TRANSFERRED_IN  Unit: COUNT Statistic: SUM  CONTACTS_TRANSFERRED_IN_FROM_QUEUE  Unit: COUNT Statistic: SUM  CONTACTS_TRANSFERRED_OUT  Unit: COUNT Statistic: SUM  CONTACTS_TRANSFERRED_OUT_FROM_QUEUE  Unit: COUNT Statistic: SUM  HANDLE_TIME  Unit: SECONDS Statistic: AVG  HOLD_TIME  Unit: SECONDS Statistic: AVG  INTERACTION_AND_HOLD_TIME  Unit: SECONDS Statistic: AVG  INTERACTION_TIME  Unit: SECONDS Statistic: AVG  OCCUPANCY  Unit: PERCENT Statistic: AVG  QUEUE_ANSWER_TIME  Unit: SECONDS Statistic: AVG  QUEUED_TIME  Unit: SECONDS Statistic: MAX  SERVICE_LEVEL  You can include up to 20 SERVICE_LEVEL metrics in a request. Unit: PERCENT Statistic: AVG Threshold: For ThresholdValue, enter any whole number from 1 to 604800 (inclusive), in seconds. For Comparison, you must enter LT (for "Less than").   
     */
    HistoricalMetrics: HistoricalMetrics;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return per page.
     */
    MaxResults?: MaxResult100;
  }
  export interface GetMetricDataResponse {
    /**
     * If there are additional results, this is the token for the next set of results. The token expires after 5 minutes from the time it is created. Subsequent requests that use the token must use the same request parameters as the request that generated the token.
     */
    NextToken?: NextToken;
    /**
     * Information about the historical metrics. If no grouping is specified, a summary of metric data is returned.
     */
    MetricResults?: HistoricalMetricResults;
  }
  export interface GetTaskTemplateRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * A unique identifier for the task template.
     */
    TaskTemplateId: TaskTemplateId;
    /**
     * The system generated version of a task template that is associated with a task, when the task is created.
     */
    SnapshotVersion?: SnapshotVersion;
  }
  export interface GetTaskTemplateResponse {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId?: InstanceId;
    /**
     * A unique identifier for the task template.
     */
    Id: TaskTemplateId;
    /**
     * The Amazon Resource Name (ARN).
     */
    Arn: TaskTemplateArn;
    /**
     * The name of the task template.
     */
    Name: TaskTemplateName;
    /**
     * The description of the task template.
     */
    Description?: TaskTemplateDescription;
    /**
     * The identifier of the flow that runs by default when a task is created by referencing this template.
     */
    ContactFlowId?: ContactFlowId;
    /**
     * Constraints that are applicable to the fields listed.
     */
    Constraints?: TaskTemplateConstraints;
    /**
     * The default values for fields when a task is created by referencing this template.
     */
    Defaults?: TaskTemplateDefaults;
    /**
     * Fields that are part of the template.
     */
    Fields?: TaskTemplateFields;
    /**
     * Marks a template as ACTIVE or INACTIVE for a task to refer to it. Tasks can only be created from ACTIVE templates. If a template is marked as INACTIVE, then a task that refers to this template cannot be created.
     */
    Status?: TaskTemplateStatus;
    /**
     * The timestamp when the task template was last modified.
     */
    LastModifiedTime?: timestamp;
    /**
     * The timestamp when the task template was created.
     */
    CreatedTime?: timestamp;
    /**
     * The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     */
    Tags?: TagMap;
  }
  export interface GetTrafficDistributionRequest {
    /**
     * The identifier of the traffic distribution group.
     */
    Id: TrafficDistributionGroupIdOrArn;
  }
  export interface GetTrafficDistributionResponse {
    /**
     * The distribution of traffic between the instance and its replicas.
     */
    TelephonyConfig?: TelephonyConfig;
    /**
     * The identifier of the traffic distribution group. This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created. The ARN must be provided if the call is from the replicated Region.
     */
    Id?: TrafficDistributionGroupId;
    /**
     * The Amazon Resource Name (ARN) of the traffic distribution group.
     */
    Arn?: TrafficDistributionGroupArn;
  }
  export type Grouping = "QUEUE"|"CHANNEL"|"ROUTING_PROFILE"|string;
  export type Groupings = Grouping[];
  export interface HierarchyGroup {
    /**
     * The identifier of the hierarchy group.
     */
    Id?: HierarchyGroupId;
    /**
     * The Amazon Resource Name (ARN) of the hierarchy group.
     */
    Arn?: ARN;
    /**
     * The name of the hierarchy group.
     */
    Name?: HierarchyGroupName;
    /**
     * The identifier of the level in the hierarchy group.
     */
    LevelId?: HierarchyLevelId;
    /**
     * Information about the levels in the hierarchy group.
     */
    HierarchyPath?: HierarchyPath;
    /**
     * The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     */
    Tags?: TagMap;
  }
  export interface HierarchyGroupCondition {
    /**
     * The value in the hierarchy group condition.
     */
    Value?: String;
    /**
     * The type of hierarchy group match.
     */
    HierarchyGroupMatchType?: HierarchyGroupMatchType;
  }
  export type HierarchyGroupId = string;
  export type HierarchyGroupMatchType = "EXACT"|"WITH_CHILD_GROUPS"|string;
  export type HierarchyGroupName = string;
  export interface HierarchyGroupSummary {
    /**
     * The identifier of the hierarchy group.
     */
    Id?: HierarchyGroupId;
    /**
     * The Amazon Resource Name (ARN) of the hierarchy group.
     */
    Arn?: ARN;
    /**
     * The name of the hierarchy group.
     */
    Name?: HierarchyGroupName;
  }
  export type HierarchyGroupSummaryList = HierarchyGroupSummary[];
  export interface HierarchyGroupSummaryReference {
    /**
     * The unique identifier for the hierarchy group.
     */
    Id?: HierarchyGroupId;
    /**
     * The Amazon Resource Name (ARN) for the hierarchy group. 
     */
    Arn?: ARN;
  }
  export interface HierarchyLevel {
    /**
     * The identifier of the hierarchy level.
     */
    Id?: HierarchyLevelId;
    /**
     * The Amazon Resource Name (ARN) of the hierarchy level.
     */
    Arn?: ARN;
    /**
     * The name of the hierarchy level.
     */
    Name?: HierarchyLevelName;
  }
  export type HierarchyLevelId = string;
  export type HierarchyLevelName = string;
  export interface HierarchyLevelUpdate {
    /**
     * The name of the user hierarchy level. Must not be more than 50 characters.
     */
    Name: HierarchyLevelName;
  }
  export interface HierarchyPath {
    /**
     * Information about level one.
     */
    LevelOne?: HierarchyGroupSummary;
    /**
     * Information about level two.
     */
    LevelTwo?: HierarchyGroupSummary;
    /**
     * Information about level three.
     */
    LevelThree?: HierarchyGroupSummary;
    /**
     * Information about level four.
     */
    LevelFour?: HierarchyGroupSummary;
    /**
     * Information about level five.
     */
    LevelFive?: HierarchyGroupSummary;
  }
  export interface HierarchyPathReference {
    /**
     * Information about level one.
     */
    LevelOne?: HierarchyGroupSummaryReference;
    /**
     * Information about level two.
     */
    LevelTwo?: HierarchyGroupSummaryReference;
    /**
     * Information about level three.
     */
    LevelThree?: HierarchyGroupSummaryReference;
    /**
     * Information about level four.
     */
    LevelFour?: HierarchyGroupSummaryReference;
    /**
     * Information about level five.
     */
    LevelFive?: HierarchyGroupSummaryReference;
  }
  export interface HierarchyStructure {
    /**
     * Information about level one.
     */
    LevelOne?: HierarchyLevel;
    /**
     * Information about level two.
     */
    LevelTwo?: HierarchyLevel;
    /**
     * Information about level three.
     */
    LevelThree?: HierarchyLevel;
    /**
     * Information about level four.
     */
    LevelFour?: HierarchyLevel;
    /**
     * Information about level five.
     */
    LevelFive?: HierarchyLevel;
  }
  export interface HierarchyStructureUpdate {
    /**
     * The update for level one.
     */
    LevelOne?: HierarchyLevelUpdate;
    /**
     * The update for level two.
     */
    LevelTwo?: HierarchyLevelUpdate;
    /**
     * The update for level three.
     */
    LevelThree?: HierarchyLevelUpdate;
    /**
     * The update for level four.
     */
    LevelFour?: HierarchyLevelUpdate;
    /**
     * The update for level five.
     */
    LevelFive?: HierarchyLevelUpdate;
  }
  export interface HistoricalMetric {
    /**
     * The name of the metric.
     */
    Name?: HistoricalMetricName;
    /**
     * The threshold for the metric, used with service level metrics.
     */
    Threshold?: Threshold;
    /**
     * The statistic for the metric.
     */
    Statistic?: Statistic;
    /**
     * The unit for the metric.
     */
    Unit?: Unit;
  }
  export interface HistoricalMetricData {
    /**
     * Information about the metric.
     */
    Metric?: HistoricalMetric;
    /**
     * The value of the metric.
     */
    Value?: Value;
  }
  export type HistoricalMetricDataCollections = HistoricalMetricData[];
  export type HistoricalMetricName = "CONTACTS_QUEUED"|"CONTACTS_HANDLED"|"CONTACTS_ABANDONED"|"CONTACTS_CONSULTED"|"CONTACTS_AGENT_HUNG_UP_FIRST"|"CONTACTS_HANDLED_INCOMING"|"CONTACTS_HANDLED_OUTBOUND"|"CONTACTS_HOLD_ABANDONS"|"CONTACTS_TRANSFERRED_IN"|"CONTACTS_TRANSFERRED_OUT"|"CONTACTS_TRANSFERRED_IN_FROM_QUEUE"|"CONTACTS_TRANSFERRED_OUT_FROM_QUEUE"|"CONTACTS_MISSED"|"CALLBACK_CONTACTS_HANDLED"|"API_CONTACTS_HANDLED"|"OCCUPANCY"|"HANDLE_TIME"|"AFTER_CONTACT_WORK_TIME"|"QUEUED_TIME"|"ABANDON_TIME"|"QUEUE_ANSWER_TIME"|"HOLD_TIME"|"INTERACTION_TIME"|"INTERACTION_AND_HOLD_TIME"|"SERVICE_LEVEL"|string;
  export interface HistoricalMetricResult {
    /**
     * The dimension for the metrics.
     */
    Dimensions?: Dimensions;
    /**
     * The set of metrics.
     */
    Collections?: HistoricalMetricDataCollections;
  }
  export type HistoricalMetricResults = HistoricalMetricResult[];
  export type HistoricalMetrics = HistoricalMetric[];
  export type Hours = number;
  export type Hours24Format = number;
  export interface HoursOfOperation {
    /**
     * The identifier for the hours of operation.
     */
    HoursOfOperationId?: HoursOfOperationId;
    /**
     * The Amazon Resource Name (ARN) for the hours of operation.
     */
    HoursOfOperationArn?: ARN;
    /**
     * The name for the hours of operation.
     */
    Name?: CommonNameLength127;
    /**
     * The description for the hours of operation.
     */
    Description?: HoursOfOperationDescription;
    /**
     * The time zone for the hours of operation.
     */
    TimeZone?: TimeZone;
    /**
     * Configuration information for the hours of operation.
     */
    Config?: HoursOfOperationConfigList;
    /**
     * The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     */
    Tags?: TagMap;
  }
  export interface HoursOfOperationConfig {
    /**
     * The day that the hours of operation applies to.
     */
    Day: HoursOfOperationDays;
    /**
     * The start time that your contact center opens.
     */
    StartTime: HoursOfOperationTimeSlice;
    /**
     * The end time that your contact center closes.
     */
    EndTime: HoursOfOperationTimeSlice;
  }
  export type HoursOfOperationConfigList = HoursOfOperationConfig[];
  export type HoursOfOperationDays = "SUNDAY"|"MONDAY"|"TUESDAY"|"WEDNESDAY"|"THURSDAY"|"FRIDAY"|"SATURDAY"|string;
  export type HoursOfOperationDescription = string;
  export type HoursOfOperationId = string;
  export type HoursOfOperationName = string;
  export interface HoursOfOperationSummary {
    /**
     * The identifier of the hours of operation.
     */
    Id?: HoursOfOperationId;
    /**
     * The Amazon Resource Name (ARN) of the hours of operation.
     */
    Arn?: ARN;
    /**
     * The name of the hours of operation.
     */
    Name?: HoursOfOperationName;
  }
  export type HoursOfOperationSummaryList = HoursOfOperationSummary[];
  export interface HoursOfOperationTimeSlice {
    /**
     * The hours.
     */
    Hours: Hours24Format;
    /**
     * The minutes.
     */
    Minutes: MinutesLimit60;
  }
  export type InboundCallsEnabled = boolean;
  export interface Instance {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    Id?: InstanceId;
    /**
     * The Amazon Resource Name (ARN) of the instance.
     */
    Arn?: ARN;
    /**
     * The identity management type.
     */
    IdentityManagementType?: DirectoryType;
    /**
     * The alias of instance.
     */
    InstanceAlias?: DirectoryAlias;
    /**
     * When the instance was created.
     */
    CreatedTime?: Timestamp;
    /**
     * The service role of the instance.
     */
    ServiceRole?: ARN;
    /**
     * The state of the instance.
     */
    InstanceStatus?: InstanceStatus;
    /**
     * Relevant details why the instance was not successfully created. 
     */
    StatusReason?: InstanceStatusReason;
    /**
     * Whether inbound calls are enabled.
     */
    InboundCallsEnabled?: InboundCallsEnabled;
    /**
     * Whether outbound calls are enabled.
     */
    OutboundCallsEnabled?: OutboundCallsEnabled;
  }
  export type InstanceArn = string;
  export type InstanceAttributeType = "INBOUND_CALLS"|"OUTBOUND_CALLS"|"CONTACTFLOW_LOGS"|"CONTACT_LENS"|"AUTO_RESOLVE_BEST_VOICES"|"USE_CUSTOM_TTS_VOICES"|"EARLY_MEDIA"|"MULTI_PARTY_CONFERENCE"|"HIGH_VOLUME_OUTBOUND"|"ENHANCED_CONTACT_MONITORING"|string;
  export type InstanceAttributeValue = string;
  export type InstanceId = string;
  export type InstanceIdOrArn = string;
  export type InstanceStatus = "CREATION_IN_PROGRESS"|"ACTIVE"|"CREATION_FAILED"|string;
  export interface InstanceStatusReason {
    /**
     * The message.
     */
    Message?: String;
  }
  export interface InstanceStorageConfig {
    /**
     * The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.
     */
    AssociationId?: AssociationId;
    /**
     * A valid storage type.
     */
    StorageType: StorageType;
    /**
     * The S3 bucket configuration.
     */
    S3Config?: S3Config;
    /**
     * The configuration of the Kinesis video stream.
     */
    KinesisVideoStreamConfig?: KinesisVideoStreamConfig;
    /**
     * The configuration of the Kinesis data stream.
     */
    KinesisStreamConfig?: KinesisStreamConfig;
    /**
     * The configuration of the Kinesis Firehose delivery stream.
     */
    KinesisFirehoseConfig?: KinesisFirehoseConfig;
  }
  export type InstanceStorageConfigs = InstanceStorageConfig[];
  export type InstanceStorageResourceType = "CHAT_TRANSCRIPTS"|"CALL_RECORDINGS"|"SCHEDULED_REPORTS"|"MEDIA_STREAMS"|"CONTACT_TRACE_RECORDS"|"AGENT_EVENTS"|"REAL_TIME_CONTACT_ANALYSIS_SEGMENTS"|string;
  export interface InstanceSummary {
    /**
     * The identifier of the instance.
     */
    Id?: InstanceId;
    /**
     * The Amazon Resource Name (ARN) of the instance.
     */
    Arn?: ARN;
    /**
     * The identity management type of the instance.
     */
    IdentityManagementType?: DirectoryType;
    /**
     * The alias of the instance.
     */
    InstanceAlias?: DirectoryAlias;
    /**
     * When the instance was created.
     */
    CreatedTime?: Timestamp;
    /**
     * The service role of the instance.
     */
    ServiceRole?: ARN;
    /**
     * The state of the instance.
     */
    InstanceStatus?: InstanceStatus;
    /**
     * Whether inbound calls are enabled.
     */
    InboundCallsEnabled?: InboundCallsEnabled;
    /**
     * Whether outbound calls are enabled.
     */
    OutboundCallsEnabled?: OutboundCallsEnabled;
  }
  export type InstanceSummaryList = InstanceSummary[];
  export type IntegerCount = number;
  export type IntegrationAssociationId = string;
  export interface IntegrationAssociationSummary {
    /**
     * The identifier for the AppIntegration association.
     */
    IntegrationAssociationId?: IntegrationAssociationId;
    /**
     * The Amazon Resource Name (ARN) for the AppIntegration association.
     */
    IntegrationAssociationArn?: ARN;
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId?: InstanceId;
    /**
     * The integration type.
     */
    IntegrationType?: IntegrationType;
    /**
     * The Amazon Resource Name (ARN) for the AppIntegration.
     */
    IntegrationArn?: ARN;
    /**
     * The URL for the external application.
     */
    SourceApplicationUrl?: URI;
    /**
     * The user-provided, friendly name for the external application.
     */
    SourceApplicationName?: SourceApplicationName;
    /**
     * The name of the source.
     */
    SourceType?: SourceType;
  }
  export type IntegrationAssociationSummaryList = IntegrationAssociationSummary[];
  export type IntegrationType = "EVENT"|"VOICE_ID"|"PINPOINT_APP"|"WISDOM_ASSISTANT"|"WISDOM_KNOWLEDGE_BASE"|"CASES_DOMAIN"|string;
  export interface InvisibleFieldInfo {
    /**
     * Identifier of the invisible field.
     */
    Id?: TaskTemplateFieldIdentifier;
  }
  export type InvisibleTaskTemplateFields = InvisibleFieldInfo[];
  export type KeyId = string;
  export interface KinesisFirehoseConfig {
    /**
     * The Amazon Resource Name (ARN) of the delivery stream.
     */
    FirehoseArn: ARN;
  }
  export interface KinesisStreamConfig {
    /**
     * The Amazon Resource Name (ARN) of the data stream.
     */
    StreamArn: ARN;
  }
  export interface KinesisVideoStreamConfig {
    /**
     * The prefix of the video stream.
     */
    Prefix: Prefix;
    /**
     * The number of hours data is retained in the stream. Kinesis Video Streams retains the data in a data store that is associated with the stream. The default value is 0, indicating that the stream does not persist data.
     */
    RetentionPeriodHours: Hours;
    /**
     * The encryption configuration.
     */
    EncryptionConfig: EncryptionConfig;
  }
  export type LargeNextToken = string;
  export interface LexBot {
    /**
     * The name of the Amazon Lex bot.
     */
    Name?: BotName;
    /**
     * The Amazon Web Services Region where the Amazon Lex bot was created.
     */
    LexRegion?: LexRegion;
  }
  export interface LexBotConfig {
    LexBot?: LexBot;
    /**
     * Configuration information of an Amazon Lex V2 bot.
     */
    LexV2Bot?: LexV2Bot;
  }
  export type LexBotConfigList = LexBotConfig[];
  export type LexBotsList = LexBot[];
  export type LexRegion = string;
  export interface LexV2Bot {
    /**
     * The Amazon Resource Name (ARN) of the Amazon Lex V2 bot.
     */
    AliasArn?: AliasArn;
  }
  export type LexVersion = "V1"|"V2"|string;
  export interface ListAgentStatusRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return per page.
     */
    MaxResults?: MaxResult1000;
    /**
     * Available agent status types.
     */
    AgentStatusTypes?: AgentStatusTypes;
  }
  export interface ListAgentStatusResponse {
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: NextToken;
    /**
     * A summary of agent statuses.
     */
    AgentStatusSummaryList?: AgentStatusSummaryList;
  }
  export interface ListApprovedOriginsRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return per page.
     */
    MaxResults?: MaxResult25;
  }
  export interface ListApprovedOriginsResponse {
    /**
     * The approved origins.
     */
    Origins?: OriginsList;
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListBotsRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return per page.
     */
    MaxResults?: MaxResult25;
    /**
     * The version of Amazon Lex or Amazon Lex V2.
     */
    LexVersion: LexVersion;
  }
  export interface ListBotsResponse {
    /**
     * The names and Amazon Web Services Regions of the Amazon Lex or Amazon Lex V2 bots associated with the specified instance.
     */
    LexBots?: LexBotConfigList;
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListContactFlowModulesRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return per page.
     */
    MaxResults?: MaxResult1000;
    /**
     * The state of the flow module.
     */
    ContactFlowModuleState?: ContactFlowModuleState;
  }
  export interface ListContactFlowModulesResponse {
    /**
     * Information about the flow module.
     */
    ContactFlowModulesSummaryList?: ContactFlowModulesSummaryList;
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListContactFlowsRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The type of flow.
     */
    ContactFlowTypes?: ContactFlowTypes;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return per page. The default MaxResult size is 100.
     */
    MaxResults?: MaxResult1000;
  }
  export interface ListContactFlowsResponse {
    /**
     * Information about the flows.
     */
    ContactFlowSummaryList?: ContactFlowSummaryList;
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListContactReferencesRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the initial contact.
     */
    ContactId: ContactId;
    /**
     * The type of reference.
     */
    ReferenceTypes: ReferenceTypes;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.  This is not expected to be set, because the value returned in the previous response is always null. 
     */
    NextToken?: NextToken;
  }
  export interface ListContactReferencesResponse {
    /**
     * Information about the flows.
     */
    ReferenceSummaryList?: ReferenceSummaryList;
    /**
     * If there are additional results, this is the token for the next set of results.  This is always returned as null in the response. 
     */
    NextToken?: NextToken;
  }
  export interface ListDefaultVocabulariesRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see What is Amazon Transcribe? 
     */
    LanguageCode?: VocabularyLanguageCode;
    /**
     * The maximum number of results to return per page.
     */
    MaxResults?: MaxResult100;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: VocabularyNextToken;
  }
  export interface ListDefaultVocabulariesResponse {
    /**
     * A list of default vocabularies.
     */
    DefaultVocabularyList: DefaultVocabularyList;
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: VocabularyNextToken;
  }
  export interface ListHoursOfOperationsRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return per page. The default MaxResult size is 100.
     */
    MaxResults?: MaxResult1000;
  }
  export interface ListHoursOfOperationsResponse {
    /**
     * Information about the hours of operation.
     */
    HoursOfOperationSummaryList?: HoursOfOperationSummaryList;
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListInstanceAttributesRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return per page.
     */
    MaxResults?: MaxResult7;
  }
  export interface ListInstanceAttributesResponse {
    /**
     * The attribute types.
     */
    Attributes?: AttributesList;
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListInstanceStorageConfigsRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * A valid resource type.
     */
    ResourceType: InstanceStorageResourceType;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return per page.
     */
    MaxResults?: MaxResult10;
  }
  export interface ListInstanceStorageConfigsResponse {
    /**
     * A valid storage type.
     */
    StorageConfigs?: InstanceStorageConfigs;
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListInstancesRequest {
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return per page.
     */
    MaxResults?: MaxResult10;
  }
  export interface ListInstancesResponse {
    /**
     * Information about the instances.
     */
    InstanceSummaryList?: InstanceSummaryList;
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListIntegrationAssociationsRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The integration type.
     */
    IntegrationType?: IntegrationType;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return per page.
     */
    MaxResults?: MaxResult100;
  }
  export interface ListIntegrationAssociationsResponse {
    /**
     * The associations.
     */
    IntegrationAssociationSummaryList?: IntegrationAssociationSummaryList;
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListLambdaFunctionsRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return per page.
     */
    MaxResults?: MaxResult25;
  }
  export interface ListLambdaFunctionsResponse {
    /**
     * The Lambdafunction ARNs associated with the specified instance.
     */
    LambdaFunctions?: FunctionArnsList;
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListLexBotsRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return per page. If no value is specified, the default is 10. 
     */
    MaxResults?: MaxResult25;
  }
  export interface ListLexBotsResponse {
    /**
     * The names and Amazon Web Services Regions of the Amazon Lex bots associated with the specified instance.
     */
    LexBots?: LexBotsList;
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListPhoneNumbersRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The type of phone number.
     */
    PhoneNumberTypes?: PhoneNumberTypes;
    /**
     * The ISO country code.
     */
    PhoneNumberCountryCodes?: PhoneNumberCountryCodes;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return per page. The default MaxResult size is 100.
     */
    MaxResults?: MaxResult1000;
  }
  export interface ListPhoneNumbersResponse {
    /**
     * Information about the phone numbers.
     */
    PhoneNumberSummaryList?: PhoneNumberSummaryList;
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListPhoneNumbersSummary {
    /**
     * A unique identifier for the phone number.
     */
    PhoneNumberId?: PhoneNumberId;
    /**
     * The Amazon Resource Name (ARN) of the phone number.
     */
    PhoneNumberArn?: ARN;
    /**
     * The phone number. Phone numbers are formatted [+] [country code] [subscriber number including area code].
     */
    PhoneNumber?: PhoneNumber;
    /**
     * The ISO country code.
     */
    PhoneNumberCountryCode?: PhoneNumberCountryCode;
    /**
     * The type of phone number.
     */
    PhoneNumberType?: PhoneNumberType;
    /**
     * The Amazon Resource Name (ARN) for Amazon Connect instances or traffic distribution groups that phone numbers are claimed to.
     */
    TargetArn?: ARN;
  }
  export type ListPhoneNumbersSummaryList = ListPhoneNumbersSummary[];
  export interface ListPhoneNumbersV2Request {
    /**
     * The Amazon Resource Name (ARN) for Amazon Connect instances or traffic distribution groups that phone numbers are claimed to. If TargetArn input is not provided, this API lists numbers claimed to all the Amazon Connect instances belonging to your account in the same Amazon Web Services Region as the request.
     */
    TargetArn?: ARN;
    /**
     * The maximum number of results to return per page.
     */
    MaxResults?: MaxResult1000;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: LargeNextToken;
    /**
     * The ISO country code.
     */
    PhoneNumberCountryCodes?: PhoneNumberCountryCodes;
    /**
     * The type of phone number.
     */
    PhoneNumberTypes?: PhoneNumberTypes;
    /**
     * The prefix of the phone number. If provided, it must contain + as part of the country code.
     */
    PhoneNumberPrefix?: PhoneNumberPrefix;
  }
  export interface ListPhoneNumbersV2Response {
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: LargeNextToken;
    /**
     * Information about phone numbers that have been claimed to your Amazon Connect instances or traffic distribution groups.
     */
    ListPhoneNumbersSummaryList?: ListPhoneNumbersSummaryList;
  }
  export interface ListPromptsRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return per page. The default MaxResult size is 100.
     */
    MaxResults?: MaxResult1000;
  }
  export interface ListPromptsResponse {
    /**
     * Information about the prompts.
     */
    PromptSummaryList?: PromptSummaryList;
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListQueueQuickConnectsRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier for the queue.
     */
    QueueId: QueueId;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return per page. The default MaxResult size is 100.
     */
    MaxResults?: MaxResult100;
  }
  export interface ListQueueQuickConnectsResponse {
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: NextToken;
    /**
     * Information about the quick connects.
     */
    QuickConnectSummaryList?: QuickConnectSummaryList;
  }
  export interface ListQueuesRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The type of queue.
     */
    QueueTypes?: QueueTypes;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return per page. The default MaxResult size is 100.
     */
    MaxResults?: MaxResult1000;
  }
  export interface ListQueuesResponse {
    /**
     * Information about the queues.
     */
    QueueSummaryList?: QueueSummaryList;
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListQuickConnectsRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return per page. The default MaxResult size is 100.
     */
    MaxResults?: MaxResult1000;
    /**
     * The type of quick connect. In the Amazon Connect console, when you create a quick connect, you are prompted to assign one of the following types: Agent (USER), External (PHONE_NUMBER), or Queue (QUEUE).
     */
    QuickConnectTypes?: QuickConnectTypes;
  }
  export interface ListQuickConnectsResponse {
    /**
     * Information about the quick connects.
     */
    QuickConnectSummaryList?: QuickConnectSummaryList;
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListRoutingProfileQueuesRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the routing profile.
     */
    RoutingProfileId: RoutingProfileId;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return per page. The default MaxResult size is 100.
     */
    MaxResults?: MaxResult100;
  }
  export interface ListRoutingProfileQueuesResponse {
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: NextToken;
    /**
     * Information about the routing profiles.
     */
    RoutingProfileQueueConfigSummaryList?: RoutingProfileQueueConfigSummaryList;
  }
  export interface ListRoutingProfilesRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return per page. The default MaxResult size is 100.
     */
    MaxResults?: MaxResult1000;
  }
  export interface ListRoutingProfilesResponse {
    /**
     * Information about the routing profiles.
     */
    RoutingProfileSummaryList?: RoutingProfileSummaryList;
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListRulesRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The publish status of the rule.
     */
    PublishStatus?: RulePublishStatus;
    /**
     * The name of the event source.
     */
    EventSourceName?: EventSourceName;
    /**
     * The maximum number of results to return per page.
     */
    MaxResults?: MaxResult200;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListRulesResponse {
    /**
     * Summary information about a rule.
     */
    RuleSummaryList: RuleSummaryList;
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListSecurityKeysRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return per page.
     */
    MaxResults?: MaxResult2;
  }
  export interface ListSecurityKeysResponse {
    /**
     * The security keys.
     */
    SecurityKeys?: SecurityKeysList;
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListSecurityProfilePermissionsRequest {
    /**
     * The identifier for the security profle.
     */
    SecurityProfileId: SecurityProfileId;
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return per page.
     */
    MaxResults?: MaxResult1000;
  }
  export interface ListSecurityProfilePermissionsResponse {
    /**
     * The permissions granted to the security profile. For a complete list of valid permissions, see List of security profile permissions.
     */
    Permissions?: PermissionsList;
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListSecurityProfilesRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return per page. The default MaxResult size is 100.
     */
    MaxResults?: MaxResult1000;
  }
  export interface ListSecurityProfilesResponse {
    /**
     * Information about the security profiles.
     */
    SecurityProfileSummaryList?: SecurityProfileSummaryList;
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    resourceArn: ARN;
  }
  export interface ListTagsForResourceResponse {
    /**
     * Information about the tags.
     */
    tags?: TagMap;
  }
  export interface ListTaskTemplatesRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.  It is not expected that you set this because the value returned in the previous response is always null. 
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return per page.  It is not expected that you set this. 
     */
    MaxResults?: MaxResult100;
    /**
     * Marks a template as ACTIVE or INACTIVE for a task to refer to it. Tasks can only be created from ACTIVE templates. If a template is marked as INACTIVE, then a task that refers to this template cannot be created.
     */
    Status?: TaskTemplateStatus;
    /**
     * The name of the task template.
     */
    Name?: TaskTemplateName;
  }
  export interface ListTaskTemplatesResponse {
    /**
     * Provides details about a list of task templates belonging to an instance.
     */
    TaskTemplates?: TaskTemplateList;
    /**
     * If there are additional results, this is the token for the next set of results.  This is always returned as a null in the response. 
     */
    NextToken?: NextToken;
  }
  export interface ListTrafficDistributionGroupsRequest {
    /**
     * The maximum number of results to return per page.
     */
    MaxResults?: MaxResult10;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId?: InstanceIdOrArn;
  }
  export interface ListTrafficDistributionGroupsResponse {
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: NextToken;
    /**
     * A list of traffic distribution groups.
     */
    TrafficDistributionGroupSummaryList?: TrafficDistributionGroupSummaryList;
  }
  export interface ListUseCasesRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier for the integration association.
     */
    IntegrationAssociationId: IntegrationAssociationId;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return per page.
     */
    MaxResults?: MaxResult100;
  }
  export interface ListUseCasesResponse {
    /**
     * The use cases.
     */
    UseCaseSummaryList?: UseCaseSummaryList;
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListUserHierarchyGroupsRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return per page. The default MaxResult size is 100.
     */
    MaxResults?: MaxResult1000;
  }
  export interface ListUserHierarchyGroupsResponse {
    /**
     * Information about the hierarchy groups.
     */
    UserHierarchyGroupSummaryList?: HierarchyGroupSummaryList;
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListUsersRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return per page. The default MaxResult size is 100.
     */
    MaxResults?: MaxResult1000;
  }
  export interface ListUsersResponse {
    /**
     * Information about the users.
     */
    UserSummaryList?: UserSummaryList;
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: NextToken;
  }
  export type Long = number;
  export type MaxResult10 = number;
  export type MaxResult100 = number;
  export type MaxResult1000 = number;
  export type MaxResult2 = number;
  export type MaxResult200 = number;
  export type MaxResult25 = number;
  export type MaxResult7 = number;
  export type MediaConcurrencies = MediaConcurrency[];
  export interface MediaConcurrency {
    /**
     * The channels that agents can handle in the Contact Control Panel (CCP).
     */
    Channel: Channel;
    /**
     * The number of contacts an agent can have on a channel simultaneously. Valid Range for VOICE: Minimum value of 1. Maximum value of 1. Valid Range for CHAT: Minimum value of 1. Maximum value of 10. Valid Range for TASK: Minimum value of 1. Maximum value of 10.
     */
    Concurrency: Concurrency;
  }
  export type MinutesLimit60 = number;
  export type MonitorCapability = "SILENT_MONITOR"|"BARGE"|string;
  export interface MonitorContactRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the contact.
     */
    ContactId: ContactId;
    /**
     * The identifier of the user account.
     */
    UserId: AgentResourceId;
    /**
     * Specify which monitoring actions the user is allowed to take. For example, whether the user is allowed to escalate from silent monitoring to barge.
     */
    AllowedMonitorCapabilities?: AllowedMonitorCapabilities;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs.
     */
    ClientToken?: ClientToken;
  }
  export interface MonitorContactResponse {
    /**
     * The identifier of the contact.
     */
    ContactId?: ContactId;
    /**
     * The ARN of the contact.
     */
    ContactArn?: ARN;
  }
  export type Name = string;
  export type Name128 = string;
  export type NextToken = string;
  export type NextToken2500 = string;
  export type NotificationContentType = "PLAIN_TEXT"|string;
  export type NotificationDeliveryType = "EMAIL"|string;
  export interface NotificationRecipientType {
    /**
     * The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }. Amazon Connect users with the specified tags will be notified.
     */
    UserTags?: UserTagMap;
    /**
     * A list of user IDs.
     */
    UserIds?: UserIdList;
  }
  export interface NumberReference {
    /**
     * Identifier of the number reference.
     */
    Name?: ReferenceKey;
    /**
     * A valid number.
     */
    Value?: ReferenceValue;
  }
  export type Origin = string;
  export type OriginsList = Origin[];
  export interface OutboundCallerConfig {
    /**
     * The caller ID name.
     */
    OutboundCallerIdName?: OutboundCallerIdName;
    /**
     * The caller ID number.
     */
    OutboundCallerIdNumberId?: PhoneNumberId;
    /**
     * The outbound whisper flow to be used during an outbound call.
     */
    OutboundFlowId?: ContactFlowId;
  }
  export type OutboundCallerIdName = string;
  export type OutboundCallsEnabled = boolean;
  export type PEM = string;
  export interface ParticipantDetails {
    /**
     * Display name of the participant.
     */
    DisplayName: DisplayName;
  }
  export type ParticipantId = string;
  export type ParticipantTimerAction = "Unset"|string;
  export type ParticipantTimerConfigList = ParticipantTimerConfiguration[];
  export interface ParticipantTimerConfiguration {
    /**
     * The role of the participant in the chat conversation.
     */
    ParticipantRole: TimerEligibleParticipantRoles;
    /**
     * The type of timer. IDLE indicates the timer applies for considering a human chat participant as idle. DISCONNECT_NONCUSTOMER indicates the timer applies to automatically disconnecting a chat participant due to idleness.
     */
    TimerType: ParticipantTimerType;
    /**
     * The value of the timer. Either the timer action (Unset to delete the timer), or the duration of the timer in minutes. Only one value can be set.
     */
    TimerValue: ParticipantTimerValue;
  }
  export type ParticipantTimerDurationInMinutes = number;
  export type ParticipantTimerType = "IDLE"|"DISCONNECT_NONCUSTOMER"|string;
  export interface ParticipantTimerValue {
    /**
     * The timer action. Currently only one value is allowed: Unset. It deletes a timer.
     */
    ParticipantTimerAction?: ParticipantTimerAction;
    /**
     * The duration of a timer, in minutes. 
     */
    ParticipantTimerDurationInMinutes?: ParticipantTimerDurationInMinutes;
  }
  export type ParticipantToken = string;
  export type Password = string;
  export type Percentage = number;
  export type PermissionsList = SecurityProfilePermission[];
  export type PhoneNumber = string;
  export type PhoneNumberCountryCode = "AF"|"AL"|"DZ"|"AS"|"AD"|"AO"|"AI"|"AQ"|"AG"|"AR"|"AM"|"AW"|"AU"|"AT"|"AZ"|"BS"|"BH"|"BD"|"BB"|"BY"|"BE"|"BZ"|"BJ"|"BM"|"BT"|"BO"|"BA"|"BW"|"BR"|"IO"|"VG"|"BN"|"BG"|"BF"|"BI"|"KH"|"CM"|"CA"|"CV"|"KY"|"CF"|"TD"|"CL"|"CN"|"CX"|"CC"|"CO"|"KM"|"CK"|"CR"|"HR"|"CU"|"CW"|"CY"|"CZ"|"CD"|"DK"|"DJ"|"DM"|"DO"|"TL"|"EC"|"EG"|"SV"|"GQ"|"ER"|"EE"|"ET"|"FK"|"FO"|"FJ"|"FI"|"FR"|"PF"|"GA"|"GM"|"GE"|"DE"|"GH"|"GI"|"GR"|"GL"|"GD"|"GU"|"GT"|"GG"|"GN"|"GW"|"GY"|"HT"|"HN"|"HK"|"HU"|"IS"|"IN"|"ID"|"IR"|"IQ"|"IE"|"IM"|"IL"|"IT"|"CI"|"JM"|"JP"|"JE"|"JO"|"KZ"|"KE"|"KI"|"KW"|"KG"|"LA"|"LV"|"LB"|"LS"|"LR"|"LY"|"LI"|"LT"|"LU"|"MO"|"MK"|"MG"|"MW"|"MY"|"MV"|"ML"|"MT"|"MH"|"MR"|"MU"|"YT"|"MX"|"FM"|"MD"|"MC"|"MN"|"ME"|"MS"|"MA"|"MZ"|"MM"|"NA"|"NR"|"NP"|"NL"|"AN"|"NC"|"NZ"|"NI"|"NE"|"NG"|"NU"|"KP"|"MP"|"NO"|"OM"|"PK"|"PW"|"PA"|"PG"|"PY"|"PE"|"PH"|"PN"|"PL"|"PT"|"PR"|"QA"|"CG"|"RE"|"RO"|"RU"|"RW"|"BL"|"SH"|"KN"|"LC"|"MF"|"PM"|"VC"|"WS"|"SM"|"ST"|"SA"|"SN"|"RS"|"SC"|"SL"|"SG"|"SX"|"SK"|"SI"|"SB"|"SO"|"ZA"|"KR"|"ES"|"LK"|"SD"|"SR"|"SJ"|"SZ"|"SE"|"CH"|"SY"|"TW"|"TJ"|"TZ"|"TH"|"TG"|"TK"|"TO"|"TT"|"TN"|"TR"|"TM"|"TC"|"TV"|"VI"|"UG"|"UA"|"AE"|"GB"|"US"|"UY"|"UZ"|"VU"|"VA"|"VE"|"VN"|"WF"|"EH"|"YE"|"ZM"|"ZW"|string;
  export type PhoneNumberCountryCodes = PhoneNumberCountryCode[];
  export type PhoneNumberDescription = string;
  export type PhoneNumberId = string;
  export type PhoneNumberPrefix = string;
  export interface PhoneNumberQuickConnectConfig {
    /**
     * The phone number in E.164 format.
     */
    PhoneNumber: PhoneNumber;
  }
  export interface PhoneNumberStatus {
    /**
     * The status.
     */
    Status?: PhoneNumberWorkflowStatus;
    /**
     * The status message.
     */
    Message?: PhoneNumberWorkflowMessage;
  }
  export interface PhoneNumberSummary {
    /**
     * The identifier of the phone number.
     */
    Id?: PhoneNumberId;
    /**
     * The Amazon Resource Name (ARN) of the phone number.
     */
    Arn?: ARN;
    /**
     * The phone number.
     */
    PhoneNumber?: PhoneNumber;
    /**
     * The type of phone number.
     */
    PhoneNumberType?: PhoneNumberType;
    /**
     * The ISO country code.
     */
    PhoneNumberCountryCode?: PhoneNumberCountryCode;
  }
  export type PhoneNumberSummaryList = PhoneNumberSummary[];
  export type PhoneNumberType = "TOLL_FREE"|"DID"|string;
  export type PhoneNumberTypes = PhoneNumberType[];
  export type PhoneNumberWorkflowMessage = string;
  export type PhoneNumberWorkflowStatus = "CLAIMED"|"IN_PROGRESS"|"FAILED"|string;
  export type PhoneType = "SOFT_PHONE"|"DESK_PHONE"|string;
  export type Prefix = string;
  export type Priority = number;
  export type PromptId = string;
  export type PromptName = string;
  export interface PromptSummary {
    /**
     * The identifier of the prompt.
     */
    Id?: PromptId;
    /**
     * The Amazon Resource Name (ARN) of the prompt.
     */
    Arn?: ARN;
    /**
     * The name of the prompt.
     */
    Name?: PromptName;
  }
  export type PromptSummaryList = PromptSummary[];
  export interface PutUserStatusRequest {
    /**
     * The identifier of the user.
     */
    UserId: UserId;
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the agent status.
     */
    AgentStatusId: AgentStatusId;
  }
  export interface PutUserStatusResponse {
  }
  export interface Queue {
    /**
     * The name of the queue.
     */
    Name?: CommonNameLength127;
    /**
     * The Amazon Resource Name (ARN) for the queue.
     */
    QueueArn?: ARN;
    /**
     * The identifier for the queue.
     */
    QueueId?: QueueId;
    /**
     * The description of the queue.
     */
    Description?: QueueDescription;
    /**
     * The outbound caller ID name, number, and outbound whisper flow.
     */
    OutboundCallerConfig?: OutboundCallerConfig;
    /**
     * The identifier for the hours of operation.
     */
    HoursOfOperationId?: HoursOfOperationId;
    /**
     * The maximum number of contacts that can be in the queue before it is considered full.
     */
    MaxContacts?: QueueMaxContacts;
    /**
     * The status of the queue.
     */
    Status?: QueueStatus;
    /**
     * The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     */
    Tags?: TagMap;
  }
  export type QueueDescription = string;
  export type QueueId = string;
  export interface QueueInfo {
    /**
     * The unique identifier for the queue.
     */
    Id?: QueueId;
    /**
     * The timestamp when the contact was added to the queue.
     */
    EnqueueTimestamp?: timestamp;
  }
  export type QueueMaxContacts = number;
  export type QueueName = string;
  export interface QueueQuickConnectConfig {
    /**
     * The identifier for the queue.
     */
    QueueId: QueueId;
    /**
     * The identifier of the flow.
     */
    ContactFlowId: ContactFlowId;
  }
  export interface QueueReference {
    /**
     * The identifier of the queue.
     */
    Id?: QueueId;
    /**
     * The Amazon Resource Name (ARN) of the queue.
     */
    Arn?: ARN;
  }
  export type QueueSearchConditionList = QueueSearchCriteria[];
  export interface QueueSearchCriteria {
    /**
     * A list of conditions which would be applied together with an OR condition.
     */
    OrConditions?: QueueSearchConditionList;
    /**
     * A list of conditions which would be applied together with an AND condition.
     */
    AndConditions?: QueueSearchConditionList;
    StringCondition?: StringCondition;
    /**
     * The type of queue.
     */
    QueueTypeCondition?: SearchableQueueType;
  }
  export interface QueueSearchFilter {
    TagFilter?: ControlPlaneTagFilter;
  }
  export type QueueSearchSummaryList = Queue[];
  export type QueueStatus = "ENABLED"|"DISABLED"|string;
  export interface QueueSummary {
    /**
     * The identifier of the queue.
     */
    Id?: QueueId;
    /**
     * The Amazon Resource Name (ARN) of the queue.
     */
    Arn?: ARN;
    /**
     * The name of the queue.
     */
    Name?: QueueName;
    /**
     * The type of queue.
     */
    QueueType?: QueueType;
  }
  export type QueueSummaryList = QueueSummary[];
  export type QueueType = "STANDARD"|"AGENT"|string;
  export type QueueTypes = QueueType[];
  export type Queues = QueueId[];
  export interface QuickConnect {
    /**
     * The Amazon Resource Name (ARN) of the quick connect.
     */
    QuickConnectARN?: ARN;
    /**
     * The identifier for the quick connect.
     */
    QuickConnectId?: QuickConnectId;
    /**
     * The name of the quick connect.
     */
    Name?: QuickConnectName;
    /**
     * The description.
     */
    Description?: QuickConnectDescription;
    /**
     * Contains information about the quick connect.
     */
    QuickConnectConfig?: QuickConnectConfig;
    /**
     * The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     */
    Tags?: TagMap;
  }
  export interface QuickConnectConfig {
    /**
     * The type of quick connect. In the Amazon Connect console, when you create a quick connect, you are prompted to assign one of the following types: Agent (USER), External (PHONE_NUMBER), or Queue (QUEUE). 
     */
    QuickConnectType: QuickConnectType;
    /**
     * The user configuration. This is required only if QuickConnectType is USER.
     */
    UserConfig?: UserQuickConnectConfig;
    /**
     * The queue configuration. This is required only if QuickConnectType is QUEUE.
     */
    QueueConfig?: QueueQuickConnectConfig;
    /**
     * The phone configuration. This is required only if QuickConnectType is PHONE_NUMBER.
     */
    PhoneConfig?: PhoneNumberQuickConnectConfig;
  }
  export type QuickConnectDescription = string;
  export type QuickConnectId = string;
  export type QuickConnectName = string;
  export interface QuickConnectSummary {
    /**
     * The identifier for the quick connect.
     */
    Id?: QuickConnectId;
    /**
     * The Amazon Resource Name (ARN) of the quick connect.
     */
    Arn?: ARN;
    /**
     * The name of the quick connect.
     */
    Name?: QuickConnectName;
    /**
     * The type of quick connect. In the Amazon Connect console, when you create a quick connect, you are prompted to assign one of the following types: Agent (USER), External (PHONE_NUMBER), or Queue (QUEUE).
     */
    QuickConnectType?: QuickConnectType;
  }
  export type QuickConnectSummaryList = QuickConnectSummary[];
  export type QuickConnectType = "USER"|"QUEUE"|"PHONE_NUMBER"|string;
  export type QuickConnectTypes = QuickConnectType[];
  export type QuickConnectsList = QuickConnectId[];
  export interface ReadOnlyFieldInfo {
    /**
     * Identifier of the read-only field.
     */
    Id?: TaskTemplateFieldIdentifier;
  }
  export type ReadOnlyTaskTemplateFields = ReadOnlyFieldInfo[];
  export interface Reference {
    /**
     * A valid value for the reference. For example, for a URL reference, a formatted URL that is displayed to an agent in the Contact Control Panel (CCP).
     */
    Value: ReferenceValue;
    /**
     * The type of the reference. DATE must be of type Epoch timestamp. 
     */
    Type: ReferenceType;
  }
  export type ReferenceKey = string;
  export type ReferenceStatus = "APPROVED"|"REJECTED"|string;
  export interface ReferenceSummary {
    /**
     * Information about the reference when the referenceType is URL. Otherwise, null.
     */
    Url?: UrlReference;
    /**
     * Information about the reference when the referenceType is ATTACHMENT. Otherwise, null.
     */
    Attachment?: AttachmentReference;
    /**
     * Information about a reference when the referenceType is STRING. Otherwise, null.
     */
    String?: StringReference;
    /**
     * Information about a reference when the referenceType is NUMBER. Otherwise, null.
     */
    Number?: NumberReference;
    /**
     * Information about a reference when the referenceType is DATE. Otherwise, null.
     */
    Date?: DateReference;
    /**
     * Information about a reference when the referenceType is EMAIL. Otherwise, null.
     */
    Email?: EmailReference;
  }
  export type ReferenceSummaryList = ReferenceSummary[];
  export type ReferenceType = "URL"|"ATTACHMENT"|"NUMBER"|"STRING"|"DATE"|"EMAIL"|string;
  export type ReferenceTypes = ReferenceType[];
  export type ReferenceValue = string;
  export interface ReleasePhoneNumberRequest {
    /**
     * A unique identifier for the phone number.
     */
    PhoneNumberId: PhoneNumberId;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs.
     */
    ClientToken?: ClientToken;
  }
  export interface ReplicateInstanceRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance. You can provide the InstanceId, or the entire ARN.
     */
    InstanceId: InstanceIdOrArn;
    /**
     * The Amazon Web Services Region where to replicate the Amazon Connect instance.
     */
    ReplicaRegion: AwsRegion;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs.
     */
    ClientToken?: ClientToken;
    /**
     * The alias for the replicated instance. The ReplicaAlias must be unique.
     */
    ReplicaAlias: DirectoryAlias;
  }
  export interface ReplicateInstanceResponse {
    /**
     * The identifier of the replicated instance. You can find the instanceId in the ARN of the instance. The replicated instance has the same identifier as the instance it was replicated from.
     */
    Id?: InstanceId;
    /**
     * The Amazon Resource Name (ARN) of the replicated instance.
     */
    Arn?: ARN;
  }
  export interface RequiredFieldInfo {
    /**
     * The unique identifier for the field.
     */
    Id?: TaskTemplateFieldIdentifier;
  }
  export type RequiredTaskTemplateFields = RequiredFieldInfo[];
  export interface ResumeContactRecordingRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the contact.
     */
    ContactId: ContactId;
    /**
     * The identifier of the contact. This is the identifier of the contact associated with the first interaction with the contact center.
     */
    InitialContactId: ContactId;
  }
  export interface ResumeContactRecordingResponse {
  }
  export interface RoutingProfile {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId?: InstanceId;
    /**
     * The name of the routing profile.
     */
    Name?: RoutingProfileName;
    /**
     * The Amazon Resource Name (ARN) of the routing profile.
     */
    RoutingProfileArn?: ARN;
    /**
     * The identifier of the routing profile.
     */
    RoutingProfileId?: RoutingProfileId;
    /**
     * The description of the routing profile.
     */
    Description?: RoutingProfileDescription;
    /**
     * The channels agents can handle in the Contact Control Panel (CCP) for this routing profile.
     */
    MediaConcurrencies?: MediaConcurrencies;
    /**
     * The identifier of the default outbound queue for this routing profile.
     */
    DefaultOutboundQueueId?: QueueId;
    /**
     * The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     */
    Tags?: TagMap;
    /**
     * The number of associated queues in routing profile.
     */
    NumberOfAssociatedQueues?: Long;
    /**
     * The number of associated users in routing profile.
     */
    NumberOfAssociatedUsers?: Long;
  }
  export type RoutingProfileDescription = string;
  export type RoutingProfileId = string;
  export type RoutingProfileList = RoutingProfile[];
  export type RoutingProfileName = string;
  export interface RoutingProfileQueueConfig {
    /**
     * Contains information about a queue resource.
     */
    QueueReference: RoutingProfileQueueReference;
    /**
     * The order in which contacts are to be handled for the queue. For more information, see Queues: priority and delay.
     */
    Priority: Priority;
    /**
     * The delay, in seconds, a contact should be in the queue before they are routed to an available agent. For more information, see Queues: priority and delay in the Amazon Connect Administrator Guide.
     */
    Delay: Delay;
  }
  export type RoutingProfileQueueConfigList = RoutingProfileQueueConfig[];
  export interface RoutingProfileQueueConfigSummary {
    /**
     * The identifier for the queue.
     */
    QueueId: QueueId;
    /**
     * The Amazon Resource Name (ARN) of the queue.
     */
    QueueArn: ARN;
    /**
     * The name of the queue.
     */
    QueueName: QueueName;
    /**
     * The order in which contacts are to be handled for the queue. For more information, see Queues: priority and delay.
     */
    Priority: Priority;
    /**
     * The delay, in seconds, that a contact should be in the queue before they are routed to an available agent. For more information, see Queues: priority and delay in the Amazon Connect Administrator Guide.
     */
    Delay: Delay;
    /**
     * The channels this queue supports.
     */
    Channel: Channel;
  }
  export type RoutingProfileQueueConfigSummaryList = RoutingProfileQueueConfigSummary[];
  export interface RoutingProfileQueueReference {
    /**
     * The identifier for the queue.
     */
    QueueId: QueueId;
    /**
     * The channels agents can handle in the Contact Control Panel (CCP) for this routing profile.
     */
    Channel: Channel;
  }
  export type RoutingProfileQueueReferenceList = RoutingProfileQueueReference[];
  export interface RoutingProfileReference {
    /**
     * The identifier of the routing profile.
     */
    Id?: RoutingProfileId;
    /**
     * The Amazon Resource Name (ARN) of the routing profile.
     */
    Arn?: ARN;
  }
  export type RoutingProfileSearchConditionList = RoutingProfileSearchCriteria[];
  export interface RoutingProfileSearchCriteria {
    /**
     * A list of conditions which would be applied together with an OR condition.
     */
    OrConditions?: RoutingProfileSearchConditionList;
    /**
     * A list of conditions which would be applied together with an AND condition.
     */
    AndConditions?: RoutingProfileSearchConditionList;
    StringCondition?: StringCondition;
  }
  export interface RoutingProfileSearchFilter {
    TagFilter?: ControlPlaneTagFilter;
  }
  export interface RoutingProfileSummary {
    /**
     * The identifier of the routing profile.
     */
    Id?: RoutingProfileId;
    /**
     * The Amazon Resource Name (ARN) of the routing profile.
     */
    Arn?: ARN;
    /**
     * The name of the routing profile.
     */
    Name?: RoutingProfileName;
  }
  export type RoutingProfileSummaryList = RoutingProfileSummary[];
  export type RoutingProfiles = RoutingProfileId[];
  export interface Rule {
    /**
     * The name of the rule.
     */
    Name: RuleName;
    /**
     * A unique identifier for the rule.
     */
    RuleId: RuleId;
    /**
     * The Amazon Resource Name (ARN) of the rule.
     */
    RuleArn: ARN;
    /**
     * The event source to trigger the rule.
     */
    TriggerEventSource: RuleTriggerEventSource;
    /**
     * The conditions of the rule.
     */
    Function: RuleFunction;
    /**
     * A list of actions to be run when the rule is triggered.
     */
    Actions: RuleActions;
    /**
     * The publish status of the rule.
     */
    PublishStatus: RulePublishStatus;
    /**
     * The timestamp for when the rule was created.
     */
    CreatedTime: Timestamp;
    /**
     * The timestamp for the when the rule was last updated.
     */
    LastUpdatedTime: Timestamp;
    /**
     * The Amazon Resource Name (ARN) of the user who last updated the rule.
     */
    LastUpdatedBy: ARN;
    /**
     * The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     */
    Tags?: TagMap;
  }
  export interface RuleAction {
    /**
     * The type of action that creates a rule.
     */
    ActionType: ActionType;
    /**
     * Information about the task action. This field is required if TriggerEventSource is one of the following values: OnZendeskTicketCreate | OnZendeskTicketStatusUpdate | OnSalesforceCaseCreate 
     */
    TaskAction?: TaskActionDefinition;
    /**
     * Information about the EventBridge action.
     */
    EventBridgeAction?: EventBridgeActionDefinition;
    /**
     * Information about the contact category action.
     */
    AssignContactCategoryAction?: AssignContactCategoryActionDefinition;
    /**
     * Information about the send notification action.
     */
    SendNotificationAction?: SendNotificationActionDefinition;
  }
  export type RuleActions = RuleAction[];
  export type RuleFunction = string;
  export type RuleId = string;
  export type RuleName = string;
  export type RulePublishStatus = "DRAFT"|"PUBLISHED"|string;
  export interface RuleSummary {
    /**
     * The name of the rule.
     */
    Name: RuleName;
    /**
     * A unique identifier for the rule.
     */
    RuleId: RuleId;
    /**
     * The Amazon Resource Name (ARN) of the rule.
     */
    RuleArn: ARN;
    /**
     * The name of the event source.
     */
    EventSourceName: EventSourceName;
    /**
     * The publish status of the rule.
     */
    PublishStatus: RulePublishStatus;
    /**
     * A list of ActionTypes associated with a rule. 
     */
    ActionSummaries: ActionSummaries;
    /**
     * The timestamp for when the rule was created. 
     */
    CreatedTime: Timestamp;
    /**
     * The timestamp for when the rule was last updated.
     */
    LastUpdatedTime: Timestamp;
  }
  export type RuleSummaryList = RuleSummary[];
  export interface RuleTriggerEventSource {
    /**
     * The name of the event source.
     */
    EventSourceName: EventSourceName;
    /**
     * The identifier for the integration association.
     */
    IntegrationAssociationId?: IntegrationAssociationId;
  }
  export interface S3Config {
    /**
     * The S3 bucket name.
     */
    BucketName: BucketName;
    /**
     * The S3 bucket prefix.
     */
    BucketPrefix: Prefix;
    /**
     * The Amazon S3 encryption configuration.
     */
    EncryptionConfig?: EncryptionConfig;
  }
  export interface SearchAvailablePhoneNumbersRequest {
    /**
     * The Amazon Resource Name (ARN) for Amazon Connect instances or traffic distribution groups that phone numbers are claimed to.
     */
    TargetArn: ARN;
    /**
     * The ISO country code.
     */
    PhoneNumberCountryCode: PhoneNumberCountryCode;
    /**
     * The type of phone number.
     */
    PhoneNumberType: PhoneNumberType;
    /**
     * The prefix of the phone number. If provided, it must contain + as part of the country code.
     */
    PhoneNumberPrefix?: PhoneNumberPrefix;
    /**
     * The maximum number of results to return per page.
     */
    MaxResults?: MaxResult10;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: LargeNextToken;
  }
  export interface SearchAvailablePhoneNumbersResponse {
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: LargeNextToken;
    /**
     * A list of available phone numbers that you can claim to your Amazon Connect instance or traffic distribution group.
     */
    AvailableNumbersList?: AvailableNumbersList;
  }
  export interface SearchQueuesRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken2500;
    /**
     * The maximum number of results to return per page.
     */
    MaxResults?: MaxResult100;
    /**
     * Filters to be applied to search results.
     */
    SearchFilter?: QueueSearchFilter;
    /**
     * The search criteria to be used to return queues.  The name and description fields support "contains" queries with a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths outside of this range will throw invalid results.  
     */
    SearchCriteria?: QueueSearchCriteria;
  }
  export interface SearchQueuesResponse {
    /**
     * Information about the queues.
     */
    Queues?: QueueSearchSummaryList;
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: NextToken2500;
    /**
     * The total number of queues which matched your search query.
     */
    ApproximateTotalCount?: ApproximateTotalCount;
  }
  export interface SearchRoutingProfilesRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken2500;
    /**
     * The maximum number of results to return per page.
     */
    MaxResults?: MaxResult100;
    /**
     * Filters to be applied to search results.
     */
    SearchFilter?: RoutingProfileSearchFilter;
    /**
     * The search criteria to be used to return routing profiles.  The name and description fields support "contains" queries with a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths outside of this range will throw invalid results.  
     */
    SearchCriteria?: RoutingProfileSearchCriteria;
  }
  export interface SearchRoutingProfilesResponse {
    /**
     * Information about the routing profiles.
     */
    RoutingProfiles?: RoutingProfileList;
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: NextToken2500;
    /**
     * The total number of routing profiles which matched your search query.
     */
    ApproximateTotalCount?: ApproximateTotalCount;
  }
  export interface SearchSecurityProfilesRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken2500;
    /**
     * The maximum number of results to return per page.
     */
    MaxResults?: MaxResult100;
    /**
     * The search criteria to be used to return security profiles.   The name field support "contains" queries with a minimum of 2 characters and maximum of 25 characters. Any queries with character lengths outside of this range will throw invalid results.   The currently supported value for FieldName: name  
     */
    SearchCriteria?: SecurityProfileSearchCriteria;
    /**
     * Filters to be applied to search results.
     */
    SearchFilter?: SecurityProfilesSearchFilter;
  }
  export interface SearchSecurityProfilesResponse {
    /**
     * Information about the security profiles.
     */
    SecurityProfiles?: SecurityProfilesSearchSummaryList;
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: NextToken2500;
    /**
     * The total number of security profiles which matched your search query.
     */
    ApproximateTotalCount?: ApproximateTotalCount;
  }
  export interface SearchUsersRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId?: InstanceId;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken2500;
    /**
     * The maximum number of results to return per page.
     */
    MaxResults?: MaxResult100;
    /**
     * Filters to be applied to search results.
     */
    SearchFilter?: UserSearchFilter;
    SearchCriteria?: UserSearchCriteria;
  }
  export interface SearchUsersResponse {
    /**
     * Information about the users.
     */
    Users?: UserSearchSummaryList;
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: NextToken2500;
    /**
     * The total number of users who matched your search query.
     */
    ApproximateTotalCount?: ApproximateTotalCount;
  }
  export interface SearchVocabulariesRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The maximum number of results to return per page.
     */
    MaxResults?: MaxResult100;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: VocabularyNextToken;
    /**
     * The current state of the custom vocabulary.
     */
    State?: VocabularyState;
    /**
     * The starting pattern of the name of the vocabulary.
     */
    NameStartsWith?: VocabularyName;
    /**
     * The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see What is Amazon Transcribe? 
     */
    LanguageCode?: VocabularyLanguageCode;
  }
  export interface SearchVocabulariesResponse {
    /**
     * The list of the available custom vocabularies.
     */
    VocabularySummaryList?: VocabularySummaryList;
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: VocabularyNextToken;
  }
  export type SearchableQueueType = "STANDARD"|string;
  export interface SecurityKey {
    /**
     * The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.
     */
    AssociationId?: AssociationId;
    /**
     * The key of the security key.
     */
    Key?: PEM;
    /**
     * When the security key was created.
     */
    CreationTime?: timestamp;
  }
  export type SecurityKeysList = SecurityKey[];
  export interface SecurityProfile {
    /**
     * The identifier for the security profile.
     */
    Id?: SecurityProfileId;
    /**
     * The organization resource identifier for the security profile.
     */
    OrganizationResourceId?: InstanceId;
    /**
     * The Amazon Resource Name (ARN) for the secruity profile.
     */
    Arn?: ARN;
    /**
     * The name for the security profile.
     */
    SecurityProfileName?: SecurityProfileName;
    /**
     * The description of the security profile.
     */
    Description?: SecurityProfileDescription;
    /**
     * The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     */
    Tags?: TagMap;
    /**
     * The list of tags that a security profile uses to restrict access to resources in Amazon Connect.
     */
    AllowedAccessControlTags?: AllowedAccessControlTags;
    /**
     * The list of resources that a security profile applies tag restrictions to in Amazon Connect.
     */
    TagRestrictedResources?: TagRestrictedResourceList;
  }
  export type SecurityProfileDescription = string;
  export type SecurityProfileId = string;
  export type SecurityProfileIds = SecurityProfileId[];
  export type SecurityProfileName = string;
  export type SecurityProfilePermission = string;
  export type SecurityProfilePolicyKey = string;
  export type SecurityProfilePolicyValue = string;
  export type SecurityProfileSearchConditionList = SecurityProfileSearchCriteria[];
  export interface SecurityProfileSearchCriteria {
    /**
     * A list of conditions which would be applied together with an OR condition.
     */
    OrConditions?: SecurityProfileSearchConditionList;
    /**
     * A list of conditions which would be applied together with an AND condition.
     */
    AndConditions?: SecurityProfileSearchConditionList;
    StringCondition?: StringCondition;
  }
  export interface SecurityProfileSearchSummary {
    /**
     * The identifier of the security profile.
     */
    Id?: SecurityProfileId;
    /**
     * The organization resource identifier.
     */
    OrganizationResourceId?: InstanceId;
    /**
     * The Amazon Resource Name (ARN) of the security profile.
     */
    Arn?: ARN;
    /**
     * The name of the security profile.
     */
    SecurityProfileName?: SecurityProfileName;
    /**
     * The description of the security profile.
     */
    Description?: SecurityProfileDescription;
    /**
     * The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     */
    Tags?: TagMap;
  }
  export interface SecurityProfileSummary {
    /**
     * The identifier of the security profile.
     */
    Id?: SecurityProfileId;
    /**
     * The Amazon Resource Name (ARN) of the security profile.
     */
    Arn?: ARN;
    /**
     * The name of the security profile.
     */
    Name?: SecurityProfileName;
  }
  export type SecurityProfileSummaryList = SecurityProfileSummary[];
  export interface SecurityProfilesSearchFilter {
    TagFilter?: ControlPlaneTagFilter;
  }
  export type SecurityProfilesSearchSummaryList = SecurityProfileSearchSummary[];
  export type SecurityToken = string;
  export interface SendNotificationActionDefinition {
    /**
     * Notification delivery method.
     */
    DeliveryMethod: NotificationDeliveryType;
    /**
     * The subject of the email if the delivery method is EMAIL. Supports variable injection. For more information, see JSONPath reference in the Amazon Connect Administrators Guide.
     */
    Subject?: Subject;
    /**
     * Notification content. Supports variable injection. For more information, see JSONPath reference in the Amazon Connect Administrators Guide.
     */
    Content: Content;
    /**
     * Content type format.
     */
    ContentType: NotificationContentType;
    /**
     * Notification recipient.
     */
    Recipient: NotificationRecipientType;
  }
  export type SingleSelectOptions = TaskTemplateSingleSelectOption[];
  export type SnapshotVersion = string;
  export type SortOrder = "ASCENDING"|"DESCENDING"|string;
  export type SourceApplicationName = string;
  export type SourceType = "SALESFORCE"|"ZENDESK"|string;
  export interface StartChatContactRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the flow for initiating the chat. To see the ContactFlowId in the Amazon Connect console user interface, on the navigation menu go to Routing, Contact Flows. Choose the flow. On the flow page, under the name of the flow, choose Show additional flow information. The ContactFlowId is the last part of the ARN, shown here in bold:  arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/846ec553-a005-41c0-8341-xxxxxxxxxxxx 
     */
    ContactFlowId: ContactFlowId;
    /**
     * A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes. They can be accessed in flows just like any other contact attributes.  There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys can include only alphanumeric, dash, and underscore characters.
     */
    Attributes?: Attributes;
    /**
     * Information identifying the participant.
     */
    ParticipantDetails: ParticipantDetails;
    /**
     * The initial message to be sent to the newly created chat.
     */
    InitialMessage?: ChatMessage;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs.
     */
    ClientToken?: ClientToken;
    /**
     * The total duration of the newly started chat session. If not specified, the chat session duration defaults to 25 hour. The minumum configurable time is 60 minutes. The maximum configurable time is 10,080 minutes (7 days).
     */
    ChatDurationInMinutes?: ChatDurationInMinutes;
    /**
     * The supported chat message content types. Content types must always contain text/plain. You can then put any other supported type in the list. For example, all the following lists are valid because they contain text/plain: [text/plain, text/markdown, application/json], [text/markdown, text/plain], [text/plain, application/json].
     */
    SupportedMessagingContentTypes?: SupportedMessagingContentTypes;
  }
  export interface StartChatContactResponse {
    /**
     * The identifier of this contact within the Amazon Connect instance. 
     */
    ContactId?: ContactId;
    /**
     * The identifier for a chat participant. The participantId for a chat participant is the same throughout the chat lifecycle.
     */
    ParticipantId?: ParticipantId;
    /**
     * The token used by the chat participant to call CreateParticipantConnection. The participant token is valid for the lifetime of a chat participant.
     */
    ParticipantToken?: ParticipantToken;
  }
  export interface StartContactRecordingRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the contact.
     */
    ContactId: ContactId;
    /**
     * The identifier of the contact. This is the identifier of the contact associated with the first interaction with the contact center.
     */
    InitialContactId: ContactId;
    /**
     * The person being recorded.
     */
    VoiceRecordingConfiguration: VoiceRecordingConfiguration;
  }
  export interface StartContactRecordingResponse {
  }
  export interface StartContactStreamingRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the contact. This is the identifier of the contact associated with the first interaction with the contact center.
     */
    ContactId: ContactId;
    /**
     * The streaming configuration, such as the Amazon SNS streaming endpoint.
     */
    ChatStreamingConfiguration: ChatStreamingConfiguration;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs.
     */
    ClientToken: ClientToken;
  }
  export interface StartContactStreamingResponse {
    /**
     * The identifier of the streaming configuration enabled. 
     */
    StreamingId: StreamingId;
  }
  export interface StartOutboundVoiceContactRequest {
    /**
     * The phone number of the customer, in E.164 format.
     */
    DestinationPhoneNumber: PhoneNumber;
    /**
     * The identifier of the flow for the outbound call. To see the ContactFlowId in the Amazon Connect console user interface, on the navigation menu go to Routing, Contact Flows. Choose the flow. On the flow page, under the name of the flow, choose Show additional flow information. The ContactFlowId is the last part of the ARN, shown here in bold:  arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/846ec553-a005-41c0-8341-xxxxxxxxxxxx 
     */
    ContactFlowId: ContactFlowId;
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs. The token is valid for 7 days after creation. If a contact is already started, the contact ID is returned. 
     */
    ClientToken?: ClientToken;
    /**
     * The phone number associated with the Amazon Connect instance, in E.164 format. If you do not specify a source phone number, you must specify a queue.
     */
    SourcePhoneNumber?: PhoneNumber;
    /**
     * The queue for the call. If you specify a queue, the phone displayed for caller ID is the phone number specified in the queue. If you do not specify a queue, the queue defined in the flow is used. If you do not specify a queue, you must specify a source phone number.
     */
    QueueId?: QueueId;
    /**
     * A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes, and can be accessed in flows just like any other contact attributes. There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys can include only alphanumeric, dash, and underscore characters.
     */
    Attributes?: Attributes;
    /**
     * Configuration of the answering machine detection for this outbound call. 
     */
    AnswerMachineDetectionConfig?: AnswerMachineDetectionConfig;
    /**
     * The campaign identifier of the outbound communication.
     */
    CampaignId?: CampaignId;
    /**
     * Denotes the class of traffic. Calls with different traffic types are handled differently by Amazon Connect. The default value is GENERAL. Use CAMPAIGN if EnableAnswerMachineDetection is set to true. For all other cases, use GENERAL. 
     */
    TrafficType?: TrafficType;
  }
  export interface StartOutboundVoiceContactResponse {
    /**
     * The identifier of this contact within the Amazon Connect instance.
     */
    ContactId?: ContactId;
  }
  export interface StartTaskContactRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the previous chat, voice, or task contact. 
     */
    PreviousContactId?: ContactId;
    /**
     * The identifier of the flow for initiating the tasks. To see the ContactFlowId in the Amazon Connect console user interface, on the navigation menu go to Routing, Contact Flows. Choose the flow. On the flow page, under the name of the flow, choose Show additional flow information. The ContactFlowId is the last part of the ARN, shown here in bold:  arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/846ec553-a005-41c0-8341-xxxxxxxxxxxx 
     */
    ContactFlowId?: ContactFlowId;
    /**
     * A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes, and can be accessed in flows just like any other contact attributes. There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys can include only alphanumeric, dash, and underscore characters.
     */
    Attributes?: Attributes;
    /**
     * The name of a task that is shown to an agent in the Contact Control Panel (CCP).
     */
    Name: Name;
    /**
     * A formatted URL that is shown to an agent in the Contact Control Panel (CCP).
     */
    References?: ContactReferences;
    /**
     * A description of the task that is shown to an agent in the Contact Control Panel (CCP).
     */
    Description?: Description;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs.
     */
    ClientToken?: ClientToken;
    /**
     * The timestamp, in Unix Epoch seconds format, at which to start running the inbound flow. The scheduled time cannot be in the past. It must be within up to 6 days in future. 
     */
    ScheduledTime?: Timestamp;
    /**
     * A unique identifier for the task template.
     */
    TaskTemplateId?: TaskTemplateId;
    /**
     * The identifier for the quick connect.
     */
    QuickConnectId?: QuickConnectId;
  }
  export interface StartTaskContactResponse {
    /**
     * The identifier of this contact within the Amazon Connect instance.
     */
    ContactId?: ContactId;
  }
  export type Statistic = "SUM"|"MAX"|"AVG"|string;
  export interface StopContactRecordingRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the contact.
     */
    ContactId: ContactId;
    /**
     * The identifier of the contact. This is the identifier of the contact associated with the first interaction with the contact center.
     */
    InitialContactId: ContactId;
  }
  export interface StopContactRecordingResponse {
  }
  export interface StopContactRequest {
    /**
     * The ID of the contact.
     */
    ContactId: ContactId;
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
  }
  export interface StopContactResponse {
  }
  export interface StopContactStreamingRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the contact. This is the identifier of the contact that is associated with the first interaction with the contact center.
     */
    ContactId: ContactId;
    /**
     * The identifier of the streaming configuration enabled. 
     */
    StreamingId: StreamingId;
  }
  export interface StopContactStreamingResponse {
  }
  export type StorageType = "S3"|"KINESIS_VIDEO_STREAM"|"KINESIS_STREAM"|"KINESIS_FIREHOSE"|string;
  export type StreamingId = string;
  export type String = string;
  export type StringComparisonType = "STARTS_WITH"|"CONTAINS"|"EXACT"|string;
  export interface StringCondition {
    /**
     * The name of the field in the string condition.
     */
    FieldName?: String;
    /**
     * The value of the string.
     */
    Value?: String;
    /**
     * The type of comparison to be made when evaluating the string condition.
     */
    ComparisonType?: StringComparisonType;
  }
  export interface StringReference {
    /**
     * Identifier of the string reference.
     */
    Name?: ReferenceKey;
    /**
     * A valid string.
     */
    Value?: ReferenceValue;
  }
  export type Subject = string;
  export type SupportedMessagingContentType = string;
  export type SupportedMessagingContentTypes = SupportedMessagingContentType[];
  export interface SuspendContactRecordingRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the contact.
     */
    ContactId: ContactId;
    /**
     * The identifier of the contact. This is the identifier of the contact associated with the first interaction with the contact center.
     */
    InitialContactId: ContactId;
  }
  export interface SuspendContactRecordingResponse {
  }
  export type TagAndConditionList = TagCondition[];
  export interface TagCondition {
    /**
     * The tag key in the tag condition.
     */
    TagKey?: String;
    /**
     * The tag value in the tag condition.
     */
    TagValue?: String;
  }
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagMap = {[key: string]: TagValue};
  export type TagOrConditionList = TagAndConditionList[];
  export interface TagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    resourceArn: ARN;
    /**
     * The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     */
    tags: TagMap;
  }
  export type TagRestrictedResourceList = TagRestrictedResourceName[];
  export type TagRestrictedResourceName = string;
  export type TagValue = string;
  export interface TaskActionDefinition {
    /**
     * The name. Supports variable injection. For more information, see JSONPath reference in the Amazon Connect Administrators Guide.
     */
    Name: TaskNameExpression;
    /**
     * The description. Supports variable injection. For more information, see JSONPath reference in the Amazon Connect Administrators Guide.
     */
    Description?: TaskDescriptionExpression;
    /**
     * The identifier of the flow.
     */
    ContactFlowId: ContactFlowId;
    /**
     * Information about the reference when the referenceType is URL. Otherwise, null. (Supports variable injection in the Value field.)
     */
    References?: ContactReferences;
  }
  export type TaskDescriptionExpression = string;
  export type TaskNameExpression = string;
  export type TaskTemplateArn = string;
  export interface TaskTemplateConstraints {
    /**
     * Lists the fields that are required to be filled by agents.
     */
    RequiredFields?: RequiredTaskTemplateFields;
    /**
     * Lists the fields that are read-only to agents, and cannot be edited.
     */
    ReadOnlyFields?: ReadOnlyTaskTemplateFields;
    /**
     * Lists the fields that are invisible to agents.
     */
    InvisibleFields?: InvisibleTaskTemplateFields;
  }
  export interface TaskTemplateDefaultFieldValue {
    /**
     * Identifier of a field. 
     */
    Id?: TaskTemplateFieldIdentifier;
    /**
     * Default value for the field.
     */
    DefaultValue?: TaskTemplateFieldValue;
  }
  export type TaskTemplateDefaultFieldValueList = TaskTemplateDefaultFieldValue[];
  export interface TaskTemplateDefaults {
    /**
     * Default value for the field.
     */
    DefaultFieldValues?: TaskTemplateDefaultFieldValueList;
  }
  export type TaskTemplateDescription = string;
  export interface TaskTemplateField {
    /**
     * The unique identifier for the field.
     */
    Id: TaskTemplateFieldIdentifier;
    /**
     * The description of the field.
     */
    Description?: TaskTemplateFieldDescription;
    /**
     * Indicates the type of field.
     */
    Type?: TaskTemplateFieldType;
    /**
     * A list of options for a single select field.
     */
    SingleSelectOptions?: SingleSelectOptions;
  }
  export type TaskTemplateFieldDescription = string;
  export interface TaskTemplateFieldIdentifier {
    /**
     * The name of the task template field.
     */
    Name?: TaskTemplateFieldName;
  }
  export type TaskTemplateFieldName = string;
  export type TaskTemplateFieldType = "NAME"|"DESCRIPTION"|"SCHEDULED_TIME"|"QUICK_CONNECT"|"URL"|"NUMBER"|"TEXT"|"TEXT_AREA"|"DATE_TIME"|"BOOLEAN"|"SINGLE_SELECT"|"EMAIL"|string;
  export type TaskTemplateFieldValue = string;
  export type TaskTemplateFields = TaskTemplateField[];
  export type TaskTemplateId = string;
  export type TaskTemplateList = TaskTemplateMetadata[];
  export interface TaskTemplateMetadata {
    /**
     * A unique identifier for the task template.
     */
    Id?: TaskTemplateId;
    /**
     * The Amazon Resource Name (ARN) of the task template.
     */
    Arn?: TaskTemplateArn;
    /**
     * The name of the task template.
     */
    Name?: TaskTemplateName;
    /**
     * The description of the task template.
     */
    Description?: TaskTemplateDescription;
    /**
     * Marks a template as ACTIVE or INACTIVE for a task to refer to it. Tasks can only be created from ACTIVE templates. If a template is marked as INACTIVE, then a task that refers to this template cannot be created.
     */
    Status?: TaskTemplateStatus;
    /**
     * The timestamp when the task template was last modified.
     */
    LastModifiedTime?: timestamp;
    /**
     * The timestamp when the task template was created.
     */
    CreatedTime?: timestamp;
  }
  export type TaskTemplateName = string;
  export type TaskTemplateSingleSelectOption = string;
  export type TaskTemplateStatus = "ACTIVE"|"INACTIVE"|string;
  export interface TelephonyConfig {
    /**
     * Information about traffic distributions.
     */
    Distributions: DistributionList;
  }
  export interface Threshold {
    /**
     * The type of comparison. Only "less than" (LT) comparisons are supported.
     */
    Comparison?: Comparison;
    /**
     * The threshold value to compare.
     */
    ThresholdValue?: ThresholdValue;
  }
  export type ThresholdValue = number;
  export type TimeZone = string;
  export type TimerEligibleParticipantRoles = "CUSTOMER"|"AGENT"|string;
  export type Timestamp = Date;
  export interface TrafficDistributionGroup {
    /**
     * The identifier of the traffic distribution group. This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created. The ARN must be provided if the call is from the replicated Region.
     */
    Id?: TrafficDistributionGroupId;
    /**
     * The Amazon Resource Name (ARN) of the traffic distribution group.
     */
    Arn?: TrafficDistributionGroupArn;
    /**
     * The name of the traffic distribution group.
     */
    Name?: Name128;
    /**
     * The description of the traffic distribution group.
     */
    Description?: Description250;
    /**
     * The Amazon Resource Name (ARN).
     */
    InstanceArn?: InstanceArn;
    /**
     * The status of the traffic distribution group.    CREATION_IN_PROGRESS means the previous CreateTrafficDistributionGroup operation is still in progress and has not yet completed.    ACTIVE means the previous CreateTrafficDistributionGroup operation has succeeded.    CREATION_FAILED indicates that the previous CreateTrafficDistributionGroup operation has failed.    PENDING_DELETION means the previous DeleteTrafficDistributionGroup operation is still in progress and has not yet completed.    DELETION_FAILED means the previous DeleteTrafficDistributionGroup operation has failed.    UPDATE_IN_PROGRESS means the previous UpdateTrafficDistributionGroup operation is still in progress and has not yet completed.  
     */
    Status?: TrafficDistributionGroupStatus;
    /**
     * The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     */
    Tags?: TagMap;
  }
  export type TrafficDistributionGroupArn = string;
  export type TrafficDistributionGroupId = string;
  export type TrafficDistributionGroupIdOrArn = string;
  export type TrafficDistributionGroupStatus = "CREATION_IN_PROGRESS"|"ACTIVE"|"CREATION_FAILED"|"PENDING_DELETION"|"DELETION_FAILED"|"UPDATE_IN_PROGRESS"|string;
  export interface TrafficDistributionGroupSummary {
    /**
     * The identifier of the traffic distribution group. This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created. The ARN must be provided if the call is from the replicated Region.
     */
    Id?: TrafficDistributionGroupId;
    /**
     * The Amazon Resource Name (ARN) of the traffic distribution group.
     */
    Arn?: TrafficDistributionGroupArn;
    /**
     * The name of the traffic distribution group.
     */
    Name?: Name128;
    /**
     * The Amazon Resource Name (ARN) of the traffic distribution group.
     */
    InstanceArn?: InstanceArn;
    /**
     * The status of the traffic distribution group.     CREATION_IN_PROGRESS means the previous CreateTrafficDistributionGroup operation is still in progress and has not yet completed.    ACTIVE means the previous CreateTrafficDistributionGroup operation has succeeded.    CREATION_FAILED indicates that the previous CreateTrafficDistributionGroup operation has failed.    PENDING_DELETION means the previous DeleteTrafficDistributionGroup operation is still in progress and has not yet completed.    DELETION_FAILED means the previous DeleteTrafficDistributionGroup operation has failed.    UPDATE_IN_PROGRESS means the previous UpdateTrafficDistributionGroup operation is still in progress and has not yet completed.  
     */
    Status?: TrafficDistributionGroupStatus;
  }
  export type TrafficDistributionGroupSummaryList = TrafficDistributionGroupSummary[];
  export type TrafficType = "GENERAL"|"CAMPAIGN"|string;
  export interface TransferContactRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the contact in this instance of Amazon Connect. 
     */
    ContactId: ContactId;
    /**
     * The identifier for the queue.
     */
    QueueId?: QueueId;
    /**
     * The identifier for the user.
     */
    UserId?: AgentResourceId;
    /**
     * The identifier of the flow.
     */
    ContactFlowId: ContactFlowId;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs.
     */
    ClientToken?: ClientToken;
  }
  export interface TransferContactResponse {
    /**
     * The identifier of the contact in this instance of Amazon Connect. 
     */
    ContactId?: ContactId;
    /**
     * The Amazon Resource Name (ARN) of the contact.
     */
    ContactArn?: ARN;
  }
  export type URI = string;
  export type Unit = "SECONDS"|"COUNT"|"PERCENT"|string;
  export interface UntagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    resourceArn: ARN;
    /**
     * The tag keys.
     */
    tagKeys: TagKeyList;
  }
  export type UpdateAgentStatusDescription = string;
  export interface UpdateAgentStatusRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the agent status.
     */
    AgentStatusId: AgentStatusId;
    /**
     * The name of the agent status.
     */
    Name?: AgentStatusName;
    /**
     * The description of the agent status.
     */
    Description?: UpdateAgentStatusDescription;
    /**
     * The state of the agent status.
     */
    State?: AgentStatusState;
    /**
     * The display order of the agent status.
     */
    DisplayOrder?: AgentStatusOrderNumber;
    /**
     * A number indicating the reset order of the agent status.
     */
    ResetOrderNumber?: Boolean;
  }
  export interface UpdateContactAttributesRequest {
    /**
     * The identifier of the contact. This is the identifier of the contact associated with the first interaction with the contact center.
     */
    InitialContactId: ContactId;
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The Amazon Connect attributes. These attributes can be accessed in flows just like any other contact attributes. You can have up to 32,768 UTF-8 bytes across all attributes for a contact. Attribute keys can include only alphanumeric, dash, and underscore characters.
     */
    Attributes: Attributes;
  }
  export interface UpdateContactAttributesResponse {
  }
  export interface UpdateContactFlowContentRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the flow.
     */
    ContactFlowId: ContactFlowId;
    /**
     * The JSON string that represents flow's content. For an example, see Example contact flow in Amazon Connect Flow language. 
     */
    Content: ContactFlowContent;
  }
  export interface UpdateContactFlowMetadataRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the flow.
     */
    ContactFlowId: ContactFlowId;
    /**
     * The name of the flow.
     */
    Name?: ContactFlowName;
    /**
     * The description of the flow.
     */
    Description?: ContactFlowDescription;
    /**
     * The state of flow.
     */
    ContactFlowState?: ContactFlowState;
  }
  export interface UpdateContactFlowModuleContentRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the flow module.
     */
    ContactFlowModuleId: ContactFlowModuleId;
    /**
     * The content of the flow module.
     */
    Content: ContactFlowModuleContent;
  }
  export interface UpdateContactFlowModuleContentResponse {
  }
  export interface UpdateContactFlowModuleMetadataRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the flow module.
     */
    ContactFlowModuleId: ContactFlowModuleId;
    /**
     * The name of the flow module.
     */
    Name?: ContactFlowModuleName;
    /**
     * The description of the flow module.
     */
    Description?: ContactFlowModuleDescription;
    /**
     * The state of flow module.
     */
    State?: ContactFlowModuleState;
  }
  export interface UpdateContactFlowModuleMetadataResponse {
  }
  export interface UpdateContactFlowNameRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the flow.
     */
    ContactFlowId: ContactFlowId;
    /**
     * The name of the flow.
     */
    Name?: ContactFlowName;
    /**
     * The description of the flow.
     */
    Description?: ContactFlowDescription;
  }
  export interface UpdateContactRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the contact. This is the identifier of the contact associated with the first interaction with your contact center.
     */
    ContactId: ContactId;
    /**
     * The name of the contact.
     */
    Name?: Name;
    /**
     * The description of the contact.
     */
    Description?: Description;
    /**
     * Well-formed data on contact, shown to agents on Contact Control Panel (CCP).
     */
    References?: ContactReferences;
  }
  export interface UpdateContactResponse {
  }
  export interface UpdateContactScheduleRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the contact.
     */
    ContactId: ContactId;
    /**
     * The timestamp, in Unix Epoch seconds format, at which to start running the inbound flow. The scheduled time cannot be in the past. It must be within up to 6 days in future. 
     */
    ScheduledTime: Timestamp;
  }
  export interface UpdateContactScheduleResponse {
  }
  export type UpdateHoursOfOperationDescription = string;
  export interface UpdateHoursOfOperationRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the hours of operation.
     */
    HoursOfOperationId: HoursOfOperationId;
    /**
     * The name of the hours of operation.
     */
    Name?: CommonNameLength127;
    /**
     * The description of the hours of operation.
     */
    Description?: UpdateHoursOfOperationDescription;
    /**
     * The time zone of the hours of operation.
     */
    TimeZone?: TimeZone;
    /**
     * Configuration information of the hours of operation.
     */
    Config?: HoursOfOperationConfigList;
  }
  export interface UpdateInstanceAttributeRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The type of attribute.  Only allowlisted customers can consume USE_CUSTOM_TTS_VOICES. To access this feature, contact Amazon Web Services Support for allowlisting. 
     */
    AttributeType: InstanceAttributeType;
    /**
     * The value for the attribute. Maximum character limit is 100. 
     */
    Value: InstanceAttributeValue;
  }
  export interface UpdateInstanceStorageConfigRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.
     */
    AssociationId: AssociationId;
    /**
     * A valid resource type.
     */
    ResourceType: InstanceStorageResourceType;
    StorageConfig: InstanceStorageConfig;
  }
  export interface UpdateParticipantRoleConfigChannelInfo {
    /**
     * Configuration information for the chat participant role.
     */
    Chat?: ChatParticipantRoleConfig;
  }
  export interface UpdateParticipantRoleConfigRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the contact in this instance of Amazon Connect. 
     */
    ContactId: ContactId;
    /**
     * The Amazon Connect channel you want to configure.
     */
    ChannelConfiguration: UpdateParticipantRoleConfigChannelInfo;
  }
  export interface UpdateParticipantRoleConfigResponse {
  }
  export interface UpdatePhoneNumberRequest {
    /**
     * A unique identifier for the phone number.
     */
    PhoneNumberId: PhoneNumberId;
    /**
     * The Amazon Resource Name (ARN) for Amazon Connect instances or traffic distribution groups that phone numbers are claimed to.
     */
    TargetArn: ARN;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs.
     */
    ClientToken?: ClientToken;
  }
  export interface UpdatePhoneNumberResponse {
    /**
     * A unique identifier for the phone number.
     */
    PhoneNumberId?: PhoneNumberId;
    /**
     * The Amazon Resource Name (ARN) of the phone number.
     */
    PhoneNumberArn?: ARN;
  }
  export interface UpdateQueueHoursOfOperationRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier for the queue.
     */
    QueueId: QueueId;
    /**
     * The identifier for the hours of operation.
     */
    HoursOfOperationId: HoursOfOperationId;
  }
  export interface UpdateQueueMaxContactsRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier for the queue.
     */
    QueueId: QueueId;
    /**
     * The maximum number of contacts that can be in the queue before it is considered full.
     */
    MaxContacts?: QueueMaxContacts;
  }
  export interface UpdateQueueNameRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier for the queue.
     */
    QueueId: QueueId;
    /**
     * The name of the queue.
     */
    Name?: CommonNameLength127;
    /**
     * The description of the queue.
     */
    Description?: QueueDescription;
  }
  export interface UpdateQueueOutboundCallerConfigRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier for the queue.
     */
    QueueId: QueueId;
    /**
     * The outbound caller ID name, number, and outbound whisper flow.
     */
    OutboundCallerConfig: OutboundCallerConfig;
  }
  export interface UpdateQueueStatusRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier for the queue.
     */
    QueueId: QueueId;
    /**
     * The status of the queue.
     */
    Status: QueueStatus;
  }
  export interface UpdateQuickConnectConfigRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier for the quick connect.
     */
    QuickConnectId: QuickConnectId;
    /**
     * Information about the configuration settings for the quick connect.
     */
    QuickConnectConfig: QuickConnectConfig;
  }
  export type UpdateQuickConnectDescription = string;
  export interface UpdateQuickConnectNameRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier for the quick connect.
     */
    QuickConnectId: QuickConnectId;
    /**
     * The name of the quick connect.
     */
    Name?: QuickConnectName;
    /**
     * The description of the quick connect.
     */
    Description?: UpdateQuickConnectDescription;
  }
  export interface UpdateRoutingProfileConcurrencyRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the routing profile.
     */
    RoutingProfileId: RoutingProfileId;
    /**
     * The channels that agents can handle in the Contact Control Panel (CCP).
     */
    MediaConcurrencies: MediaConcurrencies;
  }
  export interface UpdateRoutingProfileDefaultOutboundQueueRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the routing profile.
     */
    RoutingProfileId: RoutingProfileId;
    /**
     * The identifier for the default outbound queue.
     */
    DefaultOutboundQueueId: QueueId;
  }
  export interface UpdateRoutingProfileNameRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the routing profile.
     */
    RoutingProfileId: RoutingProfileId;
    /**
     * The name of the routing profile. Must not be more than 127 characters.
     */
    Name?: RoutingProfileName;
    /**
     * The description of the routing profile. Must not be more than 250 characters.
     */
    Description?: RoutingProfileDescription;
  }
  export interface UpdateRoutingProfileQueuesRequest {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the routing profile.
     */
    RoutingProfileId: RoutingProfileId;
    /**
     * The queues to be updated for this routing profile. Queues must first be associated to the routing profile. You can do this using AssociateRoutingProfileQueues.
     */
    QueueConfigs: RoutingProfileQueueConfigList;
  }
  export interface UpdateRuleRequest {
    /**
     * A unique identifier for the rule.
     */
    RuleId: RuleId;
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The name of the rule. You can change the name only if TriggerEventSource is one of the following values: OnZendeskTicketCreate | OnZendeskTicketStatusUpdate | OnSalesforceCaseCreate 
     */
    Name: RuleName;
    /**
     * The conditions of the rule.
     */
    Function: RuleFunction;
    /**
     * A list of actions to be run when the rule is triggered.
     */
    Actions: RuleActions;
    /**
     * The publish status of the rule.
     */
    PublishStatus: RulePublishStatus;
  }
  export interface UpdateSecurityProfileRequest {
    /**
     * The description of the security profile.
     */
    Description?: SecurityProfileDescription;
    /**
     * The permissions granted to a security profile. For a list of valid permissions, see List of security profile permissions.
     */
    Permissions?: PermissionsList;
    /**
     * The identifier for the security profle.
     */
    SecurityProfileId: SecurityProfileId;
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The list of tags that a security profile uses to restrict access to resources in Amazon Connect.
     */
    AllowedAccessControlTags?: AllowedAccessControlTags;
    /**
     * The list of resources that a security profile applies tag restrictions to in Amazon Connect.
     */
    TagRestrictedResources?: TagRestrictedResourceList;
  }
  export interface UpdateTaskTemplateRequest {
    /**
     * A unique identifier for the task template.
     */
    TaskTemplateId: TaskTemplateId;
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The name of the task template.
     */
    Name?: TaskTemplateName;
    /**
     * The description of the task template.
     */
    Description?: TaskTemplateDescription;
    /**
     * The identifier of the flow that runs by default when a task is created by referencing this template.
     */
    ContactFlowId?: ContactFlowId;
    /**
     * Constraints that are applicable to the fields listed.
     */
    Constraints?: TaskTemplateConstraints;
    /**
     * The default values for fields when a task is created by referencing this template.
     */
    Defaults?: TaskTemplateDefaults;
    /**
     * Marks a template as ACTIVE or INACTIVE for a task to refer to it. Tasks can only be created from ACTIVE templates. If a template is marked as INACTIVE, then a task that refers to this template cannot be created.
     */
    Status?: TaskTemplateStatus;
    /**
     * Fields that are part of the template.
     */
    Fields?: TaskTemplateFields;
  }
  export interface UpdateTaskTemplateResponse {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId?: InstanceId;
    /**
     * The identifier of the task template resource.
     */
    Id?: TaskTemplateId;
    /**
     * The Amazon Resource Name (ARN) for the task template resource.
     */
    Arn?: TaskTemplateArn;
    /**
     * The name of the task template.
     */
    Name?: TaskTemplateName;
    /**
     * The description of the task template.
     */
    Description?: TaskTemplateDescription;
    /**
     * The identifier of the flow that runs by default when a task is created by referencing this template.
     */
    ContactFlowId?: ContactFlowId;
    /**
     * Constraints that are applicable to the fields listed.
     */
    Constraints?: TaskTemplateConstraints;
    /**
     * The default values for fields when a task is created by referencing this template.
     */
    Defaults?: TaskTemplateDefaults;
    /**
     * Fields that are part of the template.
     */
    Fields?: TaskTemplateFields;
    /**
     * Marks a template as ACTIVE or INACTIVE for a task to refer to it. Tasks can only be created from ACTIVE templates. If a template is marked as INACTIVE, then a task that refers to this template cannot be created.
     */
    Status?: TaskTemplateStatus;
    /**
     * The timestamp when the task template was last modified.
     */
    LastModifiedTime?: timestamp;
    /**
     * The timestamp when the task template was created.
     */
    CreatedTime?: timestamp;
  }
  export interface UpdateTrafficDistributionRequest {
    /**
     * The identifier of the traffic distribution group. This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created. The ARN must be provided if the call is from the replicated Region.
     */
    Id: TrafficDistributionGroupIdOrArn;
    /**
     * The distribution of traffic between the instance and its replica(s).
     */
    TelephonyConfig?: TelephonyConfig;
  }
  export interface UpdateTrafficDistributionResponse {
  }
  export interface UpdateUserHierarchyGroupNameRequest {
    /**
     * The name of the hierarchy group. Must not be more than 100 characters.
     */
    Name: HierarchyGroupName;
    /**
     * The identifier of the hierarchy group.
     */
    HierarchyGroupId: HierarchyGroupId;
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
  }
  export interface UpdateUserHierarchyRequest {
    /**
     * The identifier of the hierarchy group.
     */
    HierarchyGroupId?: HierarchyGroupId;
    /**
     * The identifier of the user account.
     */
    UserId: UserId;
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
  }
  export interface UpdateUserHierarchyStructureRequest {
    /**
     * The hierarchy levels to update.
     */
    HierarchyStructure: HierarchyStructureUpdate;
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
  }
  export interface UpdateUserIdentityInfoRequest {
    /**
     * The identity information for the user.
     */
    IdentityInfo: UserIdentityInfo;
    /**
     * The identifier of the user account.
     */
    UserId: UserId;
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
  }
  export interface UpdateUserPhoneConfigRequest {
    /**
     * Information about phone configuration settings for the user.
     */
    PhoneConfig: UserPhoneConfig;
    /**
     * The identifier of the user account.
     */
    UserId: UserId;
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
  }
  export interface UpdateUserRoutingProfileRequest {
    /**
     * The identifier of the routing profile for the user.
     */
    RoutingProfileId: RoutingProfileId;
    /**
     * The identifier of the user account.
     */
    UserId: UserId;
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
  }
  export interface UpdateUserSecurityProfilesRequest {
    /**
     * The identifiers of the security profiles for the user.
     */
    SecurityProfileIds: SecurityProfileIds;
    /**
     * The identifier of the user account.
     */
    UserId: UserId;
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    InstanceId: InstanceId;
  }
  export type Url = string;
  export interface UrlReference {
    /**
     * Identifier of the URL reference.
     */
    Name?: ReferenceKey;
    /**
     * A valid URL.
     */
    Value?: ReferenceValue;
  }
  export interface UseCase {
    /**
     * The identifier for the use case.
     */
    UseCaseId?: UseCaseId;
    /**
     * The Amazon Resource Name (ARN) for the use case.
     */
    UseCaseArn?: ARN;
    /**
     * The type of use case to associate to the integration association. Each integration association can have only one of each use case type.
     */
    UseCaseType?: UseCaseType;
  }
  export type UseCaseId = string;
  export type UseCaseSummaryList = UseCase[];
  export type UseCaseType = "RULES_EVALUATION"|"CONNECT_CAMPAIGNS"|string;
  export interface User {
    /**
     * The identifier of the user account.
     */
    Id?: UserId;
    /**
     * The Amazon Resource Name (ARN) of the user account.
     */
    Arn?: ARN;
    /**
     * The user name assigned to the user account.
     */
    Username?: AgentUsername;
    /**
     * Information about the user identity.
     */
    IdentityInfo?: UserIdentityInfo;
    /**
     * Information about the phone configuration for the user.
     */
    PhoneConfig?: UserPhoneConfig;
    /**
     * The identifier of the user account in the directory used for identity management.
     */
    DirectoryUserId?: DirectoryUserId;
    /**
     * The identifiers of the security profiles for the user.
     */
    SecurityProfileIds?: SecurityProfileIds;
    /**
     * The identifier of the routing profile for the user.
     */
    RoutingProfileId?: RoutingProfileId;
    /**
     * The identifier of the hierarchy group for the user.
     */
    HierarchyGroupId?: HierarchyGroupId;
    /**
     * The tags.
     */
    Tags?: TagMap;
  }
  export interface UserData {
    /**
     * Information about the user for the data that is returned. It contains the resourceId and ARN of the user. 
     */
    User?: UserReference;
    /**
     * Information about the routing profile that is assigned to the user.
     */
    RoutingProfile?: RoutingProfileReference;
    /**
     * Contains information about the levels of a hierarchy group assigned to a user.
     */
    HierarchyPath?: HierarchyPathReference;
    /**
     * The status of the agent that they manually set in their Contact Control Panel (CCP), or that the supervisor manually changes in the real-time metrics report.
     */
    Status?: AgentStatusReference;
    /**
     * A map of available slots by channel. The key is a channel name. The value is an integer: the available number of slots. 
     */
    AvailableSlotsByChannel?: ChannelToCountMap;
    /**
     * A map of maximum slots by channel. The key is a channel name. The value is an integer: the maximum number of slots. This is calculated from MediaConcurrency of the RoutingProfile assigned to the agent. 
     */
    MaxSlotsByChannel?: ChannelToCountMap;
    /**
     *  A map of active slots by channel. The key is a channel name. The value is an integer: the number of active slots. 
     */
    ActiveSlotsByChannel?: ChannelToCountMap;
    /**
     * A list of contact reference information.
     */
    Contacts?: AgentContactReferenceList;
    /**
     * The Next status of the agent.
     */
    NextStatus?: AgentStatusName;
  }
  export interface UserDataFilters {
    /**
     * A list of up to 100 queues or ARNs.
     */
    Queues?: Queues;
    /**
     * A filter for the user data based on the contact information that is associated to the user. It contains a list of contact states. 
     */
    ContactFilter?: ContactFilter;
    /**
     * A list of up to 100 routing profile IDs or ARNs.
     */
    RoutingProfiles?: RoutingProfiles;
    /**
     * A list of up to 100 agent IDs or ARNs.
     */
    Agents?: AgentsMinOneMaxHundred;
    /**
     * A UserHierarchyGroup ID or ARN.
     */
    UserHierarchyGroups?: UserDataHierarchyGroups;
  }
  export type UserDataHierarchyGroups = HierarchyGroupId[];
  export type UserDataList = UserData[];
  export type UserId = string;
  export type UserIdList = UserId[];
  export interface UserIdentityInfo {
    /**
     * The first name. This is required if you are using Amazon Connect or SAML for identity management.
     */
    FirstName?: AgentFirstName;
    /**
     * The last name. This is required if you are using Amazon Connect or SAML for identity management.
     */
    LastName?: AgentLastName;
    /**
     * The email address. If you are using SAML for identity management and include this parameter, an error is returned.
     */
    Email?: Email;
    /**
     * The user's secondary email address. If you provide a secondary email, the user receives email notifications - other than password reset notifications - to this email address instead of to their primary email address. Pattern: (?=^.{0,265}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63} 
     */
    SecondaryEmail?: Email;
    /**
     * The user's mobile number.
     */
    Mobile?: PhoneNumber;
  }
  export interface UserIdentityInfoLite {
    /**
     * The user's first name.
     */
    FirstName?: AgentFirstName;
    /**
     * The user's last name.
     */
    LastName?: AgentLastName;
  }
  export interface UserPhoneConfig {
    /**
     * The phone type.
     */
    PhoneType: PhoneType;
    /**
     * The Auto accept setting.
     */
    AutoAccept?: AutoAccept;
    /**
     * The After Call Work (ACW) timeout setting, in seconds.  When returned by a SearchUsers call, AfterContactWorkTimeLimit is returned in milliseconds.  
     */
    AfterContactWorkTimeLimit?: AfterContactWorkTimeLimit;
    /**
     * The phone number for the user's desk phone.
     */
    DeskPhoneNumber?: PhoneNumber;
  }
  export interface UserQuickConnectConfig {
    /**
     * The identifier of the user.
     */
    UserId: UserId;
    /**
     * The identifier of the flow.
     */
    ContactFlowId: ContactFlowId;
  }
  export interface UserReference {
    /**
     * The unique identifier for the user.
     */
    Id?: UserId;
    /**
     * The Amazon Resource Name (ARN) for the user.
     */
    Arn?: ARN;
  }
  export type UserSearchConditionList = UserSearchCriteria[];
  export interface UserSearchCriteria {
    /**
     * A list of conditions which would be applied together with an OR condition.
     */
    OrConditions?: UserSearchConditionList;
    /**
     * A list of conditions which would be applied together with an AND condition. 
     */
    AndConditions?: UserSearchConditionList;
    /**
     * A leaf node condition which can be used to specify a string condition.
     */
    StringCondition?: StringCondition;
    /**
     * A leaf node condition which can be used to specify a hierarchy group condition.
     */
    HierarchyGroupCondition?: HierarchyGroupCondition;
  }
  export interface UserSearchFilter {
    TagFilter?: ControlPlaneTagFilter;
  }
  export interface UserSearchSummary {
    /**
     * The Amazon Resource Name (ARN) of the user.
     */
    Arn?: ARN;
    /**
     * The directory identifier of the user.
     */
    DirectoryUserId?: DirectoryUserId;
    /**
     * The identifier of the user's hierarchy group.
     */
    HierarchyGroupId?: HierarchyGroupId;
    /**
     * The identifier of the user's summary.
     */
    Id?: UserId;
    /**
     * The user's first name and last name.
     */
    IdentityInfo?: UserIdentityInfoLite;
    PhoneConfig?: UserPhoneConfig;
    /**
     * The identifier of the user's routing profile.
     */
    RoutingProfileId?: RoutingProfileId;
    /**
     * The identifiers of the user's security profiles.
     */
    SecurityProfileIds?: SecurityProfileIds;
    /**
     * The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     */
    Tags?: TagMap;
    /**
     * The name of the user.
     */
    Username?: AgentUsername;
  }
  export type UserSearchSummaryList = UserSearchSummary[];
  export interface UserSummary {
    /**
     * The identifier of the user account.
     */
    Id?: UserId;
    /**
     * The Amazon Resource Name (ARN) of the user account.
     */
    Arn?: ARN;
    /**
     * The Amazon Connect user name of the user account.
     */
    Username?: AgentUsername;
  }
  export type UserSummaryList = UserSummary[];
  export type UserTagMap = {[key: string]: String};
  export type Value = number;
  export interface Vocabulary {
    /**
     * A unique name of the custom vocabulary.
     */
    Name: VocabularyName;
    /**
     * The identifier of the custom vocabulary.
     */
    Id: VocabularyId;
    /**
     * The Amazon Resource Name (ARN) of the custom vocabulary.
     */
    Arn: ARN;
    /**
     * The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see What is Amazon Transcribe? 
     */
    LanguageCode: VocabularyLanguageCode;
    /**
     * The current state of the custom vocabulary.
     */
    State: VocabularyState;
    /**
     * The timestamp when the custom vocabulary was last modified.
     */
    LastModifiedTime: VocabularyLastModifiedTime;
    /**
     * The reason why the custom vocabulary was not created.
     */
    FailureReason?: VocabularyFailureReason;
    /**
     * The content of the custom vocabulary in plain-text format with a table of values. Each row in the table represents a word or a phrase, described with Phrase, IPA, SoundsLike, and DisplayAs fields. Separate the fields with TAB characters. For more information, see Create a custom vocabulary using a table.
     */
    Content?: VocabularyContent;
    /**
     * The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     */
    Tags?: TagMap;
  }
  export type VocabularyContent = string;
  export type VocabularyFailureReason = string;
  export type VocabularyId = string;
  export type VocabularyLanguageCode = "ar-AE"|"de-CH"|"de-DE"|"en-AB"|"en-AU"|"en-GB"|"en-IE"|"en-IN"|"en-US"|"en-WL"|"es-ES"|"es-US"|"fr-CA"|"fr-FR"|"hi-IN"|"it-IT"|"ja-JP"|"ko-KR"|"pt-BR"|"pt-PT"|"zh-CN"|"en-NZ"|"en-ZA"|string;
  export type VocabularyLastModifiedTime = Date;
  export type VocabularyName = string;
  export type VocabularyNextToken = string;
  export type VocabularyState = "CREATION_IN_PROGRESS"|"ACTIVE"|"CREATION_FAILED"|"DELETE_IN_PROGRESS"|string;
  export interface VocabularySummary {
    /**
     * A unique name of the custom vocabulary.
     */
    Name: VocabularyName;
    /**
     * The identifier of the custom vocabulary.
     */
    Id: VocabularyId;
    /**
     * The Amazon Resource Name (ARN) of the custom vocabulary.
     */
    Arn: ARN;
    /**
     * The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see What is Amazon Transcribe? 
     */
    LanguageCode: VocabularyLanguageCode;
    /**
     * The current state of the custom vocabulary.
     */
    State: VocabularyState;
    /**
     * The timestamp when the custom vocabulary was last modified.
     */
    LastModifiedTime: VocabularyLastModifiedTime;
    /**
     * The reason why the custom vocabulary was not created.
     */
    FailureReason?: VocabularyFailureReason;
  }
  export type VocabularySummaryList = VocabularySummary[];
  export interface VoiceRecordingConfiguration {
    /**
     * Identifies which track is being recorded.
     */
    VoiceRecordingTrack?: VoiceRecordingTrack;
  }
  export type VoiceRecordingTrack = "FROM_AGENT"|"TO_AGENT"|"ALL"|string;
  export type timestamp = Date;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-08-08"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Connect client.
   */
  export import Types = Connect;
}
export = Connect;
